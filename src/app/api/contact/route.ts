import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const client = new SESClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // ------------------------------------------
        // 1. Validate reCAPTCHA token
        // ------------------------------------------
        const token = data.token;
        if (!token) {
            return NextResponse.json({ error: "Missing captcha token" }, { status: 400 });
        }

        const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const captchaJson = await captchaRes.json();

        if (!captchaJson.success || captchaJson.score < 0.5) {
            console.warn("RECAPTCHA FAILED", captchaJson);
            return NextResponse.json(
                { error: "reCAPTCHA failed" },
                { status: 400 }
            );
        }

        // ------------------------------------------
        // 2. Prepare email body
        // ------------------------------------------
        const bodyText = `
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Website: ${data.website}
            Service: ${data.service}
            Project:
            ${data.project}
            
            Terms accepted: ${data.accept_terms ? "Yes" : "No"}
            News opt-in: ${data.accept_news ? "Yes" : "No"}
        `;

        // ------------------------------------------
        // 3. Send email via AWS SES
        // ------------------------------------------
        const cmd = new SendEmailCommand({
            Destination: { ToAddresses: [process.env.SES_TO_EMAIL!] },
            Message: {
                Subject: { Data: "New Contact Request" },
                Body: { Text: { Data: bodyText } },
            },
            Source: process.env.SES_FROM_EMAIL!,
        });

        await client.send(cmd);

        // ------------------------------------------
        // 4. Success
        // ------------------------------------------
        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error("SES CONTACT API ERROR", error);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}

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

        const cmd = new SendEmailCommand({
            Destination: { ToAddresses: [process.env.SES_TO_EMAIL!] },
            Message: {
                Subject: { Data: "New Contact Request" },
                Body: { Text: { Data: bodyText } },
            },
            Source: process.env.SES_FROM_EMAIL!,
        });

        await client.send(cmd);

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("SES ERROR", error);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}

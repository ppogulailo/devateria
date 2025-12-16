import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReCaptchaWrapper from "@/components/ReCaptchaWrapper";
import {Layout} from "@/components/Layout";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Deveteria – The Cutting-Edge IT Company for Custom Solutions",
    description: "Deveteria is home to the market’s top professionals who are unparalleled at solving business challenges",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ReCaptchaWrapper>
                    <Layout>
                     {children}
                    </Layout>
                </ReCaptchaWrapper>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
            </body>
        </html>
    );
}

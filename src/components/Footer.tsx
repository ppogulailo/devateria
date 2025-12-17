"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {FooterSection} from "@/components/FooterSection";

// --- Added: local copy of the services mega menu (level1 + level2)
const servicesMegaMenu = {
    level1: [
        { label: "WEB DEVELOPMENT", href: '/service/web-development' },
        { label: "CLOUD DEVELOPMENT", href: "/service/cloud-development" },
        { label: "MOBILE DEVELOPMENT", href: "/service/mobile-development" },
        { label: "OUTSTAFF", href: '/service/outstaff' },
        { label: "SOFTWARE TESTING", href: '/service/software-testing' },
        // { label: "DESIGN", href: '/service/design' },
    ],
    level2: {
        "WEB DEVELOPMENT": [
            { label: "SAAS Application Development", href: "/service/web-development/saas-application-development" },
            { label: "Front End Web Development", href: "/service/web-development/frontend-web-development" },
            { label: "Backend Web Development", href: "/service/web-development/backend-web-development" }
        ],
        "CLOUD DEVELOPMENT": [
            { label: "Google Cloud Development", href: "/service/cloud-development/cloud-application-development" },
            { label: "Amazon Web Services (AWS)", href: "/service/cloud-development/aws" }
        ],
        "MOBILE DEVELOPMENT": [
            { label: "Mobile Development Overview", href: "/service/mobile-development" },
            { label: "Android App Development", href: "/service/mobile-development/android-app-development" },
            { label: "iOS App Development", href: "/service/mobile-development/ios-app-development" },
            { label: "Native App Development", href: "/service/mobile-development/native-app-development" }
        ],
        "OUTSTAFF": [
            { label: "Dedicated Teams", href: "/service/outstaff/dedicated-teams" },
            { label: "Offshore Development", href: "/service/outstaff/offshore-development" }
        ],
        "SOFTWARE TESTING": [
            { label: "Software Testing Services", href: "/service/software-testing" },
            { label: "Mobile App Testing", href: "/service/software-testing/mobile-app-testing" },
            { label: "Manual Testing Services", href: "/service/software-testing/manual-testing" },
            { label: "Automation Testing Services", href: "/service/software-testing/automation-testing" }
        ],
        "DESIGN": [
            { label: "UI/UX Design", href: "/service/ui-ux" }
        ],
    } as Record<string, { label: string; href: string }[]>
};
const footerLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Technology", href: "/technologies" },
    { label: "Contact Us", href: "/contact-us" },
];

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white bg-[var(--color-bg-alt)] text-[var(--color-header-text)]">
            <div className="mx-auto max-w-6xl px-4 py-16">

                {/* Top Grid */}
                <div className="grid gap-12 lg:grid-cols-3">

                    {/* LEFT: Logo + Contact */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/logo.svg"
                                alt="Deveteria logo"
                                className="h-12"
                            />

                            <span className="text-xl font-semibold tracking-tight text-[--color-text]">
                            Deveteria
                        </span>
                        </Link>

                        <div className="space-y-3 text-[var(--color-form-text)] text-sm">
                            <div>
                                <span className="block uppercase text-xs opacity-70">Email Us</span>
                                <a href="mailto:contact@deveteria.com">contact@deveteria.com</a>
                            </div>

                            <div>
                                <span className="block uppercase text-xs opacity-70">Call Us</span>
                                <a href="tel:+380676714714">+38 (067) 6714714</a>
                            </div>

                            <div>
                                <span className="block uppercase text-xs opacity-70">Visit Us</span>
                                <a href="#">41 Devonshire St, London, W1G 7AJ</a>
                            </div>
                        </div>

                        {/* Social Icons */}
                        {/*<div>*/}
                        {/*    <div className="text-xs uppercase text-[var(--color-form-text)]">Our Social</div>*/}

                        {/*    <ul className="flex gap-3 mt-3">*/}
                        {/*        {["IG", "FB", "in"].map((s) => (*/}
                        {/*            <li key={s}>*/}
                        {/*                <a*/}
                        {/*                    href="#"*/}
                        {/*                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-muted)]/40 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"*/}
                        {/*                >*/}
                        {/*                    {s}*/}
                        {/*                </a>*/}
                        {/*            </li>*/}
                        {/*        ))}*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>

                    {/* MIDDLE: Services + Solutions */}
                    <div className="space-y-10">
                        <FooterSection
                            variant="footer"
                            title="Services"
                            items={servicesMegaMenu.level1}
                            subMap={servicesMegaMenu.level2}
                        />

                        <FooterSection
                            variant="footer"
                            title="Solutions"
                            items={[
                                { label: "Ecommerce Development", href: "/solutions/ecommerce-development" },
                                { label: "Fintech", href: "/solutions/fintech" },
                            ]}
                        />
                    </div>

                    {/* RIGHT: static links */}
                    <div className="text-sm font-semibold space-y-4">
                        {footerLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="block hover:opacity-80 transition-opacity"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-[var(--color-muted)]/20 pt-4 text-xs text-[var(--color-muted)] flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="flex gap-2">
                        <Link href="/privacy-policy" className="rounded bg-white px-2 py-1 text-black text-[11px] font-semibold">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="rounded bg-white px-2 py-1 text-black text-[11px] font-semibold">
                            Terms
                        </Link>
                    </div>

                    <p>© Copyright 2025 Deveteria. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

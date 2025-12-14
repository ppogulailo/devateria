"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// --- Changed: FooterSection now accepts an optional subMap to show level2 variants
interface FooterSectionProps {
    title: string;
    items: { label: string; href?: string }[];
    subMap?: Record<string, { label: string; href: string }[]>;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items, subMap }) => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[var(--color-form-text)] opacity-90">
                {title}
            </h3>

            <ul className="space-y-3">
                {items.map((item, idx) => {
                    const isOpen = openItem === idx;
                    const children = subMap?.[item.label];

                    return (
                        <li key={idx}>
                            <button
                                onClick={() => setOpenItem(isOpen ? null : idx)}
                                className="cursor-pointer w-full flex items-center justify-between text-lg font-bold uppercase transition py-1"
                            >
                                {item.label}

                                <ChevronDownIcon
                                    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {isOpen && (
                                <div className="ml-2 mt-2 text-[var(--color-muted)] text-sm">
                                    {children && children.length ? (
                                        <ul className="space-y-2">
                                            {children.map((c, i) => (
                                                <li key={i}>
                                                    <a href={c.href} className="hover:text-[var(--color-form-text)]">
                                                        {c.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <a href={item.href} className="hover:text-[var(--color-primary)]">
                                            Learn more →
                                        </a>
                                    )}
                                </div>
                            )}

                            <div className="border-b border-white/10 mt-2" />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

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

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white bg-[var(--color-bg-alt)] text-[var(--color-header-text)]">
            <div className="mx-auto max-w-6xl px-4 py-16">

                {/* Top Grid */}
                <div className="grid gap-12 lg:grid-cols-3">

                    {/* LEFT: Logo + Contact */}
                    <div className="space-y-6">
                        <a href="/" className="inline-flex items-center">
                            <img src="/header_logo.png" alt="Deveteria" className="h-10" />
                        </a>

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
                        <div>
                            <div className="text-xs uppercase text-[var(--color-form-text)]">Our Social</div>

                            <ul className="flex gap-3 mt-3">
                                {["IG", "FB", "in"].map((s) => (
                                    <li key={s}>
                                        <a
                                            href="#"
                                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-muted)]/40 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                                        >
                                            {s}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* MIDDLE: Services + Solutions */}
                    <div className="space-y-10">
                        {/* --- Changed: pass layer1 and level2 map so footer shows proper level2 variants */}
                        <FooterSection
                            title="Services"
                            items={servicesMegaMenu.level1}
                            subMap={servicesMegaMenu.level2}
                        />

                        <FooterSection
                            title="Solutions"
                            items={[
                                { label: "Ecommerce Development", href: "/solutions/ecommerce-development-development" },
                                { label: "Fintech", href: "/solutions/fintech" },
                                { label: "Custom CRM Development", href: "/solutions/crm-systems" },
                            ]}
                        />
                    </div>

                    {/* RIGHT: static links */}
                    <div className="text-sm font-semibold space-y-4">
                        {[
                            "About Us",
                            "Case Studies",
                            "Blog",
                            "Careers",
                            "Technology",
                            "Contact Us",
                        ].map((t) => (
                            <a key={t} href="#" className="block">
                                {t}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-[var(--color-muted)]/20 pt-4 text-xs text-[var(--color-muted)] flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="flex gap-2">
                        <a href="#" className="rounded bg-white px-2 py-1 text-black text-[11px] font-semibold">
                            Privacy Policy
                        </a>
                        <a href="#" className="rounded bg-white px-2 py-1 text-black text-[11px] font-semibold">
                            Terms
                        </a>
                    </div>

                    <p>© Copyright 2025 Deveteria. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

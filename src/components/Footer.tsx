"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface FooterSectionProps {
    title: string;
    items: { label: string; href?: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[var(--color-form-text)] opacity-90">
                {title}
            </h3>

            <ul className="space-y-3">
                {items.map((item, idx) => {
                    const isOpen = openItem === idx;

                    return (
                        <li key={idx}>
                            <button
                                onClick={() => setOpenItem(isOpen ? null : idx)}
                                className="w-full flex items-center justify-between text-lg font-bold uppercase hover:text-[var(--color-primary)] transition py-1"
                            >
                                {item.label}

                                <ChevronDownIcon
                                    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {isOpen && (
                                <div className="ml-2 mt-2 text-[var(--color-muted)] text-sm">
                                    <a href={item.href} className="hover:text-[var(--color-primary)]">
                                        Learn more →
                                    </a>
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
                        <FooterSection
                            title="Services"
                            items={[
                                { label: "Web Development", href: "#" },
                                { label: "Custom Software Development", href: "#" },
                                { label: "Outstaff", href: "#" },
                                { label: "Promotion", href: "#" },
                            ]}
                        />

                        <FooterSection
                            title="Solutions"
                            items={[
                                { label: "Ecommerce Development", href: "#" },
                                { label: "Fintech", href: "#" },
                                { label: "Custom CRM Development", href: "#" },
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
                            <a key={t} href="#" className="block hover:text-[var(--color-primary)]">
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

"use client";

import React from "react";
import { Button } from "@/components/Button";
import Dropdown from "@/components/blocks/Dropdown";

export const Header: React.FC = () => {
    const servicesItems = [
        { label: "Web Development", href: "/service/web-development" },
        { label: "Mobile Development", href: "/service/mobile-development" },
        { label: "R&D Center", href: "/service/r-d-center" },
        { label: "Offshore Development", href: "/service/offshore-development" },
        { label: "Talent Mapping", href: "/service/talant-mapping-service" },
        { label: "Dedicated Teams", href: "/service/dedicated-team" },
        { label: "IT Recruiting", href: "/service/it-recruting-services" },
        { label: "Cloud Development", href: "/service/cloud-development" },
    ];

    const solutionsItems = [
        { label: "E-commerce Solutions", href: "/solutions/ecommerce-development" },
        { label: "Retail Technology", href: "/solutions/retail-technology" },
        { label: "Healthcare Technology", href: "/solutions/healthcare-technology" },
        { label: "Educational Technology", href: "/solutions/educational-technology" },
        { label: "Fintech", href: "/solutions/fintech" },
    ];

    return (
        <header className="w-full border-b border-[--color-muted]/20 bg-[--color-bg] text-[--color-text] backdrop-blur-lg">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <a href="/" aria-label="Home" className="flex items-center gap-2">
                        <img
                            src="/header_logo.png"
                            alt="Header logo"
                            className="h-12 w-auto transition-transform duration-200 hover:scale-[1.03]"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">

                        <Dropdown name="Services" items={servicesItems} />

                        <Dropdown name="Solutions" items={solutionsItems} />

                        <a
                            href="/technologies"
                            className="transition-colors hover:text-[--color-primary]"
                        >
                            Technologies
                        </a>

                        <a
                            href="/seo-services"
                            className="transition-colors hover:text-[--color-primary]"
                        >
                            About Us
                        </a>

                        <a
                            href="/blog"
                            className="transition-colors hover:text-[--color-primary]"
                        >
                            Blog
                        </a>
                    </nav>

                    {/* Contact Button */}
                    <div className="hidden md:inline-flex">
                        <Button
                            href="/contact-us"
                            variant="outline"
                            className="rounded-full px-6 py-2 text-sm font-semibold transition hover:bg-[--color-primary] hover:text-white"
                        >
                            Let’s Talk
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

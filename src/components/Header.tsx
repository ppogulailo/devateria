"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Dropdown from "@/components/Dropdown";

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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

    const aboutUs = [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-[--color-bg]/90 backdrop-blur-xl uppercase relative">
        <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src="/header_logo.png"
                            alt="Header logo"
                            className="h-12 w-auto transition-transform duration-200 hover:scale-[1.03]"
                        />
                    </a>
                    <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
                        <Dropdown name="Services" items={servicesItems} cla />
                        <Dropdown name="Solutions" items={solutionsItems} />
                        <a
                            href="/technologies"
                            className="cursor-pointer hover:text-[--color-primary]"
                        >
                            Technologies
                        </a>
                        <Dropdown name="About Us" items={aboutUs} />
                    </nav>

                    <div className="hidden md:inline-flex">
                        <Button className="rounded-full px-6 py-2 text-sm font-semibold hover:bg-[--color-primary]">
                            Let’s Talk
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom animation bar */}
            <div className="w-full flex justify-center">
                <div
                    className={`
                        border-b border-[var(--color-muted)]/20
                        transition-all duration-700 ease-in-out
                        ${isScrolled ? "w-full" : "w-[1300px] max-w-[calc(100%-3rem)]"}
                    `}
                />
            </div>
        </header>
    );
};

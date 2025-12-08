"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Dropdown from "@/components/Dropdown";
import DropdownMega from "@/components/DropdownMega";

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const servicesMegaMenu = {
        level1: [
            { label: "WEB DEVELOPMENT", href: '/service/web-development' },
            { label: "CLOUD DEVELOPMENT", href: "/service/cloud-development" },
            { label: "MOBILE DEVELOPMENT", href: "/service/mobile-development" },
            { label: "OUTSTAFF", href:'/service/outstaff' },
            { label: "SOFTWARE TESTING", href: '/service/software-testing' },
            { label: "DESIGN", href:'/service/design' },
        ],

        level2: {
            "WEB DEVELOPMENT": [
                // { label: "Web Application Development", href: "/service/web-application-development" },
                { label: "SAAS Application Development", href: "/service/web-development/saas-application-development" },
                { label: "Front End Web Development", href: "/service/web-development/frontend-web-development" },
                { label: "Backend Web Development", href: "/service/web-development/backend-web-development" }
            ],

            "CLOUD DEVELOPMENT": [
                // { label: "Cloud Application Development", href: "/service/cloud-application-development" },
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
                { label: "Outstaff", href: "/service/outstaff" },
                { label: "Offshore Development", href: "/service/outstaff/offshore-development" }
            ],

            "SOFTWARE TESTING": [
                { label: "Software Testing Services", href: "/service/software-testing" },
                { label: "Mobile App Testing", href: "/service/software-testing/mobile-app-testing" },
                { label: "Manual Testing Services", href: "/service/software-testing/manual-testing" },
                { label: "Automation Testing Services", href: "/service/software-testing/automation-testing" }
            ],

            "DESIGN": [
                { label: "UI/UX Design", href: "/service/design/ui-ux" }
            ],
        },
        level3: {
            "CUSTOM SOFTWARE DEVELOPMENT": {
                "Enterprise apps": ["CRM Tools", "ERP Systems", "HR Platforms"],
                "SAAS platforms": ["Billing Engines", "Analytics Dashboards"],
                "API integrations": ["Payment API", "OAuth", "Messaging API"]
            },
        }
    };



    const solutionsItems = [
        { label: "E-commerce Solutions", href: "/solutions/ecommerce-development" },
        // { label: "Retail Technology", href: "/solutions/retail-technology" },
        // { label: "Healthcare Technology", href: "/solutions/healthcare-technology" },
        // { label: "Educational Technology", href: "/solutions/educational-technology" },
        { label: "Fintech", href: "/solutions/fintech" },
    ];

    const aboutUs = [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl uppercase relative">

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
                        <DropdownMega name="Services" data={servicesMegaMenu} />
                        <Dropdown name="Solutions" items={solutionsItems} />
                        <Link href="/technologies" className="hover:text-[var(--color-primary)]">
                            Technologies
                        </Link>
                        <Dropdown name="About Us" items={aboutUs} />
                    </nav>

                    <div className="hidden md:inline-flex ">
                        <Link href="/contact-us">
                            <Button className="hover:bg-[var(--color-primary)] rounded-full px-6 py-2 text-sm font-semibold hover:bg-gray-100">
                                Let’s Talk
                            </Button>
                        </Link>
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

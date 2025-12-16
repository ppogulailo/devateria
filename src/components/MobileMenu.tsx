"use client";

import { FooterSection, FooterItem } from "@/components/FooterSection";

/* ======================
   TYPES
   ====================== */

type MobileMenuProps = {
    open: boolean;
    onClose: () => void;
};

type ServicesMegaMenu = {
    level1: FooterItem[];
    level2?: Record<string, FooterItem[]>;
};

/* ======================
   MENU CONFIG
   ====================== */

const servicesMegaMenu: ServicesMegaMenu = {
    level1: [
        { label: "WEB DEVELOPMENT", href: "/service/web-development" },
        { label: "MOBILE DEVELOPMENT", href: "/service/mobile-development" },
        { label: "OUTSTAFF", href: "/service/outstaff" },
        { label: "SOFTWARE TESTING", href: "/service/software-testing" },
        { label: "DESIGN", href: "/service/ui-ux" },
    ],

    level2: {
        "MOBILE DEVELOPMENT": [
            { label: "Android Development", href: "/service/mobile-development/android-app-development" },
            { label: "iOS Development", href: "/service/mobile-development/ios-app-development" },
        ],

        OUTSTAFF: [
            { label: "Dedicated Teams", href: "/service/outstaff/dedicated-teams" },
            { label: "Outstaff", href: "/service/outstaff" },
            { label: "Offshore Development", href: "/service/outstaff/offshore-development" },
        ],
    },
};

const solutionsItems: FooterItem[] = [
    { label: "E-commerce Solutions", href: "/solutions/ecommerce-development" },
    { label: "Fintech", href: "/solutions/fintech" },
];

const aboutUs: FooterItem[] = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
];

/* ======================
   COMPONENT
   ====================== */

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] bg-[var(--color-primary)]">
            <div className="flex h-full w-full flex-col">

                {/* HEADER */}
                <div className="flex h-20 items-center justify-between px-6 border-b border-white/10">
                    <a href="/" className="flex items-center gap-3">
                        <img src="/logo.svg" alt="Deveteria logo" className="h-12" />
                        <span className="text-white text-xl font-semibold tracking-tight">
              Deveteria
            </span>
                    </a>

                    <button onClick={onClose} aria-label="Close menu">
                        <img src="/icons/header/close_hamburger.svg" alt="" />
                    </button>
                </div>

                {/* MENU */}
                <div className="flex-1 overflow-y-auto px-6">
                    <FooterSection
                        title="Services"
                        items={servicesMegaMenu.level1}
                        subMap={servicesMegaMenu.level2}
                        variant="mobile"
                    />

                    <FooterSection
                        title="Solutions"
                        items={solutionsItems}
                        variant="mobile"
                    />

                    <FooterSection
                        title="About Us"
                        items={aboutUs}
                        variant="mobile"
                    />

                    <a
                        href="/technologies"
                        className="block py-6 border-b border-white/10 text-white font-semibold uppercase"
                    >
                        Technologies
                    </a>
                </div>

                {/* CTA */}
                <div className="p-6">
                    <a
                        href="/contact-us"
                        className="block w-full rounded-2xl bg-white/80 py-4 text-center font-semibold text-black"
                    >
                        Let’s Talk
                    </a>
                </div>

            </div>
        </div>
    );
};

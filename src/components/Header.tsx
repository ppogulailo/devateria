import React from "react";
import { Button } from "@/components/Button";
import Dropdown from "@/components/blocks/Dropdown";

export const Header: React.FC = () => {
    return (
        <header className="w-full bg-[--color-bg] text-[--color-text]">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="/" aria-label="home" className="flex items-center gap-2">
                        <img src="/header_logo.png" alt="Header logo" className="h-14 w-auto" />
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                        <a
                            href="/services"
                            className="transition-colors hover:text-[--color-primary]"
                        >
                            Services
                        </a>

                        {/* Solutions with stable hover dropdown */}
                        <div className="relative group flex h-full items-center">
                            {/* Top-level link */}
                            <a
                                href="/custom-mobile-app-development"
                                className="transition-colors hover:text-[--color-primary] py-4"
                            >
                                Solutions
                            </a>
                            <Dropdown/>
                            {/* Dropdown menu */}
                            {/*<div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-[--color-muted]/20 bg-[--color-bg] py-2 shadow-lg opacity-0 translate-y-1 pointer-events-none z-50 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">*/}
                            {/*    <a*/}
                            {/*        href="/custom-mobile-app-development"*/}
                            {/*        className="block px-4 py-2 text-sm text-[--color-text] hover:bg-[--color-bg-alt] hover:text-[--color-primary]"*/}
                            {/*    >*/}
                            {/*        Custom mobile app development*/}
                            {/*    </a>*/}
                            {/*    <a*/}
                            {/*        href="/web-app-development"*/}
                            {/*        className="block px-4 py-2 text-sm text-[--color-text] hover:bg-[--color-bg-alt] hover:text-[--color-primary]"*/}
                            {/*    >*/}
                            {/*        Web app development*/}
                            {/*    </a>*/}
                            {/*    <a*/}
                            {/*        href="/ui-ux-design"*/}
                            {/*        className="block px-4 py-2 text-sm text-[--color-text] hover:bg-[--color-bg-alt] hover:text-[--color-primary]"*/}
                            {/*    >*/}
                            {/*        UI\/UX design*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>

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
                    </nav>

                    <div className="hidden md:inline-flex">
                        <Button href="/contact-us" variant="outline">
                            CONTACT WITH US
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

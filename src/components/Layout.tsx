"use client";

import React, { ReactNode, useState } from "react";
import { Header } from "./Header";
import { Footer } from "@/components/Footer";
import BreadcrumbsWrapper from "@/components/BreadcrumbsWrapper";
import { ContactSection } from "@/components/ContactSection";
import { MobileMenu } from "@/components/MobileMenu";

export const Layout = ({ children }: { children: ReactNode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[--color-bg] text-[--color-text] flex flex-col">
            <Header onOpenMenu={() => setMobileOpen(true)} />

            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

            <BreadcrumbsWrapper />

            <main className="flex-1 [&_p]:text-black/70 font-medium">
                {children}
            </main>

            <ContactSection />
            <Footer />
        </div>
    );
};

// src/components/Layout.tsx
import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "@/components/Footer";
import BreadcrumbsWrapper from "@/components/BreadcrumbsWrapper";
import { ContactSection } from "@/components/ContactSection";
// import {AboutUsSection} from "@/components/sections/AboutUsSection";

type LayoutProps = {
    children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[--color-bg] text-[--color-text] flex flex-col"  >
            <Header />
            <BreadcrumbsWrapper />
            {/*<AboutUsSection/>*/}
            <main className="flex-1 [&_p]:text-black/70">
                    {children}
            </main>

            <ContactSection />
            <Footer />
        </div>
    );
};

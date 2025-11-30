// src/components/Layout.tsx
import React, { ReactNode } from "react";
import { Header } from "./Header";
import {Footer} from "@/components/Footer";

type LayoutProps = {
    children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[--color-bg] text-[--color-text] flex flex-col">
            <header className="shadow-sm">
                <Header />
            </header>
            <main className="flex-1">
                <div className="mx-auto w-full max-w-6xl px-4 py-8">
                    {children}
                </div>
            </main>
           <Footer/>
        </div>
    );
};

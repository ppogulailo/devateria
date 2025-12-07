"use client";

import { useState } from "react";

// Import the two blocks
import { SoftwareDevBlock } from "./SoftwareDevBlock";
import { WebDevBlock } from "./WebDevBlock";

export const OurTechStackSection = () => {
    const [activeTab, setActiveTab] = useState<"software" | "web">("software");

    return (
        <section className="our_stacks bg-[--color-bg-alt] py-16 md:py-24">
            <div className="container mx-auto max-w-6xl px-4">

                {/* HEADER */}
                <div className="wrapper mb-10 flex flex-col gap-6 md:flex-row md:items-end">
                    <div className="col8 md:w-2/3">
                        <div className="title_section text-4xl font-semibold text-[--color-text]">
                            Our Tech Stacks
                        </div>
                    </div>
                    <div className="col4 md:w-1/3">
                        <div className="desc_section text-sm leading-relaxed text-[--color-muted]">
                            We’re proficient in 20 programming languages and 16 different frameworks.
                        </div>
                    </div>
                </div>

                {/* TAB BUTTONS */}
                <div className="mb-10 flex w-full rounded-full border border-[--color-muted]/20 bg-[--color-bg] ">
                    <button
                        onClick={() => setActiveTab("software")}
                        className={`flex-1 rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300
    ${activeTab === "software"
                            ? "bg-[var(--color-bg-alt)] text-[var(--color-header-text)] scale-[1.02] shadow-lg shadow-black/10"
                            : "text-[--color-muted] hover:text-[--color-text]"
                        }`}
                    >
                        Software Development
                    </button>

                    <button
                        onClick={() => setActiveTab("web")}
                        className={`flex-1 rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300
    ${activeTab === "web"
                            ? "bg-[var(--color-bg-alt)] text-[var(--color-header-text)] scale-[1.02] shadow-lg shadow-black/10"
                            : "text-[--color-muted] hover:text-[--color-text]"
                        }`}
                    >
                        Web Development
                    </button>
                </div>

                {/* TAB CONTENT */}
                {activeTab === "software" && (
                    <div className="p-6 md:p-8">
                        <SoftwareDevBlock />
                    </div>
                )}

                {activeTab === "web" && (
                    <div className="p-6 md:p-8">
                        <WebDevBlock />
                    </div>
                )}
            </div>
        </section>
    );
};

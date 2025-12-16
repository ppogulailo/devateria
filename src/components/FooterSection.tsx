"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

/* ======================
   TYPES
   ====================== */

export type FooterItem = {
    label: string;
    href: string;
};

export type FooterSectionProps = {
    title: string;
    items: FooterItem[];
    subMap?: Record<string, FooterItem[]>;
    variant?: "mobile" | "footer";
};

/* ======================
   COMPONENT
   ====================== */

export const FooterSection = ({
                                  title,
                                  items,
                                  subMap,
                                  variant = "mobile",
                              }: FooterSectionProps) => {
    const [openItem, setOpenItem] = useState<number | null>(null);
    const isMobile = variant === "mobile";

    const itemPadding = isMobile ? "pl-9" : "pl-0";

    return (
        <div>
            {/* SECTION TITLE */}
            <div
                className={`
                    py-10 font-semibold uppercase
                    ${isMobile ? "text-white" : "text-[--color-muted]"}
                `}
            >
                {title}
            </div>

            <ul>
                {items.map((item, idx) => {
                    const isOpen = openItem === idx;
                    const children = subMap?.[item.label];

                    const linkColor = isOpen
                        ? "text-white"
                        : isMobile
                            ? "text-white/70"
                            : "text-white/70";

                    const chevronColor = isOpen
                        ? "text-white"
                        : isMobile
                            ? "text-white/70"
                            : "text-white/70";

                    return (
                        <li key={idx} className={itemPadding}>
                        {/* MAIN ROW */}
                            <div className="flex items-center justify-between py-6 border-b border-white/10">
                                <a
                                    href={item.href}
                                    className={`
                                        flex-1 font-semibold uppercase
                                        transition-colors duration-200
                                        ${linkColor}
                                    `}
                                >
                                    {item.label}
                                </a>

                                {children?.length && (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpenItem(isOpen ? null : idx);
                                        }}
                                        aria-label={`Toggle ${item.label}`}
                                    >
                                        <ChevronDownIcon
                                            className={`
                                                w-5 h-5 transition-all duration-300 cursor-pointer
                                                ${isOpen ? "rotate-180" : ""}
                                                ${chevronColor}
                                            `}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* CHILDREN */}
                            {children?.length && (
                                <div
                                    className={`
                                        overflow-hidden
                                        transition-[max-height] duration-300 ease-in-out
                                        ${isOpen ? "max-h-[500px]" : "max-h-0"}
                                    `}
                                >
                                    {children.map((c, i) => (
                                        <a
                                            key={i}
                                            href={c.href}
                                            className={`
                                                block py-6 pl-4
                                                font-semibold uppercase
                                                border-b border-white/10
                                                ${isMobile ? "text-white/70" : "text-white/70"}
                                            `}
                                        >
                                            {c.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

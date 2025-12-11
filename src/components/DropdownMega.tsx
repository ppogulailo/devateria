"use client";

import { useState, useRef } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

/* ---------------------- TYPES ---------------------- */

export interface Level1Item {
    label: string;
    href:string
}

export interface Level2Item {
    label: string;
    href:string
}

export interface MegaMenuData {
    level1: Level1Item[];

    level2: Record<string, Level2Item[]>;

    level3: Record<string, Record<string, string[]>>;
}

/* ---------------------- COMPONENT ---------------------- */

export default function DropdownMega({
                                         name,
                                         data,
    href
                                     }: {
    name: string;
    data: MegaMenuData;
    href: string
}) {
    const [open, setOpen] = useState(false);

    const [hoverItem, setHoverItem] = useState<string | null>(null); // level 1
    const [hoverSubItem, setHoverSubItem] = useState<string | null>(null); // level 2

    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

    const show = () => {
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        setOpen(true);
    };

    const hide = () => {
        hideTimeout.current = setTimeout(() => {
            setOpen(false);
            setHoverItem(null);
            setHoverSubItem(null);
        }, 120);
    };

    return (
        <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
            {/* BUTTON */}
            <Link
                href={href}
                className={`
                    h-15 px-5 flex items-center gap-2
                    text-sm font-semibold uppercase
                    cursor-pointer rounded-t-lg
                    transition-all duration-300
                    ${open ? "bg-[var(--color-primary)] text-white" : "text-[--color-text]"}
                `}
            >
                {name}
                <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </Link>

            {/* PANEL */}
            {open && (
                <div className="fixed left-1/2 top-[65px] -translate-x-1/2 z-50 pointer-events-none">
                    <div
                        className="
                            pointer-events-auto
                            bg-[var(--color-primary)]
                            text-white rounded-xl shadow-xl
                            p-10 border border-white/10
                            w-[1300px] max-w-[calc(100%-3rem)]
                            grid grid-cols-3 gap-10
                        "
                        onMouseEnter={show}
                        onMouseLeave={hide}
                    >
                        {/* -------- LEVEL 1 -------- */}
                        <div className="flex flex-col gap-4">
                            {data.level1.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.label}
                                    onMouseEnter={() => {
                                        setHoverItem(item.label);
                                        setHoverSubItem(null);
                                    }}
                                    className="
                                        flex justify-between items-center
                                        py-3 px-4 rounded-md cursor-pointer
                                        transition hover:bg-white/10 font-semibold
                                    "
                                >
                                    <div>{item.label}</div>
                                    <ChevronRightIcon />
                                </Link>
                            ))}
                        </div>

                        {/* -------- LEVEL 2 -------- */}
                        <div className="flex flex-col gap-4">
                            {hoverItem &&
                                data.level2[hoverItem]?.map((sub) => {
                                    const hasLevel3 =
                                        data.level3?.[hoverItem]?.[sub.label] &&
                                        data.level3[hoverItem][sub.label].length > 0;

                                    return (
                                        <div
                                            key={sub.label}
                                            onMouseEnter={() => setHoverSubItem(sub.label)}
                                            className="
                        flex justify-between items-center
                        py-3 px-4 rounded-md cursor-pointer
                        transition hover:bg-white/10 font-semibold
                    "
                                        >
                                          <a href={sub.href}>  {sub.label}</a>

                                            {/* Show icon only if level3 exists */}
                                            {hasLevel3 && <ChevronRightIcon />}
                                        </div>
                                    );
                                })}
                        </div>

                        {/* -------- LEVEL 3 -------- */}
                        <div className="flex flex-col gap-2">
                            {hoverItem &&
                                hoverSubItem &&
                                data.level3[hoverItem]?.[hoverSubItem]?.map((child, i) => (
                                    <div key={i} className="py-2 text-lg">
                                        {child}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

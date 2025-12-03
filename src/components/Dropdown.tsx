"use client";

import { useState, useRef } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type DropdownItem = { label: string; href?: string };
type DropdownProps = { name: string; items: DropdownItem[] };

export default function Dropdown({ name, items }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

    const activate = () => {
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        setOpen(true);
        setHovered(true);
    };

    const deactivate = () => {
        hideTimeout.current = setTimeout(() => {
            setOpen(false);
            setHovered(false);
        }, 150);
    };

    return (
        <div
            className="relative"
            onMouseEnter={activate}
            onMouseLeave={deactivate}
        >
            {/* BUTTON */}
            <button
                className={`
                    h-15 px-5 flex items-center gap-2
                    text-sm font-semibold uppercase cursor-pointer
                    rounded-t-lg transition-all duration-300
                    ${hovered ? "bg-[var(--color-primary)] text-white" : "bg-transparent text-[--color-text]"}
                `}
            >
                {name}
                <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>

            {/* MEGA MENU — Now anchored to Header globally */}
            {open && (
                <div
                    className="
            fixed left-1/2 top-[65px]
            -translate-x-1/2
            z-50 pointer-events-none
        "
                >
                    <div
                        className="
                pointer-events-auto
                bg-[var(--color-primary)] text-white
                rounded-xl shadow-xl p-10 border border-white/10
                w-[1300px] max-w-[calc(100%-3rem)]
                transition-all duration-500 ease-in-out
            "
                        onMouseEnter={activate}
                        onMouseLeave={deactivate}
                    >
                        <div className="grid gap-1 w-full">
                            {items.map((it, idx) => (
                                <a
                                    key={idx}
                                    href={it.href}
                                    className="
                            flex items-center justify-between
                            w-full py-3 px-4 rounded-md
                            transition hover:bg-white/10
                            font-semibold cursor-pointer
                        "
                                >
                                    {it.label}
                                    <span className="opacity-40">›</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

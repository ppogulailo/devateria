"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type DropdownItem = {
    label: string;
    href?: string;
    onClick?: () => void;
};

type DropdownProps = {
    name?: string;
    items?: DropdownItem[];
    hideDelay?: number;
};

export default function Dropdown({
                                     name = "Select",
                                     items = [],
                                     hideDelay = 200,
                                 }: DropdownProps) {
    // Always call hooks (never return early)
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Hover logic
    const open = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const delayedClose = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, hideDelay);
    };

    const cancelClose = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    // Dropdown visible animation classes
    const panelClasses =
        "absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20 " +
        "transition-all duration-200 origin-top-right";

    const visibleClasses = isOpen
        ? "opacity-100 scale-100 pointer-events-auto"
        : "opacity-0 scale-95 pointer-events-none";

    // Before mounted, render a non-interactive placeholder button (SSR-safe)
    if (!mounted) {
        return (
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    className="px-3 py-2 rounded-lg flex items-center gap-2 bg-transparent text-[--color-text]"
                >
                    <span className="text-sm font-medium">{name}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                </button>
            </div>
        );
    }

    // Fully interactive dropdown (client-side only)
    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={open}
            onMouseLeave={delayedClose}
        >
            <button
                type="button"
                className="px-3 py-2 rounded-lg flex items-center gap-2 bg-transparent text-[--color-text]
                   transition-colors duration-200 hover:bg-black/80 hover:text-white"
            >
                <span className="text-sm font-medium">{name}</span>
                <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-150 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            <div
                className={`${panelClasses} ${visibleClasses}`}
                onMouseEnter={cancelClose}
                onMouseLeave={delayedClose}
            >
                {items.map((it, idx) =>
                    it.href ? (
                        <a
                            key={idx}
                            href={it.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {it.label}
                        </a>
                    ) : (
                        <button
                            key={idx}
                            type="button"
                            onClick={it.onClick}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {it.label}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

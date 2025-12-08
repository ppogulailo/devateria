"use client";
import { useState } from "react";

export function TechAccordion({
                                  title,
                                  logos,

                              }: {
    title: string;
    logos: { src: string; alt: string, width?:number }[];
}) {
    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="border border-[--color-muted]/20 rounded-xl p-4 cursor-pointer transition-all duration-300 bg-[--color-bg] hover:bg-[--color-bg-alt]"
        >
            {/* Title */}
            <div className="text-lg font-semibold text-[--color-text]">
                {title}
            </div>

            {/* Logos (expanded section) */}
            <div
                className={`
          grid grid-cols-4 gap-4 overflow-hidden transition-all duration-500
          ${open ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                {logos.map((logo, i) => (
                    <img
                        key={i}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        className="h-12 w-12 opacity-70 hover:opacity-100 transition"
                    />
                ))}
            </div>
        </div>
    );
}

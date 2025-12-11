import React from "react";

interface SectionTitleProps {
    children: React.ReactNode;     // <-- FIXED HERE
    align?: "left" | "center";
    ghostText?: string;
    className?: string;
}

export const SectionTitle = ({
                                 children,
                                 align = "center",
                                 ghostText,
                                 className = "",
                             }: SectionTitleProps) => {
    return (
        <h2
            className={`
                relative text-4xl md:text-5xl font-bold leading-tight 
                text-[var(--color-primary)] mb-4
                ${align === "center" ? "text-center" : "text-left"}
                ${className}
            `}
        >
            {/* Ghost background word */}
            {ghostText && (
                <span
                    className="
                        absolute left-1/2 -translate-x-1/2
                        -top-10 md:-top-12
                        text-[70px] md:text-[120px]
                        font-extrabold uppercase
                        text-[--color-text]/5
                        pointer-events-none select-none
                        whitespace-nowrap
                    "
                >
                    {ghostText}
                </span>
            )}

            {children}
        </h2>
    );
};

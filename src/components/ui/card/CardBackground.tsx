"use client";

import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const CardBackground = ({ children, className = "", ...props }: CardProps) => {
    return (
        <div
            {...props}
            className={`
                rounded-2xl border border-black/10 bg-white p-8 shadow-sm
                [&_h3]:text-[var(--color-primary)] 
                [&_h3]:mb-4
                [&_h3]:text-xl
                [&_p]:!text-black/70
                [&_p]:leading-relaxed
                ${className}
            `}
        >
            {children}
        </div>
    );
};

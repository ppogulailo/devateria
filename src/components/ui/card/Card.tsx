"use client";

import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
    return (
        <div
            className={`
                rounded-2xl border border-black/10 bg-white p-8 shadow-sm
                 [&_h3]:text-[var(--color-primary)] 
                [&_h3]:mb-4
                [&_h3]:text-xl
                [&_h3]:font-extrabold
                text-black/70
                [&_p]:text-black/70
                [&_p]:leading-relaxed
                ${className}
            `}
        >
            {children}
        </div>
    );
};

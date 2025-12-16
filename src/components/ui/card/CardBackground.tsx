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
                rounded-2xl border border-black/10 bg-white p-8 
                shadow-[0_8px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.04)]
                transition-shadow duration-200
                hover:shadow-[0_14px_50px_rgba(20,40,60,0.7),0_0_0_1px_rgba(255,255,255,0.06)]
                [&_h3]:text-[var(--color-primary)] 
                [&_h3]:mb-4
                [&_h3]:text-xl
                [&_h3]:font-bold
                [&_p]:!text-black/70
                text-black/70
                [&_p]:leading-relaxed
              
                ${className}
            `}
        >
            {children}
        </div>
    );
};

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={clsx(
                "inline-flex items-center justify-center px-10 py-3 rounded-xl bg-white text-[--color-text] font-medium shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md active:scale-[0.98]",
                className
            )}
        >
            {children}
        </button>
    );
};

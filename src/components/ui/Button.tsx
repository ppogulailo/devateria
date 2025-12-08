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
                "cursor-pointer inline-flex items-center justify-center px-10 py-3 rounded-xl font-medium shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.98]",
                className
            )}
        >
            {children}
        </button>
    );
};

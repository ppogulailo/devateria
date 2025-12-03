import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    required?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, required, ...props }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label className="text-sm font-medium text-[--onblack-color-text]">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <input
                {...props}
                className="
          w-full bg-transparent
          border-b border-[var(--color-form-text)]
          !text-[--color-form-text] placeholder-[var(--color-form-text)]
          px-0 py-2
          focus:outline-none
          focus:border-[--color-input-focus]
          transition-colors duration-200
        "
            />
        </div>
    );
};

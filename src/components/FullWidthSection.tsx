// `src/components/FullWidthSection.tsx`
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

/*
  FullWidthSection provides a full-bleed background (uses CSS variable via Tailwind)
  while keeping content constrained to the site's max width.
*/
export const FullWidthSection: React.FC<Props> = ({ children, className = "" }) => {
    return (
        <div className="w-full bg-[var(--color-bg-alt)]">
            <div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default FullWidthSection;
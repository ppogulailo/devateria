"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface ActionSectionProps {
    title: string;
    btnLabel?: string;
    btnHref?: string;
    icon?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
    className?: string; // ⭐ allow external classes
}

export const ActionSection = ({
                                  title,
                                  btnLabel = "Let’s Start",
                                  btnHref = "/contact-us",
                                  icon,
                                  bgColor = "bg-[var(--color-secondary)]",
                                  textColor = "text-white",
                                  className = "", // ⭐ default empty
                              }: ActionSectionProps) => {
    return (
        <section
            className={`w-full py-14 md:py-20 ${bgColor} ${className} bg-[var(--color-secondary)]`}
        >
            <div className="container mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Icon */}
                    {icon && (
                        <div className="flex-shrink-0">
                            {icon}
                        </div>
                    )}

                    {/* Title */}
                    <h2
                        className={`text-2xl md:text-4xl font-extrabold ${textColor} text-center md:text-left`}
                    >
                        {title}
                    </h2>

                    {/* Button */}
                    <div>
                        <Link href={btnHref}>
                            <Button className="rounded-xl px-6 py-3 text-sm font-semibold bg-black text-white hover:bg-white hover:text-black transition">
                                {btnLabel}
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

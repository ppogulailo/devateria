    "use client";

    import { useState } from "react";

    export interface FAQItem {
        question: string;
        answer: string;
    }

    interface FAQProps {
        title?: string;
        items: FAQItem[];
    }

    export const FAQ = ({ title = "Questions & Answers", items }: FAQProps) => {
        const [activeIndex, setActiveIndex] = useState<number | null>(0);

        const toggle = (index: number) => {
            setActiveIndex(index === activeIndex ? null : index);
        };

        return (
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">

                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[var(--color-primary)]">
                        {title}
                    </h2>

                    <div className="space-y-4">
                        {items.map((item, i) => {
                            const isOpen = activeIndex === i;

                            return (
                                <div
                                    key={i}
                                    className="border border-black/10 rounded-2xl bg-white shadow-sm"
                                >
                                    {/* Accordion Button */}
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-lg md:text-xl transition-colors"
                                    >
                      <span
                          className={`transition-colors text-2xl ${
                              isOpen ? "text-[var(--color-primary)]" : "text-black"
                          }`}
                      >
                        {item.question}
                      </span>

                                        {/* Arrow Icon */}
                                        <svg
                                            className={`transition-transform duration-500 ${
                                                isOpen ? "rotate-45 text-[var(--color-primary)]" : "text-black"
                                            }`}
                                            width="28"
                                            height="28"
                                            viewBox="0 0 34 34"
                                            fill="none"
                                        >
                                            <path
                                                d="M3.93934 27.9393C3.35355 28.5251 3.35355 29.4749 3.93934 30.0607C4.52513 30.6464 5.47487 30.6464 6.06066 30.0607L3.93934 27.9393ZM30.5 5C30.5 4.17157 29.8284 3.5 29 3.5L15.5 3.5C14.6716 3.5 14 4.17157 14 5C14 5.82843 14.6716 6.5 15.5 6.5L27.5 6.5L27.5 18.5C27.5 19.3284 28.1716 20 29 20C29.8284 20 30.5 19.3284 30.5 18.5L30.5 5ZM6.06066 30.0607L30.0607 6.06066L27.9393 3.93934L3.93934 27.9393L6.06066 30.0607Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>

                                    {/* Animated Panel */}
                                    <div
                                        className={`
                        overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out
                        ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
                      `}
                                    >
                                        <div className="px-6 pb-6 pt-1 text-black/70 leading-relaxed whitespace-pre-line">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        );
    };

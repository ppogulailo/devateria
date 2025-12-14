"use client";

import { Card } from "@/components/ui/card/Card";

interface TechItem {
    src: string;
    width?: number;
}

interface TechSection {
    title: string;
    items: TechItem[];
}

interface TechnologiesGridProps {
    sections: TechSection[];
    iconWidth?: number;
    cols?: { md?: number; lg?: number };
}

export const TechnologiesGrid = ({
                                     sections,
                                     iconWidth = 45,
                                     cols = { md: 2, lg: 3 }
                                 }: TechnologiesGridProps) => {
    return (
        <div
            className={`grid gap-8 md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}`}
        >
            {sections.map((section) => (
                <Card key={section.title}>
                    <div className="rounded-2xl">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>{section.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {section.items.map((item, index) => (
                                <img
                                    key={index}
                                    width={item.width ?? iconWidth}
                                    src={item.src}
                                />
                            ))}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

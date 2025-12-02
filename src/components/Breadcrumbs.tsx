'use client'
// `src/components/Breadcrumbs.tsx`
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbItem = { href: string; label: string };

interface Props {
    items?: BreadcrumbItem[]; // optional override
    separator?: React.ReactNode;
}

const humanize = (seg: string) =>
    decodeURIComponent(seg).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function Breadcrumbs({ items: propItems, separator = "/" }: Props) {
    const pathname = usePathname();
    const autoItems: BreadcrumbItem[] =
        pathname
            ?.split("/")
            .filter(Boolean)
            .map((seg, i, arr) => ({
                href: "/" + arr.slice(0, i + 1).join("/"),
                label: humanize(seg),
            })) ?? [];

    const items = propItems ?? autoItems;

    if (items.length === 0) {
        return null; // hide when only home
    }

    return (
        <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="text-[--color-text-muted] hover:underline">
                        Home
                    </Link>
                </li>

                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    return (
                        <li key={item.href} className="flex items-center">
                            <span className="mx-2 text-[--color-text-muted]">{separator}</span>
                            {isLast ? (
                                <span aria-current="page" className="font-medium">
                  {item.label}
                </span>
                            ) : (
                                <Link href={item.href} className="hover:underline">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}


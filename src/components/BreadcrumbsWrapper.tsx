"use client";

import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";

export default function BreadcrumbsWrapper() {
    const pathname = usePathname();

    if (!pathname || pathname === "/") return null;

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-3">
            <nav
                aria-label="Breadcrumb"
                className="rounded-md px-3 py-2"
            >
                <div className="max-w-full text-sm text-[var(--color-muted,#6b7280)] flex items-center gap-2">
                    <Breadcrumbs />
                </div>
            </nav>
        </div>
    );
}

// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[--color-bg] text-center p-8">
            <img
                src="/icons/not-found/404%20error%20with%20portals-bro.svg"
                alt="404"
                width={1000}
                className=""
            />

            <p className="text-[--color-muted] text-xl mb-8">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="px-6 py-3 bg-[--color-primary] text-white rounded-xl hover:bg-[--color-secondary] transition"
            >
                Go Home
            </Link>
        </div>
    );
}

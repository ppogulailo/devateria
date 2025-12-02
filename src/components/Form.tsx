"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form);

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        setStatus(data.ok ? "Your request was sent successfully." : "Failed to send.");
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6" aria-label="Contact form">
            {/* Name & Email */}
            <div className="wrapper content_center flex flex-col gap-4 md:flex-row">
                <div className="col5 md:w-1/2">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Name*"
                        className="w-full rounded-xl border border-[--color-muted]/30 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]"
                    />
                </div>
                <div className="col5 md:w-1/2">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email*"
                        className="w-full rounded-xl border border-[--color-muted]/30 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]"
                    />
                </div>
            </div>

            {/* Phone & Website */}
            <div className="wrapper content_center flex flex-col gap-4 md:flex-row">
                <div className="col5 md:w-1/2">
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone*"
                        className="w-full rounded-xl border border-[--color-muted]/30 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]"
                    />
                </div>
                <div className="col5 md:w-1/2">
                    <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        className="w-full rounded-xl border border-[--color-muted]/30 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]"
                    />
                </div>
            </div>

            {/* Service */}
            <div className="wrapper content_center">
                <div className="col10 w-full">
                    <select
                        name="service"
                        className="w-full rounded-xl border border-[--color-muted]/30 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]"
                    >
                        <option value="Select Some Options">Select Some Options</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="SEO">Search Engine Optimization (SEO)</option>
                        <option value="SMM">Social Media Marketing (SMM)</option>
                        <option value="Other Services">Other Services</option>
                    </select>
                </div>
            </div>

            {/* Project Description */}
            <div className="wrapper content_center">
                <div className="col10 w-full">
                    <textarea
                        name="project"
                        rows={4}
                        placeholder="Tell more about your project"
                        className="w-full rounded-xl border border-[--color-muted]/30 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]"
                    />
                </div>
            </div>

            {/* Terms */}
            <div className="wrapper content_center form-acceptance">
                <div className="col10 w-full text-left text-xs text-[--color-muted]">
                    <label className="flex items-start gap-2">
                        <input type="checkbox" name="accept_terms" className="mt-1 h-4 w-4" />
                        <span>
                            I have read and accepted the Terms &amp; Conditions, Privacy and Cookie Policies.
                        </span>
                    </label>
                </div>
            </div>

            {/* Newsletter */}
            <div className="wrapper content_center form-acceptance">
                <div className="col10 w-full text-left text-xs text-[--color-muted]">
                    <label className="flex items-start gap-2">
                        <input type="checkbox" name="accept_news" className="mt-1 h-4 w-4" />
                        <span>Send me relevant news from time to time</span>
                    </label>
                </div>
            </div>

            {/* Submit */}
            <div className="wrapper content_center">
                <div className="col10 w-full">
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex w-full justify-center rounded-full bg-[--color-text] px-6 py-3 text-sm font-semibold text-[--color-bg] hover:bg-white md:w-auto"
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>

                    {status && (
                        <p className="mt-3 text-sm text-center text-[--color-muted]">{status}</p>
                    )}
                </div>
            </div>
        </form>
    );
}

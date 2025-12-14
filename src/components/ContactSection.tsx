"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export const ContactSection = () => {
    const pathname = usePathname();
    const isContactPage = pathname === "/contact-us";

    const { executeRecaptcha } = useGoogleReCaptcha();
    const [submitting, setSubmitting] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        service: "",
        project: "",
        accept_terms: false,
        accept_news: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!executeRecaptcha) return;

        setSubmitting(true);
        try {
            const token = await executeRecaptcha("contact_form");
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, token }),
            });
        } finally {
            setSubmitting(false);
        }
    }

    // ⭐ Dynamic classes based on the page
    const bgClass = isContactPage
        ? " text-black"
        : "bg-[var(--color-bg-alt)] text-[var(--color-header-text)]";

    const textClass = isContactPage ? "text-black" : "text-[var(--color-header-text)]";
    const inputText = isContactPage ? "text-black placeholder-black" : "border-[var(--color-form-text)]";

    return (
        <section id="contact" className={`p-20 ${bgClass} text-black/70`}>
            <div className="max-w-5xl mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold ${textClass}`}>
                        Contact us to get an individual solution.
                    </h2>
                    <p className={`${textClass} mt-2`}>
                        Our experts are here to answer all your questions.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name / Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            name="name"
                            placeholder="Name*"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className={inputText}
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email*"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className={inputText}
                        />
                    </div>

                    {/* Phone / Website */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            name="phone"
                            placeholder="Phone*"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className={inputText}
                        />
                        <Input
                            name="website"
                            placeholder="Website"
                            value={form.website}
                            onChange={handleChange}
                            className={inputText}
                        />
                    </div>

                    {/* Select */}
                    <Select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        options={[
                            "Select some options",
                            "Custom Software Development",
                            "Web Development",
                            "Search Engine Optimization (SEO)",
                            "Paid Advertising",
                            "Social Media Marketing",
                            "Web Design",
                            "Video Production",
                            "Content Writing",
                            "Other Services",
                        ]}
                        className={inputText}
                    />

                    {/* Project description */}
                    <Input
                        name="project"
                        placeholder="Tell more about your project"
                        value={form.project}
                        onChange={handleChange}
                        className={inputText}
                    />

                    {/* Checkboxes */}
                    <div className="flex flex-col gap-4 text-sm">
                        <label className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                name="accept_terms"
                                required
                                checked={form.accept_terms}
                                onChange={handleChange}
                            />
                            <span className={isContactPage ? "text-black" : "text-[var(--color-form-text)]"}>
                                I accept the Terms & Conditions and Privacy Policy.
                            </span>
                        </label>

                        <label className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                name="accept_news"
                                checked={form.accept_news}
                                onChange={handleChange}
                            />
                            <span className={isContactPage ? "text-black" : "text-[var(--color-form-text)]"}>
                                I would like to receive relevant updates and news.
                            </span>
                        </label>
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full md:w-auto bg-[var(--color-secondary)]" disabled={submitting}>
                        {submitting ? "Sending..." : "Submit"}
                    </Button>
                </form>

            </div>
        </section>
    );
};

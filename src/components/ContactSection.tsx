"use client";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export const ContactSection = () => {
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
        if (!executeRecaptcha) {
            console.warn("reCAPTCHA not ready");
            return;
        }
        setSubmitting(true);
        try {
            const token = await executeRecaptcha("contact_form");
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    token,
                }),
            });
            const json = await res.json();
            console.log(json);
            // basic success reset (optional)
            if (res.ok) {
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    website: "",
                    service: "",
                    project: "",
                    accept_terms: false,
                    accept_news: false,
                });
            } else {
                // handle non-ok response if needed
                console.warn("submit failed", json);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section id="contact" className="p-20 bg-[var(--color-bg-alt)]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-header-text)]">
                        Contact us to get an individual solution.
                    </h2>
                    <p className="mt-2 text-[var(--color-header-text)]">
                        Our experts are here to answer all your questions.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            name="name"
                            placeholder="Name*"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email*"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            name="phone"
                            placeholder="Phone*"
                            required
                            value={form.phone}
                            onChange={handleChange}
                        />
                        <Input
                            name="website"
                            placeholder="Website"
                            value={form.website}
                            onChange={handleChange}
                        />
                    </div>

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
                    />

                    <Input
                        name="project"
                        placeholder="Tell more about your project"
                        value={form.project}
                        onChange={handleChange}
                    />

                    <div className="flex flex-col gap-4 text-[var(--color-muted)] text-sm">
                        <label className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                name="accept_terms"
                                className="mt-1"
                                required
                                checked={form.accept_terms}
                                onChange={handleChange}
                            />
                            <span className="text-[var(--color-form-text)]">
                                I accept the Terms & Conditions and Privacy Policy. Your company
                                may contact me regarding this submission.
                            </span>
                        </label>

                        <label className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                name="accept_news"
                                className="mt-1"
                                checked={form.accept_news}
                                onChange={handleChange}
                            />
                            <span className="text-[var(--color-form-text)]">
                                I would like to receive relevant updates and news.
                            </span>
                        </label>
                    </div>

                    <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
                        {submitting ? "Sending..." : "Submit"}
                    </Button>
                </form>
            </div>
        </section>
    );
};

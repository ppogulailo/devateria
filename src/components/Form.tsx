"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();

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

        // Generate reCAPTCHA token
        const token = await executeRecaptcha("contact_form");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...form,
                token,
            }),
        });

        console.log(await res.json());
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                name="name"
                type="text"
                placeholder="Name"
                className="border px-3 py-2 rounded"
                value={form.name}
                onChange={handleChange}
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                className="border px-3 py-2 rounded"
                value={form.email}
                onChange={handleChange}
            />

            <input
                name="phone"
                type="text"
                placeholder="Phone"
                className="border px-3 py-2 rounded"
                value={form.phone}
                onChange={handleChange}
            />

            <input
                name="website"
                type="text"
                placeholder="Website"
                className="border px-3 py-2 rounded"
                value={form.website}
                onChange={handleChange}
            />

            <input
                name="service"
                type="text"
                placeholder="Service"
                className="border px-3 py-2 rounded"
                value={form.service}
                onChange={handleChange}
            />

            <textarea
                name="project"
                placeholder="Describe your project..."
                className="border px-3 py-2 rounded"
                value={form.project}
                onChange={handleChange}
            />

            <label className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="accept_terms"
                    checked={form.accept_terms}
                    onChange={handleChange}
                />
                Accept Terms
            </label>

            <label className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="accept_news"
                    checked={form.accept_news}
                    onChange={handleChange}
                />
                Receive News & Updates
            </label>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Send
            </button>
        </form>
    );
}

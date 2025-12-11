"use client";

import { Button } from "@/components/ui/Button";
import { ActionSection } from "@/components/Action/ActionSection";
// import {a} from "tailwindcss/dist/types-WlZgYgM8";

export default function MobileAppTestingPage() {
    return (
        <div className="bg-[--color-bg] text-[--color-text] mx-auto w-full max-w-7xl px-4">

            {/* ================= HERO ================= */}
            <section className="py-20 md:py-28">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT — TEXT */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-primary)]">
                            Mobile App Testing <br /> Services
                        </h1>

                        <p className="text-lg text-[--color-muted]">
                            We continuously expand our expertise in advanced mobile testing
                            techniques to ensure your app performs smoothly and reliably on
                            any device and under any conditions.
                        </p>

                        <Button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:bg-[var(--color-secondary)] transition">
                            Test Your App with Us
                        </Button>
                    </div>

                    {/* RIGHT — IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/images/mobile-testing/mobile-hero.jpg"
                            alt="Mobile App Testing"
                            className="rounded-3xl w-full max-w-lg object-cover shadow-xl"
                        />
                    </div>

                </div>
            </section>

            {/* ================= HOW WE WORK ================= */}
            <section className="py-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
                    How We Work with Mobile Software
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}
                    <img
                        src="/images/mobile-testing/mobile-work.jpg"
                        alt="Mobile testing approach"
                        className="rounded-3xl w-full object-cover shadow-xl"
                    />

                    {/* TEXT */}
                    <div className="space-y-6 text-[--color-muted] leading-relaxed">
                        <p>
                            Mobile applications handle sensitive data, run on diverse devices,
                            and must remain fast, stable, and intuitive. The quality of your
                            mobile app directly impacts user trust and business performance.
                        </p>

                        <p>
                            Our team provides in-depth mobile testing tailored to each project.
                            We thoroughly analyze code, identify defects, evaluate real-world
                            performance conditions, and ensure every interaction works exactly
                            as intended.
                        </p>

                        <p>
                            Whether you need performance validation, UX testing, automation,
                            or full end-to-end quality assurance — we adapt our approach to
                            your goals, timeline, and platform requirements.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= TYPES OF TESTING ================= */}
            <section className="py-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
                    What We Test
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <ServiceCard title="Mobile Usability Testing"
                                 text="We evaluate navigation, clarity, visual hierarchy, and response timing to ensure intuitive user experiences." />

                    <ServiceCard title="Mobile Functional Testing"
                                 text="We verify every feature and workflow, ensuring accurate, predictable behavior across all app modules." />

                    <ServiceCard title="Performance Testing"
                                 text="We simulate real-world usage, weak network conditions, heavy load, and background interference to detect bottlenecks." />

                    <ServiceCard title="Security Testing"
                                 text="We detect vulnerabilities, access loopholes, insecure data channels, and risks like injection attacks." />

                    <ServiceCard title="Automation Testing"
                                 text="We build stable automated suites that reduce regression timelines and improve release consistency." />

                    <ServiceCard title="Localization Testing"
                                 text="We verify content, formatting, and behavior across regions, languages, and device settings." />

                    <ServiceCard title="Accessibility Testing"
                                 text="We ensure compatibility with screen readers, gestures, contrast guidelines, and accessibility best practices." />

                </div>
            </section>

            {/* ================= WHAT WE DO IN DETAIL ================= */}
            <section className="py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">
                            End-to-End Mobile Testing
                        </h2>

                        <p className="text-[--color-muted] leading-relaxed">
                            Our team performs full functional and regression testing to ensure
                            that new updates don’t break existing features. We assess your
                            application under different network speeds, device loads, and
                            environmental factors.
                        </p>

                        <p className="text-[--color-muted] leading-relaxed">
                            Using advanced tools — including AWS Device Farm, emulators, real
                            devices, and automated frameworks — we detect issues that are often
                            missed during manual review.
                        </p>

                        <p className="text-[--color-muted] leading-relaxed">
                            From performance optimization to security hardening, we ensure your
                            mobile app stays stable, fast, and protected no matter the scale.
                        </p>
                    </div>

                    <img
                        src="/images/mobile-testing/mobile-functional.jpg"
                        alt="Mobile functional testing"
                        className="rounded-3xl w-full object-cover shadow-xl"
                    />

                </div>
            </section>

            {/* ================= EXPERTISE ================= */}
            <section className="py-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
                    Our Mobile Testing Expertise
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <ReasonCard title="Client-Centric Approach"
                                text="Every project begins with your vision — we adapt testing strategies to match your goals and constraints." />

                    <ReasonCard title="Fast and Scalable Testing"
                                text="We offer accelerated workflows and modern testing methods for urgent or large-scale mobile projects." />

                    <ReasonCard title="Deep Technical Knowledge"
                                text="We work with all mobile platforms, architectures, and testing environments — from native to hybrid apps." />

                    <ReasonCard title="Detailed Reporting"
                                text="You receive clear documentation, issue reports, test results, and practical recommendations." />

                    <ReasonCard title="Comprehensive Approach"
                                text="We combine manual and automated testing to ensure complete coverage and maximum reliability." />

                    <ReasonCard title="Access to Advanced Tools"
                                text="From AWS Device Farm to real-device labs — we use efficient tools to test across all conditions." />

                </div>
            </section>

            {/* ================= WORKFLOW ================= */}
            <section className="py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <img
                        src="/images/mobile-testing/mobile-workflow.jpg"
                        alt="Mobile testing workflow"
                        className="rounded-3xl w-full object-cover shadow-xl"
                    />

                    <div className="space-y-6">
                        <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">
                            Mobile Testing Workflow
                        </h2>

                        <p className="text-[--color-muted] leading-relaxed">
                            Each project is guided by a dedicated Team Lead who combines
                            technical and managerial expertise. They ensure smooth communication,
                            transparent planning, and alignment with project expectations.
                        </p>

                        <p className="text-[--color-muted] leading-relaxed">
                            We define core quality requirements, prepare a structured test plan,
                            and execute testing across multiple environments. This reduces
                            management overhead and guarantees consistent delivery.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= FINAL SECTION ================= */}
            <section className="py-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
                    Deveteria Mobile Testing Services
                </h2>

                <p className="max-w-3xl mx-auto text-center text-[--color-muted] leading-relaxed mb-14">
                    We ensure full compliance with requirements, stable performance,
                    and timely delivery. With our QA and mobile testing expertise, you
                    avoid costly issues and launch a high-quality mobile solution.
                </p>
            </section>

            {/* ================= CTA ================= */}
            <ActionSection
                title="Ready to improve your mobile app quality?"
                btnLabel="Get a Quote"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
            />

        </div>
    );
}

/* ========== SMALL COMPONENTS ========== */
function ServiceCard({ title, text }: any) {
    return (
        <div className="bg-[--color-bg-alt] border border-white/10 p-8 rounded-xl">
            <h3 className="font-semibold text-xl mb-3">{title}</h3>
            <p className="text-sm text-[--color-muted] leading-relaxed">{text}</p>
        </div>
    );
}

function ReasonCard({ title, text }: any) {
    return (
        <div className="bg-[--color-bg-alt] border border-white/10 p-8 rounded-xl">
            <h3 className="font-semibold text-xl mb-3">{title}</h3>
            <p className="text-sm text-[--color-muted] leading-relaxed">{text}</p>
        </div>
    );
}

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {ActionSection} from "@/components/Action/ActionSection";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function Page() {
    const aboutUsHeroData = {
        title: "About Us", // no <br/> needed here
        subtitle:
            "Expand your project development with Deveteria tech expertise",
        ctaLabel: "Let’s Cooperate",
        ctaHref: "#id_footer_form",
        image: "https://develux.com/wp-content/uploads/2023/05/image-05.webp",
        imageAlt: "About Us",
    };
    const aboutUsStats = [
        { number: "850+", label: "successful projects" },
        { number: "670+", label: "clients at all" },
        { number: "180+", label: "regular customers" },
        { number: "200+", label: "experts" },
    ];
    const aboutUsValuesData = [
        {
            title: "High Expertise",
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M48.527 11H11.1953C11.1953 15.9491..." fill="#5B3FBB" />
                    <path d="M29.8666 29.7803C24.9204 29.7803..." fill="#2D2424" />
                </svg>
            ),
            description:
                "Our team aims to provide top-notch services, so we are constantly improving our hard skills, and expanding our expertise in development approaches, current programming languages and tools, and popular niches."
        },
        {
            title: "Sustained Development",
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M23.6657 36.6685V24.3343H36.3343V12H49..." fill="#2D2424" />
                    <path d="M36.3342 12H48.9998V24.3357..." fill="#5B3FBB" />
                </svg>
            ),
            description:
                "Every day, something new appears in the world of technology, so our employees are constantly developing their knowledge of the latest innovations, providing clients with services that will help improve their businesses."
        },
        {
            title: "Individual Approach",
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M28.9945 4C24.8168 3.99752..." fill="#5B3FBB" />
                    <path d="M19.934 15.8887C17.904 17.3453..." fill="#222222" />
                    <path d="M29.7257 22.0352C28.2464 22.0348..." fill="#222222" />
                </svg>
            ),
            description:
                "To develop the client's project successfully, our team starts cooperating by listening to needs and goals to conduct the best personal solution according to budget and corporate policy."
        },
        {
            title: "Transparent Cooperation",
            icon: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M37.6795 11C37.6795 18.0756..." fill="#222222" />
                    <path d="M30 11H11V30C13.4954 30..." fill="#5B3FBB" />
                </svg>
            ),
            description:
                "We appreciate the coordinated and clear partnership with our customers providing all the information about the service details, the terms of work, and the price because it ensures a high-quality workflow."
        },
    ];

    return (
        <main>
            <HeroSection {...aboutUsHeroData} />
            <BgSection>
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <SectionTitle align="left">About Our Company</SectionTitle>
                            <div className="space-y-6 text-lg leading-relaxed text-[--color-muted]">
                                <p>
                                    Deveteria was a small startup. Our in-house team has constantly been
                                    expanding, adding more expertise in service delivery and developing
                                    custom solutions for clients in various niches.
                                </p>
                                <p>
                                    Today, Deveteria is a company that helps clients to develop their businesses
                                    stably and work in a competitive position in the modern technological
                                    world by creating individual projects.
                                </p>
                                <p>
                                    We specialise in a large pool of services at a high level so that our
                                    clients can entrust us with their projects from start to finish and receive
                                    an effective turnkey solution as a result.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/image-05-2.webp"
                                alt="About company"
                                className="rounded-2xl shadow-lg max-w-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {aboutUsStats.map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-bold text-[--color-text]">
                                    {item.number}
                                </div>
                                <div className="text-[--color-muted] mt-2">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </BgSection>

            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4">
                    <SectionTitle>Our Values</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {aboutUsValuesData.map((item, index) => (
                            <div
                                key={index}
                                className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg]"
                            >
                                <div className="mb-6">{item.icon}</div>

                                <h3 className="text-xl font-semibold text-[--color-text] mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-[--color-muted] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
                // className="mt-20"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3"/>
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4"/>
                        <circle cx="130" cy="50" r="36" fill="black"/>
                    </svg>
                }
            />

            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4">
                    <SectionTitle>Customer Geography</SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        <div
                            className="border border-[--color-muted]/20 rounded-2xl p-10 w-full max-w-md bg-[--color-bg]">
                            <div className="grid grid-cols-2 gap-y-3 text-[--color-text] leading-relaxed text-lg">
                                <span>USA</span> <span>Portugal</span>
                                <span>United Arab Emirates</span> <span>Slovakia</span>
                                <span>Finland</span> <span>Italy</span>
                                <span>Australia</span> <span>Macedonia</span>
                                <span>Latvia</span> <span>Belgium</span>
                                <span>Turkey</span> <span>Denmark</span>
                                <span>UK</span> <span>Slovenia</span>
                                <span>Switzerland</span> <span>Poland</span>
                                <span>Austria</span> <span>Lithuania</span>
                                <span>Canada</span> <span>Bulgaria</span>
                                <span>Germany</span> <span>France</span>
                                <span>Netherlands</span> <span>Norway</span>
                                <span>Israel</span> <span>Sweden</span>
                                <span>Bahamas</span> <span>Iceland</span>
                                <span>Croatia</span>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/icons/pages/about-us/map.svg"
                                alt="World Map"
                                className="w-full max-w-3xl"
                            />
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
}
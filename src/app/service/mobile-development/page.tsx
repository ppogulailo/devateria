"use client";

import { Smartphone, TabletSmartphone, Layers } from "lucide-react";
import { ActionSection } from "@/components/Action/ActionSection";
import { FAQ } from "@/components/FAQ";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { Card } from "@/components/ui/card/Card";
import { mobileDevelopmentPageData as data } from "@/data/pages/services/mobile-development.data";
import { HeroSection } from "@/components/sections/HeroSection";
import { CardBackground } from "@/components/ui/card/CardBackground";
import { JSX } from "react";
import {SectionTitle} from "@/components/ui/SectionTitle";
import {TechnologiesGrid} from "@/components/ui/TechnologiesGrid";

export default function MobileDevelopmentPage() {
    const {
        hero,
        buildAppIntro,
        buildAppFeatures,
        developmentCycle,
        ourFocus,
        hireProcess,
        superCharge,
        techStack,
        whyChoose,
        benefitsToBusiness,
        faq,
    } = data;

    const sections = [
        {
            title: "Mobile",
            items: [
                { src: "/icons/technologies/software_development/mobile/Android%20Studio.svg" },
                { src: "/icons/technologies/software_development/mobile/Objective-C.svg" },
                { src: "/icons/technologies/software_development/mobile/Swift.svg" },
                { src: "/icons/technologies/software_development/mobile/Kotlin.svg" },
                { src: "/icons/technologies/software_development/mobile/Apple.svg" },
                { src: "/icons/technologies/software_development/mobile/Android.svg" },
                { src: "/icons/technologies/software_development/mobile/Ionic.svg" }
            ]
        },
        {
            title: "Data",
            items: [
                { src: "/icons/technologies/web_development/databases/PostgresSQL.svg" },
                { src: "/icons/technologies/web_development/databases/MySQL.svg" },
                { src: "/icons/technologies/web_development/databases/SQLite.svg" },
                { src: "/icons/technologies/web_development/databases/MongoDB.svg" },
                { src: "/icons/technologies/software_development/Data/Apache%20Kafka.svg" },
                { src: "/icons/technologies/software_development/Data/aws-dynamodb-svgrepo-com.svg" },
                { src: "/icons/technologies/software_development/Data/Azure%20SQL%20Database.svg" },
                { src: "/icons/technologies/software_development/Data/Elastic%20Search.svg" },
                { src: "/icons/technologies/software_development/Data/Firebase.svg" }
            ]
        },
        {
            title: "DevOps",
            items: [
                { src: "/icons/technologies/software_development/DevOps/png-clipart-continuous-integration-devops-continuous-delivery-software-testing-ci-cd-le-bio-au-risque-de-se-perdre-text-logo.png" },
                { src: "/icons/technologies/software_development/DevOps/HashiCorp%20Terraform.svg" },
                { src: "/icons/technologies/software_development/DevOps/Kubernetes.svg" },
                { src: "/icons/technologies/software_development/DevOps/Docker.svg" }
            ]
        },
        {
            title: "Infrastructure",
            items: [
                { src: "/icons/technologies/software_development/Infrastructure/Digital%20Ocean.svg" },
                { src: "/icons/technologies/software_development/Infrastructure/Azure.svg" },
                { src: "/icons/technologies/software_development/Infrastructure/Google%20Cloud.svg" },
                { src: "/icons/technologies/software_development/Infrastructure/AWS.svg" }
            ]
        },
        {
            title: "Fullstack Development",
            items: [{ src: "/icons/technologies/software_development/full-stack/MERN.svg", width: 150 }]
        }
    ];

    return (
        <main className="py-12 [&_p]:text-black/70">

            {/* HERO */}
            <HeroSection
                title={hero.title}
                subtitle={hero.subtitle}
                ctaLabel={hero.ctaLabel}
                ctaHref={hero.ctaHref}
                image={hero.image}
                imageAlt="Mobile development illustration"
            />

            {/* BUILD AN APP */}
            <section className="py-20 bg-[--color-bg]">
                <div className="container mx-auto px-4">

                    <SectionTitle>
                        {buildAppIntro.title}
                    </SectionTitle>

                    <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                        {buildAppIntro.paragraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {buildAppFeatures.map((feature) => (
                            <Card key={feature.title}>
                                <img src={feature.icon} className="h-14 mb-4"></img>
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{feature.title}</h3>
                                <p>{feature.text}</p>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>

            {/* DEVELOPMENT CYCLE */}
            <BgSection>
                <div className="container mx-auto px-4">

                    <SectionTitle className="!mb-4">
                        {developmentCycle.title}
                    </SectionTitle>

                    <p className="text-center text-[--color-muted] mb-16">
                        {developmentCycle.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {developmentCycle.steps.map((step) => (
                            <CardBackground key={step.num}>
                                <div className="text-3xl font-bold mb-4">{step.num}</div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-[--color-muted] leading-relaxed">{step.text}</p>
                            </CardBackground>
                        ))}
                    </div>

                </div>
            </BgSection>

            {/* CTA */}
            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
            />

            {/* OUR FOCUS */}
            <section className="py-24 bg-[--color-bg]">
                <div className="container mx-auto px-4">

                    <SectionTitle className="!mb-4">
                        {ourFocus.title}
                    </SectionTitle>

                    <div className="max-w-3xl mx-auto text-[--color-muted]  mb-16">
                        {ourFocus.introParagraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ourFocus.items.map((item) => (
                            <Card key={item.title}>
                                <img src={item.icon} className="h-14 mb-4"></img>
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <ul className="space-y-1">
                                    {item.points.map((p) => (
                                        <li key={p}><p>• {p}</p></li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>

            {/* HIRE PROCESS */}
            <BgSection>
                <div className="container mx-auto px-4">

                    <SectionTitle className="mb-4">
                        {hireProcess.title}
                    </SectionTitle>

                    <p className="max-w-3xl mx-auto text-center text-[--color-muted] mb-16">
                        {hireProcess.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hireProcess.steps.map((step, idx) => (
                            <CardBackground key={idx}>
                                <div className="text-4xl font-extrabold mb-4">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="leading-relaxed">{step.text}</p>
                            </CardBackground>
                        ))}
                    </div>

                </div>
            </BgSection>

            {/* SUPERCHARGE BUSINESS */}
            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4">

                    <SectionTitle className='mb-14'>
                        {superCharge.title}
                    </SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {superCharge.items.map((item, idx) => (
                            <Card key={idx}>
                                <img src={item.icon} className="h-14 mb-4" alt={item.title}></img>

                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-[--color-muted]">{item.text}</p>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>

            {/* TECH STACK */}
            <BgSection>
                <div className="container mx-auto px-4">

                    <SectionTitle className="!mb-4">
                        {techStack.title}
                    </SectionTitle>

                    <p className="text-center text-[--color-muted] max-w-3xl mx-auto mb-16">
                        {techStack.subtitle}
                    </p>

                    <TechnologiesGrid sections={sections} cols={{ md: 2, lg: 2 }} />
                    {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">*/}
                    {/*    {techStack.stacks.map((stack, idx) => (*/}
                    {/*        <CardBackground key={idx}>*/}
                    {/*            <h3 className="text-2xl font-semibold mb-8">{stack.title}</h3>*/}

                    {/*            <div className="flex flex-wrap gap-8">*/}
                    {/*                {stack.items.map((tech) => (*/}
                    {/*                    <div key={tech.name} className="group relative w-20 h-20">*/}
                    {/*                        <img src={tech.default} className="absolute inset-0 transition-opacity group-hover:opacity-0" />*/}
                    {/*                        <img src={tech.hover} className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*            </div>*/}
                    {/*        </CardBackground>*/}
                    {/*    ))}*/}
                    {/*</div>*/}

                </div>
            </BgSection>

            {/* WHY CHOOSE */}
            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <SectionTitle className='mb-14'>
                            {whyChoose.title}
                        </SectionTitle>

                        <div className="space-y-6 text-lg leading-relaxed text-[--color-muted]">
                            {whyChoose.items.map((item) => (
                                <div key={item.title}>
                                    <h3 className="font-semibold text-[var(--color-primary)]">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <img
                            src={whyChoose.image}
                            alt="Why Choose Deveteria"
                            className="rounded-2xl shadow-xl max-w-md"
                        />
                    </div>

                </div>
            </section>

            {/* BENEFITS */}
            <BgSection>
                <div className="container mx-auto px-4">

                    <SectionTitle className='!mb-4'>
                        {benefitsToBusiness.title}
                    </SectionTitle>

                    <p className="text-center text-[--color-muted] mb-16 text-lg">
                        {benefitsToBusiness.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefitsToBusiness.items.map((item) => (
                            <CardBackground key={item.number}>
                                <div className="text-4xl font-bold mb-4">{item.number}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-[--color-muted]">{item.text}</p>
                            </CardBackground>
                        ))}
                    </div>

                </div>
            </BgSection>

            {/* FAQ */}
            <FAQ items={faq} />

        </main>
    );
}

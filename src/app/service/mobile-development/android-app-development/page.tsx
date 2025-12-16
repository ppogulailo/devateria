import { ActionSection } from "@/components/Action/ActionSection";
import { FAQ } from "@/components/FAQ";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { Card } from "@/components/ui/card/Card";
import { HeroSection } from "@/components/sections/HeroSection";
import { CardBackground } from "@/components/ui/card/CardBackground";
import { androidAppDevelopmentPageData } from "@/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {TechnologiesGrid} from "@/components/ui/TechnologiesGrid";

export default function AndroidAppDevelopmentPage() {
    const {
        hero,
        items,
        items2,
        techData,
        industries,
        steps,
        faqItems,
        androidExpertise,
    } = androidAppDevelopmentPageData;
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
                // { src: "/icons/technologies/software_development/DevOps/png-clipart-continuous-integration-devops-continuous-delivery-software-testing-ci-cd-le-bio-au-risque-de-se-perdre-text-logo.png" },
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
        <main className="py-12">

            {/* HERO */}
            <HeroSection {...hero} />

            {/* INTRO SECTION */}
            <BgSection>

                <div className="relative max-w-5xl mx-auto px-6 py-20 text-center text-white">
                    <div className="flex justify-center mb-8">
                        <div className="w-3/4 h-px bg-white/40" />
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-white/90">
                        With around 75% of the world’s smartphone market using Android,
                        you can reach a huge client base by designing a robust and intelligent
                        application that makes an impact. No matter the industry, our Android
                        mobile application development team can help you develop a solution
                        that works flawlessly across devices with backend and system integration.
                    </p>
                </div>
            </BgSection>

            {/* ANDROID SERVICES LIST */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>
                        Our Android development <br /> services include:
                    </SectionTitle>

                    <div className="grid md:grid-cols-3 gap-6">
                        {items.map((item, idx) => (
                            <Card key={idx} className="flex flex-col gap-4">
                                <img src={item.icon} className="h-14 mb-4"></img>
                                <p className="text-xl font-semibold leading-snug text-foreground">
                                    {item.label}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANDROID APPS FOR ANY DEVICE */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                        <div className="">
                            <img
                                src="/icons/pages/android-app-development/Chat bot-cuate.svg"
                                alt="Android development"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        <div className="bg-background rounded-2xl p-10">
                            <SectionTitle align="left">
                                Android Apps for Any Device
                            </SectionTitle>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Our Android application development services are delivered by specialists
                                who work daily with Android across all device types and ecosystems.
                            </p>

                            <ul className="space-y-2 mb-6 text-muted-foreground">
                                <li><p>• Android Mobile App Development</p></li>
                                <li><p>• Android TV App Development</p></li>
                                <li><p>• Android Tablet App Development</p></li>
                                <li><p>• Android Wear App Development</p></li>
                            </ul>

                            <p className="font-semibold text-foreground">
                                We deliver customized, secure, and intuitive Android solutions.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* OUR APPROACH */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>Our Approach</SectionTitle>

                    <div className="grid md:grid-cols-3 gap-8">
                        {items2.map((item, index) => (
                            <CardBackground key={item.title}>
                                <div className="text-3xl font-bold mb-4">{index + 1}</div>
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.text}</p>
                            </CardBackground>
                        ))}
                    </div>
                </div>
            </BgSection>

            {/* CALL TO ACTION */}
            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
            />

            {/* TECHNOLOGY GRID */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>
                        Our Android App Development Technology
                    </SectionTitle>

                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
                        We use proven frameworks, tools, and Android technologies to ensure
                        reliable and scalable mobile solutions.
                    </p>

                    <TechnologiesGrid sections={sections} cols={{ md: 2, lg: 2 }} />;
                </div>
            </BgSection>

            {/* INDUSTRIES */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>
                        Android Applications for Your Industry
                    </SectionTitle>

                    <p className="text-center font-semibold max-w-3xl mx-auto mb-4">
                        Whether your business is HR, Fintech, Logistics or Healthcare,
                        we design Android applications with usability at their core.
                    </p>

                    <p className="text-center max-w-4xl mx-auto mb-16 text-muted-foreground">
                        We deliver white-label and custom solutions that reduce development
                        time and ensure strong market entry.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((item) => (
                            <Card key={item.title}>
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-10 h-10 mb-5 opacity-80"
                                />

                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                                <div className="space-y-3 text-muted-foreground">
                                    {item.content.map((block, idx) => (
                                        <p
                                            key={idx}
                                            dangerouslySetInnerHTML={{ __html: block }}
                                            className="text-sm"
                                        />
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEVELOPMENT PROCESS */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>
                        Development Process at Deveteria
                    </SectionTitle>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <CardBackground key={step.number}>
                                <div className="text-4xl font-bold mb-6">{step.number}</div>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>

                                <ul className="space-y-2 text-muted-foreground">
                                    {step.points.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            </CardBackground>
                        ))}
                    </div>
                </div>
            </BgSection>

            {/* WHY US */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div>
                            <SectionTitle align="left" className="mb-4">
                                Why Deveteria?
                            </SectionTitle>

                            <div className="space-y-6 text-lg leading-relaxed">
                                <div>
                                    <p className="font-semibold mb-2">Developers for every project</p>
                                    <p className="text-muted-foreground">
                                        Our developers go through strict selection and onboarding
                                        processes to ensure high-quality delivery.
                                    </p>
                                    <ul className="list-disc pl-5 mt-3 space-y-1 text-muted-foreground">
                                        <li><p>Outsourced employees</p></li>
                                        <li><p>Outstaffed employees</p></li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold mb-2">Full product development</p>
                                    <p className="text-muted-foreground">
                                        We provide full-cycle Android development with design,
                                        marketing, and post-launch support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <img
                            src="/icons/pages/android-app-development/Team-bro.svg"
                            alt="Developer working"
                            className="rounded-2xl w-full object-cover"
                        />

                    </div>
                </div>
            </section>

            {/* SECOND CTA */}
            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
            />

            {/* EXPERTISE */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <SectionTitle>
                        Select Android Development Expertise
                    </SectionTitle>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {androidExpertise.map((item) => (
                            <CardBackground key={item.number}>
                                <div className="text-3xl font-bold mb-4">{item.number}</div>
                                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.text}</p>
                            </CardBackground>
                        ))}
                    </div>
                </div>
            </BgSection>

            {/* FAQ */}
            <FAQ items={faqItems} />

        </main>
    );
}

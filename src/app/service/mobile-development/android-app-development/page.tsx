import { ActionSection } from "@/components/Action/ActionSection";
import { FAQ } from "@/components/FAQ";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { Card } from "@/components/ui/card/Card";
import { HeroSection } from "@/components/sections/HeroSection";
import { CardBackground } from "@/components/ui/card/CardBackground";
import { androidAppDevelopmentPageData } from "@/data";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function AndroidAppDevelopmentPage() {
    const {
        hero,
        items,
        items2,
        techData,
        industries,
        steps,
        faqItems,
        androidExpertise
    } = androidAppDevelopmentPageData;

    return (
        <main className="py-12">

            {/* HERO */}
            <HeroSection {...hero} />

            {/* INTRO SECTION WITH BACKGROUND */}
            <section className="relative w-full">
                <div className="absolute inset-0">
                    <img
                        src="https://develux.com/wp-content/uploads/2023/05/creative-development-of-programming-websites-for-m-2022-11-11-18-47-33-utc-2-1-1-1024x223.jpg"
                        alt="Android service banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative max-w-5xl mx-auto px-6 py-20 text-center text-white">
                    <div className="w-full flex justify-center">
                        <div className="w-3/4 border-t border-white/40 mb-8" />
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-white/90">
                        With around 75% of the world’s smartphone market using Android,
                        you can reach a huge client base by designing a robust and intelligent
                        application that makes an impact. No matter the industry, our Android mobile
                        application development team can help you develop a solution that works flawlessly
                        on any device with back-end web service and corporate system integration as required.
                    </p>
                </div>
            </section>

            {/* ANDROID SERVICES LIST */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>
                        Our Android development<br />services include:
                    </SectionTitle>

                    <div className="grid md:grid-cols-3 gap-6">
                        {items.map((item, idx) => (
                            <Card key={idx}>
                                <svg width="40" height="40" viewBox="0 0 104 104" className="text-[#6A4FF7]">
                                    <circle cx="52" cy="52" r="50" stroke="currentColor" strokeWidth="4" />
                                </svg>
                                <p className="text-xl font-semibold text-black leading-snug">{item.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANDROID APPS FOR ANY DEVICE */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-10 items-stretch">

                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/developer-smartphone-coding.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="bg-[#1B1B1B] rounded-2xl flex items-center justify-center p-8">
                            <svg width="120" height="120" viewBox="0 0 104 104">
                                <path d="M52 2C26 2 2 26 2 52H102C102 26 78 2 52 2Z" stroke="#D6D6D6" strokeWidth="3" />
                                <path d="M52 2C26 2 2 26 2 52H102C102 26 78 2 52 2Z" fill="#6A4FF7" />
                                <path d="M52 52C26 52 2 76 2 102H102C102 76 78 52 52 52Z" stroke="#D6D6D6" strokeWidth="3" />
                            </svg>
                        </div>

                        <div className="bg-white rounded-2xl p-10">
                            <SectionTitle align='left'>
                                Android Apps for Any Device
                            </SectionTitle>

                            <p className="text-black/70 leading-relaxed mb-6">
                                Our Android application development services are undertaken by specialists
                                that work day in, day out with the Android platform and all device types,
                                brands and custom ecosystems.
                            </p>

                            <ul className="text-black/80 leading-relaxed space-y-2 mb-6">
                                <li>• Android Mobile App Development</li>
                                <li>• Android TV App Development</li>
                                <li>• Android Tablet App Development</li>
                                <li>• Android Wear App Development</li>
                            </ul>

                            <p className="text-black/90 font-semibold">
                                We know what works and can professionally deliver customized products
                                that are user-friendly, intuitive and secure.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* OUR APPROACH */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>
                        Our Approach
                    </SectionTitle>

                    <div className="grid md:grid-cols-3 gap-8">
                        {items2.map((item, index) => (
                            <CardBackground key={item.title}>
                                <div className="text-3xl font-bold mb-4">{index + 1}</div>
                                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                                <p className="text-white/70 leading-relaxed">{item.text}</p>
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
                bgColor="bg-[--color-primary]"
                textColor="text-white"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                        <circle cx="130" cy="50" r="36" fill="black" />
                    </svg>
                }
            />

            {/* TECHNOLOGY GRID */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle>
                        Our Android App Development Technology
                    </SectionTitle>

                    <p className="text-center text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Through our detailed knowledge of all databases, frameworks, tools, solutions, languages and new features,
                        you can be assured of expertise and the most professional Android application development practices.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techData.map((category) => (
                            <Card key={category.title}>
                                <h3 className="text-white text-xl font-semibold mb-6">{category.title}</h3>

                                <div className="flex flex-wrap gap-6">
                                    {category.icons.length > 0 ? (
                                        category.icons.map((icon) => (
                                            <Card key={icon.alt}>
                                                <img src={icon.static} alt={icon.alt} className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0" />
                                                <img src={icon.hover} alt={icon.alt} className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                            </Card>
                                        ))
                                    ) : (
                                        <p className="text-white/40 italic">Coming soon...</p>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </BgSection>

            {/* INDUSTRIES */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <SectionTitle className='!mb-4'>
                        Android Applications for Your Industry
                    </SectionTitle>

                    <p className="text-center text-lg font-semibold text-[#1A1A1A] max-w-3xl mx-auto mb-4">
                        Whether your business is HR, Fintech, Logistics or Healthcare, we can design
                        and deliver a personalized Android application that has ease of use and versatility
                        at its core.
                    </p>

                    <p className="text-center text-[#444] max-w-4xl mx-auto mb-16 leading-relaxed">
                        We have developed white-label solutions for finance and e-commerce, which speed up
                        development time and slash costs, and utilize our team’s marketing specialists to ensure
                        your product has maximum initial impact and ongoing strength.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((item) => (
                            <Card key={item.title}>
                                <img src={item.icon} alt={item.title} className="w-10 h-10 mb-5 opacity-80" />

                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>

                                <div className="space-y-3 text-gray-700 leading-relaxed">
                                    {item.content.map((block, idx) => (
                                        <p key={idx} dangerouslySetInnerHTML={{ __html: block }} className="text-[15px]" />
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

                    <SectionTitle className='!mb-4'>
                        Development Process at Deveteria
                    </SectionTitle>

                    <p className="text-center text-gray-200 max-w-3xl mx-auto mb-3 font-semibold leading-relaxed">
                        Deveteria’s Android development services follow a clear, efficient process
                        that has proven its reliability over the years.
                    </p>

                    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Below, we’ve listed the basic steps of the process – but we can also help
                        you create a marketing strategy, build a prototype, provide post-release support, and more.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <CardBackground key={step.number}>
                                <div className="text-4xl font-bold mb-6">{step.number}</div>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>

                                <ul className="leading-relaxed">
                                    {step.points.map((p, i) => (
                                        <li key={i}><p>{p}</p></li>
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
                            <SectionTitle className='mb-4' align='left'>
                                Why Deveteria?
                            </SectionTitle>

                            <div className="space-y-6 text-[17px] leading-relaxed text-[--color-text]">

                                <div>
                                    <p className="font-semibold mb-2">Developers for every project</p>
                                    <p>
                                        Our Android developers for hire are put through multiple interviews, tasks
                                        and an in-house trial to ensure they possess the skills needed to tackle
                                        your project effectively. Deveteria provides:
                                    </p>
                                    <ul className="list-disc pl-5 mt-3 space-y-1">
                                        <li>Outsourced employees</li>
                                        <li>Outstaffed employees</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold mb-2">Full product development</p>
                                    <p>
                                        A full cycle Android application development company, we put to work our HR team,
                                        designers, marketing managers and software developers to deliver an unbeatable
                                        Android application adhering to all your business needs.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div>
                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/programmer-developing-software-on-computer-2023-05-04-22-42-37-utc-1-1-1-1.jpg"
                                alt="Developer working"
                                className="rounded-2xl w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* CALL TO ACTION */}
            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                        <circle cx="130" cy="50" r="36" fill="black" />
                    </svg>
                }
            />

            {/* EXPERTISE */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <SectionTitle className='!mb-4'>
                        Select Android Development Expertise
                    </SectionTitle>

                    <div className="text-[17px] text-[#CCCCD6] max-w-3xl mx-auto mb-16 leading-relaxed">
                        <p className="font-semibold">
                            Deveteria specialists have in-depth knowledge of Android technologies, functions and integrations.
                        </p>
                        <p className="mt-3">
                            Measuring app performance, implementing Google Pay and in-app purchases,
                            and leveraging Google Cloud technologies is just the start of what we can do for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {androidExpertise.map((item) => (
                            <CardBackground key={item.number}>
                                <div className="text-3xl font-bold mb-4">{item.number}</div>
                                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-[15px] text-[#CCCCD6] leading-relaxed">{item.text}</p>
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

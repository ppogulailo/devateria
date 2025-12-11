import {ActionSection} from "@/components/Action/ActionSection";
import {OurTechStackSection} from "@/components/sections/OurTechStack/OurTechStackSection";

export default function DedicatedTeamsPage() {
    const services = [
        {
            title: "Web Development",
            description:
                "Create a high-quality, intuitive, attractive website or application that matches your business goals.",
        },
        {
            title: "Software Development",
            description:
                "Get up-to-date software with all the desired functions, integrations, and top-notch technologies.",
        },
        {
            title: "Outstaffing",
            description:
                "Bring new technical expertise to the team by joining new employees with the required skills or creating a dedicated team.",
        },
        {
            title: "Promotion",
            description:
                "Unlock the full potential of your business through promotion, and improve the website in search engine results.",
        },
    ];
    const steps = [
        {
            number: "1",
            title: "Evaluation",
            icon: "/icons/service-1.svg",
            description: "Definition of project goals and objectives",
        },
        {
            number: "2",
            title: "Preparation",
            icon: "/icons/service-2.svg",
            description: "Team creation and technologies selection",
        },
        {
            number: "3",
            title: "Implementation",
            icon: "/icons/service-3.svg",
            description: "Project software development and design",
        },
        {
            number: "4",
            title: "Quality assurance",
            icon: "/icons/service-4.svg",
            description: "Project inaccuracies and bugs testing",
        },
        {
            number: "5",
            title: "Launch",
            icon: "/icons/service-5.svg",
            description: "Project running in its working environment",
        },
        {
            number: "6",
            title: "Maintenance and support",
            icon: "/icons/service-6.svg",
            description: "Help with future changes and improvements",
        },
    ];
    return (
        <main className="py-12">
            <section className="bg-[#E9E9F3] py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-[--color-text] leading-tight mb-6">
                                Services
                            </h1>

                            <p className="text-lg text-[--color-text]/70 max-w-xl mb-10">
                                Rely on Deveteria expertise to ensure continuous business development
                                and get a customised turn-key solution
                            </p>

                            <a
                                href="#id_footer_form"
                                className="inline-block bg-[#6C4CF7] hover:bg-[#5A3DDB] transition text-white px-10 py-4 rounded-xl font-semibold shadow-sm"
                            >
                                Let’s Cooperate
                            </a>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex justify-center lg:justify-end">
                            {/* White circular background */}
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div
                                    className="w-[430px] h-[430px] bg-white/40 rounded-full border border-white/60"></div>
                            </div>

                            {/* Phone image */}
                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/main_image.webp"
                                alt="Services banner"
                                className="relative z-10 w-full max-w-sm lg:max-w-md object-contain"
                            />

                            {/* Purple arrows */}
                            <div className="absolute left-0 bottom-10 -translate-x-6">
                                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                                    <path
                                        d="M70 15L30 50L70 85"
                                        stroke="#6C4CF7"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="absolute right-0 top-10 translate-x-6 rotate-180">
                                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                                    <path
                                        d="M70 15L30 50L70 85"
                                        stroke="#6C4CF7"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#E9E9F3] py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-center text-5xl font-extrabold text-[--color-text] mb-16">
                        Our Services
                    </h2>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {services.map((s, i) => (
                            <div
                                key={i}
                                className="bg-white border border-[#BEBECD] rounded-2xl p-10 shadow-sm hover:shadow-md transition duration-200"
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <svg width="60" height="60" viewBox="0 0 104 86" fill="none">
                                        <path
                                            d="M52 1C33 1 15 13 6 33C-3 53 1 75 1 75H103C103 63 101 51 94 40C87 29 78 20 67 14C59 8 52 1 52 1Z"
                                            stroke="#111"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M52 30C33 30 15 42 6 62C-3 82 1 104 1 104H103C103 92 101 80 94 69C87 58 78 49 67 43C59 36 52 30 52 30Z"
                                            stroke="#6C4CF7"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M52 59C33 59 15 71 6 91C-3 111 1 133 1 133H103C103 121 101 109 94 98C87 87 78 78 67 72C59 65 52 59 52 59Z"
                                            stroke="#6C4CF7"
                                            strokeWidth="3"
                                        />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[--color-text] mb-3">
                                    {s.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[--color-muted] leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <section className="bg-[#111] py-24 text-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-center text-5xl font-extrabold mb-16">
                        Framework of Cooperation
                    </h2>

                    {/* Numbers with arrows */}
                    <div className="flex justify-between max-w-4xl mx-auto mb-16">
                        {steps.map((s, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-3xl text-[#7C6FF7] font-semibold">{s.number}</span>
                                {i < steps.length - 1 && (
                                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                                        <path
                                            d="M0 6H36 M36 6L31 1 M36 6L31 11"
                                            stroke="#7C6FF7"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">

                        {steps.map((s, i) => (
                            <div key={i} className="flex flex-col items-center text-center">

                                {/* Title box */}
                                <div className="border border-white/10 rounded-xl px-6 py-4 mb-6 w-full bg-[#181818]">
                                    <h3 className="font-semibold text-white">{s.title}</h3>
                                </div>

                                {/* Icon */}
                                <img src={s.icon} alt={s.title} className="w-16 h-16 mb-4"/>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {s.description}
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
                // className="mt-10"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3"/>
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4"/>
                        <circle cx="130" cy="50" r="36" fill="black"/>
                    </svg>
                }
            />
            <OurTechStackSection/>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-4xl font-bold text-[--color-text] mb-4">
                        Our Solutions
                    </h2>

                    <p className="text-center max-w-2xl mx-auto text-[--color-muted] mb-12">
                        Be open to more than ready-made solutions for business needs, and use the opportunity
                        to customise the software to suit yourself and not the other way around
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg-alt]">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://develux.com/wp-content/uploads/2023/04/icon-11.svg"
                                     className="h-12 w-12" alt=""/>
                                <h3 className="text-xl font-semibold text-[--color-text]">
                                    E-Commerce Solution
                                </h3>
                            </div>

                            <p className="text-[--color-muted] mb-6">
                                E-commerce software forms the basis of any online store. Each is unique, so it is better
                                to prefer a personal approach to implement all the desired functions per your business
                                goals correctly.
                            </p>

                            <h4 className="font-semibold text-[--color-text] mb-2">We can offer:</h4>

                            <ul className="space-y-1 text-[--color-muted]">
                                <li>a custom development solution;</li>
                                <li>site navigation optimisation to increase sales;</li>
                                <li>creating a design specifically for your audience;</li>
                                <li>SEO of the site to increase the ranking of the search engine;</li>
                                <li>site support even after launch</li>
                            </ul>
                        </div>

                        <div className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg-alt]">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://develux.com/wp-content/uploads/2023/04/industries_icon-2.svg"
                                     className="h-12 w-12" alt=""/>
                                <h3 className="text-xl font-semibold text-[--color-text]">
                                    Fintech Solution
                                </h3>
                            </div>

                            <p className="text-[--color-muted] mb-6">
                                Fintech software development differs from other industries because it requires unique
                                features
                                and capabilities. Custom solutions will be more relevant than ever.
                            </p>

                            <h4 className="font-semibold text-[--color-text] mb-2">We can offer:</h4>

                            <ul className="space-y-1 text-[--color-muted]">
                                <li>an individual Fintech solution;</li>
                                <li>automatic data update between the client and the server using API integration;</li>
                                <li>reducing the level of risk when concluding transactions with SWAP services;</li>
                                <li>coordinated processing, payment management, and transaction statistics.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}


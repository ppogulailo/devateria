import {ActionSection} from "@/components/Action/ActionSection";
import {OurTechStackSection} from "@/components/sections/OurTechStack/OurTechStackSection";

export default function DedicatedTeamsPage() {
    const solutions = [
        {
            title: "E-Commerce Solution",
            icon: "https://develux.com/wp-content/uploads/2023/04/icon-11.svg",
            href: "https://develux.com/service/ecommerce-development-services/",
        },
        {
            title: "Fintech Solution",
            icon: "https://develux.com/wp-content/uploads/2023/04/industries_icon-2.svg",
            href: "https://develux.com/service/financial-software-development-services/",
        },
    ];

    return (
        <main className="py-12">
            <section className="bg-[#E9E9F3] py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-[--color-text] leading-tight mb-6">
                                Solutions
                            </h1>

                            <p className="text-lg text-[--color-muted] max-w-xl mb-10 leading-relaxed">
                                Improve your development process with tech expertise in the niche needed
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

                            {/* Purple shape */}
                            <div className="absolute -left-10 -top-12 w-40 h-40 bg-[#6C4CF7] rotate-45 opacity-70 rounded-lg"></div>

                            {/* White shape */}
                            <div className="absolute -right-20 bottom-0 w-72 h-72 bg-white rotate-45 opacity-80 rounded-lg"></div>

                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/image_03-1.webp"
                                alt="Solutions"
                                className="relative w-full max-w-2xl rounded-xl object-contain drop-shadow-xl rotate-3"
                            />
                        </div>

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
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                        <circle cx="130" cy="50" r="36" fill="black" />
                    </svg>
                }
            />
            <section className="bg-[#E9E9F3] py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TITLE */}
                    <h2 className="text-center text-5xl font-extrabold text-[--color-text] mb-4">
                        Our Solutions
                    </h2>

                    <p className="text-center text-[--color-muted] max-w-3xl mx-auto leading-relaxed mb-16">
                        Learn more about how we develop unique solutions in accordance with the client’s
                        business needs, boosting project efficiency and potential.
                    </p>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

                        {solutions.map((s, idx) => (
                            <a
                                key={idx}
                                href={s.href}
                                className="w-full bg-white border border-black/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col"
                            >
                                <img src={s.icon} alt={s.title} className="w-12 h-12 mb-6" />

                                <h3 className="text-xl font-semibold text-[--color-text] mb-6">
                                    {s.title}
                                </h3>

                                <div className="text-[#5B3FBB] font-semibold flex items-center gap-2 mt-auto">
                                    Read more
                                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.43934 0.93934C1.02513 0.353553 1.97487 0.353553 2.56066 0.93934L11.1213 9.5L2.56066 18.0607C1.97487 18.6464 1.02513 18.6464 0.43934 18.0607C-0.146447 17.4749 -0.146447 16.5251 0.43934 15.9393L6.87868 9.5L0.43934 3.06066C-0.146447 2.47487 -0.146447 1.52513 0.43934 0.93934Z"
                                            fill="#5B3FBB"
                                        />
                                    </svg>
                                </div>
                            </a>
                        ))}

                    </div>
                </div>
            </section>
            <OurTechStackSection/>
        </main>
    );
}


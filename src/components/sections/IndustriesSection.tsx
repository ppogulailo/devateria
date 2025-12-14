'use client';
import {useState} from "react";
import { BgSection } from "../ui/PrimaryBackground";
import {CardBackground} from "@/components/ui/card/CardBackground";

export const IndustriesSection = () => {
    const INDUSTRY_TABS = [
        { id: "fintech", title: "Fintech", img: "/icons/industries/money-svgrepo-com.svg", content: FintechContent },
        { id: "healthcare", title: "Healthcare", img: "/icons/industries/details.png", content: HealthcareContent },
        { id: "entertainment", title: "Entertainment", img: "/icons/industries/clapperboard-svgrepo-com.svg", content: EntertainmentContent },
        { id: "manufacture", title: "Manufacture", img: "/icons/industries/factories-factory-svgrepo-com.svg", content: ManufactureContent },
        { id: "ecommerce-development", title: "eCommerce", img: "/icons/industries/ecommerce-svgrepo-com.svg", content: EcommerceContent },
    ];

    const [active, setActive] = useState("healthcare");

    const ActiveContent = INDUSTRY_TABS.find(t => t.id === active)?.content;

    return (
        <BgSection>
            <div className="max-w-6xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-bold uppercase relative inline-block">
                        industries
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[2.5rem] opacity-10 font-bold"></span>
                    </h2>
                    <p className="mt-4 text-[--color-muted] max-w-2xl mx-auto">
                        Our custom software development company provides solutions across multiple industries:
                    </p>
                </div>

                {/* TAB CARDS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
                    {INDUSTRY_TABS.map((tab) => {
                        const isActive = active === tab.id;

                        return (
                            <CardBackground
                                key={tab.id}
                                role="button"
                                onClick={() => setActive(tab.id)}
                                className={`
                                    cursor-pointer flex flex-col items-center text-center transition
                                    ${isActive
                                    ? "!bg-[var(--color-secondary)] shadow-lg"
                                    : "bg-white hover:bg-[var(--color-secondary)] hover:shadow-md"
                                }
                                `}
                            >
                                <div className="mb-3 h-12 flex items-center justify-center">
                                    <img className="w-12 h-12 opacity-80" src={tab.img} alt={tab.title} />
                                </div>
                                <p className="font-semibold">{tab.title}</p>
                            </CardBackground>
                        );
                    })}
                </div>

                {/* CONTENT AREA */}
                <div className="bg-[--color-bg-alt] rounded-2xl p-8 shadow-xl">
                    {ActiveContent && <ActiveContent />}
                </div>
            </div>
        </BgSection>
    );
};
const FintechContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <IndustryItem
            title="Blockchain"
            img="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/blockchain.svg"
            text="Blockchain is a decentralized ledger enabling secure, distributed transaction storage that will influence future financial services."
        />
        <IndustryItem
            title="Insurtech"
            img="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/Insurtech.svg"
            text="We deliver digital insurance solutions that automate processes and empower customer self-service."
        />
        <IndustryItem
            title="Investment Platforms"
            img="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/Investment-platforms.svg"
            text="Platforms that allow users to manage stocks, funds, and digital assets in one place with real-time insights."
        />
        <IndustryItem
            title="Consumer Banking"
            img="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/Consumer-banking.svg"
            text="Alternative digital banking solutions providing lower fees, better UX, and modern financial tools."
        />
    </div>
);

const HealthcareContent = () => (
    <div className="text-[--color-muted]">
        <p className="text-xl font-semibold mb-4">Healthcare Industry</p>
        <p>
            Healthcare software helps clinics, hospitals, and medical institutions automate workflows,
            manage patient records, and deliver better care through digital tools.
        </p>
    </div>
);

const EntertainmentContent = () => (
    <div className="text-[--color-muted]">
        <p className="text-xl font-semibold mb-4">Entertainment Solutions</p>
        <p>
            We develop streaming platforms, gaming applications, media portals, and high-traffic interactive systems.
        </p>
    </div>
);

const ManufactureContent = () => (
    <div className="text-[--color-muted]">
        <p className="text-xl font-semibold mb-4">Manufacturing Digitalization</p>
        <p>
            Automation tools, supply chain optimization systems, and real-time monitoring dashboards.
        </p>
    </div>
);

const EcommerceContent = () => (
    <div className="text-[--color-muted]">
        <p className="text-xl font-semibold mb-4">eCommerce</p>
        <p>
            Custom platforms, payment integrations, checkout flows, and tailored storefront solutions.
        </p>
    </div>
);

/* -------------- REUSABLE COMPONENT -------------- */
const IndustryItem = ({ title, img, text }: any) => (
    <div className="flex flex-col items-center text-center">
        <img className="w-20 h-20 mb-4" src={img} alt={title} />
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-[--color-muted]">{text}</p>
    </div>
);

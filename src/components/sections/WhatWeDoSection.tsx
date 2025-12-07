import React from "react";

type ServiceItem = {
    href: string;
    img: string;
    alt: string;
    label: string;
};

const SERVICES: ServiceItem[] = [
    { href: "/service/mobile-development/ios-app-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/iOS-mobile-development-icon.svg", alt: "iOS mobile development icon", label: "iOS Mobile Development" },
    { href: "/service/web-development/backend-web-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/frontend-icon.svg", alt: "Frontend icon", label: "Frontend Development" },
    { href: "/service/web-development/saas-application-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/Saas-icons.svg", alt: "SaaS icon", label: "SAAS Development" },

    { href: "/service/mobile-development/android-app-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/android-mobile-app-development-icon.svg", alt: "Android mobile app development icon", label: "Android Mobile App Development" },
    { href: "/service/mobile-development/system-design", img: "https://crystalogic.net/wp-content/uploads/2020/10/prototyping-icon.svg", alt: "Prototyping icon", label: "System Design" },
    { href: "/service/software-testing/manual-testing", img: "https://crystalogic.net/wp-content/uploads/2020/10/manual-icon.svg", alt: "Manual testing icon", label: "Manual Testing" },

    { href: "/service/web-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/hybrid-icon.svg", alt: "Hybrid mobile app development icon", label: "Hybrid Mobile App Development" },
    { href: "/service/design/ui-ux", img: "https://crystalogic.net/wp-content/uploads/2020/10/ui-ux-design.svg", alt: "UI/UX design icon", label: "UI/UX Design" },
    { href: "/service/software-testing/automation-testing", img: "https://crystalogic.net/wp-content/uploads/2020/10/automated-icon.svg", alt: "Automated testing icon", label: "Automated Testing" },

    { href: "/service/web-development/backend-web-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/backend-icon.svg", alt: "Backend icon", label: "Backend Development" },
    { href: "/service/cloud-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/cloud-icon.svg", alt: "Cloud application development icon", label: "Cloud Application Development" },
    { href: "/service/mobile-development/native-app-development", img: "https://crystalogic.net/wp-content/uploads/2020/10/software-icon.svg", alt: "Software quality assurance icon", label: "Native App Development" },
];

export const WhatWeDoSection = () => {
    return (
        <section className="py-20" id="what-we-do">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Title */}
                <div className="relative mb-6">
          <span className="
            text-[90px] md:text-[120px]
            font-extrabold uppercase text-black/5
            absolute left-1/2 -translate-x-1/2 -top-12 select-none pointer-events-none
          ">
            WHAT WE DO
          </span>

                    <h2 className="relative text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
                        What We Do
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="text-gray-500 max-w-3xl mx-auto mb-12">
                    Our custom software development company offers a wide range of services
                    in numerous niches of IT, including:
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {SERVICES.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="
                bg-[#F3F9FF] hover:bg-[#e7f3ff]
                p-8 rounded-xl shadow-sm
                transition flex flex-col items-center text-center
              "
                        >
                            <img src={item.img} alt={item.alt} className="h-14 mb-4" />
                            <p className="text-gray-700 font-semibold uppercase text-sm">
                                {item.label}
                            </p>
                        </a>
                    ))}

                </div>

                {/* Bottom text */}
                <p className="text-gray-600 max-w-3xl mx-auto mt-12">
                    If you are interested in any of the above software development services or if you didn’t find
                    exactly what you need, please contact us and we will get you a dedicated team of
                    highly-qualified specialists tailored to your project.
                </p>
            </div>
        </section>
    );
};

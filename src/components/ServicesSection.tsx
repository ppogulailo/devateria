"use client";

import React, { useState } from "react";

type ServiceTabId = "web" | "custom" | "outstaffing" | "promotion";

const services = [
  {
    id: "web" as ServiceTabId,
    label: "Web Development",
    title: "Web Development",
    link: "https://develux.com/service/web-development/",
    description:
      "Covers the entire range of tasks to create unique and template websites, design databases, improve existing sites and implement SEO best practices.",
    items: [
      "Web Design",
      "Wireframing and Prototyping",
      "User Experience Design",
      "User Interface Design",
      "Responsive Website Design",
      "Website Redesign Service",
      "Mobile App Design",
      "Mobile App Redesign",
      "E-commerce Web Design",
    ],
  },
  {
    id: "custom" as ServiceTabId,
    label: "Custom Software Development",
    title: "Custom Software Development",
    link: "https://develux.com/service/custom-software-development/",
    description:
      "Provides individual, convenient, and functional web and mobile solutions using key and popular technologies, current functions, and integration features.",
    items: [
      {
        label: "Mobile Development",
        href: "https://develux.com/service/custom-mobile-app-development/",
      },
      {
        label: "Bespoke Software Development",
        href: "https://develux.com/service/bespoke-software-development/",
      },
      {
        label:
          "Project Management",
        href: "https://develux.com/service/simplify-your-development-with-expert-it-project-management-services/",
      },
    ],
  },
  {
    id: "outstaffing" as ServiceTabId,
    label: "Outstaffing",
    title: "Outstaffing",
    link: "https://develux.com/service/partner-with-develux-for-top-notch-it-outsourcing-services/",
    description:
      "Helps quickly and efficiently create a team of high-quality and experienced specialists in order to strengthen technical expertise in the niche or field you need.",
    items: [
      "Staff Augmentation",
      {
        label: "Dedicated Team",
        href: "https://develux.com/service/dedicated-team/",
      },
      "Remote Development Team",
      {
        label: "IT Recruiting",
        href: "https://develux.com/service/it-recruiting/",
      },
      {
        label: "Talent Mapping",
        href: "https://develux.com/service/talent-mapping/",
      },
      {
        label: "R&D center",
        href: "https://develux.com/service/r-d-center/",
      },
    ],
  },
  {
    id: "promotion" as ServiceTabId,
    label: "Promotion",
    title: "Promotion",
    link: "https://develux.com/promotional/",
    description:
      "Includes a web page optimisation process to ensure the better promotion of your business through SEO activities and video production in various directions.",
    items: [
      {
        label: "SEO",
        href: "https://develux.com/service/seo-services/",
      },
      {
        label: "Video Production",
        href: "https://develux.com/service/video-production-services/",
      },
    ],
  },
];

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceTabId>("outstaffing");

  const current = services.find((s) => s.id === activeTab)!;

  return (
    <section className="services_home bg-[--color-bg] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="wrapper">
          <div className="col12">
            <div className="name_section mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[--color-primary]">
              Services
            </div>

            <div className="tabs_container">
              {/* Tabs row */}
              <div className="services-tabs mb-10 flex flex-wrap gap-3">
                {services.map((service) => {
                  const isActive = service.id === activeTab;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveTab(service.id)}
                      className={[
                        "service-tab relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[--color-primary] text-[--color-bg]"
                          : "bg-[--color-bg-soft] text-[--color-text] hover:bg-[--color-border]",
                      ].join(" ")}
                    >
                      <span>{service.label}</span>
                      <span
                        className={[
                          "arrow-right inline-block h-0 w-0 border-y-4 border-l-4 border-y-transparent",
                          isActive
                            ? "border-l-[--color-bg]"
                            : "border-l-[--color-primary]",
                        ].join(" ")}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Content area */}
              <div className="services_tab_contents flex flex-col gap-8 md:flex-row md:items-start">
                {/* Semicircle graphic */}
                <div className="block_middle flex justify-center md:w-1/3">
                  <div className="semicircle relative h-[120px] w-[220px]">
                    <svg
                      className="circle_1 absolute inset-x-0 top-0 mx-auto"
                      width="104"
                      height="54"
                      viewBox="0 0 104 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.985 1C38.4611 1.00533 25.4929 6.41532 15.932 16.0404C6.37099 25.6654 0.999999 38.7175 1 52.3267H103C103 45.5855 101.68 38.9104 99.1165 32.6825C96.5527 26.4546 92.7947 20.7959 88.0574 16.0297C83.3201 11.2634 77.6962 7.48296 71.5068 4.90414C65.3175 2.32533 58.684 0.998682 51.985 1Z"
                        stroke="#D6D6D6"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                    <svg
                      className="circle_2 absolute inset-x-0 top-[18px] mx-auto"
                      width="104"
                      height="54"
                      viewBox="0 0 104 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.985 1C38.4602 1.00799 25.492 6.42016 15.9314 16.0468C6.37067 25.6734 0.999998 38.7266 1 52.3367H103C103 38.7213 97.6252 25.6636 88.058 16.0361C78.4909 6.40863 65.5151 1 51.985 1Z"
                        fill="#584EE5"
                        stroke="#584EE5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                    <svg
                      className="circle_3 absolute inset-x-0 top-[36px] mx-auto"
                      width="104"
                      height="54"
                      viewBox="0 0 104 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.985 1.66309C38.4602 1.67107 25.492 7.08325 15.9314 16.7099C6.37067 26.3365 0.999998 39.3897 1 52.9998H103C103 39.3844 97.6252 26.3268 88.058 16.6993C78.4909 7.07177 65.5151 1.66309 51.985 1.66309Z"
                        stroke="#D6D6D6"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                </div>

                {/* Active tab content */}
                <div className="content_tab md:w-2/3">
                  <div className="service_tab_content">
                    <a href={current.link}>
                      <h2 className="text-2xl font-semibold text-[--color-text]">
                        {current.title}
                      </h2>
                    </a>
                    <p className="mt-3 text-sm leading-relaxed text-[--color-muted]">
                      {current.description}
                    </p>
                    <ul className="mt-4 grid gap-2 text-sm text-[--color-text] md:grid-cols-2">
                      {current.items.map((item, idx) => {
                        if (typeof item === "string") {
                          return (
                            <li key={idx} className="list-disc list-inside">
                              {item}
                            </li>
                          );
                        }
                        return (
                          <li key={idx} className="list-disc list-inside">
                            <a
                              href={item.href}
                              className="text-[--color-primary] hover:underline"
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {/* end content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
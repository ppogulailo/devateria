import Dropdown from "../../components/Dropdown";
import {TechAccordion} from "@/components/TechAccordion";
import {Button} from "@/components/ui/Button";
import {ActionSection} from "@/components/Action/ActionSection";
import {ActionToCooperateWithUsSection} from "@/components/sections/ActionToCooporateWithUsSection";

export default function TechnologiesPage() {
  const items = [
    { label: "Option 1", href: "#" },
    { label: "Option 2", href: "#" },
    { label: "Option 3" },
  ]
  const name_1="Select Option";
  return (
    <div>
        <div className="bg-[--color-bg] text-[--color-text] mx-auto w-full max-w-6xl px-4">
            <section className="relative bg-[--color-bg-alt] py-20 md:py-28 overflow-hidden">
                <div className="container mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 md:items-center">

                    {/* LEFT SIDE — TEXT */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-primary)]">
                            Technology <br /> expertise
                        </h1>

                        <p className="text-lg text-[--color-muted]">
                            Create your project with well-chosen tech stacks
                        </p>

                        <Button
                            className="inline-flex items-center rounded-xl bg-[var(--color-primary)] text-white px-8 py-4  text-base font-semibold transition hover:bg-[var(--color-secondary)]"
                        >
                            Let’s Cooperate
                        </Button>
                    </div>

                    {/* RIGHT SIDE — IMAGE WITH DECORATION */}
                    <div className="relative flex justify-center md:justify-end">
                        {/* DECORATIVE SHAPES BEHIND IMAGE */}
                        <div className="absolute bottom-6 left-6 w-40 h-40 rotate-12 bg-white opacity-80 rounded-lg"></div>
                        <div className="absolute top-10 right-10 w-32 h-40 -rotate-12 bg-[--color-primary] opacity-60 rounded-lg"></div>

                        {/* MAIN IMAGE */}
                        <img
                            src="/icons/technologies/page/TechExpertise.jpg"
                            alt="Technology expertise illustration"
                            width={700}
                            height={500}
                            className="relative z-10 w-full max-w-lg rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className="our_technologies bg-[--color-bg-alt] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">

                    {/* Title + Subtitle */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)]">
                            Our Technologies
                        </h2>
                        <p className="text-[--color-muted] text-sm md:text-base leading-relaxed">
                            Our team constantly masters new and relevant tech stacks and
                            individually selects them for each project to provide customers with
                            the most suitable solution in terms of productivity, efficiency,
                            business goals and budget.
                        </p>
                    </div>

                    {/* Main Layout */}
                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* LEFT SIDE — Tech Groups (Accordion) */}
                        <div className="space-y-6">

                            <TechAccordion
                                title="Frontend"
                                logos={[
                                    { src: "/icons/technologies/web_development/frontend/javascript.svg", alt: "JavaScript" },
                                    { src: "/icons/technologies/web_development/frontend/angular.svg", alt: "Angular" },
                                    { src: "/icons/technologies/web_development/frontend/Vue.js.svg", alt: "Vue" },
                                    { src: "/icons/technologies/web_development/frontend/CSS3.svg", alt: "CSS" },
                                    { src: "/icons/technologies/web_development/frontend/HTML5.svg", alt: "HTML" },
                                    { src: "/icons/technologies/web_development/frontend/React.svg", alt: "React" },
                                ]}
                            />

                            <TechAccordion
                                title="Backend"
                                logos={[
                                    { src: "/icons/technologies/web_development/backend/Go.svg", alt: ".NET" },
                                    { src: "/icons/technologies/web_development/backend/Java.png", alt: "Django" },
                                    { src: "/icons/technologies/web_development/backend/Node.js.png", alt: "Node.js" },
                                    { src: "/icons/technologies/web_development/backend/Nest.js.png", alt: "Java" },
                                    { src: "/icons/technologies/web_development/backend/Laravel.png", alt: "Java" },
                                    { src: "/icons/technologies/web_development/backend/Python.png", alt: "Python" },
                                ]}
                            />

                            <TechAccordion
                                title="Mobile"
                                logos={[
                                    { src: "/icons/technologies/software_development/mobile/Android.svg", alt: "Android" },
                                    { src: "/icons/technologies/software_development/mobile/Swift.svg", alt: "Swift" },
                                    { src: "/icons/technologies/software_development/mobile/Kotlin.svg", alt: "Kotlin" },
                                    { src: "/icons/technologies/software_development/mobile/Apple.svg", alt: "Flutter" },
                                    { src: "/icons/technologies/software_development/mobile/Android Studio.svg", alt: "React Native" },
                                    { src: "/icons/technologies/software_development/mobile/Ionic.svg", alt: "React Native" },
                                    { src: "/icons/technologies/software_development/mobile/Objective-C.svg", alt: "React Native" },
                                ]}
                            />

                            <TechAccordion
                                title="Data"
                                logos={[
                                    { src: "/icons/technologies/software_development/Data/Apache Kafka.svg", alt: "MongoDB" },
                                    { src: "/icons/technologies/software_development/Data/aws-dynamodb-svgrepo-com.svg", alt: "PostgreSQL" },
                                    { src: "/icons/technologies/software_development/Data/Azure SQL Database.svg", alt: "SQL" },
                                    { src: "/icons/technologies/software_development/Data/Elastic Search.svg", alt: "Kafka" },
                                    { src: "/icons/technologies/software_development/Data/Firebase.svg", alt: "Firebase" },
                                ]}
                            />

                            <TechAccordion
                                title="DevOps"
                                logos={[
                                    { src: "/icons/technologies/software_development/DevOps/Docker.svg", alt: "Docker" },
                                    { src: "/icons/technologies/software_development/DevOps/HashiCorp Terraform.svg", alt: "Kubernetes" },
                                    { src: "/icons/technologies/software_development/DevOps/Kubernetes.svg", alt: "Terraform" },
                                    // { src: "/icons/technologies/software_development/DevOps/png-clipart-continuous-integration-devops-continuous-delivery-software-testing-ci-cd-le-bio-au-risque-de-se-perdre-text-logo.png", alt: "CI/CD Tools", width: 100 },
                                ]}
                            />

                            <TechAccordion
                                title="Infrastructure"
                                logos={[
                                    { src: "/icons/technologies/software_development/Infrastructure/AWS.svg", alt: "AWS" },
                                    { src: "/icons/technologies/software_development/Infrastructure/Azure.svg", alt: "Azure" },
                                    { src: "/icons/technologies/software_development/Infrastructure/Google Cloud.svg", alt: "GCP" },
                                    { src: "/icons/technologies/software_development/Infrastructure/Digital Ocean.svg", alt: "DigitalOcean" },
                                ]}
                            />

                        </div>

                        {/* RIGHT SIDE — Text + Image */}
                        <div className="space-y-8">

                            <div className="space-y-3">
                                <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
                                    Software Development
                                </h2>

                                <p className="text-[--color-muted] text-sm leading-relaxed">
                                    In order to help clients achieve their business aims, our
                                    specialists choose tech stacks depending on project requirements
                                    such as scalability, real-time data processing needs, or the
                                    level of interactivity. Niche, launch speed, plans for the
                                    development of additional functionality and possibilities of
                                    budget distribution are also important aspects of tech stack
                                    choice.
                                </p>
                            </div>

                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/image-04-2.webp"
                                alt="Software development"
                                className="rounded-3xl w-full object-cover"
                                width={630}
                                height={600}
                            />

                        </div>

                    </div>

                </div>
            </section>
            <section className="our_technologies bg-[--color-bg-alt] pb-20 ">
                <div className="container mx-auto max-w-6xl px-4">

                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* LEFT SIDE — Text + Image */}
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
                                    Web Development
                                </h2>

                                <p className="text-sm leading-relaxed text-[--color-muted]">
                                    When choosing tech stacks for web development, we consider the
                                    required level of interaction with the user interface, the
                                    ability to handle a certain amount of traffic, the degree of
                                    security, and the time and cost of development. A deep
                                    understanding of these factors helps our team choose a
                                    technology package that best meets the client&apos;s needs.
                                </p>
                            </div>

                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/image-04-3.webp"
                                alt="Web Development"
                                className="rounded-3xl w-full object-cover"
                                width={630}
                                height={600}
                            />
                        </div>

                        {/* RIGHT SIDE — Accordions */}
                        <div className="space-y-6">

                            <TechAccordion
                                title="PHP Frameworks"
                                logos={[
                                    { src: "/icons/technologies/web_development/backend/Symfony.png", alt: "Symfony" },
                                    { src: "/icons/technologies/web_development/backend/Laravel.png", alt: "Laravel" },
                                    // { src: "/icons/php/laravel.svg", alt: "Laravel" },
                                ]}
                            />

                            <TechAccordion
                                title="CMS"
                                logos={[
                                    { src: "/icons/technologies/web_development/cms/WordPress.svg", alt: "WordPress" },
                                    // { src: "/icons/technologies/web_development/cms/opencart.svg", alt: "OpenCart" },
                                    { src: "/icons/technologies/web_development/cms/Drupal.svg", alt: "Drupal" },
                                    { src: "/icons/technologies/web_development/cms/Webflow.svg", alt: "Webflow" },
                                    { src: "/icons/technologies/web_development/cms/WooCommerce.svg", alt: "WooCommerce" },
                                ]}
                            />

                            <TechAccordion
                                title="JavaScript Frameworks"
                                logos={[
                                    { src: "/icons/technologies/web_development/frontend/React.svg", alt: "React" },
                                    { src: "/icons/technologies/web_development/frontend/angular.svg", alt: "angular" },
                                    { src: "/icons/technologies/web_development/frontend/Vue.js.svg", alt: "Vue" },
                                ]}
                            />

                            <TechAccordion
                                title="HTML5, CSS3"
                                logos={[
                                    { src: "/icons/technologies/web_development/frontend/css_frameworks/tailwind.svg", alt: "tailwind" },
                                    { src: "/icons/technologies/web_development/frontend/css_frameworks/material_ui.svg", alt: "material_ui" },
                                ]}
                            />

                            <TechAccordion
                                title="Databases"
                                logos={[
                                    { src: "/icons/technologies/web_development/databases/SQLite.svg", alt: "SQLite" },
                                    // { src: "/icons/technologies/web_development/databases/realm.svg", alt: "Realm" },
                                    // { src: "/icons/technologies/web_development/databases/coredata.svg", alt: "Core Data" },
                                    { src: "/icons/technologies/web_development/databases/MongoDB.svg", alt: "MongoDB" },
                                    { src: "/icons/technologies/web_development/databases/PostgresSQL.svg", alt: "PostgreSQL" },
                                    { src: "/icons/technologies/web_development/databases/MySQL.svg", alt: "SQL" },
                                ]}
                            />

                            <TechAccordion
                                title="Caching systems"
                                logos={[
                                    // { src: "/icons/technologies/web_development/caching/memcached.svg", alt: "Memcached" },
                                    { src: "/icons/technologies/web_development/caching/Redis.svg", alt: "Redis" },
                                ]}
                            />

                        </div>

                    </div>
                </div>
            </section>
        </div>
        <ActionSection
            title="Ready to develop a project?"
            btnLabel="Let’s Start"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            // className="mt-20"
            icon={
                <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                    <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                    <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                    <circle cx="130" cy="50" r="36" fill="black" />
                </svg>
            }
        />
    </div>
  );
}

/** Small helper to keep logo markup DRY */
function TechLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="logo">
      <img
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="h-16 w-16 md:h-20 md:w-20"
        loading="lazy"
      />
    </div>
  );
}

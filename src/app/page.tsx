import Image from "next/image";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { ServicesSection } from "@/components/ServicesSection";
import Form from "next/form";
import ContactForm from "@/components/Form";

export default function Home() {
    return (
        <main>
            <section
                id="banner-main"
                className="banner_home bg-[--color-bg] bg-cover bg-no-repeat"
            >
                <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <div className="flex flex-col items-center gap-10 md:flex-row">
                        {/* Left column */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                Enhance your development with up-to-date tech expertise
                            </h1>

                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[--color-muted] md:text-base">
                                Having developed our own product system from scratch, we know how
                                to create personalized software solutions.
                            </p>

                            {/* Email / service search form */}
                            <form
                                className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
                                role="search"
                                method="get"
                                action="https://develux.com/"
                            >
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        name="s"
                                        id="s"
                                        placeholder="Enter Service"
                                        className="w-full rounded-full border border-[--color-border] bg-[--color-bg] px-4 py-3 text-sm text-[--color-text] outline-none focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/40"
                                    />
                                </div>
                                <Button
                                    className="w-full sm:w-auto"
                                    variant="primary"
                                    href="https://develux.com/?s="
                                >
                                    Find a service
                                </Button>
                            </form>
                        </div>

                        {/* Right column */}
                        <div className="flex-1 flex justify-center md:justify-end">
                            <div className="relative h-64 w-64 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/05/main_image.webp"
                                    alt="Development illustration"
                                    // fill
                                    // priority
                                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 352px, 256px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesSection />

            {/* About company (copied + JSX-ified) */}
            <section className="about_company py-16 md:py-24">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="wrapper flex flex-col gap-10 md:flex-row">
                        <div className="col6 md:w-1/2">
                            <div className="title_about text-2xl font-semibold text-[--color-text]">
                                About Our Company
                            </div>
                            <div className="description_block mt-4 space-y-3 text-sm leading-relaxed text-[--color-muted]">
                                <p>
                                    Develux is a company that helps work stably and develop the
                                    modern technical world by providing up-to-date IT services,
                                    increasing the efficiency and potential of projects.
                                </p>
                                <p>
                                    Our team specialises in providing the customer with the most
                                    effective and high-quality services to distinguish the client’s
                                    business from competitors in market positions.
                                </p>
                                <p>
                                    Develux was founded as a small startup. We grew sustainably by
                                    finding and retaining a strong in-house team and developing
                                    different digital solutions.
                                </p>
                            </div>
                        </div>

                        <div className="col6 md:w-1/2">
                            <div className="image_right flex justify-center md:justify-end">
                                <img
                                    width={627}
                                    height={468}
                                    src="https://develux.com/wp-content/uploads/2023/05/image1.webp"
                                    alt=""
                                    decoding="async"
                                    loading="eager"
                                    srcSet="https://develux.com/wp-content/uploads/2023/05/image1.webp 627w, https://develux.com/wp-content/uploads/2023/05/image1-300x224.webp 300w"
                                    sizes="(max-width: 627px) 100vw, 627px"
                                    className="attachment-full size-full max-w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="wrapper number_block mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="col3">
                            <div className="number_item text-center">
                                <div className="number text-3xl font-bold text-[--color-text]">
                                    850+
                                </div>
                                <div className="text mt-1 text-sm text-[--color-muted]">
                                    successful projects
                                </div>
                            </div>
                        </div>
                        <div className="col3">
                            <div className="number_item text-center">
                                <div className="number text-3xl font-bold text-[--color-text]">
                                    670+
                                </div>
                                <div className="text mt-1 text-sm text-[--color-muted]">
                                    clients at all
                                </div>
                            </div>
                        </div>
                        <div className="col3">
                            <div className="number_item text-center">
                                <div className="number text-3xl font-bold text-[--color-text]">
                                    180+
                                </div>
                                <div className="text mt-1 text-sm text-[--color-muted]">
                                    regular customers
                                </div>
                            </div>
                        </div>
                        <div className="col3">
                            <div className="number_item text-center">
                                <div className="number text-3xl font-bold text-[--color-text]">
                                    200+
                                </div>
                                <div className="text mt-1 text-sm text-[--color-muted]">
                                    qualified experts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values (using Tailwind + your color tokens) */}
            <section className="our_values bg-[--color-bg] py-16 md:py-24">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="wrapper">
                        <div className="col12">
                            <div className="name_section text-2xl font-semibold text-[--color-text]">
                                Our Values
                            </div>

                            <div className="block_values mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {/* Professionalism */}
                                <div className="values_item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                                    <div className="icon">
                                        <svg
                                            width="60"
                                            height="60"
                                            viewBox="0 0 60 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M48.527 11H11.1953C11.1953 15.9491 13.1613 20.6954 16.6608 24.195C20.1604 27.6945 24.9067 29.6605 29.8558 29.6605C34.8049 29.6605 39.5513 27.6945 43.0508 24.195C46.5503 20.6954 48.5163 15.9491 48.5163 11H48.527Z"
                                                fill="#5B3FBB"
                                            />
                                            <path
                                                d="M29.8666 29.7803C24.9204 29.7803 20.1767 31.7451 16.6792 35.2427C13.1817 38.7402 11.2168 43.4839 11.2168 48.4301H48.5271C48.5271 45.9801 48.0444 43.5541 47.1065 41.2907C46.1686 39.0273 44.7939 36.9708 43.061 35.2389C41.328 33.507 39.2708 32.1335 37.0069 31.1968C34.743 30.2602 32.3167 29.7789 29.8666 29.7803Z"
                                                fill="#2D2424"
                                            />
                                        </svg>
                                    </div>
                                    <div className="name text-base font-semibold text-[--color-text]">
                                        Professionalism
                                    </div>
                                    <div className="text text-sm leading-relaxed text-[--color-muted]">
                                        To provide our clients with high-quality services, we
                                        meticulously select employees for our team who can implement
                                        projects in the required technology or niche.
                                    </div>
                                </div>

                                {/* Continuous Development */}
                                <div className="values_item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                                    <div className="icon">
                                        <svg
                                            width="60"
                                            height="60"
                                            viewBox="0 0 60 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.6657 36.6685V24.3343H36.3343V12H49V24.3343V36.6685V49H36.3343H23.6657H11V36.6685H23.6657Z"
                                                fill="#2D2424"
                                            />
                                            <path
                                                d="M36.3342 12H48.9998V24.3357H36.334L36.3342 12Z"
                                                fill="#5B3FBB"
                                            />
                                        </svg>
                                    </div>
                                    <div className="name text-base font-semibold text-[--color-text]">
                                        Continuous Development
                                    </div>
                                    <div className="text text-sm leading-relaxed text-[--color-muted]">
                                        Our employees never stand still, but develop to be in trend,
                                        understand the latest innovations and provide up-to-date
                                        services.
                                    </div>
                                </div>

                                {/* Personal Solution */}
                                <div className="values_item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                                    <div className="icon">
                                        <svg
                                            width="60"
                                            height="60"
                                            viewBox="0 0 60 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M28.9945 4C24.8168 3.99752 20.7059 5.04845 17.042 7.05561L19.3082 15.5095C22.6291 13.1369 26.708 12.0716 30.765 12.5173C34.8219 12.9629 38.5723 14.8882 41.299 17.9251C44.0258 20.9619 45.5375 24.8973 45.5453 28.9786C45.553 33.06 44.0561 37.001 41.3409 40.0482C38.6257 43.0953 34.8827 45.0348 30.8274 45.4958C26.7722 45.9568 22.6893 44.907 19.3594 42.547C16.0295 40.187 13.6863 36.6825 12.7777 32.7036C11.8691 28.7246 12.459 24.5504 14.4345 20.979L6.18944 18.7688C3.98174 23.6909 3.42536 29.195 4.6034 34.4594C5.78144 39.7237 8.63067 44.4658 12.7257 47.9775C16.8207 51.4892 21.9417 53.5821 27.3241 53.9437C32.7065 54.3054 38.0615 52.9163 42.5894 49.984C47.1174 47.0516 50.5754 42.7333 52.447 37.6739C54.3187 32.6144 54.5036 27.0853 52.9742 21.9121C51.4448 16.7389 48.283 12.1992 43.9611 8.97092C39.6392 5.74259 34.389 3.99881 28.9945 4Z"
                                                fill="#5B3FBB"
                                            />
                                            <path
                                                d="M19.934 15.8887C17.904 17.3453 16.2217 19.2333 15.0078 21.4172L21.9055 23.2651L19.934 15.8887Z"
                                                fill="#222222"
                                            />
                                            <path
                                                d="M29.7257 22.0352C28.2464 22.0348 26.796 22.4446 25.5356 23.2191L26.8791 28.238L22.2772 27.0025C21.6122 28.6007 21.4789 30.3704 21.8971 32.0501C22.3153 33.7298 23.2628 35.2305 24.5995 36.3302C25.9362 37.43 27.5912 38.0707 29.32 38.1574C31.0488 38.2442 32.7597 37.7726 34.1998 36.8121C35.64 35.8517 36.7329 34.4535 37.3172 32.8242C37.9015 31.1948 37.9461 29.4206 37.4445 27.7639C36.9429 26.1072 35.9217 24.6558 34.5317 23.6242C33.1417 22.5925 31.4567 22.0354 29.7257 22.0352Z"
                                                fill="#222222"
                                            />
                                        </svg>
                                    </div>
                                    <div className="name text-base font-semibold text-[--color-text]">
                                        Personal Solution
                                    </div>
                                    <div className="text text-sm leading-relaxed text-[--color-muted]">
                                        The successful development of any project begins with
                                        listening to our customers. That is why it is one of our
                                        essential approaches to cooperation.
                                    </div>
                                </div>

                                {/* Open-Book Model */}
                                <div className="values_item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                                    <div className="icon">
                                        <svg
                                            width="60"
                                            height="60"
                                            viewBox="0 0 60 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M37.6795 11C37.6795 18.0756 34.8687 24.8614 29.8654 29.8649C24.8621 34.8684 18.0761 37.6796 11 37.6804V49C21.0785 48.9993 30.7439 44.9954 37.8702 37.8691C44.9965 30.7428 49 21.0777 49 11H37.6795Z"
                                                fill="#222222"
                                            />
                                            <path
                                                d="M30 11H11V30C13.4954 30 15.9662 29.5085 18.2716 28.5537C20.577 27.5988 22.6717 26.1992 24.436 24.4349C26.2004 22.6705 27.5999 20.5759 28.5545 18.2708C29.5092 15.9656 30.0004 13.495 30 11Z"
                                                fill="#5B3FBB"
                                            />
                                        </svg>
                                    </div>
                                    <div className="name text-base font-semibold text-[--color-text]">
                                        Open-Book Model
                                    </div>
                                    <div className="text text-sm leading-relaxed text-[--color-muted]">
                                        We provide the customer with as much open information as
                                        possible regarding the cost of the provided services.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles of Cooperation (copied + JSX-ified) */}
            <section className="principles bg-[--color-bg-alt] py-16 md:py-24">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="principles__title text-2xl font-semibold text-[--color-text]">
                        Principles of Cooperation
                    </div>

                    <div className="principles__blocks mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Reliability */}
                        <div className="principles__item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                            <img
                                width={60}
                                height={60}
                                src="https://develux.com/wp-content/uploads/2023/05/abstract_icon-1.svg"
                                className="attachment-thumbnail size-thumbnail"
                                alt="Reliability icon"
                                decoding="async"
                            />
                            <div className="principles__item-title text-base font-semibold text-[--color-text]">
                                Reliability
                            </div>
                            <p className="text-sm leading-relaxed text-[--color-muted]">
                                Working with Develux, you minimise KPI business risks because we
                                focus on achieving the desired results.
                            </p>
                        </div>

                        {/* Transparency */}
                        <div className="principles__item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                            <img
                                width={60}
                                height={60}
                                src="https://develux.com/wp-content/uploads/2023/05/abstract_icon-2.svg"
                                className="attachment-thumbnail size-thumbnail"
                                alt="Transparency icon"
                                decoding="async"
                            />
                            <div className="principles__item-title text-base font-semibold text-[--color-text]">
                                Transparency
                            </div>
                            <p className="text-sm leading-relaxed text-[--color-muted]">
                                For you to fully understand all stages of cooperation with Develux,
                                we maintain a 100% transparent communication system with clients.
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="principles__item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                            <img
                                width={60}
                                height={60}
                                src="https://develux.com/wp-content/uploads/2023/05/abstract_icon-3.svg"
                                className="attachment-thumbnail size-thumbnail"
                                alt="Experience icon"
                                decoding="async"
                            />
                            <div className="principles__item-title text-base font-semibold text-[--color-text]">
                                Experience
                            </div>
                            <p className="text-sm leading-relaxed text-[--color-muted]">
                                We hire the best multidisciplinary staff, so there is access to
                                services in the technical expertise and niche you need.
                            </p>
                        </div>

                        {/* Confidentiality */}
                        <div className="principles__item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                            <img
                                width={60}
                                height={60}
                                src="https://develux.com/wp-content/uploads/2023/05/abstract_icon-4.svg"
                                className="attachment-thumbnail size-thumbnail"
                                alt="Confidentiality icon"
                                decoding="async"
                            />
                            <div className="principles__item-title text-base font-semibold text-[--color-text]">
                                Confidentiality
                            </div>
                            <p className="text-sm leading-relaxed text-[--color-muted]">
                                To keep your data and project details confidential, we maintain
                                complete confidentiality during our work.
                            </p>
                        </div>

                        {/* Individual Approach */}
                        <div className="principles__item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                            <img
                                width={60}
                                height={60}
                                src="https://develux.com/wp-content/uploads/2023/05/abstract_icon-5.svg"
                                className="attachment-thumbnail size-thumbnail"
                                alt="Individual approach icon"
                                decoding="async"
                            />
                            <div className="principles__item-title text-base font-semibold text-[--color-text]">
                                Individual Approach
                            </div>
                            <p className="text-sm leading-relaxed text-[--color-muted]">
                                Our team can offer you an individual solution or approach, taking
                                into account your budget and corporate policy.
                            </p>
                        </div>

                        {/* Communication */}
                        <div className="principles__item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                            <img
                                width={60}
                                height={60}
                                src="https://develux.com/wp-content/uploads/2023/05/abstract_icon-6.svg"
                                className="attachment-thumbnail size-thumbnail"
                                alt="Communication icon"
                                decoding="async"
                            />
                            <div className="principles__item-title text-base font-semibold text-[--color-text]">
                                Communication
                            </div>
                            <p className="text-sm leading-relaxed text-[--color-muted]">
                                We believe in the power of cooperation and its impact on the future.
                                Therefore, with the help of a reliable communication system with
                                clients, we ensure a quick response.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action block blue (copied + JSX-ified) */}
            <section className="action_block_blue bg-[--color-bg] py-16 md:py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="wrapper">
                        <div className="col12">
                            <div className="flex_action flex flex-col items-center gap-6 rounded-3xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-6 py-10 md:flex-row md:justify-between md:px-10">
                                <div className="icon flex-shrink-0">
                                    <svg
                                        width="188"
                                        height="94"
                                        viewBox="0 0 188 94"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse
                                            cx="140.875"
                                            cy="47"
                                            rx="47.1253"
                                            ry="47"
                                            fill="#222222"
                                        ></ellipse>
                                        <path
                                            d="M93.7507 47C93.7507 72.68 72.877 93.5 47.1253 93.5C21.3736 93.5 0.5 72.68 0.5 47C0.5 21.32 21.3736 0.5 47.1253 0.5C72.877 0.5 93.7507 21.32 93.7507 47Z"
                                            stroke="white"
                                        ></path>
                                        <mask
                                            id="mask0_384_5810"
                                            style={{ maskType: "alpha" }}
                                            maskUnits="userSpaceOnUse"
                                            x="46"
                                            y="0"
                                            width="95"
                                            height="94"
                                        >
                                            <ellipse
                                                cx="93.7497"
                                                cy="46.75"
                                                rx="46.8747"
                                                ry="46.75"
                                                fill="black"
                                            ></ellipse>
                                        </mask>
                                        <g mask="url(#mask0_384_5810)">
                                            <path
                                                d="M31.9609 1.0625H151.278V2.125H31.9609V1.0625Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 6.375H151.278V7.4375H31.9609V6.375Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 11.6875H151.278V12.75H31.9609V11.6875Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 17H151.278V18.0625H31.9609V17Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 22.3125H151.278V23.375H31.9609V22.3125Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 27.625H151.278V28.6875H31.9609V27.625Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 32.9375H151.278V34H31.9609V32.9375Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 38.25H151.278V39.3125H31.9609V38.25Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 43.5625H151.278V44.625H31.9609V43.5625Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 48.875H151.278V49.9375H31.9609V48.875Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 54.1875H151.278V55.25H31.9609V54.1875Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 59.5H151.278V60.5625H31.9609V59.5Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 64.8125H151.278V65.875H31.9609V64.8125Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 70.125H151.278V71.1875H31.9609V70.125Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 75.4375H151.278V76.5H31.9609V75.4375Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 80.75H151.278V81.8125H31.9609V80.75Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 86.0625H151.278V87.125H31.9609V86.0625Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M31.9609 91.375H151.278V92.4375H31.9609V91.375Z"
                                                fill="white"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>

                                <div className="text text-center text-lg font-semibold text-[--color-text] md:text-left md:text-xl">
                                    Benefit from Develux expertise for your business
                                </div>

                                <div className="button">
                                    <a
                                        href="#id_footer_form"
                                        title="Let’s Start"
                                        className="inline-flex items-center rounded-full bg-[--color-text] px-6 py-3 text-sm font-semibold text-[--color-bg] transition hover:bg-white"
                                    >
                                        Let’s Start
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Industries (copied + JSX-ified) */}
            <section className="our-industries bg-[--color-bg] py-16 md:py-24">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="wrapper">
                        <div className="col12">
                            <div className="our-industries_title section_title text-2xl font-semibold text-[--color-text]">
                                Our Industries
                            </div>
                        </div>

                        <div className="col12 our-industries_cards mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-1.svg"
                                    className="h-8 w-8"
                                    alt="E-commerce"
                                    decoding="async"
                                />
                                <span>E-commerce</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-2.svg"
                                    className="h-8 w-8"
                                    alt="Fintech"
                                    decoding="async"
                                />
                                <span>Fintech</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-3.svg"
                                    className="h-8 w-8"
                                    alt="Automotive"
                                    decoding="async"
                                />
                                <span>Automotive</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-4.svg"
                                    className="h-8 w-8"
                                    alt="Healthcare"
                                    decoding="async"
                                />
                                <span>Healthcare</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-5.svg"
                                    className="h-8 w-8"
                                    alt="Travel"
                                    decoding="async"
                                />
                                <span>Travel</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-6.svg"
                                    className="h-8 w-8"
                                    alt="Logistics & Supply Chain"
                                    decoding="async"
                                />
                                <span>Logistics &amp; Supply Chain</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-7.svg"
                                    className="h-8 w-8"
                                    alt="Retail"
                                    decoding="async"
                                />
                                <span>Retail</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-8.svg"
                                    className="h-8 w-8"
                                    alt="E-learning"
                                    decoding="async"
                                />
                                <span>E-learning</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-9.svg"
                                    className="h-8 w-8"
                                    alt="Gaming"
                                    decoding="async"
                                />
                                <span>Gaming</span>
                            </div>

                            <div className="our-industries_card flex items-center gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-4 py-3 text-sm text-[--color-text]">
                                <img
                                    width={50}
                                    height={50}
                                    src="https://develux.com/wp-content/uploads/2023/04/icon-10.png"
                                    className="h-8 w-8"
                                    alt="Gambling"
                                    decoding="async"
                                />
                                <span>Gambling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Tech Stacks (copied + simplified, no JS tabs) */}
            <section className="our_stacks bg-[--color-bg-alt] py-16 md:py-24">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="wrapper mb-10 flex flex-col gap-6 md:flex-row md:items-end">
                        <div className="col8 md:w-2/3">
                            <div className="title_section text-2xl font-semibold text-[--color-text]">
                                Our Tech Stacks
                            </div>
                        </div>
                        <div className="col4 md:w-1/3">
                            <div className="desc_section text-sm leading-relaxed text-[--color-muted]">
                                Our team speaks 30 programming languages and uses 21 development
                                frameworks.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {/* Software Development block */}
                        <div className="rounded-3xl border border-[--color-muted]/20 bg-[--color-bg] p-6 md:p-8">
                            <div className="mb-4 text-base font-semibold text-[--color-text]">
                                Software Development
                            </div>
                            <div className="tab_description mb-6 text-sm leading-relaxed text-[--color-muted]">
                                <span>
                                    Develux is aware of the latest trends in software development, so
                                    we use them to improve the performance, reliability and quality
                                    of the client&apos;s software.
                                </span>
                            </div>

                            <div className="tech_wrapper grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {/* Mobile */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Mobile
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        {/* Use only "color" variant for now */}
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/Statedefault-TypeAndroid-StuDio-dagger-Hilt.svg"
                                                alt="Android StuDio dagger-Hilt"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/Ionic.svg"
                                                alt="Ionic"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeObjective-C.svg"
                                                alt="Objective-C"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSwift.svg"
                                                alt="Swift"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeKotlin.svg"
                                                alt="Kotlin"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeFlutter.svg"
                                                alt="Flutter"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeReact-Native.svg"
                                                alt="React Native"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeiOS.svg"
                                                alt="iOS"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAndroid.svg"
                                                alt="Android"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Data */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Data
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/firebase.svg"
                                                alt="Firebase"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeElastic-Search.svg"
                                                alt="Elastic-Search"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDynamo-DB.svg"
                                                alt="Dynamo-DB"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeGoogle-Cloud-SQL.svg"
                                                alt="Google-Cloud-SQL"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAzure-SQL.svg"
                                                alt="Azure-SQL"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMongo-DB.svg"
                                                alt="Mongo-DB"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypePostgreSQL.svg"
                                                alt="PostgreSQL"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeKafka.svg"
                                                alt="Kafka"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSQL.svg"
                                                alt="SQL"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMySQL.svg"
                                                alt="MySQL"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* DevOps */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        DevOps
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/CD-tools-1.svg"
                                                alt="CI/CD tools"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeTerraform.svg"
                                                alt="Terraform"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeKubernetes.svg"
                                                alt="Kubernetes"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDocker.svg"
                                                alt="Docker"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Infrastructure */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Infrastructure
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDigital-Ocean.svg"
                                                alt="Digital Ocean"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAzure.svg"
                                                alt="Azure"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeGCP.svg"
                                                alt="GCP"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAWS.svg"
                                                alt="AWS"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Fullstack Development */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Fullstack Development
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/Statedefault-Typenetangular.svg"
                                                alt=".NET + Angular"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/statehover.svg"
                                                alt="PHP + Vue.js"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/icons-1.svg"
                                                alt="Golang + React"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Web Development block */}
                        <div className="rounded-3xl border border-[--color-muted]/20 bg-[--color-bg] p-6 md:p-8">
                            <div className="mb-4 text-base font-semibold text-[--color-text]">
                                Web Development
                            </div>
                            <div className="tab_description mb-6 text-sm leading-relaxed text-[--color-muted]">
                                <span>
                                    Our team uses the most popular and best web tech stacks and
                                    their combinations to implement the client&apos;s projects,
                                    depending on the wishes and needs, to create something that
                                    exceeds all expectations.
                                </span>
                            </div>

                            <div className="tech_wrapper grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {/* Frontend */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Frontend
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeJavascript.svg"
                                                alt="JavaScript"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAngular.svg"
                                                alt="Angular"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeVue.js.svg"
                                                alt="Vue.js"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeCSS.svg"
                                                alt="CSS3"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeHTML.svg"
                                                alt="HTML5"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeReact.js.svg"
                                                alt="React"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Backend */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Backend
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/NET.svg"
                                                alt=".NET"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/django.svg"
                                                alt="Django"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypePHP.svg"
                                                alt="PHP"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeGolang.svg"
                                                alt="Go"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeNode.js.svg"
                                                alt="Node.js"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeJava-1.svg"
                                                alt="Java"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/python.svg"
                                                alt="Python"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* PHP Frameworks */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        PHP Frameworks
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSymfony.svg"
                                                alt="Symfony"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeLaravel.svg"
                                                alt="Laravel"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* CMS */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        CMS
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/wordpress-2.svg"
                                                alt="WordPress"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeOpenCart.svg"
                                                alt="OpenCart"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDrupal.svg"
                                                alt="Drupal"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeWebflow.svg"
                                                alt="Webflow"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeWooCommerce.svg"
                                                alt="WooCommerce"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* JavaScript Frameworks */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        JavaScript Frameworks
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAngular.svg"
                                                alt="Angular"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeVue.js.svg"
                                                alt="Vue.js"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeReact.js.svg"
                                                alt="React"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* HTML5, CSS3 */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        HTML5, CSS3
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeBootstrap.svg"
                                                alt="Bootstrap"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeFoundation.svg"
                                                alt="Foundation"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Databases */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Databases
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/SQlite.svg"
                                                alt="SQLite.NET"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/REALM.svg"
                                                alt="Realm Mobile Database"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/Core.svg"
                                                alt="Core Data"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/REALM.svg"
                                                alt="Realm"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/05/SQlite.svg"
                                                alt="SQLite"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMongo-DB.svg"
                                                alt="Mongo-DB"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypePostgreSQL.svg"
                                                alt="PostgreSQL"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSQL.svg"
                                                alt="SQL"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Caching systems */}
                                <div className="item">
                                    <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                                        Caching systems
                                    </div>
                                    <div className="caption_logos flex flex-wrap gap-3">
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMemcached.svg"
                                                alt="Memcached"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="logo">
                                            <img
                                                width={80}
                                                height={80}
                                                src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeRedis.svg"
                                                alt="Redis"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer contact form (copied + JSX-ified) */}
            <section className="footer_form bg-[--color-bg] py-16 md:py-24" id="id_footer_form">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="wrapper text-center">
                        <div className="col12">
                            <div className="title_footer text-2xl font-semibold text-[--color-text]">
                                Contact us to get an individual solution.
                            </div>
                            <div className="subtitle mt-2 text-sm text-[--color-muted]">
                                Our experts are here to answer all your questions.
                            </div>
                        </div>
                    </div>

                    <ContactForm

                    />
                </div>
            </section>
        </main>
    );
}

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {ActionSection} from "@/components/Action/ActionSection";

export default function Page() {
    return (
        <main>
            <section className="py-20 bg-[--color-bg]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                        <div>
                            <h1 className="text-5xl font-bold text-[--color-text] mb-6">
                                About Us
                            </h1>

                            <p className="text-xl text-[--color-muted] mb-8 leading-relaxed">
                                Expand your project development<br/>
                                with <strong className="text-[--color-text]">Deveteria tech expertise</strong>
                            </p>

                            <a href="#id_footer_form"
                               className="inline-block bg-[--color-primary] text-white text-lg font-medium px-10 py-4 rounded-xl hover:opacity-90 transition">
                                Let’s Cooperate
                            </a>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/image-05.webp"
                                className="max-w-full rounded-2xl shadow-lg"
                                alt="About Us"/>
                        </div>

                    </div>
                </div>
            </section>
            <BgSection>
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-5xl font-bold text-[--color-text] mb-8">
                                About Our Company
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed text-[--color-muted]">
                                <p>
                                    Deveteria was a small startup. Our in-house team has constantly been
                                    expanding, adding more expertise in service delivery and developing
                                    custom solutions for clients in various niches.
                                </p>
                                <p>
                                    Today, Deveteria is a company that helps clients to develop their businesses
                                    stably and work in a competitive position in the modern technological
                                    world by creating individual projects.
                                </p>
                                <p>
                                    We specialise in a large pool of services at a high level so that our
                                    clients can entrust us with their projects from start to finish and receive
                                    an effective turnkey solution as a result.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/image-05-2.webp"
                                alt="About company"
                                className="rounded-2xl shadow-lg max-w-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[--color-text]">850+</div>
                            <div className="text-[--color-muted] mt-2">successful projects</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-[--color-text]">670+</div>
                            <div className="text-[--color-muted] mt-2">clients at all</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-[--color-text]">180+</div>
                            <div className="text-[--color-muted] mt-2">regular customers</div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl font-bold text-[--color-text]">200+</div>
                            <div className="text-[--color-muted] mt-2">experts</div>
                        </div>
                    </div>

                </div>
            </BgSection>

            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-5xl font-bold text-[--color-text] mb-16">
                        Our Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        <div className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg]">
                            <div className="mb-6">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path
                                        d="M48.527 11H11.1953C11.1953 15.9491 13.1613 20.6954 16.6608 24.195C20.1604 27.6945 24.9067 29.6605 29.8558 29.6605C34.8049 29.6605 39.5513 27.6945 43.0508 24.195C46.5503 20.6954 48.5163 15.9491 48.5163 11H48.527Z"
                                        fill="#5B3FBB"/>
                                    <path
                                        d="M29.8666 29.7803C24.9204 29.7803 20.1767 31.7451 16.6792 35.2427C13.1817 38.7402 11.2168 43.4839 11.2168 48.4301H48.5271C48.5271 45.9801 48.0444 43.5541 47.1065 41.2907C46.1686 39.0273 44.7939 36.9708 43.061 35.2389C41.328 33.507 39.2708 32.1335 37.0069 31.1968C34.743 30.2602 32.3167 29.7789 29.8666 29.7803Z"
                                        fill="#2D2424"/>
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold text-[--color-text] mb-4">
                                High Expertise
                            </h3>

                            <p className="text-[--color-muted] leading-relaxed">
                                Our team aims to provide top-notch services, so we are constantly improving our hard
                                skills,
                                and expanding our expertise in development approaches, current programming languages and
                                tools, and popular niches.
                            </p>
                        </div>

                        <div className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg]">
                            <div className="mb-6">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path
                                        d="M23.6657 36.6685V24.3343H36.3343V12H49V24.3343V36.6685V49H36.3343H23.6657H11V36.6685H23.6657Z"
                                        fill="#2D2424"/>
                                    <path d="M36.3342 12H48.9998V24.3357H36.334L36.3342 12Z" fill="#5B3FBB"/>
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold text-[--color-text] mb-4">
                                Sustained Development
                            </h3>

                            <p className="text-[--color-muted] leading-relaxed">
                                Every day, something new appears in the world of technology, so our employees are
                                constantly
                                developing their knowledge of the latest innovations, providing clients with services
                                that will
                                help improve their businesses.
                            </p>
                        </div>

                        <div className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg]">
                            <div className="mb-6">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path
                                        d="M28.9945 4C24.8168 3.99752 20.7059 5.04845 17.042 7.05561L19.3082 15.5095C22.6291 13.1369 26.708 12.0716 30.765 12.5173C34.8219 12.9629 38.5723 14.8882 41.299 17.9251C44.0258 20.9619 45.5375 24.8973 45.5453 28.9786C45.553 33.06 44.0561 37.001 41.3409 40.0482C38.6257 43.0953 34.8827 45.0348 30.8274 45.4958C26.7722 45.9568 22.6893 44.907 19.3594 42.547C16.0295 40.187 13.6863 36.6825 12.7777 32.7036C11.8691 28.7246 12.459 24.5504 14.4345 20.979L6.18944 18.7688C3.98174 23.6909 3.42536 29.195 4.6034 34.4594C5.78144 39.7237 8.63067 44.4658 12.7257 47.9775C16.8207 51.4892 21.9417 53.5821 27.3241 53.9437C32.7065 54.3054 38.0615 52.9163 42.5894 49.984C47.1174 47.0516 50.5754 42.7333 52.447 37.6739C54.3187 32.6144 54.5036 27.0853 52.9742 21.9121C51.4448 16.7389 48.283 12.1992 43.9611 8.97092C39.6392 5.74259 34.389 3.99881 28.9945 4Z"
                                        fill="#5B3FBB"/>
                                    <path
                                        d="M19.934 15.8887C17.904 17.3453 16.2217 19.2333 15.0078 21.4172L21.9055 23.2651L19.934 15.8887Z"
                                        fill="#222222"/>
                                    <path
                                        d="M29.7257 22.0352C28.2464 22.0348 26.796 22.4446 25.5356 23.2191L26.8791 28.238L22.2772 27.0025C21.6122 28.6007 21.4789 30.3704 21.8971 32.0501C22.3153 33.7298 23.2628 35.2305 24.5995 36.3302C25.9362 37.43 27.5912 38.0707 29.32 38.1574C31.0488 38.2442 32.7597 37.7726 34.1998 36.8121C35.64 35.8517 36.7329 34.4535 37.3172 32.8242C37.9015 31.1948 37.9461 29.4206 37.4445 27.7639C36.9429 26.1072 35.9217 24.6558 34.5317 23.6242C33.1417 22.5925 31.4567 22.0354 29.7257 22.0352Z"
                                        fill="#222222"/>
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold text-[--color-text] mb-4">
                                Individual Approach
                            </h3>

                            <p className="text-[--color-muted] leading-relaxed">
                                To develop the client's project successfully, our team starts cooperating by listening
                                to
                                needs and goals to conduct the best personal solution according to budget and corporate
                                policy.
                            </p>
                        </div>

                        <div className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg]">
                            <div className="mb-6">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path
                                        d="M37.6795 11C37.6795 18.0756 34.8687 24.8614 29.8654 29.8649C24.8621 34.8684 18.0761 37.6796 11 37.6804V49C21.0785 48.9993 30.7439 44.9954 37.8702 37.8691C44.9965 30.7428 49 21.0777 49 11H37.6795Z"
                                        fill="#222222"/>
                                    <path
                                        d="M30 11H11V30C13.4954 30 15.9662 29.5085 18.2716 28.5537C20.577 27.5988 22.6717 26.1992 24.436 24.4349C26.2004 22.6705 27.5999 20.5759 28.5545 18.2708C29.5092 15.9656 30.0004 13.495 30 11Z"
                                        fill="#5B3FBB"/>
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold text-[--color-text] mb-4">
                                Transparent Cooperation
                            </h3>

                            <p className="text-[--color-muted] leading-relaxed">
                                We appreciate the coordinated and clear partnership with our customers providing all the
                                information about the service details, the terms of work, and the price because it
                                ensures a
                                high-quality workflow.
                            </p>
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
                // className="mt-20"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3"/>
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4"/>
                        <circle cx="130" cy="50" r="36" fill="black"/>
                    </svg>
                }
            />

            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-5xl font-bold text-[--color-text] mb-16">
                        Customer Geography
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        <div
                            className="border border-[--color-muted]/20 rounded-2xl p-10 w-full max-w-md bg-[--color-bg]">
                            <div className="grid grid-cols-2 gap-y-3 text-[--color-text] leading-relaxed text-lg">
                                <span>USA</span> <span>Portugal</span>
                                <span>United Arab Emirates</span> <span>Slovakia</span>
                                <span>Finland</span> <span>Italy</span>
                                <span>Australia</span> <span>Macedonia</span>
                                <span>Latvia</span> <span>Belgium</span>
                                <span>Turkey</span> <span>Denmark</span>
                                <span>UK</span> <span>Slovenia</span>
                                <span>Switzerland</span> <span>Poland</span>
                                <span>Austria</span> <span>Lithuania</span>
                                <span>Canada</span> <span>Bulgaria</span>
                                <span>Germany</span> <span>France</span>
                                <span>Netherlands</span> <span>Norway</span>
                                <span>Israel</span> <span>Sweden</span>
                                <span>Bahamas</span> <span>Iceland</span>
                                <span>Croatia</span>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/icons/pages/about-us/map.svg"
                                alt="World Map"
                                className="w-full max-w-3xl"
                            />
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
}
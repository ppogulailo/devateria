export const AboutUsSection = () => {
    return (
        <section
            id="banner-main"
            className="w-full bg-cover bg-no-repeat py-20 md:py-28"
            // style={{
            //     backgroundImage:
            //         "url('https://crystalogic.net/wp-content/themes/crystal-master/assets/img/main-banner-bg.svg')",
            // }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE – TEXT */}
                    <div className="order-2 md:order-1">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Deveteria
                            </h1>

                            <div className="description_block mt-4 space-y-3 text-sm leading-relaxed text-[--color-muted]">
                                <p>
                                    Develux is a company that helps work stably and develop the
                                    modern technical world by providing up-to-date IT services,
                                    increasing the efficiency and potential of projects.
                                </p>
                                {/*<p>*/}
                                {/*    Our team specialises in providing the customer with the most*/}
                                {/*    effective and high-quality services to distinguish the client’s*/}
                                {/*    business from competitors in market positions.*/}
                                {/*</p>*/}
                                <p>
                                    Develux was founded as a small startup. We grew sustainably by
                                    finding and retaining a strong in-house team and developing
                                    different digital solutions.
                                </p>
                            </div>

                            {/* Mobile button */}
                            <div className="block md:hidden text-center">
                                <a
                                    href="https://crystalogic.net/contact-us/"
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                                >
                                    Get a free quote
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE – IMAGE */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <img
                            className="w-full max-w-md md:max-w-lg"
                            src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/Team-work.svg"
                            alt="Team work"
                        />
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
    );
};

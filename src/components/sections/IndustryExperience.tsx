
export const IndustryExperienceSection = () => {
    return (
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
    )
}
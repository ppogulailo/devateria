"use client";

export const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-20 bg-[--color-bg] text-[--color-text]">
            <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT — TEXT BLOCK */}
                <div className="order-2 lg:order-1 space-y-6">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase relative mb-6 text-[var(--color-primary)]">
                        Why Choose Us?
                        <span className="absolute left-1/2 -translate-x-1/2 top-full text-5xl md:text-7xl opacity-5 font-bold">
              Why Choose Us?
            </span>
                    </h2>

                    {/* Subtitle */}
                    <h4 className="text-xl font-semibold">
                        It’s simple and efficient to work with Deveteria. In big part because:
                    </h4>

                    {/* Bullet Points */}
                    <ul className="space-y-4 text-[--color-muted] leading-relaxed">
                        <li className="flex gap-3">
                            <span className="text-[var(--color-primary)] mt-1">•</span>
                            <p>
                                <b className="text-black">We cooperate based on a clear agreement</b> — every project is reinforced and
                                protected by transparent terms established at the beginning of our partnership.
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <span className="text-[var(--color-primary)] mt-1">•</span>
                            <p>
                                <b className="text-black">We deliver everything on time</b> — no need to micromanage or worry about
                                deadlines. Your dedicated team ensures timely and reliable execution.
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <span className="text-[var(--color-primary)] mt-1">•</span>
                            <p>
                                <b className="text-black">We stay in touch 24/7</b> — your personal Team Lead keeps communication
                                transparent, clears up any questions, and relays details between you and the team efficiently.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* RIGHT — IMAGE */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <img
                        src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/Why-choose-us.svg"
                        alt="Why Choose Us Illustration"
                        className="max-w-full w-[420px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export const PrincipleOfCooperationSection = () => {
    return (
    <section className="principles bg-[var(--color-bg-alt)] text-[var(--color-header-text)] py-16 md:py-24 tex">
        <div className="container mx-auto max-w-6xl px-4">
        <div className="principles__title text-5xl font-semibold text-[--color-text]">
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
        {/*<img width={65} src="/icons/Principle_of_Cooperation/Reliability.svg" />*/}
        <div className="principles__item-title text-base font-semibold text-[--color-text]">
            Reliability
            </div>
            <p className="text-sm leading-relaxed text-[--color-muted]">
            Working with Deveteria, you minimise KPI business risks because we
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
            {/*<img width={65} src="/icons/Principle_of_Cooperation/Transparency.svg" />*/}

            <div className="principles__item-title text-base font-semibold text-[--color-text]">
            Transparency
            </div>
            <p className="text-sm leading-relaxed text-[--color-muted]">
            For you to fully understand all stages of cooperation with Deveteria,
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
        {/*    <img width={65} src="/icons/Principle_of_Cooperation/Experience.png" />*/}
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
            {/*<img width={65} src="/icons/Principle_of_Cooperation/Confidentiality.svg" />*/}

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
            {/*<img width={65} src="/icons/Principle_of_Cooperation/Individual_Approach.svg" />*/}
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
            {/*<img width={65} src="/icons/Principle_of_Cooperation/Communication.svg" />*/}
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
    )
};
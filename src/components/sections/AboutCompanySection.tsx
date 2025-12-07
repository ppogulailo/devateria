export const AboutCompanySection = () => {
    return (
<section className="about_company py-16 md:py-24 bg-[var(--color-bg-alt)] text-[var(--color-header-text)]">
    <div className="container mx-auto max-w-6xl px-4">
        <div className="wrapper flex flex-col gap-10 md:flex-row">
            <div className="col6 md:w-1/2">
                <div className="title_about text-5xl font-semibold text-[--color-text]">
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
)
};
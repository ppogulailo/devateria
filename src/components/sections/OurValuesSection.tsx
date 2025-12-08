export const OurValuesSection = () => {
    return (
<section className="our_values bg-[--color-bg] py-16 md:py-24">
    <div className="container mx-auto max-w-6xl px-4">
        <div className="wrapper">
            <div className="col12">
                <div className="text-4xl font-semibold text-[var(--color-primary)] uppercase ">
                    Our Values
                </div>

                <div className="block_values mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Professionalism */}
                    <div className="values_item flex flex-col gap-3 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6">
                        <div className="icon">
                            <img width={50} src="/icons/our_values/Professionalism.svg" />
                            {/*<svg*/}
                            {/*    width="60"*/}
                            {/*    height="60"*/}
                            {/*    viewBox="0 0 60 60"*/}
                            {/*    fill="none"*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*>*/}
                            {/*    <path*/}
                            {/*        d="M48.527 11H11.1953C11.1953 15.9491 13.1613 20.6954 16.6608 24.195C20.1604 27.6945 24.9067 29.6605 29.8558 29.6605C34.8049 29.6605 39.5513 27.6945 43.0508 24.195C46.5503 20.6954 48.5163 15.9491 48.5163 11H48.527Z"*/}
                            {/*        fill="#5B3FBB"*/}
                            {/*    />*/}
                            {/*    <path*/}
                            {/*        d="M29.8666 29.7803C24.9204 29.7803 20.1767 31.7451 16.6792 35.2427C13.1817 38.7402 11.2168 43.4839 11.2168 48.4301H48.5271C48.5271 45.9801 48.0444 43.5541 47.1065 41.2907C46.1686 39.0273 44.7939 36.9708 43.061 35.2389C41.328 33.507 39.2708 32.1335 37.0069 31.1968C34.743 30.2602 32.3167 29.7789 29.8666 29.7803Z"*/}
                            {/*        fill="#2D2424"*/}
                            {/*    />*/}
                            {/*</svg>*/}
                        </div>
                        <div className="name text-xl text-[var(--color-primary)] font-bold">
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
                            <img width={50} src="/icons/our_values/Continuous_Development.svg" />
                            {/*<svg*/}
                            {/*    width="60"*/}
                            {/*    height="60"*/}
                            {/*    viewBox="0 0 60 60"*/}
                            {/*    fill="none"*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*>*/}
                            {/*    <path*/}
                            {/*        d="M23.6657 36.6685V24.3343H36.3343V12H49V24.3343V36.6685V49H36.3343H23.6657H11V36.6685H23.6657Z"*/}
                            {/*        fill="#2D2424"*/}
                            {/*    />*/}
                            {/*    <path*/}
                            {/*        d="M36.3342 12H48.9998V24.3357H36.334L36.3342 12Z"*/}
                            {/*        fill="#5B3FBB"*/}
                            {/*    />*/}
                            {/*</svg>*/}
                        </div>
                        <div className="name text-xl text-[var(--color-primary)] font-bold">
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
                            <img width={50} src="/icons/our_values/Personal_Solution.svg" />
                            {/*<svg*/}
                            {/*    width="60"*/}
                            {/*    height="60"*/}
                            {/*    viewBox="0 0 60 60"*/}
                            {/*    fill="none"*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*>*/}
                            {/*    <path*/}
                            {/*        d="M28.9945 4C24.8168 3.99752 20.7059 5.04845 17.042 7.05561L19.3082 15.5095C22.6291 13.1369 26.708 12.0716 30.765 12.5173C34.8219 12.9629 38.5723 14.8882 41.299 17.9251C44.0258 20.9619 45.5375 24.8973 45.5453 28.9786C45.553 33.06 44.0561 37.001 41.3409 40.0482C38.6257 43.0953 34.8827 45.0348 30.8274 45.4958C26.7722 45.9568 22.6893 44.907 19.3594 42.547C16.0295 40.187 13.6863 36.6825 12.7777 32.7036C11.8691 28.7246 12.459 24.5504 14.4345 20.979L6.18944 18.7688C3.98174 23.6909 3.42536 29.195 4.6034 34.4594C5.78144 39.7237 8.63067 44.4658 12.7257 47.9775C16.8207 51.4892 21.9417 53.5821 27.3241 53.9437C32.7065 54.3054 38.0615 52.9163 42.5894 49.984C47.1174 47.0516 50.5754 42.7333 52.447 37.6739C54.3187 32.6144 54.5036 27.0853 52.9742 21.9121C51.4448 16.7389 48.283 12.1992 43.9611 8.97092C39.6392 5.74259 34.389 3.99881 28.9945 4Z"*/}
                            {/*        fill="#5B3FBB"*/}
                            {/*    />*/}
                            {/*    <path*/}
                            {/*        d="M19.934 15.8887C17.904 17.3453 16.2217 19.2333 15.0078 21.4172L21.9055 23.2651L19.934 15.8887Z"*/}
                            {/*        fill="#222222"*/}
                            {/*    />*/}
                            {/*    <path*/}
                            {/*        d="M29.7257 22.0352C28.2464 22.0348 26.796 22.4446 25.5356 23.2191L26.8791 28.238L22.2772 27.0025C21.6122 28.6007 21.4789 30.3704 21.8971 32.0501C22.3153 33.7298 23.2628 35.2305 24.5995 36.3302C25.9362 37.43 27.5912 38.0707 29.32 38.1574C31.0488 38.2442 32.7597 37.7726 34.1998 36.8121C35.64 35.8517 36.7329 34.4535 37.3172 32.8242C37.9015 31.1948 37.9461 29.4206 37.4445 27.7639C36.9429 26.1072 35.9217 24.6558 34.5317 23.6242C33.1417 22.5925 31.4567 22.0354 29.7257 22.0352Z"*/}
                            {/*        fill="#222222"*/}
                            {/*    />*/}
                            {/*</svg>*/}
                        </div>
                        <div className="name text-xl text-[var(--color-primary)] font-bold">
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
                            <img width={50} src="/icons/our_values/Open_Book_Model.png" />
                            {/*<svg*/}
                            {/*    width="60"*/}
                            {/*    height="60"*/}
                            {/*    viewBox="0 0 60 60"*/}
                            {/*    fill="none"*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*>*/}
                            {/*    <path*/}
                            {/*        d="M37.6795 11C37.6795 18.0756 34.8687 24.8614 29.8654 29.8649C24.8621 34.8684 18.0761 37.6796 11 37.6804V49C21.0785 48.9993 30.7439 44.9954 37.8702 37.8691C44.9965 30.7428 49 21.0777 49 11H37.6795Z"*/}
                            {/*        fill="#222222"*/}
                            {/*    />*/}
                            {/*    <path*/}
                            {/*        d="M30 11H11V30C13.4954 30 15.9662 29.5085 18.2716 28.5537C20.577 27.5988 22.6717 26.1992 24.436 24.4349C26.2004 22.6705 27.5999 20.5759 28.5545 18.2708C29.5092 15.9656 30.0004 13.495 30 11Z"*/}
                            {/*        fill="#5B3FBB"*/}
                            {/*    />*/}
                            {/*</svg>*/}
                        </div>
                        <div className="name text-xl text-[var(--color-primary)] font-bold">
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
)
};
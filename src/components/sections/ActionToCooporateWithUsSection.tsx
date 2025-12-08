import {ActionSection} from "@/components/Action/ActionSection";

export const ActionToCooperateWithUsSection = () => {
    return (
        <ActionSection
            title="Ready to develop a project?"
            btnLabel="Let’s Start"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"  // your purple
            textColor="text-white"
            icon={
                <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                    <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                    <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                    <circle cx="130" cy="50" r="36" fill="black" />
                </svg>
            }
        />
    );
};

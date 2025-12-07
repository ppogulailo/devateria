import Link from "next/link";
import {Button} from "@/components/ui/Button";
export const ActionToCooporateWithUsSection = () => {
    return (
<section className="action_block_blue bg-[var(--color-secondary)]">
    <div className="">
        <div className="wrapper">
            <div className="col12">
                <div className="flex_action flex flex-col items-center gap-6 bg-[var(--color-secondary)] px-6 py-10 md:flex-row md:justify-between md:px-10">

                    <div className="text text-center text-lg font-semibold text-[--color-text] md:text-left md:text-xl">
                        Benefit from Deveteria expertise for your business
                    </div>

                    <div className="hidden md:inline-flex">
                        <Link href="/contact-us">
                            <Button className="rounded-full px-6 py-2 text-sm font-semibold hover:bg-[--color-primary]">
                                Let’s Start
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}
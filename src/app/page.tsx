import Image from "next/image";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { ServicesSection } from "@/components/ServicesSection";
import Form from "next/form";
import ContactForm from "@/components/Form";
import {ContactSection} from "@/components/ContactSection";
import FullWidthSection from "@/components/FullWidthSection";
import Link from "next/link";
import React from "react";
import {IndustryExperienceSection} from "@/components/sections/IndustryExperience";
import {OurTechStackSection} from "@/components/sections/OurTechStack/OurTechStackSection";
import {AboutCompanySection} from "@/components/sections/AboutCompanySection";
import {OurValuesSection} from "@/components/sections/OurValuesSection";
import {PrincipleOfCooperationSection} from "@/components/sections/PrincipleOfCooperationSection";
import {ActionToCooporateWithUsSection} from "@/components/sections/ActionToCooporateWithUsSection";
import {WhatWeDoSection} from "@/components/sections/WhatWeDoSection";
import {AboutUsSection} from "@/components/sections/AboutUsSection";
import {IndustriesSection} from "@/components/sections/IndustriesSection";

export default function Home() {
    return (
        <main>
            <AboutUsSection/>
            <section className="mx-auto w-full max-w-6xl px-4">      </section>
                <WhatWeDoSection/>
                <IndustriesSection/>

                {/*<ServicesSection />*/}
                {/*<AboutCompanySection/>*/}
                {/* Our Values (using Tailwind + your color tokens) */}
                <OurValuesSection/>
                {/* Principles of Cooperation (copied + JSX-ified) */}
                <PrincipleOfCooperationSection/>
                {/* Action block blue (copied + JSX-ified) */}
                <ActionToCooporateWithUsSection/>
                {/*<IndustryExperienceSection/>*/}
                <OurTechStackSection/>

                {/*/!* Footer contact form (copied + JSX-ified) *!/*/}
                {/*<section className="footer_form bg-[--color-bg] py-16 md:py-24" id="id_footer_form">*/}
                {/*    <div className="container mx-auto max-w-4xl px-4">*/}
                {/*        <div className="wrapper text-center">*/}
                {/*            <div className="col12">*/}
                {/*                <div className="title_footer text-2xl font-semibold text-[--color-text]">*/}
                {/*                    Contact us to get an individual solution.*/}
                {/*                </div>*/}
                {/*                <div className="subtitle mt-2 text-sm text-[--color-muted]">*/}
                {/*                    Our experts are here to answer all your questions.*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
        </main>
    );
}

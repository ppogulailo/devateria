"use client";

import React from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card/Card";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { FAQ } from "@/components/FAQ";
import { PageSection } from "@/components/ui/PageSection";
import { ActionSection } from "@/components/Action/ActionSection";
import {uiuxContent} from "@/data";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";
import {CardBackground} from "@/components/ui/card/CardBackground";

export default function UIUXPage() {
  return (
      <div className="bg-[--color-bg] text-[--color-text]">

        {/* ================= HERO ================= */}
        <section className="mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
            <HeroSection {...uiuxContent.hero} />
        </section>

        {/* ================= INTRO ================= */}
        <section className="py-20 mx-auto w-full max-w-4xl text-center px-4">
          <SectionTitle>
            Crafting Digital Experiences Your Users Will Love
          </SectionTitle>

          <p className="text-lg text-[--color-muted] leading-relaxed">
            We build interfaces that look beautiful, feel intuitive, and function flawlessly — boosting usability and business results.
          </p>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="py-20 mx-auto w-full max-w-6xl px-4">
          <SectionTitle className='mb-14'>
            What Our UI/UX Design Helps You Achieve
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-10">
            {uiuxContent.benefits.map((b, i) => (
                <Card key={i}>
                    <img src={b.icon} className="h-12 w-12" alt={b.title} />
                  <h3 className="text-xl font-bold mb-4">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-black/70">{b.text}</p>
                </Card>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <BgSection>
            <SectionTitle className='mb-10'>
              Our Design Process
            </SectionTitle>

            <div className="grid md:grid-cols-4 gap-10">
              {uiuxContent.process.map((step) => (
                  <CardBackground key={step.number}>
                    <div className="text-3xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm  leading-relaxed">{step.text}</p>
                  </CardBackground>
              ))}
            </div>
        </BgSection>

        {/* ================= CTA ================= */}
        <ActionSection
            title="Ready to elevate your product with world-class UI/UX?"
            btnLabel="Let’s Talk"
            btnHref="/contact-us"
            bgColor="bg-[var(--color-primary)]"
            textColor="text-white"
        />

        {/* ================= WHY CHOOSE US ================= */}
        <PageSection>
            <section id="why-choose-us" className="py-20 bg-[--color-bg] text-[--color-text]">
                <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT — TEXT BLOCK */}
                    <div className="order-2 lg:order-1 space-y-6">
                        {/* Title */}
                        <SectionTitle align='left'>
                            Why Choose Us?
                            <span className="absolute left-1/2 -translate-x-1/2 top-full text-5xl md:text-7xl opacity-5 font-bold">
              Why Choose Us?
            </span>
                        </SectionTitle>

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
                            src="/icons/pages/ui-ux/Team spirit-bro.svg"
                            alt="Why Choose Us Illustration"
                            className="max-w-full object-contain"
                        />
                    </div>
                </div>
            </section>
        </PageSection>

        {/* ================= PRINCIPLES ================= */}
        <BgSection>
          <div className="grid md:grid-cols-2 gap-16 items-center mx-auto w-full max-w-6xl px-4 py-20">
            <div>
              <SectionTitle align='left'>UI/UX as the Foundation of Modern Products</SectionTitle>
              <p className="leading-relaxed text-black/70 mb-5">
                We design clear, intuitive, and accessible interfaces that support your users and your business.
              </p>

              <ul className="space-y-3 text-white/70">
                <li>✔ Simple, accessible navigation</li>
                <li>✔ Clear information structure</li>
                <li>✔ Beautiful & brand-aligned design</li>
              </ul>
            </div>

            <img
                src="/icons/pages/ui-ux/UI-UX differences-amico (1).svg"
                className="rounded-3xl w-full object-cover shadow-lg"
                alt="UI UX Principles"
            />
          </div>
        </BgSection>

        {/* ================= FAQ ================= */}
        <FAQ title="UI/UX Design — Frequently Asked Questions" items={uiuxContent.faq} />

      </div>
  );
}

"use client";

import React from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card/Card";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { FAQ } from "@/components/FAQ";
import { WhyChooseUs } from "@/components/sections/WhyShouldYouChooseUS";
import { PageSection } from "@/components/ui/PageSection";
import { ActionSection } from "@/components/Action/ActionSection";
import {uiuxContent} from "@/data";

export default function UIUXPage() {
  return (
      <div className="bg-[--color-bg] text-[--color-text]">

        {/* ================= HERO ================= */}
        <section className="mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-primary)] leading-tight">
                UI / UX Design <br /> Services
              </h1>

              <p className="text-lg text-[--color-muted]">
                We design intuitive and elegant experiences that make your product smooth and enjoyable to use.
              </p>

              <a href="/contact-us">
                <Button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:bg-[var(--color-secondary)] transition">
                  Start a Project
                </Button>
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                  src="/icons/pages/ui-ux/ui-ux.avif"
                  alt="UI UX design"
                  className="rounded-3xl w-full max-w-lg object-cover shadow-xl"
              />
            </div>

          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="py-20 mx-auto w-full max-w-4xl text-center px-4">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)] mb-6">
            Crafting Digital Experiences Your Users Will Love
          </h2>

          <p className="text-lg text-[--color-muted] leading-relaxed">
            We build interfaces that look beautiful, feel intuitive, and function flawlessly — boosting usability and business results.
          </p>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="py-20 mx-auto w-full max-w-6xl px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[var(--color-primary)]">
            What Our UI/UX Design Helps You Achieve
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {uiuxContent.benefits.map((b, i) => (
                <Card key={i}>
                  <h3 className="text-xl font-bold mb-4">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-black/70">{b.text}</p>
                </Card>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <BgSection>
          <section className="py-20 mx-auto w-full max-w-6xl px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
              Our Design Process
            </h2>

            <div className="grid md:grid-cols-4 gap-10">
              {uiuxContent.process.map((step) => (
                  <Card key={step.number}>
                    <div className="text-3xl text-[var(--color-primary)] font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 !text-black">{step.title}</h3>
                    <p className="text-sm !text-black/70 leading-relaxed">{step.text}</p>
                  </Card>
              ))}
            </div>
          </section>
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
          <WhyChooseUs />
        </PageSection>

        {/* ================= PRINCIPLES ================= */}
        <BgSection>
          <div className="grid md:grid-cols-2 gap-16 items-center mx-auto w-full max-w-6xl px-4 py-20">
            <div>
              <h2 className="text-5xl mb-5">UI/UX as the Foundation of Modern Products</h2>
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
                src="/icons/pages/ui-ux/ui-ux_principles.jpg"
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

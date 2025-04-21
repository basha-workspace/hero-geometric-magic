
"use client";

import { GlowingEffect } from "./glowing-effect";
import { Zap, Puzzle, TrendingUp, Target, Bot, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: <Bot className="h-7 w-7 text-primary" />,
    title: "AI-First Approach",
    desc: "We specialize in AI-powered agents, bots, and workflows that actually think — not just follow scripts.",
  },
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: "Speed Meets Precision",
    desc: "Launch automations in days with pixel-perfect execution and zero guesswork.",
  },
  {
    icon: <Puzzle className="h-7 w-7 text-primary" />,
    title: "Tailored Integrations",
    desc: "From CRMs to calendars, we seamlessly connect your favorite tools to one smart system.",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-primary" />,
    title: "Built to Scale",
    desc: "Our automations evolve with your growth — whether you’re a startup or scaling fast.",
  },
  {
    icon: <Target className="h-7 w-7 text-primary" />,
    title: "Results, Not Just Tech",
    desc: "We focus on outcomes — more leads, better workflows, and smarter support — not just code.",
  },
  {
    icon: <Wrench className="h-7 w-7 text-primary" />,
    title: "End-to-End Support",
    desc: "From strategy to setup to scale — we don’t just build automations, we stand by you every step of the journey.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#111118] py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(120deg, #191926 0%, #111118 100%)"
      }} />
      {/* Subtle texture or pattern overlay using provided screenshot */}
      <img 
        src="/lovable-uploads/ff3f8f7c-d0d0-44a2-90d5-a5d9137396da.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none mix-blend-lighten"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why Choose Us
        </h2>
        <ul className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <li key={i} className="relative group">
              <div className="relative h-full rounded-2xl border border-border bg-[#191926]/80 shadow-md p-8 transition hover:scale-[1.03] hover:shadow-xl hover:border-primary duration-200">
                {/* Glowing border effect */}
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={96}
                  inactiveZone={0.05}
                  borderWidth={2}
                  className="z-0"
                />
                <div className="relative z-10 flex flex-col items-start gap-4">
                  <span className="inline-flex items-center justify-center rounded-full p-3 ring-1 ring-primary/20 bg-primary/10 mb-2">
                    {reason.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                  <p className="text-base text-muted-foreground">{reason.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

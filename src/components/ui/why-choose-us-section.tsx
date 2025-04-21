
"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Hammer,
  Box,
  Search,
  Lock,
  Settings,
} from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="h-5 w-5" color="#FFFFFF" />,
    title: "🤖 AI-First Approach",
    description:
      "We specialize in AI-powered agents, bots, and workflows that actually think — not just follow scripts.",
  },
  {
    icon: <Search className="h-5 w-5" color="#FFFFFF" />,
    title: "⚡ Speed Meets Precision",
    description:
      "Launch automations in days with pixel-perfect execution and zero guesswork.",
  },
  {
    icon: <Box className="h-5 w-5" color="#FFFFFF" />,
    title: "🧩 Tailored Integrations",
    description:
      "From CRMs to calendars, we seamlessly connect your favorite tools to one smart system.",
  },
  {
    icon: <Settings className="h-5 w-5" color="#FFFFFF" />,
    title: "📈 Built to Scale",
    description:
      "Our automations evolve with your growth — whether you're a startup or scaling fast.",
  },
  {
    icon: <Lock className="h-5 w-5" color="#FFFFFF" />,
    title: "🎯 Results, Not Just Tech",
    description:
      "We focus on outcomes — more leads, better workflows, and smarter support — not just code.",
  },
  {
    icon: <Hammer className="h-5 w-5" color="#FFFFFF" />,
    title: "🛠️ End-to-End Support",
    description:
      "From strategy to setup to scale — we don't just build automations, we stand by you every step of the journey.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]">
          Why Choose Us
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <li key={reason.title} className="relative min-h-[14rem] list-none">
              <div className="relative h-full rounded-2xl border border-white/30 bg-black p-2">
                <GlowingEffect
                  spread={48}          // increased spread for stronger glow
                  glow={true}
                  disabled={false}
                  proximity={48}
                  inactiveZone={0.03}
                  borderWidth={3}       // increased border width for more visible glow
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/30 bg-black p-7 shadow-lg">
                  <div className="relative flex flex-1 flex-col justify-between gap-4">
                    <div className="w-fit rounded-lg border border-white/30 bg-white/5 p-3 flex items-center justify-center">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-sans tracking-tight text-white mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-base text-gray-300 font-sans">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

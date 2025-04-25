
"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
    icon: <Sparkles className="h-6 w-6 text-white drop-shadow-lg" color="#FFD700" />, // gold-like
    title: "🤖 AI-First Approach",
    description:
      "We specialize in AI-powered agents, bots, and workflows that actually think — not just follow scripts.",
  },
  {
    icon: <Search className="h-6 w-6 text-white drop-shadow-lg" color="#44d6ff" />, // cyan
    title: "⚡ Speed Meets Precision",
    description:
      "Launch automations in days with pixel-perfect execution and zero guesswork.",
  },
  {
    icon: <Box className="h-6 w-6 text-white drop-shadow-lg" color="#d877ff" />, // purple
    title: "🧩 Tailored Integrations",
    description:
      "From CRMs to calendars, we seamlessly connect your favorite tools to one smart system.",
  },
  {
    icon: <Settings className="h-6 w-6 text-white drop-shadow-lg" color="#5a922c" />, // green
    title: "📈 Built to Scale",
    description:
      "Our automations evolve with your growth — whether you're a startup or scaling fast.",
  },
  {
    icon: <Lock className="h-6 w-6 text-white drop-shadow-lg" color="#fff" />, // white
    title: "🎯 Results, Not Just Tech",
    description:
      "We focus on outcomes — more leads, better workflows, and smarter support — not just code.",
  },
  {
    icon: <Hammer className="h-6 w-6 text-white drop-shadow-lg" color="#d79f1e" />, // orange/gold
    title: "🛠️ End-to-End Support",
    description:
      "From strategy to setup to scale — we don't just build automations, we stand by you every step of the journey.",
  },
];

export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100 
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]"
        >
          Why Choose Us
        </motion.h2>
        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.li
              key={reason.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="relative min-h-[14rem] list-none"
            >
              <div className="group relative h-full rounded-2xl border border-white/40 bg-black p-2 shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_10px_rgba(110,63,255,0.3)]">
                <GlowingEffect
                  spread={96}
                  glow={true}
                  disabled={false}
                  borderWidth={4}
                  proximity={200}
                  inactiveZone={0}
                  hoverGlow={true}
                  className="transition-all duration-500 group-hover:opacity-100"
                />
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                  className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/40 bg-[#070711] p-7 shadow-lg transition-all duration-300"
                >
                  <div className="relative flex flex-1 flex-col justify-between gap-4">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 8
                        }
                      }}
                      className="w-fit rounded-lg border border-white/30 bg-gradient-to-tr from-[#221136] via-[#222a3a] to-[#1b192c] p-3 flex items-center justify-center shadow-md transition-all duration-300"
                    >
                      {reason.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold font-sans tracking-tight text-white mb-2 drop-shadow-lg">
                        {reason.title}
                      </h3>
                      <p className="text-base text-gray-300 font-sans">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

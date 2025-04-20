
"use client";

import React from 'react';
import { TextShimmer } from './text-shimmer';
import { cn } from "@/lib/utils";
import { FeaturesSectionWithHoverEffects } from './features-section';

const servicesList = [
  {
    title: "AI Chatbots",
    description: "Smart, conversational bots for websites, WhatsApp, and social platforms—available 24/7 to handle support, FAQs, and sales queries."
  },
  {
    title: "AI Voice Callbots",
    description: "Human-like voice agents that make or receive calls, qualify leads, follow up, and even book appointments automatically."
  },
  {
    title: "Custom AI Agents",
    description: "Autonomous agents trained on your business logic, SOPs, or knowledge base—they handle repetitive tasks across platforms."
  },
  {
    title: "AI Workflows Automation",
    description: "End-to-end automation of daily operations like lead routing, email follow-ups, CRM updates, and more."
  },
  {
    title: "CRM & Tool Integrations",
    description: "Seamless AI-powered connections with tools like HubSpot, Zoho, Slack, Notion, ClickUp, etc., for a smooth tech ecosystem."
  },
  {
    title: "Lead Generation & Outreach Automation",
    description: "Bots that scrape, enrich, and reach out to leads with personalized emails or messages—all on autopilot."
  },
  {
    title: "Document & Data AI",
    description: "Automated summarization, extraction, and response generation from long documents, reports, or PDFs."
  },
  {
    title: "Appointment & Calendar AI",
    description: "AI schedulers that handle booking, rescheduling, reminders, and follow-ups without human intervention."
  }
];

export function ServicesSection() {
  return (
    <div className="min-h-screen w-full bg-[#030303] relative py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <TextShimmer 
              className="block [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.white/80)]"
              duration={3}
            >
              AI Services That Run Your Business Smarter
            </TextShimmer>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            Scale faster. Work less. Our AI-driven systems automate everything from lead gen to customer service—so you can focus on growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {servicesList.map((service, index) => (
            <div 
              key={service.title}
              className={cn(
                "p-6 rounded-lg bg-white/[0.03] border border-white/[0.08]",
                "hover:bg-white/[0.05] transition-colors duration-300"
              )}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
          Our Main AI Automation Services
        </h3>
        
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}


"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const faqItems = [
  {
    id: "faq-1",
    question: "How long does it take to deliver a project?",
    answer: "Most automation setups or AI agents go live within 3–7 days, depending on complexity. For larger systems, we'll share a custom timeline.",
  },
  {
    id: "faq-2",
    question: "What's your pricing model?",
    answer: "We offer fixed packages for common services and custom quotes for advanced workflows. No hidden costs—ever.",
  },
  {
    id: "faq-3",
    question: "What tools and platforms do you integrate with?",
    answer: "We work with tools like n8n, WhatsApp, Slack, Google Sheets, Make.com, Zapier, and more — building a seamless ecosystem around your operations.",
  },
  {
    id: "faq-4",
    question: "Can I request changes after delivery?",
    answer: "Absolutely! We include 2 free rounds of revisions to ensure everything runs exactly how you want.",
  },
  {
    id: "faq-5",
    question: "Do you offer support after the project?",
    answer: "Yes, you get 14–30 days of post-launch support depending on your package. Extended support plans are also available.",
  },
  {
    id: "faq-6",
    question: "Who owns the automations and agents once delivered?",
    answer: "You have 100% ownership and full access to everything we build for you.",
  },
  {
    id: "faq-7",
    question: "Is my data and business info secure?",
    answer: "Yes, we sign NDAs upon request and ensure data confidentiality and privacy throughout the process.",
  },
  {
    id: "faq-8",
    question: "Can you customize AI agents to my specific business workflows?",
    answer: "Yes! All our AI solutions are custom-built to match your business logic, SOPs, and tools.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full bg-black relative py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]">
            Frequently Asked Questions About AI Automation
          </h2>
          <p className="text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
            Find quick answers to common questions about our AI automation services and solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 70,
            damping: 20
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-6 md:p-8 relative z-10"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <AccordionItem
                  value={item.id}
                  className="border-white/10"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <AccordionTrigger className="text-white hover:text-white/80 text-left text-sm md:text-base py-4" itemProp="name">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-sm md:text-base" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            Still have questions about our AI automation solutions? We're here to help!
          </p>
          <Button 
            onClick={() => window.open("mailto:support@automatea2z.com", "_blank")}
            className="group mx-auto"
            variant="secondary"
          >
            <Mail 
              className="-ms-1 me-2 opacity-60" 
              size={16} 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            Contact Support
            <ArrowRight
              className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

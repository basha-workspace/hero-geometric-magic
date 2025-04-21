import { cn } from "@/lib/utils";
import {
  BookOpenCheck,
  Bot,
  Calendar,
  FileText,
  MessageSquare,
  Phone,
  Puzzle,
  Workflow
} from "lucide-react";
import { GradientText } from "./gradient-text";

export function ServicesSection() {
  const services = [
    {
      title: "AI Chatbots",
      description: "Smart, conversational bots for websites, WhatsApp, and social platforms—available 24/7 to handle support, FAQs, and sales queries.",
      icon: <MessageSquare className="h-6 w-6 text-white/80" />,
    },
    {
      title: "AI Voice Callbots",
      description: "Human-like voice agents that make or receive calls, qualify leads, follow up, and even book appointments automatically.",
      icon: <Phone className="h-6 w-6 text-white/80" />,
    },
    {
      title: "Custom AI Agents",
      description: "Autonomous agents trained on your business logic, SOPs, or knowledge base—they handle repetitive tasks across platforms.",
      icon: <Bot className="h-6 w-6 text-white/80" />,
    },
    {
      title: "AI Workflows Automation",
      description: "End-to-end automation of daily operations like lead routing, email follow-ups, CRM updates, and more.",
      icon: <Workflow className="h-6 w-6 text-white/80" />,
    },
    {
      title: "CRM & Tool Integrations",
      description: "Seamless AI-powered connections with tools like HubSpot, Zoho, Slack, Notion, ClickUp, etc., for a smooth tech ecosystem.",
      icon: <Puzzle className="h-6 w-6 text-white/80" />,
    },
    {
      title: "Lead Generation & Outreach",
      description: "Bots that scrape, enrich, and reach out to leads with personalized emails or messages—all on autopilot.",
      icon: <BookOpenCheck className="h-6 w-6 text-white/80" />,
    },
    {
      title: "Document & Data AI",
      description: "Automated summarization, extraction, and response generation from long documents, reports, or PDFs.",
      icon: <FileText className="h-6 w-6 text-white/80" />,
    },
    {
      title: "Appointment & Calendar AI",
      description: "AI schedulers that handle booking, rescheduling, reminders, and follow-ups without human intervention.",
      icon: <Calendar className="h-6 w-6 text-white/80" />,
    },
  ];

  return (
    <div className="w-full bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <GradientText
            className="text-white"
            style={{
              "--color-1": "217 91% 60%",
              "--color-2": "271 91% 65%",
              "--color-3": "244 63% 50%",
              "--color-4": "199 89% 48%"
            } as React.CSSProperties}
          >
            Our AI Automation Services
          </GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Feature key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white/80">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default ServicesSection;

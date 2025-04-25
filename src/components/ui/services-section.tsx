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
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="w-full bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]"
        >
          Our AI Automation Services
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto"
        >
          {services.map((service) => (
            <Feature key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, rotate: -10 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      className="flex flex-col lg:border-r py-10 relative group/feature border-white/10"
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-500 absolute inset-0 h-full w-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      <motion.div 
        variants={iconVariants}
        whileHover="hover"
        className="mb-4 relative z-10 px-10 text-white/80"
      >
        {icon}
      </motion.div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-blue-500 transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};

export default ServicesSection;

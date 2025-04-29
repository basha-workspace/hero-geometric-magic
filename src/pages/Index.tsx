
import { HeroGeometric } from "@/components/ui/hero-geometric";
import { ServicesSection } from "@/components/ui/services-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { Timeline } from "@/components/ui/timeline";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { FaqSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import NavigationBar from "@/components/ui/navigation-bar";
import { Helmet } from "react-helmet";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AutomateA2Z",
  "url": "https://automatea2z.com",
  "logo": "https://automatea2z.com/logo.png",
  "description": "Custom AI workflows, chatbots & voice bots that eliminate busywork—so you can focus on growth.",
  "sameAs": [
    "https://twitter.com/automatea2z",
    "https://linkedin.com/company/automatea2z",
    "https://facebook.com/automatea2z"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-123-4567",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "offers": {
    "@type": "Offer",
    "name": "AI Automation Services",
    "description": "Custom AI workflows, chatbots & voice bots for businesses"
  }
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to deliver a project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most automation setups or AI agents go live within 3–7 days, depending on complexity. For larger systems, we'll share a custom timeline."
      }
    },
    {
      "@type": "Question",
      "name": "What's your pricing model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer fixed packages for common services and custom quotes for advanced workflows. No hidden costs—ever."
      }
    },
    {
      "@type": "Question",
      "name": "What tools and platforms do you integrate with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with tools like n8n, WhatsApp, Slack, Google Sheets, Make.com, Zapier, and more — building a seamless ecosystem around your operations."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the automations and agents once delivered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You have 100% ownership and full access to everything we build for you."
      }
    }
  ]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation Services | Custom AI Solutions for Businesses | AutomateA2Z</title>
        <meta name="description" content="Transform your business operations with AutomateA2Z's custom AI automation services. Our AI chatbots, voice bots & workflow automation deliver 24/7 efficiency." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      <NavigationBar />
      <main>
        <div id="home">
          <HeroGeometric />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <Timeline />
        <div id="why-us">
          <WhyChooseUsSection />
        </div>
        <div id="contact">
          <ContactFormSection />
        </div>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;


import { HeroGeometric } from "@/components/ui/hero-geometric";
import { ServicesSection } from "@/components/ui/services-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { Timeline } from "@/components/ui/timeline";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { FaqSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import { NavBar } from "@/components/ui/modern-navbar";
import { Home, User, Briefcase, FileText } from "lucide-react";

const Index = () => {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Services", url: "#services", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: FileText },
  ];

  return (
    <>
      <NavBar items={navItems} />
      <main className="pt-16">
        <HeroGeometric />
        <ServicesSection />
        <Timeline />
        <WhyChooseUsSection />
        <ContactFormSection />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;


import { HeroGeometric } from "@/components/ui/hero-geometric";
import { ServicesSection } from "@/components/ui/services-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { Timeline } from "@/components/ui/timeline";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { FaqSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import { NavHeader } from "@/components/ui/nav-header";

const Index = () => {
  return (
    <>
      <NavHeader />
      <HeroGeometric />
      <ServicesSection />
      <Timeline />
      <WhyChooseUsSection />
      <ContactFormSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Index;

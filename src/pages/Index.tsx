
import { HeroGeometric } from "@/components/ui/hero-geometric";
import { ServicesSection } from "@/components/ui/services-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { Timeline } from "@/components/ui/timeline";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { FaqSection } from "@/components/ui/faq-section";

const Index = () => {
  return (
    <>
      <HeroGeometric />
      <ServicesSection />
      <Timeline />
      <WhyChooseUsSection />
      <ContactFormSection />
      <FaqSection />
    </>
  );
};

export default Index;

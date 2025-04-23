
import { HeroGeometric } from "@/components/ui/hero-geometric";
import { ServicesSection } from "@/components/ui/services-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { Timeline } from "@/components/ui/timeline";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { FaqSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import NavigationBar from "@/components/ui/navigation-bar";

const Index = () => {
  return (
    <>
      <NavigationBar />
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
      <Footer />
    </>
  );
};

export default Index;

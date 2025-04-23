
import { HeroGeometric } from "@/components/ui/hero-geometric";
import { ServicesSection } from "@/components/ui/services-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { Timeline } from "@/components/ui/timeline";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { FaqSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import { NavigationBar } from "@/components/ui/navigation-bar";

const Index = () => {
  return (
    <>
      <NavigationBar />
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

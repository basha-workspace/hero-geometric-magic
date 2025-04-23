"use client";

import { TextEffect } from "@/components/ui/text-effect";
import { GradientButton } from "@/components/ui/gradient-button";

export function HeroGeometric() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-black text-white md:h-screen">
      <div className="relative z-10 flex h-full items-center justify-center px-6 py-12 md:px-8">
        <div className="container relative mx-auto flex flex-col items-center justify-center gap-8 overflow-visible md:gap-12 lg:flex-row">
          <div className="relative flex flex-col items-center gap-4 md:gap-6 lg:items-start">
            <h1 className="font-cal text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl lg:text-6xl">
              <TextEffect trigger={true} preset="slide">
                AI Automation
              </TextEffect>
              <TextEffect trigger={true} preset="slide">
                For Your Business
              </TextEffect>
            </h1>
            <p className="max-w-[50rem] leading-normal text-gray-300 sm:text-lg md:text-left">
              We build custom AI agents and automation workflows that streamline your
              operations, boost productivity, and drive growth.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <GradientButton onClick={scrollToContact} className="w-full sm:w-auto">
                Get Started
              </GradientButton>
              {/* <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book a Call
              </Button> */}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -left-1/2 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#44d6ff] to-[#d877ff] blur-3xl" />
            <div className="absolute -right-1/2 bottom-1/2 h-[350px] w-[350px] translate-y-1/2 rounded-full bg-gradient-to-r from-[#d877ff] to-[#44d6ff] blur-3xl" />
            <video
              src="/ai-automation.mp4"
              autoPlay
              loop
              muted
              className="relative z-10 rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

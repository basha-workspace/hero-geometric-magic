
"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Rocket, Zap, TrendingUp } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const data: TimelineEntry[] = [
    {
      title: "Automate",
      content: "We identify repetitive, time-consuming tasks and build AI-powered systems to handle them effortlessly.",
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Accelerate",
      content: "With automation in place, your workflows become faster, smarter, and infinitely scalable.",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Amplify",
      content: "You achieve more — more leads, more output, more growth — without adding overhead or complexity.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    },
  ];

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-8 text-center bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]">
          ⚙️ How It Works – The AAA Principle
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-black flex items-center justify-center border border-white/20">
                {item.icon}
              </div>
              <h3 className="hidden md:block text-xl md:pl-24 text-3xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-xl mb-8">
                {item.content}
              </p>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

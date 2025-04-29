
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar, Send } from "lucide-react";
import { BackgroundPaths } from "./background-paths";
import { GlowEffect } from "./glow-effect";
import { GradientButton } from "./gradient-button";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  businessType: z.string().min(2, { message: "Business type is required" }),
  requirement: z.string().min(2, { message: "Please provide brief requirements" }),
});

// Webhook URL for form submissions
const WEBHOOK_URL = "https://hook.eu2.make.com/m6p4yvcp5lqhtawb3j1fjegont0eqf45";

export function ContactFormSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      requirement: "",
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Form submitted:", values);
      
      // Send data to webhook
      const webhookResponse = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          timestamp: new Date().toISOString(),
          source: window.location.href
        }),
      });
      
      if (!webhookResponse.ok) {
        console.error("Webhook error:", webhookResponse.statusText);
        throw new Error("Failed to submit form data");
      }
      
      toast.success("Thanks for reaching out! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full bg-black relative py-12 md:py-20">
      <BackgroundPaths />
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="mx-auto max-w-2xl px-4 md:px-6 relative z-10"
        animate={{
          y: [0, -7, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }
        }}
      >
        <motion.div variants={itemVariants} className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]">
            🚀 Let's Build Your AI-Powered Future
          </h2>
          <p className="text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
            Ready to automate, scale, and grow? Tell us a bit about your business and we'll reach out with a custom solution — or book a free 15‑min strategy call with our team.
          </p>
        </motion.div>

        <Form {...form}>
          <motion.form 
            variants={itemVariants}
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-4 md:space-y-6"
          >
            <div className="relative">
              <GlowEffect
                colors={['#44d6ff', '#d877ff', '#44d6ff', '#d877ff']}
                mode="flowHorizontal"
                blur="medium"
                duration={8}
              />
              <motion.div 
                variants={itemVariants}
                className="space-y-4 md:space-y-6 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-6 md:p-8 relative z-10"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg required">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-black/50 text-white border-white/20 h-10 md:h-12 text-base md:text-lg transition-colors hover:border-white/40 focus:border-[#44d6ff]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg required">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-black/50 text-white border-white/20 h-10 md:h-12 text-base md:text-lg transition-colors hover:border-white/40 focus:border-[#44d6ff]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg required">Business Type</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-black/50 text-white border-white/20 h-10 md:h-12 text-base md:text-lg transition-colors hover:border-white/40 focus:border-[#44d6ff]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requirement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-base md:text-lg required">Brief Requirement</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-black/50 text-white border-white/20 min-h-[80px] md:min-h-[100px] text-base md:text-lg transition-colors hover:border-white/40 focus:border-[#44d6ff]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                >
                  <GradientButton type="submit" className="flex-1 gap-2">
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Submit Details
                  </GradientButton>
                  <GradientButton
                    type="button"
                    variant="variant"
                    onClick={() => window.open("https://calendly.com/lalbashaautomates/30min", "_blank")}
                    className="flex-1 gap-2"
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    Schedule a Call
                  </GradientButton>
                </motion.div>
              </motion.div>
            </div>
          </motion.form>
        </Form>
      </motion.div>
    </section>
  );
}

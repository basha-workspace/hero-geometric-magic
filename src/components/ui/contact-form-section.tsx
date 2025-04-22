
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  businessType: z.string().min(2, { message: "Business type is required" }),
  requirement: z.string().optional(),
});

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Form submitted:", values);
      toast.success("Thanks for reaching out! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full bg-black relative py-12 md:py-20">
      <BackgroundPaths />
      <div className="mx-auto max-w-2xl px-4 md:px-6 relative z-10">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]">
            🚀 Let's Build Your AI-Powered Future
          </h2>
          <p className="text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
            Ready to automate, scale, and grow? Tell us a bit about your business and we'll reach out with a custom solution — or book a free 15‑min strategy call with our team.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="relative">
              <GlowEffect
                colors={['#44d6ff', '#d877ff', '#44d6ff', '#d877ff']}
                mode="flowHorizontal"
                blur="medium"
                duration={8}
              />
              <div className="space-y-4 md:space-y-6 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-6 md:p-8 relative z-10">
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
                      <FormLabel className="text-white text-base md:text-lg">Brief Requirement (optional)</FormLabel>
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
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                  <GradientButton type="submit" className="flex-1 gap-2">
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Submit Details
                  </GradientButton>
                  <GradientButton
                    type="button"
                    variant="variant"
                    onClick={() => window.open("YOUR_CALENDLY_LINK", "_blank")}
                    className="flex-1 gap-2"
                  >
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    Schedule a Call
                  </GradientButton>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}


"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar, Send } from "lucide-react";

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
      // Here you would integrate with Make.com or your email service
      console.log("Form submitted:", values);
      toast.success("Thanks for reaching out! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-tr from-[#d877ff] via-[#44d6ff] to-[#ffffff] bg-clip-text text-transparent animate-[rainbow_8s_linear_infinite]">
            🚀 Let's Build Your AI-Powered Future
          </h2>
          <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
            Ready to automate, scale, and grow? Tell us a bit about your business and we'll reach out with a custom solution — or book a free 15‑min strategy call with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} className="bg-[#121213] text-white border-white/20" />
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
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} className="bg-[#121213] text-white border-white/20" />
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
                    <FormLabel className="text-white">Business Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., E-commerce, SaaS, Agency" {...field} className="bg-[#121213] text-white border-white/20" />
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
                    <FormLabel className="text-white">Brief Requirement (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your automation needs..."
                        {...field}
                        className="bg-[#121213] text-white border-white/20 min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="flex-1 gap-2">
                  <Send className="w-4 h-4" />
                  Submit Details
                </Button>
                <RainbowButton
                  type="button"
                  onClick={() => window.open("YOUR_CALENDLY_LINK", "_blank")}
                  className="flex-1 gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Strategy Call
                </RainbowButton>
              </div>
            </form>
          </Form>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d877ff]/20 via-[#44d6ff]/20 to-transparent rounded-2xl" />
            <div className="relative space-y-4 bg-[#121213] p-6 rounded-2xl border border-white/20">
              <h3 className="text-xl font-semibold text-white">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#44d6ff]">•</span>
                  <span>Cutting-edge AI solutions tailored to your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d877ff]">•</span>
                  <span>Proven track record of successful automations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffffff]">•</span>
                  <span>Expert team with deep industry knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#44d6ff]">•</span>
                  <span>Customized strategies for your growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

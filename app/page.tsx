import type { Metadata } from "next";
import Hero from "@/components/visanova/home/Hero";
import ServicesOverview from "@/components/visanova/home/ServicesOverview";
import WhyChooseUs from "@/components/visanova/home/WhyChooseUs";
import VisaProcess from "@/components/visanova/home/VisaProcess";
import StatsSection from "@/components/visanova/home/StatsSection";
import HomeTestimonials from "@/components/visanova/home/HomeTestimonials";
import FAQ from "@/components/visanova/home/FAQ";
import CTABanner from "@/components/visanova/home/CTABanner";

export const metadata: Metadata = {
  title: "Visanova Ltd — UK Visa & Immigration Consultants | Oldbury",
  description:
    "Expert UK visa and immigration consultants based in Oldbury, West Midlands. Specialist in UK Visit Visas, Student Visas, Europe Schengen Visas, and Immigration Advice. Free consultation available.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <VisaProcess />
      <HomeTestimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}

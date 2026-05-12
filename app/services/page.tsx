import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane, GraduationCap, Globe, FileText, Briefcase, MapPin, ClipboardList,
  CheckCircle, ArrowRight, Phone,
} from "lucide-react";
import CTABanner from "@/components/visanova/home/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Visanova Ltd offers UK Visit Visas, Student Visas, Europe Schengen Visas, Business Visas, Tourist Visas, Immigration Consultation, and Documentation Assistance.",
};

const services = [
  {
    id: "uk-visit-visa",
    icon: <Plane className="w-8 h-8" />,
    title: "UK Visit Visa",
    tagline: "Visit the UK for tourism, family or business",
    description:
      "The UK Standard Visitor Visa allows you to visit the UK for up to 6 months for tourism, visiting family and friends, attending business meetings or short-term training. Our team ensures your application is complete, compelling, and submitted correctly.",
    benefits: [
      "Professional application review",
      "Personalised document checklist",
      "Cover letter preparation",
      "Bank statement guidance",
      "Previous refusal assistance",
      "Priority service available",
    ],
    process: [
      "Free eligibility assessment",
      "Document collection & review",
      "Application form completion",
      "Supporting letter drafting",
      "Online submission",
      "Post-submission tracking",
    ],
    color: "from-blue-500/20 to-blue-600/5",
    accent: "bg-blue-500/10 text-blue-600",
    border: "border-blue-100",
  },
  {
    id: "student-visa",
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Student Visa (UK)",
    tagline: "Study in the UK with full visa support",
    description:
      "The UK Student Visa (previously Tier 4) allows international students to study at a licensed UK institution. We assist with the full application process, from CAS letter guidance and financial evidence to biometrics and immigration history.",
    benefits: [
      "CAS reference guidance",
      "Financial sponsorship review",
      "ATAS certificate assistance",
      "English language requirement advice",
      "Dependant visa applications",
      "Course change support",
    ],
    process: [
      "University admission guidance",
      "CAS collection",
      "Financial evidence review",
      "Application preparation",
      "Biometric appointment booking",
      "Ongoing student support",
    ],
    color: "from-purple-500/20 to-purple-600/5",
    accent: "bg-purple-500/10 text-purple-600",
    border: "border-purple-100",
  },
  {
    id: "europe-visa",
    icon: <Globe className="w-8 h-8" />,
    title: "Europe Schengen Visa",
    tagline: "Travel freely across 27 European countries",
    description:
      "A Schengen Visa allows you to travel across 27 European countries with a single visa. Whether for tourism, business or visiting family, we prepare a complete Schengen application with all required documentation and supporting evidence.",
    benefits: [
      "Single and multi-entry options",
      "Full documentation support",
      "Embassy-specific requirements",
      "Travel insurance guidance",
      "Hotel and itinerary assistance",
      "Application resubmission",
    ],
    process: [
      "Destination country selection",
      "Consulate appointment booking",
      "Document preparation",
      "Application submission",
      "Interview preparation (if required)",
      "Passport collection",
    ],
    color: "from-green-500/20 to-green-600/5",
    accent: "bg-green-500/10 text-green-600",
    border: "border-green-100",
  },
  {
    id: "immigration-consultation",
    icon: <FileText className="w-8 h-8" />,
    title: "Immigration Consultation",
    tagline: "Expert advice on UK immigration routes",
    description:
      "Whether you're looking to settle in the UK, apply for Indefinite Leave to Remain (ILR), British citizenship, or navigate a complex immigration situation, our expert consultants provide tailored, in-depth advice to help you understand your options.",
    benefits: [
      "ILR applications",
      "British citizenship guidance",
      "Spouse & partner visas",
      "Family reunion applications",
      "Appeals & reconsiderations",
      "Complex case review",
    ],
    process: [
      "Case assessment & review",
      "Immigration history analysis",
      "Route identification",
      "Application strategy",
      "Document preparation",
      "Submission & follow-up",
    ],
    color: "from-[#C9A027]/20 to-[#C9A027]/5",
    accent: "bg-[#C9A027]/10 text-[#C9A027]",
    border: "border-[#C9A027]/20",
  },
  {
    id: "tourist-visa",
    icon: <MapPin className="w-8 h-8" />,
    title: "Tourist Visa",
    tagline: "Explore the world with a seamlessly prepared application",
    description:
      "Planning international travel? We help prepare tourist visa applications for a wide range of destinations, ensuring your documentation is accurate, complete, and presented in the most favourable way for approval.",
    benefits: [
      "Multi-destination applications",
      "Travel history optimisation",
      "Sponsor letter preparation",
      "Financial documentation",
      "Itinerary planning support",
      "Visa interview coaching",
    ],
    process: [
      "Destination visa assessment",
      "Requirements checklist",
      "Document preparation",
      "Application completion",
      "Submission",
      "Decision follow-up",
    ],
    color: "from-red-500/20 to-red-600/5",
    accent: "bg-red-500/10 text-red-600",
    border: "border-red-100",
  },
  {
    id: "business-visa",
    icon: <Briefcase className="w-8 h-8" />,
    title: "Business Visa",
    tagline: "Attend meetings, events and conferences with ease",
    description:
      "Need to travel to the UK or Europe for business? We handle business visitor visa applications including invitation letter guidance, company documentation, and proof of business activities to maximise your approval chances.",
    benefits: [
      "Business invitation letter review",
      "Company documentation support",
      "Multiple entry applications",
      "Fast-track processing guidance",
      "Conference & trade event visas",
      "Corporate client packages",
    ],
    process: [
      "Business purpose assessment",
      "Documentation checklist",
      "Application preparation",
      "Employer letter guidance",
      "Application submission",
      "Post-decision support",
    ],
    color: "from-orange-500/20 to-orange-600/5",
    accent: "bg-orange-500/10 text-orange-600",
    border: "border-orange-100",
  },
  {
    id: "documentation-assistance",
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Documentation Assistance",
    tagline: "The right documents make all the difference",
    description:
      "Incomplete or incorrect documentation is the number one reason for visa refusals. Our documentation assistance service ensures every document is accurate, translated (where required), and presented exactly as visa authorities expect.",
    benefits: [
      "Document checklist preparation",
      "Bank statement review",
      "Notarisation guidance",
      "Translation coordination",
      "Cover letter writing",
      "Pre-submission document audit",
    ],
    process: [
      "Document gap analysis",
      "Collection assistance",
      "Review & organisation",
      "Translation & notarisation",
      "Cover letter preparation",
      "Final audit before submission",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    accent: "bg-cyan-500/10 text-cyan-600",
    border: "border-cyan-100",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle, #C9A027 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-[#C9A027]/20 text-[#C9A027] text-sm font-semibold rounded-full mb-5 border border-[#C9A027]/30">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Comprehensive Visa &amp;
              <span className="block text-[#C9A027]">Immigration Services</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              From UK Visit Visas to full immigration consultation, we cover every
              visa route you may need — all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold hover:opacity-90 transition-all"
              >
                Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+447405604685"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Us: +44 7405 604685
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className={`bg-white rounded-3xl border ${service.border} overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-5">
                {/* Left: main content */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 ${service.accent}`}>
                    {service.icon}
                  </div>
                  <p className="text-[#C9A027] text-sm font-semibold uppercase tracking-wider mb-2">
                    {service.tagline}
                  </p>
                  <h2 className="text-2xl font-bold text-[#0A1628] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-sm hover:opacity-90 transition-all"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://wa.me/message/5I7W6OVKJYODP1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-all"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* Right: benefits + process */}
                <div className="lg:col-span-2 bg-[#F5F7FA] p-8 lg:p-10 grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
                  <div>
                    <h4 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C9A027]" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A027] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#C9A027] text-[#0A1628] text-[10px] font-bold flex items-center justify-center shrink-0">
                        #
                      </span>
                      Our Process
                    </h4>
                    <ol className="space-y-2">
                      {service.process.map((step, j) => (
                        <li key={step} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-[#C9A027]/10 text-[#C9A027] text-xs font-bold flex items-center justify-center">
                            {j + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
  Shield,
  CheckCircle,
} from "lucide-react";
import CTABanner from "@/components/visanova/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Visanova Ltd — a trusted UK-based visa and immigration consultancy based in Oldbury, West Midlands. Our mission, values, and team.",
};

const stats = [
  { value: "500+", label: "Visas Approved" },
  { value: "98%", label: "Success Rate" },
  { value: "5+", label: "Years Experience" },
  { value: "1000+", label: "Happy Clients" },
];

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integrity",
    description:
      "We are transparent, honest, and ethical in everything we do. No false promises — only realistic assessments and genuine guidance.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description:
      "Every application we handle receives the same meticulous attention to detail that has earned us a 98% success rate.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Empathy",
    description:
      "We understand the importance of your visa journey. We treat every client with care, respect, and personal attention.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Accessibility",
    description:
      "Our services are available in-person at our Oldbury office, as well as remotely via phone, video call, email, and WhatsApp.",
  },
];

const team = [
  {
    name: "Senior Immigration Consultant",
    role: "Lead Visa Advisor",
    description:
      "Over 8 years of experience in UK immigration law and visa applications. Specialises in Visit Visas and Settlement.",
    initials: "VL",
    color: "bg-[#C9A027]",
  },
  {
    name: "Europe Visa Specialist",
    role: "Schengen & EU Visas",
    description:
      "Expert in Schengen Area visa applications, European travel documentation, and multi-entry visa strategies.",
    initials: "EV",
    color: "bg-blue-600",
  },
  {
    name: "Student Visa Advisor",
    role: "Education & Student Visas",
    description:
      "Dedicated to helping international students navigate the UK Student Visa route, CAS letters, and university requirements.",
    initials: "SA",
    color: "bg-green-600",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #C9A027 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-[#C9A027]/20 text-[#C9A027] text-sm font-semibold rounded-full mb-5 border border-[#C9A027]/30">
              About Visanova Ltd
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Trusted UK Visa &amp; Immigration
              <span className="block text-[#C9A027]">Consultants Since 2019</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Based in Oldbury, West Midlands, Visanova Ltd is a professional
              immigration consultancy committed to helping individuals and
              families achieve their visa goals with confidence and ease.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold hover:opacity-90 transition-all"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#C9A027] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-5">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-6">
                Built on Trust, Driven by Results
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Visanova Ltd was founded with a clear mission: to make the UK
                  and European visa process accessible, understandable, and
                  stress-free for everyone — regardless of background or
                  circumstances.
                </p>
                <p>
                  Having witnessed how confusing and intimidating the immigration
                  system can be, our founders built Visanova to be the consultant
                  they wished they&apos;d had — knowledgeable, honest, and genuinely
                  invested in every client&apos;s success.
                </p>
                <p>
                  Today, from our base in Oldbury, West Midlands, we serve
                  clients across the UK and internationally, with a proven track
                  record of over 500 successful visa approvals and a 98% success
                  rate.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Certified Consultants",
                  "UK & Europe Specialists",
                  "Transparent Fees",
                  "Free Initial Consultation",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 text-sm text-[#0A1628] bg-white border border-gray-200 rounded-lg px-3 py-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9A027]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                  alt="London Westminster - UK immigration"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A027]/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#C9A027]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1628]">UK Registered</p>
                    <p className="text-xs text-gray-400">England &amp; Wales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A027]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="w-14 h-14 rounded-2xl bg-[#C9A027]/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#C9A027]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide accessible, honest, and expert visa and immigration
                consultation services that empower every client to achieve their
                travel and migration goals — with the highest standard of
                professionalism and care.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-[#F5F7FA] rounded-3xl p-10 relative overflow-hidden border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A027]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="w-14 h-14 rounded-2xl bg-[#C9A027]/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#C9A027]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To be the UK&apos;s most trusted visa and immigration consultancy —
                known for our integrity, our success rates, and our commitment
                to treating every client as an individual with a unique story
                and unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#C9A027]/40 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#C9A027]/10 flex items-center justify-center text-[#C9A027] mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
              Meet Our Expert Consultants
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our team of certified immigration experts are here to guide you every
              step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="text-center bg-[#F5F7FA] rounded-3xl p-8 border border-gray-100 hover:border-[#C9A027]/30 hover:shadow-lg transition-all"
              >
                <div
                  className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5`}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#0A1628] text-lg mb-1">{member.name}</h3>
                <p className="text-[#C9A027] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

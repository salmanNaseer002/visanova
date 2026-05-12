import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import CTABanner from "@/components/visanova/home/CTABanner";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what our clients say about Visanova Ltd. Real reviews from people who trusted us with their UK visa and immigration applications.",
};

const testimonials = [
  {
    name: "Aisha Rahman",
    location: "Birmingham, UK",
    visa: "UK Visit Visa",
    rating: 5,
    text: "Visanova made the entire process so easy. I was worried about my application after a previous refusal, but their team knew exactly what to do. My visa was approved within two weeks. Absolutely brilliant service! They were patient, professional, and incredibly thorough.",
    initials: "AR",
    color: "bg-blue-500",
  },
  {
    name: "Muhammad Tariq",
    location: "Oldbury, UK",
    visa: "Student Visa",
    rating: 5,
    text: "I came to Visanova for help with my student visa and couldn't be happier. They were professional, thorough, and kept me informed throughout the entire process. Got my visa approved with no issues whatsoever. I would highly recommend them to anyone needing visa support.",
    initials: "MT",
    color: "bg-[#C9A027]",
  },
  {
    name: "Fatima Al-Sayed",
    location: "West Midlands, UK",
    visa: "Schengen Visa",
    rating: 5,
    text: "The team at Visanova prepared my Schengen visa application flawlessly. Every document was perfectly organised and presented. I received my visa within 10 days of submitting. Professional, efficient, and trustworthy — I won't go anywhere else for my travel visas.",
    initials: "FA",
    color: "bg-green-600",
  },
  {
    name: "Khalid Hussain",
    location: "Smethwick, UK",
    visa: "UK Visit Visa (Family)",
    rating: 5,
    text: "I needed a visit visa for my parents and was nervous about the process. Visanova handled everything from start to finish. Their attention to detail on the financial documents and sponsor letter made a real difference. Both visas were approved first time. Cannot thank them enough.",
    initials: "KH",
    color: "bg-purple-600",
  },
  {
    name: "Nadia Bibi",
    location: "Wolverhampton, UK",
    visa: "Spouse Visa",
    rating: 5,
    text: "Spouse visa applications are incredibly complex, but the team at Visanova guided me through every requirement with such clarity and professionalism. They left nothing to chance. My husband's visa was approved and we are finally together. Forever grateful for their help.",
    initials: "NB",
    color: "bg-rose-500",
  },
  {
    name: "Ahmed Patel",
    location: "Tipton, UK",
    visa: "Business Visa",
    rating: 5,
    text: "I travel regularly for business and have used Visanova several times now. They are always on time, thorough, and their success rate speaks for itself. Every single application they have prepared for me has been approved. Excellent and highly recommended!",
    initials: "AP",
    color: "bg-orange-500",
  },
  {
    name: "Sara Mahmood",
    location: "Walsall, UK",
    visa: "Europe Tourist Visa",
    rating: 5,
    text: "I had a previous Schengen refusal and was really disheartened. A friend recommended Visanova and I'm so glad I reached out. They analysed exactly why the previous application failed, rebuilt everything from scratch, and I got my visa in just over a week. Amazing team!",
    initials: "SM",
    color: "bg-teal-500",
  },
  {
    name: "Imran Chaudhry",
    location: "Dudley, UK",
    visa: "UK Student Visa",
    rating: 5,
    text: "The consultants at Visanova were extremely knowledgeable about UK student visa requirements. They explained the CAS process clearly, reviewed all my financial evidence, and the application was approved without any complications. Professional service at a very fair price.",
    initials: "IC",
    color: "bg-indigo-500",
  },
  {
    name: "Rukhsana Begum",
    location: "Sandwell, UK",
    visa: "Visit Visa (Post-Refusal)",
    rating: 5,
    text: "After two refusals with other agents, I came to Visanova. From the very first consultation I could tell they were different — they actually read my case history and understood the issues. My third application was approved. I only wish I had come here first!",
    initials: "RB",
    color: "bg-[#1E3A5F]",
  },
];

export default function TestimonialsPage() {
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
              Real Reviews
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What Our Clients Say
              <span className="block text-[#C9A027]">About Visanova Ltd</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Hundreds of families, students, and professionals across the UK have
              trusted us with their visa applications. Here&apos;s what they say.
            </p>
            {/* Aggregate rating */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A027] text-[#C9A027]" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">5.0</span>
              <span className="text-gray-300 text-sm">· 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#C9A027]/30 hover:shadow-xl hover:shadow-[#C9A027]/5 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-[#C9A027]/30 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9A027] text-[#C9A027]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">
                      {t.location} · <span className="text-[#C9A027]">{t.visa}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-[#0A1628] mb-4">
            Have you used our services?
          </h2>
          <p className="text-gray-500 mb-8">
            We&apos;d love to hear about your experience. Your feedback helps other
            clients make an informed decision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/message/5I7W6OVKJYODP1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-all"
            >
              Share via WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold hover:opacity-90 transition-all"
            >
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

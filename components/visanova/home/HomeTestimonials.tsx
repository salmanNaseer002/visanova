import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Rahman",
    location: "Birmingham, UK",
    visa: "UK Visit Visa",
    rating: 5,
    text: "Visanova made the entire process so easy. I was worried about my application after a previous refusal, but their team knew exactly what to do. My visa was approved within two weeks. Absolutely brilliant service!",
    initials: "AR",
    color: "bg-blue-500",
  },
  {
    name: "Muhammad Tariq",
    location: "Oldbury, UK",
    visa: "Student Visa",
    rating: 5,
    text: "I came to Visanova for help with my student visa and couldn't be happier. They were professional, thorough, and kept me informed throughout. Got my visa approved with no issues. Highly recommend!",
    initials: "MT",
    color: "bg-[#C9A027]",
  },
  {
    name: "Fatima Al-Sayed",
    location: "West Midlands, UK",
    visa: "Schengen Visa",
    rating: 5,
    text: "The team at Visanova prepared my Schengen visa application flawlessly. Every document was perfectly organised. I received my visa within 10 days. Professional, efficient, and trustworthy.",
    initials: "FA",
    color: "bg-green-600",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hundreds of families and individuals have trusted Visanova Ltd with
            their visa journey. Here&apos;s what they say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#C9A027]/30 hover:shadow-xl hover:shadow-[#C9A027]/5 transition-all duration-300 group"
            >
              <Quote className="w-8 h-8 text-[#C9A027]/30 mb-4" />
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C9A027] text-[#C9A027]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.location} · {t.visa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[#C9A027] font-semibold hover:gap-3 transition-all"
          >
            Read All Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

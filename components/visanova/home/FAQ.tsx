"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What services does VISANOVA provide?",
    a: "VISANOVA provides professional consultancy for UK visit visas, UK study visas, Europe/Schengen visas, travel insurance guidance, and documentation support.",
  },
  {
    q: "Is VISANOVA a UK-based consultancy?",
    a: "Yes, VISANOVA is a UK-based consultancy providing guidance and support for clients worldwide.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No consultancy can legally guarantee visa approval. Final decisions are made solely by the relevant embassy or immigration authorities.",
  },
  {
    q: "Do you assist with university admissions?",
    a: "Yes, we provide guidance for study abroad applications, university selection, and student visa processes.",
  },
  {
    q: "Do you provide travel insurance?",
    a: "Yes, we assist clients with travel and Schengen insurance guidance where required.",
  },
  {
    q: "How can I contact VISANOVA?",
    a: "You can contact us through WhatsApp, email, website contact forms, or our social media pages.",
  },
  {
    q: "What documents are required for a visa application?",
    a: "Required documents vary depending on visa type and country. Our team provides personalized guidance after consultation.",
  },
  {
    q: "Do you provide consultation before application?",
    a: "Yes, we offer consultation services to understand your profile and guide you properly before application processing.",
  },
  {
    q: "How long does visa processing take?",
    a: "Processing times vary depending on the embassy, visa category, and applicant circumstances.",
  },
  {
    q: "How can I start my application process?",
    a: "You can contact us directly through WhatsApp or submit your inquiry through our website.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Have a question about our services? We&apos;ve answered the most common ones below.
            Can&apos;t find your answer? Contact us directly.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-[#C9A027]/50 shadow-lg shadow-[#C9A027]/8 bg-white"
                  : "border-gray-100 bg-[#F5F7FA] hover:border-[#C9A027]/30 hover:bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                aria-expanded={open === i}
              >
                {/* Number + question */}
                <div className="flex items-center gap-4">
                  <span
                    className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-colors ${
                      open === i
                        ? "bg-[#C9A027] text-[#0A1628]"
                        : "bg-[#C9A027]/10 text-[#C9A027] group-hover:bg-[#C9A027]/20"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-semibold text-sm sm:text-base transition-colors ${
                      open === i ? "text-[#C9A027]" : "text-[#0A1628]"
                    }`}
                  >
                    {faq.q}
                  </span>
                </div>

                {/* Chevron */}
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#C9A027] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer — smooth height transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pl-18">
                  <div className="ml-12 border-l-2 border-[#C9A027]/20 pl-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 text-center bg-gradient-to-br from-[#F5F7FA] to-white rounded-3xl p-8 border border-gray-100"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A027]/10 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-[#C9A027]" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#0A1628] mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Our team is ready to help. Reach out via WhatsApp or schedule a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/message/5I7W6OVKJYODP1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-all hover:scale-105 shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-sm hover:opacity-90 transition-all hover:scale-105 shadow-md"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

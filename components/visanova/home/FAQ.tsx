"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a UK Visit Visa application take?",
    a: "Standard UK Visit Visa applications typically take 3–8 weeks from the date of biometrics submission. Priority and super-priority services are available for faster processing (1–5 working days), subject to availability.",
  },
  {
    q: "What documents do I need for a UK Visit Visa?",
    a: "You will typically need a valid passport, completed online application form, bank statements (last 3–6 months), proof of employment/income, accommodation details, travel itinerary, travel history, and a cover letter. Our consultants provide a personalised checklist for your specific situation.",
  },
  {
    q: "Can Visanova help if my visa was previously refused?",
    a: "Yes. We specialise in reapplications after refusals. We conduct a thorough review of your previous application, identify the reasons for refusal, and build a stronger case for reapplication with comprehensive supporting evidence.",
  },
  {
    q: "How much does a visa consultation cost?",
    a: "Your initial consultation is completely free. Following assessment, we provide a clear, transparent fee structure for our services. Fees vary depending on the visa type and complexity of your case. Contact us for a personalised quote.",
  },
  {
    q: "Do I need to visit your office in person?",
    a: "No. While we welcome in-person appointments at our Oldbury office, we also offer full remote consultations via phone, video call, email, and WhatsApp. Most clients complete the entire process remotely.",
  },
  {
    q: "What is the difference between a tourist visa and a visit visa?",
    a: "For the UK, a Standard Visitor Visa covers tourism, visiting family/friends, business visits, and short-term study. Schengen tourist visas are for travelling within Europe's Schengen Area. Our consultants will advise which visa is appropriate for your specific purpose of travel.",
  },
  {
    q: "Can you assist with family reunion or spouse visas?",
    a: "Yes. We provide expert advice and support for UK Family Visas including spouse/partner visas, parent visas, and child visas. These routes have specific financial and relationship requirements that our team will guide you through.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Have a question? We&apos;ve answered the most common ones below.
          </p>
        </div>

        <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-all duration-200 ${
                open === i ? "border-[#C9A027]/50 shadow-lg shadow-[#C9A027]/5" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span
                  className={`font-semibold text-base ${
                    open === i ? "text-[#C9A027]" : "text-[#0A1628]"
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#C9A027] transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, AlertCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Visanova Ltd",
  description:
    "Read VISANOVA's refund policy to understand how consultancy fees, service charges, and third-party payments are handled.",
};

const sections = [
  {
    number: "1",
    title: "Consultancy & Service Fees",
    content:
      "Consultancy, guidance, documentation, and processing support fees are generally non-refundable once work on the client's case has started.",
  },
  {
    number: "2",
    title: "Visa Decisions",
    content:
      "VISANOVA does not guarantee visa approval. Visa decisions are made solely by embassies and immigration authorities. Therefore, refunds cannot be provided in case of visa refusal, rejection, delay, or administrative processing.",
  },
  {
    number: "3",
    title: "Client Responsibilities",
    content:
      "Clients are responsible for providing accurate, genuine, and complete information and documents. No refund will be issued if incorrect or fake documents are provided, important information is hidden or misrepresented, or the client voluntarily withdraws the application or service.",
    bullets: [
      "Incorrect or fake documents are provided",
      "Important information is hidden or misrepresented",
      "The client voluntarily withdraws the application or service",
    ],
  },
  {
    number: "4",
    title: "Refund Eligibility",
    content:
      "Refunds may only be considered in exceptional cases where:",
    bullets: [
      "Services have not yet started",
      "A duplicate payment was made",
      "VISANOVA is unable to provide the agreed consultancy service",
    ],
    footer: "Any approved refund will be processed within a reasonable timeframe.",
  },
  {
    number: "5",
    title: "Third-Party Fees",
    content:
      "Embassy fees, application charges, insurance fees, translation charges, courier fees, biometric fees, and other third-party payments are strictly non-refundable.",
  },
  {
    number: "6",
    title: "Cancellation Policy",
    content:
      "Clients must notify VISANOVA immediately if they wish to cancel any service request. Cancellation requests are subject to review and may not qualify for refunds once processing has started.",
  },
  {
    number: "7",
    title: "Policy Updates",
    content:
      "VISANOVA reserves the right to update or modify this refund policy at any time without prior notice.",
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">

      {/* Hero header */}
      <div className="bg-gradient-to-br from-[#060F1E] to-[#0D1F3C] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #C9A027 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#C9A027]/8 blur-3xl -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#C9A027] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-300">Refund Policy</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center shadow-lg shrink-0">
              <RefreshCw className="w-7 h-7 text-[#0A1628]" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[#C9A027]/15 text-[#C9A027] text-xs font-semibold rounded-full mb-2 uppercase tracking-wider">
                Policy Document
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                Refund Policy
              </h1>
            </div>
          </div>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
            At VISANOVA, we are committed to providing professional consultancy and support services
            with transparency and fairness. Please read our refund policy carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Important notice */}
        <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            By using our services, clients acknowledge and agree to this refund policy.
            Please review all sections carefully before proceeding with any payment.
          </p>
        </div>

        {/* Policy sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.number}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#C9A027]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5 p-6 sm:p-8">
                {/* Number badge */}
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center shadow-md">
                  <span className="text-[#0A1628] text-sm font-extrabold">{section.number}</span>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-[#0A1628] mb-3">{section.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>

                  {section.bullets && (
                    <ul className="mt-3 space-y-2">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-[#C9A027]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-[#C9A027]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p className="mt-3 text-sm text-gray-600 italic">{section.footer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-3xl p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-3">Have a question about our policy?</h3>
          <p className="text-gray-300 text-sm mb-6">
            Our team is happy to clarify any aspect of our refund policy before you proceed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@visanova.co.uk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-sm hover:opacity-90 transition-all"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/message/5I7W6OVKJYODP1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} Visanova Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}

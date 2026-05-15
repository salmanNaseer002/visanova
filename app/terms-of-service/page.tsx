import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ChevronRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Visanova Ltd",
  description:
    "Read the terms and conditions governing use of VISANOVA's visa consultancy services and website.",
};

const terms = [
  {
    number: "01",
    title: "Consultancy Services Only",
    content:
      "VISANOVA provides consultancy and guidance services only. We do not act as legal representatives. All advice is provided to support your application preparation.",
  },
  {
    number: "02",
    title: "Visa Approval Decisions",
    content:
      "Visa approval decisions are solely made by embassies and immigration authorities. VISANOVA does not influence or guarantee the outcome of any visa application.",
  },
  {
    number: "03",
    title: "Accurate Information",
    content:
      "Clients must provide genuine, accurate, and complete information at all times. Providing false or misleading information may result in visa refusal and legal consequences.",
  },
  {
    number: "04",
    title: "Processing Times",
    content:
      "Processing times may vary depending on embassy procedures, visa type, and external factors beyond our control. VISANOVA cannot be held responsible for delays caused by third parties.",
  },
  {
    number: "05",
    title: "Fees & Refunds",
    content:
      "Consultancy or service fees are non-refundable once services have started unless otherwise agreed in writing. Please refer to our Refund Policy for full details.",
  },
  {
    number: "06",
    title: "Right to Refuse Service",
    content:
      "VISANOVA reserves the right to refuse service in cases involving misleading, fraudulent, or incomplete information without obligation to issue a refund.",
  },
  {
    number: "07",
    title: "Website Content",
    content:
      "Website content is provided for informational purposes only and may change without notice. VISANOVA makes no warranties regarding the accuracy or completeness of website information.",
  },
  {
    number: "08",
    title: "Client Responsibility",
    content:
      "Clients are responsible for reviewing embassy requirements and final application submissions. VISANOVA provides guidance but the applicant remains responsible for the accuracy of their submission.",
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">

      {/* Hero header */}
      <div className="bg-gradient-to-br from-[#060F1E] to-[#0D1F3C] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #C9A027 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#C9A027]/8 blur-3xl -translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#C9A027] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-300">Terms &amp; Conditions</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center shadow-lg shrink-0">
              <FileText className="w-7 h-7 text-[#0A1628]" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[#C9A027]/15 text-[#C9A027] text-xs font-semibold rounded-full mb-2 uppercase tracking-wider">
                Legal Document
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms &amp; Conditions</h1>
            </div>
          </div>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
            By using VISANOVA services or website, you agree to the following terms and conditions.
            Please read them carefully before proceeding.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Acceptance notice */}
        <div className="flex items-start gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10">
          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <p className="text-emerald-800 text-sm leading-relaxed">
            <span className="font-semibold">Important: </span>
            Use of VISANOVA services indicates your acceptance of these terms and conditions.
            If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Terms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {terms.map((term) => (
            <div
              key={term.number}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#C9A027]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-extrabold text-[#C9A027]/20 group-hover:text-[#C9A027]/40 transition-colors leading-none">
                  {term.number}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#C9A027]/20 to-transparent" />
              </div>

              <h2 className="text-base font-bold text-[#0A1628] mb-2">{term.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{term.content}</p>
            </div>
          ))}
        </div>

        {/* Full acceptance statement */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-3xl p-8 sm:p-10 text-center mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#C9A027]/8 -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#C9A027]/15 border border-[#C9A027]/30 flex items-center justify-center mx-auto mb-5">
              <FileText className="w-6 h-6 text-[#C9A027]" />
            </div>
            <p className="text-white text-base font-semibold mb-2">
              By engaging with VISANOVA services, you confirm that you have read,
              understood, and agreed to these Terms &amp; Conditions.
            </p>
            <p className="text-gray-400 text-sm">
              These terms may be updated from time to time. Continued use of our services
              constitutes acceptance of any updated terms.
            </p>
          </div>
        </div>

        {/* Related policies */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Refund Policy", href: "/refund-policy" },
            { label: "Disclaimer", href: "/disclaimer" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between gap-2 px-5 py-4 rounded-xl bg-white border border-gray-100 hover:border-[#C9A027]/40 hover:shadow-md transition-all text-sm font-semibold text-[#0A1628] hover:text-[#C9A027] group"
            >
              {link.label}
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#C9A027] transition-colors" />
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Visanova Ltd. All rights reserved. Registered in England &amp; Wales.
        </p>
      </div>
    </div>
  );
}

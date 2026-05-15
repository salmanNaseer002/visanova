import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Visanova Ltd",
  description:
    "Important disclaimer regarding VISANOVA's visa consultancy services, limitations of liability, and independence from government authorities.",
};

const keyPoints = [
  "VISANOVA provides visa consultancy and guidance services only.",
  "We are not affiliated with any embassy, consulate, immigration authority, or government institution.",
  "All visa approvals, refusals, processing times, and immigration decisions are solely determined by the relevant authorities.",
  "VISANOVA does not guarantee visa approval under any circumstances.",
  "Our role is to provide professional guidance, documentation assistance, and application support based on available information.",
  "Clients are responsible for providing accurate, genuine, and complete information during the application process.",
  "VISANOVA shall not be held responsible for visa refusals, delays, policy changes, or embassy decisions.",
  "We are not liable for losses arising from incorrect or incomplete information provided by applicants.",
];

export default function DisclaimerPage() {
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
            <span className="text-gray-300">Disclaimer</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center shadow-lg shrink-0">
              <AlertTriangle className="w-7 h-7 text-[#0A1628]" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[#C9A027]/15 text-[#C9A027] text-xs font-semibold rounded-full mb-2 uppercase tracking-wider">
                Legal Notice
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Disclaimer</h1>
            </div>
          </div>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
            Please read this disclaimer carefully before using VISANOVA&apos;s services or website.
            It outlines the nature and scope of our consultancy services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main disclaimer card */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm mb-8">

          {/* Top section */}
          <div className="bg-gradient-to-r from-[#C9A027]/5 to-transparent border-b border-gray-100 px-8 py-6">
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-[#C9A027] shrink-0 mt-0.5" />
              <p className="text-[#0A1628] font-semibold text-sm leading-relaxed">
                VISANOVA provides visa consultancy and guidance services only. We are not affiliated with
                any embassy, consulate, immigration authority, or government institution.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-8">
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              All visa approvals, refusals, processing times, and immigration decisions are solely
              determined by the relevant authorities.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              VISANOVA does not guarantee visa approval under any circumstances. Our role is to provide
              professional guidance, documentation assistance, and application support based on available
              information and client-provided documents.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Clients are responsible for providing accurate, genuine, and complete information during
              the application process.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm leading-relaxed font-medium">
                  VISANOVA shall not be held responsible for visa refusals, delays, policy changes,
                  embassy decisions, travel restrictions, or losses arising from incorrect or incomplete
                  information provided by applicants.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key points summary */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 mb-8">
          <h2 className="text-lg font-bold text-[#0A1628] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#C9A027]/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#C9A027]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            Key Points Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {keyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F7FA] border border-gray-100">
                <span className="w-6 h-6 rounded-full bg-[#C9A027] flex items-center justify-center shrink-0 mt-0.5 text-[#0A1628] text-[10px] font-extrabold">
                  {i + 1}
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Policy links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-of-service" },
            { label: "Refund Policy", href: "/refund-policy" },
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

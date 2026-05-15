import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Visanova Ltd",
  description:
    "VISANOVA values your privacy. Learn how we collect, use, and protect your personal information in our comprehensive privacy policy.",
};

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    content:
      "We may collect personal details such as your name, phone number, email address, travel information, and documents required for consultation and visa guidance purposes.",
  },
  {
    number: "2",
    title: "How We Use Your Information",
    content: "Your information is used solely for:",
    bullets: [
      "Consultation services",
      "Visa guidance and application support",
      "Documentation assistance",
      "Communication and customer support",
    ],
  },
  {
    number: "3",
    title: "Data Sharing",
    content:
      "We do not sell, rent, or share your personal information with third parties except where necessary for application-related guidance or required by law.",
  },
  {
    number: "4",
    title: "Data Security",
    content:
      "All client information is handled securely and confidentially. We apply appropriate security measures to protect your personal data from unauthorized access or disclosure.",
  },
  {
    number: "5",
    title: "Your Agreement",
    content:
      "By using our website and services, you agree to our privacy practices and policies as outlined in this document.",
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-gray-300">Privacy Policy</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center shadow-lg shrink-0">
              <ShieldCheck className="w-7 h-7 text-[#0A1628]" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[#C9A027]/15 text-[#C9A027] text-xs font-semibold rounded-full mb-2 uppercase tracking-wider">
                Policy Document
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
            VISANOVA values your privacy and is committed to protecting your personal information.
            This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Privacy commitment banner */}
        <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <Lock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-blue-800 font-semibold text-sm mb-1">Your Privacy is Our Priority</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              We handle all personal information with the highest standards of confidentiality and security.
              Your data will never be sold or shared without your knowledge.
            </p>
          </div>
        </div>

        {/* Policy sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.number}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#C9A027]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5 p-6 sm:p-8">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center shadow-md">
                  <span className="text-[#0A1628] text-sm font-extrabold">{section.number}</span>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-[#0A1628] mb-3">{section.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>

                  {section.bullets && (
                    <ul className="mt-3 space-y-2">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-[#C9A027]/10 flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-[#C9A027]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related policies */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Refund Policy", href: "/refund-policy" },
            { label: "Terms & Conditions", href: "/terms-of-service" },
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

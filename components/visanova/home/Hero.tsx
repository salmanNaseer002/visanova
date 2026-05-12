"use client";

import Link from "next/link";
import { ArrowRight, Shield, Star, CheckCircle, MapPin, Users, Award } from "lucide-react";

const WA_ICON = (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const services = [
  "UK Visit Visa",
  "Student Visa",
  "Europe Visa",
  "Business Visa",
  "Tourist Visa",
  "Immigration",
];

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .float-slow { animation: float-slow 6s ease-in-out infinite; }
        .float-fast { animation: float-fast 4s ease-in-out infinite; animation-delay: 1s; }
        .float-delay { animation: float-slow 7s ease-in-out infinite; animation-delay: 2s; }
        .spin-slow { animation: spin-slow 22s linear infinite; }
        .spin-reverse { animation: spin-reverse 18s linear infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #C9A027 0%, #F0C040 30%, #fff8dc 50%, #F0C040 70%, #C9A027 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .glass-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .gold-glass {
          background: rgba(201,160,39,0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(201,160,39,0.3);
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060F1E]">

        {/* ── Background image ── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80')",
          }}
        />

        {/* ── Layered overlays ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060F1E] via-[#0A1628]/88 to-[#0A1628]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-transparent to-[#060F1E]/60" />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A027 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* ── Decorative glow orbs ── */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#C9A027]/8 blur-3xl pulse-glow pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

        {/* ── Decorative spinning rings ── */}
        <div className="absolute right-[22%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] hidden xl:block pointer-events-none">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#C9A027]/15 spin-slow" />
          {/* Middle ring */}
          <div className="absolute inset-8 rounded-full border border-[#C9A027]/10 spin-reverse" />
          {/* Inner ring */}
          <div className="absolute inset-16 rounded-full border border-dashed border-[#C9A027]/20 spin-slow" style={{ animationDuration: "14s" }} />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#C9A027]/40" />
          </div>
        </div>

        {/* Gold left accent line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#C9A027]/70 to-transparent" />

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ═══════════════ LEFT COLUMN ═══════════════ */}
            <div>

              {/* Live badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full gold-glass text-[#E8C04A] text-sm font-semibold mb-8 shadow-lg"
                data-aos="fade-down"
                data-aos-duration="600"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A027] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9A027]" />
                </span>
                <Shield className="w-3.5 h-3.5" />
                UK&apos;s Trusted Visa &amp; Immigration Consultants
              </div>

              {/* Headline */}
              <h1
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
              >
                Your Gateway to
                <span className="block shimmer-text my-1">
                  UK &amp; Europe Visas
                </span>
                <span className="text-white/90">Made Simple</span>
              </h1>

              <p
                className="text-base sm:text-lg text-gray-300/90 leading-relaxed mb-10 max-w-xl"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="200"
              >
                Visanova Ltd is a trusted UK-based immigration consultancy helping
                individuals and families secure visit visas, student visas, Europe
                visas, and more — with a{" "}
                <span className="text-[#E8C04A] font-semibold">proven track record of success</span>.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 mb-10"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-[#0A1628] overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-[#C9A027]/30"
                  style={{ background: "linear-gradient(135deg, #C9A027 0%, #E8C04A 50%, #C9A027 100%)", backgroundSize: "200% auto" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                </Link>

                <a
                  href="https://wa.me/message/5I7W6OVKJYODP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white border border-[#25D366]/50 bg-[#25D366]/10 hover:bg-[#25D366] transition-all hover:scale-105 shadow-xl shadow-green-900/20 backdrop-blur-sm"
                >
                  {WA_ICON}
                  WhatsApp Us Now
                </a>
              </div>

              {/* Divider */}
              <div
                className="flex items-center gap-3 mb-8"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <span className="text-xs text-gray-500 tracking-widest uppercase font-medium">
                  Trusted By Hundreds
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>

              {/* Trust badges — styled as mini cards */}
              <div
                className="flex flex-wrap gap-3"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
              >
                {[
                  { icon: <CheckCircle className="w-4 h-4" />, number: "500+", label: "Visas Approved" },
                  { icon: <Star className="w-4 h-4" />, number: "98%", label: "Success Rate" },
                  { icon: <Shield className="w-4 h-4" />, number: "5+", label: "Years Experience" },
                  { icon: <MapPin className="w-4 h-4" />, number: "UK", label: "Based & Registered" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card"
                  >
                    <span className="text-[#C9A027]">{badge.icon}</span>
                    <div className="leading-tight">
                      <span className="text-white font-bold text-sm">{badge.number} </span>
                      <span className="text-gray-400 text-xs">{badge.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══════════════ RIGHT COLUMN — Floating cards ═══════════════ */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-5 relative">

              {/* Main stats glassmorphism card */}
              <div
                className="w-full max-w-sm rounded-3xl p-6 shadow-2xl float-slow"
                style={{
                  background: "rgba(13, 31, 60, 0.7)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(201,160,39,0.25)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-[#0A1628]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Visanova Ltd</p>
                    <p className="text-gray-400 text-xs">Performance Overview</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 bg-green-500/20 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-[11px] font-semibold">Live</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4 mb-5">
                  {[
                    { value: "500+", label: "Approvals", color: "text-[#E8C04A]" },
                    { value: "98%", label: "Success", color: "text-green-400" },
                    { value: "5★", label: "Rating", color: "text-blue-400" },
                  ].map((s) => (
                    <div key={s.label} className="text-center bg-white/5 rounded-xl p-3">
                      <div className={`text-xl font-extrabold ${s.color}`}>{s.value}</div>
                      <div className="text-gray-400 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-400">Visa Approval Rate</span>
                    <span className="text-[#E8C04A] font-semibold">98%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "98%",
                        background: "linear-gradient(90deg, #C9A027, #E8C04A)",
                      }}
                    />
                  </div>
                </div>

                {/* Service tags */}
                <p className="text-gray-500 text-[11px] mb-2.5 uppercase tracking-wider font-medium">
                  Services Available
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {services.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-[#C9A027]/10 border border-[#C9A027]/20 text-[#E8C04A] text-[11px] font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating mini card — client count */}
              <div
                className="absolute -left-10 top-16 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl float-fast"
                style={{
                  background: "rgba(13,31,60,0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                }}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#25D366]" />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm">1,000+</p>
                  <p className="text-gray-400 text-[11px]">Happy Clients</p>
                </div>
              </div>

              {/* Floating mini card — location */}
              <div
                className="absolute -right-6 bottom-20 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl float-delay"
                style={{
                  background: "rgba(13,31,60,0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,160,39,0.2)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                }}
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C9A027]/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C9A027]" />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-bold text-[13px]">Oldbury, UK</p>
                  <p className="text-gray-400 text-[11px]">West Midlands</p>
                </div>
              </div>

              {/* Floating free consultation pill */}
              <div
                className="w-full max-w-sm rounded-2xl p-4 flex items-center justify-between gap-4 float-fast shadow-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(201,160,39,0.18) 0%, rgba(232,192,74,0.08) 100%)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,160,39,0.35)",
                  boxShadow: "0 8px 32px rgba(201,160,39,0.15)",
                  animationDelay: "0.5s",
                }}
                data-aos="fade-left"
                data-aos-delay="350"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A027] flex items-center justify-center shrink-0 shadow-lg">
                    <CheckCircle className="w-5 h-5 text-[#0A1628]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Free Consultation</p>
                    <p className="text-gray-300 text-xs">No commitment required</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 px-3.5 py-2 rounded-xl bg-[#C9A027] text-[#0A1628] text-xs font-bold hover:bg-[#E8C04A] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom service strip ── */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-[#060F1E]/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-gray-500 text-xs font-medium uppercase tracking-widest shrink-0">
              We cover:
            </span>
            {services.map((s, i) => (
              <span key={s} className="flex items-center gap-2 text-xs text-gray-300">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-[#C9A027]/50" />}
                <span className="text-[#C9A027]">✓</span> {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

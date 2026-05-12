"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "",
    message: "",
  });

  const visaTypes = [
    "UK Visit Visa",
    "Student Visa",
    "Europe / Schengen Visa",
    "Immigration Consultation",
    "Tourist Visa",
    "Business Visa",
    "Documentation Assistance",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

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
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Visanova Ltd
              <span className="block text-[#C9A027]">We&apos;re Here to Help</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Book your free consultation today. Our expert consultants are ready
              to guide you through your visa journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
              <div>
                <h2 className="text-2xl font-bold text-[#0A1628] mb-2">
                  Speak to an Expert
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Whether you have a simple question or need a full consultation,
                  our team is available by phone, email, WhatsApp, or in person
                  at our Oldbury office.
                </p>
              </div>

              {/* Info cards */}
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Office Address",
                  content: "66 Birmingham Street, Oldbury B69 4DZ, United Kingdom",
                  href: "https://maps.google.com/?q=66+Birmingham+Street+Oldbury+B69+4DZ",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  content: "+44 7405 604685",
                  href: "tel:+447405604685",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  content: "info@visanova.co.uk",
                  href: "mailto:info@visanova.co.uk",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Opening Hours",
                  content: "Mon–Fri: 9am–6pm · Sat: 10am–4pm",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#C9A027]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A027]/10 flex items-center justify-center text-[#C9A027] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[#0A1628] font-medium hover:text-[#C9A027] transition-colors text-sm"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-[#0A1628] font-medium text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/message/5I7W6OVKJYODP1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#20b858] transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Chat on WhatsApp</p>
                  <p className="text-sm text-white/80">Fastest response — usually within minutes</p>
                </div>
              </a>

              {/* Social links */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-sm font-semibold text-[#0A1628] mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.facebook.com/visanova.co.uk", label: "Facebook", color: "#1877F2" },
                    { href: "https://www.instagram.com/visanova.co.uk", label: "Instagram", color: "#E4405F" },
                    { href: "https://www.youtube.com/@visanova-co-uk", label: "YouTube", color: "#FF0000" },
                    { href: "https://www.tiktok.com/@visanova.co.uk", label: "TikTok", color: "#000000" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 hover:border-[#C9A027]/50 hover:text-[#C9A027] transition-all"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                      Message Received!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for contacting Visanova Ltd. One of our consultants
                      will be in touch within 24 hours. For urgent enquiries, please
                      WhatsApp us directly.
                    </p>
                    <a
                      href="https://wa.me/message/5I7W6OVKJYODP1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-all"
                    >
                      Continue on WhatsApp
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-[#0A1628] mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Fill in the form below and we&apos;ll get back to you within
                        24 hours. Fields marked <span className="text-red-500">*</span> are required.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Muhammad Ali"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#C9A027] focus:ring-1 focus:ring-[#C9A027]/30 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#C9A027] focus:ring-1 focus:ring-[#C9A027]/30 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+44 7700 000000"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#C9A027] focus:ring-1 focus:ring-[#C9A027]/30 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                            Visa Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="visaType"
                            required
                            value={form.visaType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] focus:outline-none focus:border-[#C9A027] focus:ring-1 focus:ring-[#C9A027]/30 transition-colors bg-white"
                          >
                            <option value="">Select visa type</option>
                            {visaTypes.map((v) => (
                              <option key={v} value={v}>{v}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Please describe your situation and what you need help with..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#C9A027] focus:ring-1 focus:ring-[#C9A027]/30 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-base hover:opacity-90 disabled:opacity-60 transition-all"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        Your information is kept strictly confidential. By submitting
                        this form you agree to our{" "}
                        <a href="/privacy-policy" className="underline hover:text-[#C9A027]">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg h-72 bg-[#F5F7FA] flex items-center justify-center relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.9432540059784!2d-2.0148!3d52.5017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870998f4e0e0001%3A0x403da5d6e9f0e0!2s66%20Birmingham%20St%2C%20Oldbury%20B69%204DZ%2C%20UK!5e0!3m2!1sen!2suk!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Visanova Ltd Office Location"
              className="absolute inset-0"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            66 Birmingham Street, Oldbury B69 4DZ — easily accessible from Birmingham city centre
          </p>
        </div>
      </section>
    </>
  );
}

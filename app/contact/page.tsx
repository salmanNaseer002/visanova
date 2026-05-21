"use client";

import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  visaType: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  visaType: "",
  message: "",
};

const VISA_TYPES = [
  "UK Visit Visa",
  "Student Visa",
  "Europe / Schengen Visa",
  "Immigration Consultation",
  "Tourist Visa",
  "Business Visa",
  "Documentation Assistance",
  "Other",
];

function validateForm(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2)
    errors.name = "Please enter your full name.";
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email address.";
  if (form.phone && !/^[\d\s\+\-\(\)]{0,20}$/.test(form.phone))
    errors.phone = "Please enter a valid phone number.";
  if (!form.visaType)
    errors.visaType = "Please select a visa type.";
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = "Please write at least 10 characters.";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const trapRef = useRef<HTMLInputElement>(null); // honeypot — bots fill this

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FormState])
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      document.querySelector("[data-error]")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Honeypot check — if filled, silently pretend success
    if (trapRef.current?.value) {
      setStatus("success");
      return;
    }

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeEndpoint) {
      setStatus("error");
      setErrorMessage("Contact form is not configured yet. Please reach out via WhatsApp or email.");
      return;
    }

    // Accept either the full URL or just the form ID
    const endpoint = formspreeEndpoint.startsWith("http")
      ? formspreeEndpoint
      : `https://formspree.io/f/${formspreeEndpoint}`;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || "Not provided",
          _visaType: form.visaType,   // prefix with _ keeps it out of spam filters
          message: form.message.trim(),
          _subject: `New Enquiry: ${form.visaType} — ${form.name.trim()}`,
          _replyto: form.email.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Formspree returns { errors: [{ message }] } on failure
        const msg = data?.errors?.[0]?.message ?? "Submission failed. Please try again.";
        throw new Error(msg);
      }

      setStatus("success");
      setForm(INITIAL_FORM);
      setFieldErrors({});
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try WhatsApp or email us directly."
      );
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#0A1628] placeholder-gray-400
     focus:outline-none focus:ring-1 transition-colors
     ${fieldErrors[field]
       ? "border-red-400 focus:border-red-400 focus:ring-red-200 bg-red-50"
       : "border-gray-200 focus:border-[#C9A027] focus:ring-[#C9A027]/30"}`;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle, #C9A027 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
              Book your free consultation today. Our expert consultants are ready to guide you through your visa journey.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact section ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* ── Left: contact info ───────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
              <div>
                <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Speak to an Expert</h2>
                <p className="text-gray-500 leading-relaxed">
                  Whether you have a simple question or need a full consultation, our team is available
                  by phone, email, WhatsApp, or in person at our Oldbury office.
                </p>
              </div>

              {[
                { icon: <MapPin className="w-5 h-5" />, label: "Office Address", content: "66 Birmingham Street, Oldbury B69 4DZ, United Kingdom", href: "https://maps.google.com/?q=66+Birmingham+Street+Oldbury+B69+4DZ" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", content: "+44 7405 604685", href: "tel:+447405604685" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", content: "info@visanova.co.uk", href: "mailto:info@visanova.co.uk" },
                { icon: <Clock className="w-5 h-5" />, label: "Opening Hours", content: "Mon–Fri: 9am–6pm · Sat: 10am–4pm", href: null },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#C9A027]/30 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A027]/10 flex items-center justify-center text-[#C9A027] shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#0A1628] font-medium hover:text-[#C9A027] transition-colors text-sm">{item.content}</a>
                    ) : (
                      <p className="text-[#0A1628] font-medium text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a href="https://wa.me/message/5I7W6OVKJYODP1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#20b858] transition-all">
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

              {/* Social */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-sm font-semibold text-[#0A1628] mb-3">Follow Us</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: "https://www.facebook.com/visanova.co.uk", label: "Facebook" },
                    { href: "https://www.instagram.com/visanova.co.uk", label: "Instagram" },
                    { href: "https://www.youtube.com/@visanova-co-uk", label: "YouTube" },
                    { href: "https://www.tiktok.com/@visanova.co.uk", label: "TikTok" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 hover:border-[#C9A027]/50 hover:text-[#C9A027] transition-all">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: form ──────────────────────────────────────────── */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">

                {/* Success */}
                {status === "success" ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1628] mb-3">Message Sent!</h3>
                    <p className="text-gray-500 mb-2 max-w-sm mx-auto">
                      Thank you for contacting Visanova Ltd. One of our consultants will be in touch within 24 hours.
                    </p>
                    <p className="text-gray-400 text-sm mb-8">For urgent enquiries, please WhatsApp us directly.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a href="https://wa.me/message/5I7W6OVKJYODP1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-all">
                        Continue on WhatsApp
                      </a>
                      <button onClick={() => setStatus("idle")} className="text-sm text-gray-400 underline hover:text-[#C9A027] transition-colors">
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Send Us a Message</h2>
                      <p className="text-gray-500 text-sm">
                        Fill in the form below and we&apos;ll get back to you within 24 hours.
                        Fields marked <span className="text-red-500">*</span> are required.
                      </p>
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-red-700 mb-0.5">Message not sent</p>
                          <p className="text-sm text-red-600">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      {/* Honeypot — invisible to real users */}
                      <input ref={trapRef} type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} />

                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div data-error={fieldErrors.name ? true : undefined}>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Muhammad Ali" autoComplete="name" className={inputClass("name")} />
                          {fieldErrors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{fieldErrors.name}</p>}
                        </div>
                        <div data-error={fieldErrors.email ? true : undefined}>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" autoComplete="email" className={inputClass("email")} />
                          {fieldErrors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{fieldErrors.email}</p>}
                        </div>
                      </div>

                      {/* Phone + Visa */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div data-error={fieldErrors.phone ? true : undefined}>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Phone Number</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+44 7700 000000" autoComplete="tel" className={inputClass("phone")} />
                          {fieldErrors.phone && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{fieldErrors.phone}</p>}
                        </div>
                        <div data-error={fieldErrors.visaType ? true : undefined}>
                          <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Visa Type <span className="text-red-500">*</span></label>
                          <select name="visaType" value={form.visaType} onChange={handleChange} className={inputClass("visaType") + " bg-white"}>
                            <option value="">Select visa type</option>
                            {VISA_TYPES.map((v) => <option key={v} value={v}>{v}</option>)}
                          </select>
                          {fieldErrors.visaType && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{fieldErrors.visaType}</p>}
                        </div>
                      </div>

                      {/* Message */}
                      <div data-error={fieldErrors.message ? true : undefined}>
                        <label className="block text-sm font-medium text-[#0A1628] mb-1.5">Your Message <span className="text-red-500">*</span></label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Please describe your situation and what you need help with..." className={inputClass("message") + " resize-none"} />
                        <div className="flex items-center justify-between mt-1">
                          {fieldErrors.message
                            ? <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{fieldErrors.message}</p>
                            : <span />}
                          <span className={`text-xs ml-auto ${form.message.length > 1800 ? "text-red-400" : "text-gray-400"}`}>{form.message.length}/2000</span>
                        </div>
                      </div>

                      {/* Submit */}
                      <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-base hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:scale-[1.01] active:scale-[0.99]">
                        {status === "loading" ? (
                          <><div className="w-5 h-5 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin" />Sending your message…</>
                        ) : (
                          <><Send className="w-5 h-5" />Send Message</>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        Your information is kept strictly confidential. By submitting this form you agree to our{" "}
                        <a href="/privacy-policy" className="underline hover:text-[#C9A027]">Privacy Policy</a>.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg h-72 relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.9432540059784!2d-2.0148!3d52.5017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870998f4e0e0001%3A0x403da5d6e9f0e0!2s66%20Birmingham%20St%2C%20Oldbury%20B69%204DZ%2C%20UK!5e0!3m2!1sen!2suk!4v1699999999999" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Visanova Ltd Office Location" className="absolute inset-0" />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">66 Birmingham Street, Oldbury B69 4DZ — easily accessible from Birmingham city centre</p>
        </div>
      </section>
    </>
  );
}

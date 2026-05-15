import {
  Award,
  Users,
  ShieldCheck,
  MessageSquare,
  FileText,
  Globe,
  Plane,
  HeartHandshake,
  ListChecks,
} from "lucide-react";

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Professional Visa Guidance",
    description:
      "Expert advice from qualified consultants with deep knowledge of UK and European visa requirements and procedures.",
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-400/20",
    iconColor: "text-amber-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personalized Support",
    description:
      "Every client receives tailored guidance based on their unique profile, travel purpose, and individual circumstances.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-400/20",
    iconColor: "text-blue-500",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Transparent Process",
    description:
      "We keep you informed at every stage with honest, clear communication and no hidden fees or surprise charges.",
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-400/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Fast & Reliable Communication",
    description:
      "Responsive support via WhatsApp, email, and phone — so you are never left waiting for important answers.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-400/20",
    iconColor: "text-purple-500",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Documentation Assistance",
    description:
      "We thoroughly review and prepare all required documents to reduce the risk of refusal due to incomplete paperwork.",
    color: "from-rose-500/20 to-rose-600/10",
    border: "border-rose-400/20",
    iconColor: "text-rose-500",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Travel & Student Insurance Guidance",
    description:
      "We assist clients with obtaining appropriate travel and Schengen insurance where required for their application.",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-400/20",
    iconColor: "text-cyan-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Europe & UK Visa Expertise",
    description:
      "Specialists in UK visit visas, student visas, Schengen visas, and a range of European travel visa categories.",
    color: "from-indigo-500/20 to-indigo-600/10",
    border: "border-indigo-400/20",
    iconColor: "text-indigo-500",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Client-Focused Consultation",
    description:
      "Your goals and concerns are at the heart of everything we do — we listen, advise, and support with genuine care.",
    color: "from-pink-500/20 to-pink-600/10",
    border: "border-pink-400/20",
    iconColor: "text-pink-500",
  },
  {
    icon: <ListChecks className="w-6 h-6" />,
    title: "Step-by-Step Support",
    description:
      "From initial consultation to final submission, we guide you through every step of the visa application process.",
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-400/20",
    iconColor: "text-orange-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-widest uppercase">
            Why Visanova
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] mb-5">
            Why Choose VISANOVA?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            At VISANOVA, we are committed to providing professional, transparent, and reliable visa
            consultancy services for individuals and families planning to travel, study, or visit the UK and Europe.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className={`group relative bg-white rounded-2xl p-6 border ${reason.border} hover:border-[#C9A027]/50 hover:shadow-xl hover:shadow-[#C9A027]/6 transition-all duration-300 hover:-translate-y-0.5`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center ${reason.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {reason.icon}
              </div>

              {/* Check badge */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#C9A027]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-3 h-3 text-[#C9A027]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="font-bold text-[#0A1628] text-base mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="relative bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
          data-aos="fade-up"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C9A027]/8 -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-600/10 translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A027] to-[#E8C04A] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Plane className="w-7 h-7 text-[#0A1628]" />
            </div>
            <p className="text-white text-xl sm:text-2xl font-bold mb-3">
              Our goal is to make your visa journey smooth, simple, and stress-free.
            </p>
            <p className="text-[#C9A027] text-lg font-semibold tracking-wide">
              VISANOVA — Your Journey, Our Expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="https://wa.me/message/5I7W6OVKJYODP1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-all hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-sm hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

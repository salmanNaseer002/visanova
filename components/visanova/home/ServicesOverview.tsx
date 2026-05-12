import Link from "next/link";
import { ArrowRight, Plane, GraduationCap, Globe, FileText, Briefcase, MapPin, ClipboardList } from "lucide-react";

const services = [
  {
    icon: <Plane className="w-7 h-7" />,
    title: "UK Visit Visa",
    description:
      "Planning to visit the UK for tourism, family, or business? We guide you through every step of the UK visitor visa application process.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Student Visa",
    description:
      "Pursue your education in the UK. We assist with student visa applications, CAS letters, financial evidence, and university admissions guidance.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Europe Visa",
    description:
      "Explore Europe with confidence. Our team handles Schengen visa applications for tourism, business, family visits and more.",
    color: "from-green-500/20 to-green-600/10",
    border: "border-green-500/20",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Immigration Consultation",
    description:
      "Get expert advice on UK immigration routes including spouse visas, indefinite leave to remain (ILR), British citizenship, and settlement.",
    color: "from-[#C9A027]/20 to-[#C9A027]/10",
    border: "border-[#C9A027]/20",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Tourist Visa",
    description:
      "Travel the world stress-free. We prepare your tourist visa application with the correct documentation and supporting letters.",
    color: "from-red-500/20 to-red-600/10",
    border: "border-red-500/20",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Business Visa",
    description:
      "Attend meetings, conferences, and trade events in the UK or Europe. Our business visa service ensures smooth approval.",
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/20",
  },
  {
    icon: <ClipboardList className="w-7 h-7" />,
    title: "Documentation Assistance",
    description:
      "Missing or incomplete documents are the #1 reason for visa refusals. We thoroughly review and prepare all required paperwork.",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/20",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Comprehensive Visa &amp; Immigration Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From your first inquiry to the stamp on your passport, we handle
            everything with professionalism and care.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className={`group relative bg-white rounded-2xl p-7 border ${service.border} hover:border-[#C9A027]/50 hover:shadow-xl hover:shadow-[#C9A027]/5 transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-[#C9A027] mb-5 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A027] hover:gap-2.5 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* 7th card + CTA row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div
            data-aos="fade-up"
            data-aos-delay="480"
            className={`group relative bg-white rounded-2xl p-7 border ${services[6].border} hover:border-[#C9A027]/50 hover:shadow-xl hover:shadow-[#C9A027]/5 transition-all duration-300`}
          >
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${services[6].color} flex items-center justify-center text-[#C9A027] mb-5 group-hover:scale-110 transition-transform`}
            >
              {services[6].icon}
            </div>
            <h3 className="text-lg font-bold text-[#0A1628] mb-2">
              {services[6].title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              {services[6].description}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A027] hover:gap-2.5 transition-all"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* CTA card */}
          <div
            data-aos="fade-up"
            data-aos-delay="560"
            className="relative bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-7 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C9A027]/10 -translate-y-1/2 translate-x-1/2" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Not sure which visa you need?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Book a free consultation and our expert advisors will guide you
                to the right visa pathway.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-sm hover:opacity-90 transition-all"
              >
                Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/message/5I7W6OVKJYODP1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20b858] transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

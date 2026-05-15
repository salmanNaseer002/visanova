"use client";

import Image from "next/image";
import { Mail, Crown, Star } from "lucide-react";

const team = [
  {
    name: "Hafiz Talha",
    role: "Chief Executive Officer",
    email: "hafiz.talha@visanova.co.uk",
    image: "/Talha.jpeg",
    bio: "Hafiz Talha leads VISANOVA with a vision to provide professional, transparent, and client-focused visa consultancy services for the UK and Europe. He oversees company operations, strategic planning, and client service excellence.",
    featured: true,
    badge: "CEO",
    initials: "HT",
  },
  {
    name: "Sajjad Ashraf",
    role: "Managing Director",
    email: "sajjad.ashraf@visanova.co.uk",
    image: "/Sajjad.jpeg",
    bio: "Sajjad Ashraf manages consultancy operations and client relations at VISANOVA. He specializes in guiding clients through visit visa, study visa, and Europe visa processes with professionalism and personalized support.",
    featured: true,
    badge: "MD",
    initials: "SA",
  },
  {
    name: "Alia",
    role: "Visa Processing Manager",
    email: "alia@visanova.co.uk",
    image: "/Alia.jpeg",
    bio: "Alia manages visa processing coordination and documentation workflows. She ensures smooth communication, organized application handling, and timely support throughout the visa process.",
    featured: false,
    badge: null,
    initials: "AL",
  },
  {
    name: "Ayesha Sajjad",
    role: "Senior Visa Advisor",
    email: "ayesha.sajjad@visanova.co.uk",
    image: "/Ayesha.jpeg",
    bio: "Ayesha Sajjad provides expert consultation and client support for UK and Europe visa applications. She assists clients with documentation guidance, application preparation, and consultation services.",
    featured: false,
    badge: null,
    initials: "AS",
  },
  {
    name: "Emma Collins",
    role: "Client Relations Manager",
    email: "emma.collins@visanova.co.uk",
    image: "/Emma.jpeg",
    bio: "Emma Collins focuses on client communication and support services. She helps maintain strong client relationships while ensuring a smooth and professional consultancy experience.",
    featured: false,
    badge: null,
    initials: "EC",
  },
  {
    name: "Sophie Bennett",
    role: "Visa Case Specialist",
    email: "sophie.bennett@visanova.co.uk",
    image: "/Sophie.jpeg",
    bio: "Sophie Bennett specializes in reviewing visa applications, documentation support, and case coordination for UK and Europe visa categories.",
    featured: false,
    badge: null,
    initials: "SB",
  },
  {
    name: "Charlotte Hayes",
    role: "Visit Visa Advisor",
    email: "charlotte.hayes@visanova.co.uk",
    image: "/Charlotte.jpeg",
    bio: "Charlotte Hayes assists clients with visit visa consultation, travel guidance, and documentation support to help ensure a well-prepared visa application process.",
    featured: false,
    badge: null,
    initials: "CH",
  },
];

function FeaturedCard({ member }: { member: (typeof team)[0] }) {
  return (
    <div
      className="group relative bg-gradient-to-b from-[#0D1F3C] to-[#060F1E] rounded-3xl overflow-hidden border border-[#C9A027]/30 hover:border-[#C9A027]/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A027]/20 hover:-translate-y-1"
      data-aos="fade-up"
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A027] via-[#E8C04A] to-[#C9A027]" />

      {/* Crown badge */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C9A027] text-[#0A1628]">
        <Crown className="w-3.5 h-3.5" />
        <span className="text-[11px] font-bold tracking-wide">{member.badge}</span>
      </div>

      {/* Photo */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-[#060F1E]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative px-6 pb-6 -mt-8">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-[#C9A027] text-sm font-semibold">{member.role}</p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{member.bio}</p>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C9A027]/10 border border-[#C9A027]/30 text-[#C9A027] text-sm font-semibold hover:bg-[#C9A027] hover:text-[#0A1628] transition-all duration-300 group/btn"
        >
          <Mail className="w-4 h-4" />
          <span className="truncate">{member.email}</span>
        </a>
      </div>
    </div>
  );
}

function TeamCard({ member, delay }: { member: (typeof team)[0]; delay: number }) {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A027]/40 hover:shadow-xl hover:shadow-[#C9A027]/8 transition-all duration-400 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Photo */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Gold bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A027] to-[#E8C04A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-[#0A1628] text-base mb-0.5">{member.name}</h3>
        <p className="text-[#C9A027] text-xs font-semibold mb-3">{member.role}</p>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
        <a
          href={`mailto:${member.email}`}
          className="flex w-full min-w-0 items-center gap-1.5 text-xs font-semibold text-[#C9A027] hover:text-[#0A1628] bg-[#C9A027]/8 hover:bg-[#C9A027] px-3 py-2 rounded-lg transition-all duration-200"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate min-w-0">{member.email}</span>
        </a>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const featured = team.slice(0, 2);
  const rest = team.slice(2);

  return (
    <section className="py-24 bg-[#F5F7FA] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-widest uppercase">
            Our People
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] mb-5">
            Our Professional Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Meet the experienced professionals behind VISANOVA who are committed to providing transparent,
            reliable, and client-focused visa consultancy services.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A027]/50" />
            <Star className="w-4 h-4 text-[#C9A027]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A027]/50" />
          </div>
        </div>

        {/* Featured leadership — CEO & MD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {featured.map((member) => (
            <FeaturedCard key={member.email} member={member} />
          ))}
        </div>

        {/* Rest of team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {rest.map((member, i) => (
            <TeamCard key={member.email} member={member} delay={i * 80} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14" data-aos="fade-up">
          <p className="text-gray-500 text-sm mb-5">
            Ready to start your visa journey with our expert team?
          </p>
          <a
            href="https://wa.me/message/5I7W6OVKJYODP1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C9A027] to-[#E8C04A] text-[#0A1628] font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#C9A027]/25"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Speak to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

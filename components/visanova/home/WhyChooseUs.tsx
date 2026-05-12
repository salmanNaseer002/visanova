import { CheckCircle, Clock, Users, Award, HeadphonesIcon, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Expert Consultants",
    description:
      "Our team consists of experienced, certified immigration consultants with in-depth knowledge of UK Home Office requirements and European visa policies.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "High Success Rate",
    description:
      "We maintain a 98% visa approval rate thanks to meticulous application preparation, accurate documentation, and thorough pre-submission reviews.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Processing",
    description:
      "We work efficiently to ensure your application is submitted promptly and followed up diligently, reducing waiting times wherever possible.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personalised Service",
    description:
      "Every client gets a dedicated consultant. We understand your unique circumstances and tailor our advice to your specific visa requirements.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "Ongoing Support",
    description:
      "From initial consultation to visa decision, we keep you informed at every stage. We're always available via phone, email, and WhatsApp.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Transparent Fees",
    description:
      "No hidden charges. We provide a clear, upfront breakdown of all fees and services so you know exactly what you're paying for.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image / visual */}
          <div data-aos="fade-right" data-aos-duration="800" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                alt="Passport and travel documents"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="text-3xl font-bold text-[#C9A027]">98%</div>
              <div className="text-sm text-gray-500 mt-0.5">Success Rate</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="text-3xl font-bold text-[#0A1628]">500+</div>
              <div className="text-sm text-gray-500 mt-0.5">Visas Approved</div>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div>
            <div data-aos="fade-up" data-aos-duration="600">
              <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
                Why Visanova
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
                Why Thousands Trust Us With Their Visa Journey
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                We combine expert knowledge, proven processes, and genuine care to
                give you the best possible chance of visa approval.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#C9A027]/10 flex items-center justify-center text-[#C9A027]">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

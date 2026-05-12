const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Book a free consultation via phone, email, or WhatsApp. Our expert consultants will assess your eligibility and recommend the best visa pathway for your situation.",
  },
  {
    step: "02",
    title: "Document Preparation",
    description:
      "We provide a personalised checklist of all required documents. Our team reviews, organises, and prepares your complete application package to meet UK Home Office standards.",
  },
  {
    step: "03",
    title: "Application Submission",
    description:
      "We submit your fully prepared application through the correct official channel, ensuring all forms are accurately completed and all supporting evidence is included.",
  },
  {
    step: "04",
    title: "Track & Follow Up",
    description:
      "We monitor your application status and liaise with the visa authorities on your behalf. We keep you updated throughout and respond promptly to any requests for additional information.",
  },
  {
    step: "05",
    title: "Visa Approved!",
    description:
      "Receive your visa decision. In the event of refusal, we provide detailed guidance on appeal options, reapplication strategies, and how to strengthen your case.",
  },
];

export default function VisaProcess() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#C9A027]/10 text-[#C9A027] text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Your Visa Journey in 5 Simple Steps
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We make the complex visa process straightforward and stress-free for every client.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A027]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.step}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-[#C9A027]/30 group-hover:border-[#C9A027] group-hover:bg-[#C9A027] transition-all duration-300 flex flex-col items-center justify-center shadow-lg mb-5">
                  <span className="text-xs text-gray-400 group-hover:text-[#0A1628] font-medium transition-colors">
                    Step
                  </span>
                  <span className="text-2xl font-bold text-[#C9A027] group-hover:text-[#0A1628] transition-colors leading-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

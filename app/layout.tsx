import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSInitializer from "../components/landing/AOSInitializer";
import Navbar from "@/components/visanova/Navbar";
import Footer from "@/components/visanova/Footer";
import WhatsAppButton from "@/components/visanova/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.visanova.co.uk"),
  title: {
    default: "Visanova Ltd — UK Visa & Immigration Consultants",
    template: "%s | Visanova Ltd",
  },
  description:
    "Visanova Ltd offers expert UK visa and immigration consultation services in Oldbury, West Midlands. Specialising in UK Visit Visas, Student Visas, Europe Visas, and Immigration Advice. Contact us today.",
  keywords: [
    "UK visa consultant",
    "immigration consultant UK",
    "visit visa UK",
    "student visa UK",
    "Europe visa",
    "immigration advice UK",
    "visa consultancy Oldbury",
    "visa help West Midlands",
    "Visanova",
    "UK immigration",
    "tourist visa",
    "business visa UK",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.visanova.co.uk/",
    title: "Visanova Ltd — UK Visa & Immigration Consultants",
    description:
      "Expert UK visa and immigration consultation. UK Visit Visas, Student Visas, Europe Visas and more. Based in Oldbury, West Midlands.",
    siteName: "Visanova Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visanova Ltd - UK Visa & Immigration Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visanova Ltd — UK Visa & Immigration Consultants",
    description:
      "Expert UK visa and immigration consultation. Based in Oldbury, West Midlands.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0A1628" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Visanova Ltd",
              url: "https://www.visanova.co.uk",
              logo: "https://www.visanova.co.uk/Visa%20Nova-logo-01.png",
              sameAs: [
                "https://www.facebook.com/visanova.co.uk",
                "https://www.instagram.com/visanova.co.uk",
                "https://www.youtube.com/@visanova-co-uk",
                "https://www.tiktok.com/@visanova.co.uk",
              ],
              description:
                "Expert UK visa and immigration consultation services in Oldbury, West Midlands.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "66 Birmingham Street",
                addressLocality: "Oldbury",
                postalCode: "B69 4DZ",
                addressCountry: "GB",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+447405604685",
                  contactType: "customer service",
                  email: "info@visanova.co.uk",
                  areaServed: "GB",
                  availableLanguage: ["English", "Urdu"],
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "UK Visit Visa" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Student Visa" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Europe Visa" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Immigration Consultation" } },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AOSInitializer />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

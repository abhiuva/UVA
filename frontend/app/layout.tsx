import type { Metadata } from "next";
import { Montserrat, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uvaproit.com"),
  title: {
    template: "%s | UVA",
    default: "UVA | AI Commerce, Agentic AI and Robotics Platforms",
  },
  description:
    "UVA builds intelligent platforms for AI-powered commerce, enterprise automation and robotics through DP360, Pardha and AURA.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://uvaproit.com/",
  },
  openGraph: {
    type: "website",
    siteName: "UVA",
    title: "UVA | Intelligent Platforms for e-commerce, AI and Robotics",
    description:
      "Discover DP360 for intelligent e-commerce, Pardha for enterprise AI agents and AURA for human-centric robotics.",
    url: "https://uvaproit.com/",
    locale: "en_GB",
    images: [
      {
        url: "https://uvaproit.com/images/social/uva-og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "UVA intelligent product platforms: DP360, Pardha and AURA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UVA | AI Commerce, Agentic AI and Robotics",
    description:
      "Intelligent product platforms for commerce, enterprise automation and robotics.",
    images: ["https://uvaproit.com/images/social/uva-og-cover.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://uvaproit.com/#organization",
  name: "UVA Product & IT Services",
  alternateName: "UVA",
  url: "https://uvaproit.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://uvaproit.com/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://uvaproit.com/images/social/uva-og-cover.jpg",
  description:
    "UVA develops AI-native platforms for commerce, enterprise automation and intelligent robotics.",
  email: "mailto:enquiries@uvaproit.com",
  sameAs: [
    "https://www.linkedin.com/in/abhishek-kola-ak/",
    "https://www.linkedin.com/in/ushaswini-verma-mupparapu-879026302/",
    "https://www.linkedin.com/in/vishal-verma-mupparapu-955a92270/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Agentic AI",
    "Digital Commerce",
    "Retail Technology",
    "Business Intelligence",
    "Enterprise Automation",
    "Robotics",
    "Computer Vision",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://uvaproit.com/#website",
  url: "https://uvaproit.com/",
  name: "UVA",
  alternateName: "UVA Product & IT Services",
  description:
    "Intelligent platforms for AI-powered commerce, enterprise automation and robotics.",
  publisher: {
    "@id": "https://uvaproit.com/#organization",
  },
  inLanguage: "en-GB",
};

const productCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "UVA Intelligent Product Platforms",
  description:
    "AI-native product platforms for commerce, enterprise automation and robotics.",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: "https://uvaproit.com/product/dp360",
      name: "DP360",
    },
    {
      "@type": "ListItem",
      position: 2,
      url: "https://uvaproit.com/product/pardha",
      name: "Pardha",
    },
    {
      "@type": "ListItem",
      position: 3,
      url: "https://uvaproit.com/product/aura",
      name: "AURA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollectionSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground font-body">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

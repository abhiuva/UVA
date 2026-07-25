import type { Metadata } from "next";
import { getProduct } from "@/lib/products";

type ProductLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    id: string;
  }>;
};

const productMetaMap: Record<
  string,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDesc: string;
    ogImage: string;
    twTitle: string;
    twDesc: string;
  }
> = {
  dp360: {
    title: "DP360 | AI Commerce and Retail Intelligence Platform",
    description:
      "Launch and manage e-commerce, retail, inventory, POS, CRM, payments and business intelligence from one AI-powered platform with DP360.",
    ogTitle: "DP360 | AI Commerce and Retail Intelligence Platform",
    ogDesc:
      "Launch faster, sell smarter and manage your entire commerce or retail business from one AI-powered platform.",
    ogImage: "https://uvaproit.com/images/social/dp360-og-cover.jpg",
    twTitle: "DP360 | AI Commerce and Retail Platform",
    twDesc:
      "E-commerce, POS, inventory, CRM, payments and AI business intelligence in one platform.",
  },
  pardha: {
    title: "Pardha | Enterprise Agentic AI Operating System",
    description:
      "Deploy a secure enterprise AI workforce with collaborative agents, workflow automation, knowledge intelligence and decision support through Pardha.",
    ogTitle: "Pardha | Enterprise Agentic AI Operating System",
    ogDesc:
      "Build an intelligent AI workforce that collaborates, automates workflows and turns enterprise knowledge into action.",
    ogImage: "https://uvaproit.com/images/social/pardha-og-cover.jpg",
    twTitle: "Pardha | Enterprise Agentic AI Platform",
    twDesc:
      "Collaborative AI agents, enterprise knowledge, intelligent automation and executive decision support.",
  },
  aura: {
    title: "AURA | Intelligent AI Robotics Platform by UVA",
    description:
      "AURA combines AI, computer vision, autonomous mobility, voice interaction and cloud intelligence in a modular robotics platform.",
    ogTitle: "AURA | Intelligent AI Robotics Platform",
    ogDesc:
      "A modular robotics platform for intelligent assistance, autonomous monitoring and human-centric automation.",
    ogImage: "https://uvaproit.com/images/social/aura-og-cover.jpg",
    twTitle: "AURA | Intelligent AI Robotics Platform",
    twDesc:
      "AI vision, natural interaction, autonomous mobility and cloud intelligence in one modular robotics platform.",
  },
};

export async function generateMetadata({
  params,
}: ProductLayoutProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const meta = productMetaMap[id] || {
    title: `${product.name} | UVA Products`,
    description: product.thesis,
    ogTitle: `${product.name} | UVA Products`,
    ogDesc: product.thesis,
    ogImage: "https://uvaproit.com/images/social/uva-og-cover.jpg",
    twTitle: `${product.name} | UVA Products`,
    twDesc: product.thesis,
  };

  const canonicalUrl = `https://uvaproit.com/product/${id}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: "UVA",
      title: meta.ogTitle,
      description: meta.ogDesc,
      url: canonicalUrl,
      locale: "en_GB",
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: `${product.name} platform`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twTitle,
      description: meta.twDesc,
      images: [meta.ogImage],
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

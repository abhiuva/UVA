export const CONTENT = {
  hero: {
    headline: "Engineering the Future of Intelligence",
    subheadline: "We engineer intelligent products that transform ideas into AI-powered platforms, autonomous agents, and robotics helping businesses innovate faster, operate smarter, and lead the future.",
    ctaPrimary: "Explore Our Products",
    ctaSecondary: "Contact Us",
  },
  products: {
    // heading: "What we're building",
    // subheading: "Two products in market. Two more in the lab.",
    // eyebrow: "Product Lab",
    heading: "Something exciting is coming soon!",
    subheading: "Beyond our services, we're innovating something game-changing. Stay tuned for the big reveal!",
    teaser: "Curiosity is at an all-time high.",
    rating: "★★★★★",
    cta: "Discover",
  },
  productCards: [
    {
      id: 'dp360',
      tag: 'DATA PLATFORM',
      name: 'DP360',
      link:'',
      accent: 'copper' as const,
      mode: 'toggle' as const,
      fmcg: {
        positioning: 'Retail and consumer data, unified into one decision layer.',
        bullets: [
          'Demand forecasting tuned to SKU-level seasonality',
          'Retail and distributor data reconciled automatically',
          'Dashboards built for category and channel managers',
        ],
      },
      nonFmcg: {
        positioning: 'The same platform, reshaped for industrial and B2B data.',
        bullets: [
          'Asset and supply-chain data unified across plants',
          'Configurable to sector-specific KPIs',
          'Role-based dashboards for ops and finance teams',
        ],
      },
      cta: { label: 'Learn more', href: '/product' },
    },
    {
      id: 'paarth',
      tag: 'AI AGENT',
      name: 'Paarth',
      link:'',
      accent: 'circuit' as const,
      mode: 'ticker' as const,
      positioning: 'An agent that tests your software while you build it.',
      bullets: [
        'Writes and runs test cases from your existing codebase',
        'Flags regressions before they reach QA',
        'Learns your product\'s edge cases over time',
      ],
      tickerLines: [
        '✓ checkout flow — passed',
        '✓ auth redirect — passed',
        '✓ payment gateway — passed',
        '✓ session timeout — passed',
        '✓ cart sync — passed',
        '✓ error boundary — passed',
      ],
      cta: { label: 'Learn more', href: '/product' },
    },
    {
      id: 'p3',
      tag: 'COMING SOON',
      name: 'Product 3',
      link:'',
      accent: 'ink' as const,
      mode: 'static' as const,
      positioning: 'Details coming soon — something worth waiting for.',
      bullets: [] as string[],
      cta: null,
    },
    {
      id: 'p5',
      tag: 'COMING SOON',
      name: 'Product 5',
      accent: 'ink' as const,
      mode: 'static' as const,
      positioning: 'Details coming soon — something worth waiting for.',
      bullets: [] as string[],
      cta: null,
    },
  ],
  product: {
    hero: {
      headline: "Smarter Retail Starts Here.",
      subheadline: "DealPulse 360: The Complete Commerce Control Suite",
      description: "From store launch to advanced sales intelligence, DealPulse 360 powers retail businesses of all sizes with one unified system.",
      banner: "Launching Soon! — Be the first to transform your business."
    },
    intro: {
      headline: "Your Store. Your Sales. Your Strategy — One Platform.",
      description: "DealPulse 360 is a next-gen, cloud-powered retail system transforming how UK and Indian businesses operate. Whether you run a corner shop, a café, or a franchise — we simplify your digital journey with precision."
    },
    tiers: [
      {
        icon: "",
        name: "StoreFront 360",
        description: "Build your store online. Manage prices, orders, payments — all from one place.",
        ideal: "Restaurant websites, Kirana stores, boutiques, Home vendors."
      },
      {
        icon: "",
        name: "PulsePOS Web",
        description: "Turn any browser into your sales terminal. Simple billing, real-time reports, payment gateway built in.",
        ideal: "Bakeries, cafés, thrift stores."
      },
      {
        icon: "",
        name: "PulseHQ POS",
        description: "Complete control for serious business: kitchen sync, staff HR, feedback, inventory — in one place.",
        ideal: "Restaurants and Bars, salons, cloud kitchens."
      }
    ],
    whyChoose: {
      headline: "Why Choose DealPulse 360?",
      points: [
        "All-in-One Platform — No need to juggle tools",
        "UK + India Friendly — Local currency & gateway support",
        "Mobile Ready — Manage from anywhere",
        "Growth-Ready — Scale from 1 store to 100",
        "No-Code Setup — Designed for entrepreneurs"
      ]
    },
    testimonial: {
      quote: "“I moved my shop online in 2 days and started tracking orders instantly. DealPulse 360 is everything I needed — and nothing I didn’t.”",
      author: "— Boutique Owner – India"
    },
    cta: {
      headline: "Ready to modernize your retail business?",
      button: "Get in touch"
    }
  },
  productPage: {
    title: "UVA Product Information",
    description: "Discover the latest updates and information about groundbreaking, innovative tools UVA is developing in the domain of Data analytics and AI. Stay tuned for the updates and subscribe for Latest UVA product information."
  },
  productCatalog: [
    {
      id: "prod_01JJQD16S91DVAQQ5XE5GHR357",
      name: "AI-Driven Analytics Solutions",
      description: "Transform your data analytics with our innovative AI-driven solutions designed specifically for the food and beverage industry. Our product enhances decision-making for bars, restaurants, and coffee shops by providing actionable insights and predictive analytics. Leverage the power of data to optimize operations, improve customer experiences, and drive sales growth. Discover how our technology can revolutionize your business today!",
      image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxN3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16SHMDXGAEQTXVNMFFET",
      name: "AI Analytics Solution for Businesses",
      description: "Transform your data into actionable insights with our cutting-edge AI analytics solution. Designed specifically for bars, restaurants, and coffee shops, our product enhances decision-making and boosts operational efficiency. Leverage advanced algorithms to analyze customer behavior, optimize inventory, and improve service quality. Elevate your business with data-driven strategies that lead to increased revenue and customer satisfaction. Discover the future of analytics tailored for the hospitality industry.",
      image: "https://images.unsplash.com/photo-1522071901873-411886a10004?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNnx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16SR0XACSBAFTW5CAVPY",
      name: "AI Analytics Solutions for Businesses",
      description: "Discover our cutting-edge AI analytics solutions designed specifically for the data analytics and AI department. Our product enhances decision-making for bars, restaurants, and coffee shops by providing actionable insights through data visualization. With user-friendly interfaces and powerful algorithms, you can effortlessly track performance metrics and customer preferences. Transform your business operations and elevate your service quality with our innovative tools tailored for the hospitality industry.",
      image: "https://images.unsplash.com/photo-1587400563263-e77a5590bfe7?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyN3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16T0TCP9YY829WQQ7BJR",
      name: "AI-Powered Data Analytics Tool",
      description: "Introducing our cutting-edge AI-powered data analytics tool designed specifically for the food and beverage industry. This innovative product helps bars, restaurants, and coffee shops harness the power of data to enhance customer experiences, optimize operations, and drive sales. With intuitive dashboards and real-time insights, you can make informed decisions that elevate your business. Transform your data into actionable strategies and stay ahead in a competitive market.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOHx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16T7CHWFPCGH1GCRQ10G",
      name: "AI-Driven Analytics Tool",
      description: "Introducing our cutting-edge AI-driven analytics tool designed specifically for the data analytics and AI departments in bars, restaurants, and coffee shops. This innovative product empowers businesses to harness data insights, optimize operations, and enhance customer experiences. With intuitive dashboards and real-time reporting, you can make informed decisions that drive growth and efficiency. Transform your establishment with our advanced analytics solution today!",
      image: "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTczODA2MjU5NHww&ixlib=rb-4.0.3"
    },
    {
      id: "prod_01JJQD16ZNYC9CQ8M56P9KN9GD",
      name: "AI Analytics Tool for Businesses",
      description: "Introducing our cutting-edge AI Analytics Tool designed specifically for the data analytics and AI departments of bars, restaurants, and coffee shops. This product empowers businesses to harness data insights, optimize operations, and enhance customer experiences. With intuitive dashboards and real-time analytics, you can make informed decisions that drive growth and efficiency. Elevate your business with our innovative solution tailored for the hospitality industry.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTczODA2MjU5NHww&ixlib=rb-4.0.3"
    }
  ],
  assets: {
    logo: "/UVA_logo.png",
    heroVideo: "https://videos.pexels.com/video-files/8059189/8059189-uhd_2732_1440_25fps.mp4",
    serviceVideo: "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4",
    images: {
      dataAnalytics: "https://images.unsplash.com/photo-1673255745677-e36f618550d1?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyM3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHx8fDE3MzgwNjI1OTR8MA&ixlib=rb-4.0.3",
      embedded: "https://images.unsplash.com/photo-1595692682118-774e5182f484?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8ZW1iZWRkZWQlMjBzeXN0ZW1zfGVufDB8fHx8MTczODIzMjIxOXww&ixlib=rb-4.0.3",
      aiIntro: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxBSXxlbnwwfHx8fDE3MzgyMjkxNjl8MA&ixlib=rb-4.0.3",
      contact: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzM4MTg4MTY5fDA&ixlib=rb-4.0.3"
    }
  },
  leadership: {
    hero: {
      headline: "The Minds Shaping UVA",
      subheadline: "Empowering Change & Inspiring Collective Action",
      description: "UVA is a collective of three passionate individuals dedicated to making a meaningful impact in our community and beyond. We believe in the power of collaboration and innovation to drive change.",
    },
    mission: {
      headline: "Our Vision, Our Mission",
      description: "Our journey began with a shared vision to create something that truly matters. Together, we strive to inspire others and foster a sense of community through our initiatives and projects.",
      quote: "\"Karmanye vadhikaraste ma phaleshu kadachana, Ma karmaphalaheturbhurma te sangostvakarmani.\" — Krushn",
    },
    team: [
      {
        name: "Ushaswini Verma",
        role: "Director",
        quote: "\"Peace Begins with Smile\"",
        linkedin: "https://www.linkedin.com/in/ushaswini-verma-mupparapu-879026302/",
        email: "mailto:ushaswini_mupparapu@uvaproit.com"
      },
      {
        name: "Abhishek Kola",
        role: "Director, Head of Products & Innovations",
        quote: "\"Yad Bhavam, Tad Bhavathi\"",
        linkedin: "https://www.linkedin.com/in/abhishek-kola-ak/",
        email: "mailto:abhishek_kola@uvaproit.com"
      },
      {
        name: "Vishal Verma",
        role: "Director, Head of Operations ",
        quote: "\"As a Man Thinketh — So is he\"",
        linkedin: "https://www.linkedin.com/in/vishal-verma-mupparapu-955a92270/",
        email: "mailto:vishal_verma@uvaproit.com"
      }
    ]
  },
  careers: {
    hero: {
      headline: "Explore Career Opportunities",
      description: "Join us at UVA and discover exciting job openings tailored for your skills and aspirations."
    },
    about: {
      heading: "Empowering Your Career Journey",
      description1: "Welcome to our careers page, where we connect talented individuals with exciting job opportunities. Explore various positions and take the next step in your professional journey with us.",
      image1: {
        url: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxqb2IlMjBhcHBsaWNhdGlvbnxlbnwwfHx8fDE3MzgxNTY4MjN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "a sign that says we are hiring and apply today"
      },
      subheading: "Join Our Team",
      heading2: "Explore Career Opportunities",
      description2: "Our mission is to provide a platform for job seekers to find fulfilling careers. We are dedicated to helping you navigate your career path and achieve your professional goals."
    },
    contact: {
      heading: "Get In Touch",
      description: "Reach out for inquiries about job applications or career opportunities on our UVA careers page.",
      image: {
        url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxqb2IlMjBhcHBsaWNhdGlvbnxlbnwwfHx8fDE3MzgxNTY4MjN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "white printer paper beside silver laptop computer"
      }
    },
    resources: {
      heading: "Career Opportunities Available",
      description: "Explore various job openings and apply for positions that match your skills and aspirations.",
      portal_title: "Job Application Portal",
      portal_desc: "Submit your application easily and track your job progress on our user-friendly platform.",
      portal_image: {
        url: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMXx8am9iJTIwYXBwbGljYXRpb258ZW58MHx8fHwxNzM4MTU2ODIzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "two person standing on gray tile paving"
      },
      hub_title: "Career Resources Hub",
      hub_desc: "Access valuable resources, tips, and guidance to enhance your job search and career development.",
      hub_image: {
        url: "https://images.unsplash.com/photo-1573496130407-57329f01f769?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8am9iJTIwYXBwbGljYXRpb258ZW58MHx8fHwxNzM4MTU2ODIzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "three women sitting at the table"
      }
    }
  },
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "24 July 2026",
    intro: [
      "This website, uvaproit.com, is operated by UVA Product and IT Services Limited, a company registered in the United Kingdom.",
      "UVA Product and IT Services Limited is the data controller responsible for personal information collected through this website.",
      "Our affiliated company and authorised team in India may access limited personal information to assist with enquiries, product discussions and business operations."
    ],
    sections: [
      {
        heading: "Who We Are",
        paragraphs: [
          "UK entity: UVA Product and IT Services Limited (Company number: 15807431, Registered office: Park House, 37 Clarence Street, Leicester, Leicestershire, England, LE1 3RW)",
          "India entity: UVA Product and IT Service IND PVT LTD (Registered office: Hanamkonda, Warangal, Telangana, India, 506001)",
          "Contact: enquiries@uvaproit.com"
        ]
      },
      {
        heading: "Information We Collect",
        paragraphs: ["We may collect information that you provide through our website, including:"],
        bullets: [
          "Name",
          "Email address",
          "Telephone number",
          "Company and job title",
          "Product or business interests",
          "Information included in your enquiry",
          "Newsletter preferences, where applicable"
        ],
        footer: "Our website and hosting systems may also process limited technical information, including IP addresses, browser information and security logs."
      },
      {
        heading: "How We Use Your Information",
        paragraphs: ["We use personal information to:"],
        bullets: [
          "Respond to enquiries",
          "Arrange product demonstrations and meetings",
          "Provide information about DP360, Pardha, AURA and other UVA products",
          "Manage prospective customer, partner and supplier relationships",
          "Send marketing communications where you have consented or where otherwise permitted",
          "Operate, maintain and protect our website",
          "Comply with legal obligations"
        ],
        footer: "We process information based on legitimate business interests, your consent, steps requested before entering into a contract, performance of a contract, or compliance with legal obligations."
      },
      {
        heading: "Sharing and International Access",
        paragraphs: [
          "We do not sell personal information.",
          "We may share information with authorised employees, our affiliated India entity and service providers that support website hosting, email, cloud storage, security, forms and business communications.",
          "Because members of our authorised team and certain service providers may be located outside the United Kingdom, including in India, personal information may be accessed internationally. Where required, we use appropriate contractual and organisational safeguards to protect the information."
        ]
      },
      {
        heading: "Cookies",
        paragraphs: [
          "We may use cookies or similar technologies that are strictly necessary for website security and functionality.",
          "Where we use optional analytics, marketing or tracking technologies, we will request consent where required and provide appropriate cookie controls."
        ]
      },
      {
        heading: "Data Retention",
        paragraphs: [
          "We keep personal information only for as long as reasonably necessary.",
          "General enquiries and prospective customer information will normally be retained for up to three years after the last meaningful interaction, unless a longer period is required for legal, contractual or accounting purposes."
        ]
      },
      {
        heading: "Your Rights",
        paragraphs: ["Depending on applicable law, you may have the right to:"],
        bullets: [
          "Access your personal information",
          "Correct inaccurate information",
          "Request deletion or restriction",
          "Object to certain processing",
          "Withdraw consent",
          "Object to direct marketing",
          "Request data portability in applicable circumstances"
        ],
        footer: "To exercise your rights, contact enquiries@uvaproit.com. You may also complain to the UK Information Commissioner’s Office at ico.org.uk."
      },
      {
        heading: "Security",
        paragraphs: [
          "We use reasonable technical and organisational measures to protect personal information. However, no internet transmission or electronic storage system can be guaranteed to be completely secure."
        ]
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy when our website, products, business operations or legal requirements change. The latest version will always be published on this page."
        ]
      },
      {
        heading: "Contact",
        paragraphs: [
          "For privacy-related questions, contact: enquiries@uvaproit.com"
        ]
      }
    ]
  },
  termsAndConditions: {
    title: "Website Terms of Use",
    lastUpdated: "24 July 2026",
    intro: [
      "These Website Terms of Use apply when you access or use https://uvaproit.com.",
      "The website is operated by UVA Product and IT Services Limited, a company registered in England and Wales (“UVA”, “we”, “us” or “our”).",
      "The website may also contain information about products, technology and activities developed or supported by our affiliated UVA company and authorised team in India.",
      "By using this website, you agree to these Terms. If you do not agree, please stop using the website."
    ],
    sections: [
      {
        heading: "1. About These Terms",
        paragraphs: [
          "These Website Terms of Use apply when you access or use https://uvaproit.com.",
          "The website is operated by UVA Product and IT Services Limited, a company registered in England and Wales (“UVA”, “we”, “us” or “our”).",
          "The website may also contain information about products, technology and activities developed or supported by our affiliated UVA company and authorised team in India.",
          "By using this website, you agree to these Terms. If you do not agree, please stop using the website."
        ]
      },
      {
        heading: "2. Website Purpose",
        paragraphs: [
          "This website provides general information about UVA and its products, including DP360, Pardha and AURA.",
          "The website allows visitors to:"
        ],
        bullets: [
          "Learn about our products and technology",
          "Submit business or product enquiries",
          "Request demonstrations or meetings",
          "Contact UVA regarding partnerships, careers or other matters"
        ],
        footer: "Accessing this website or submitting an enquiry does not automatically create a customer, supplier, partnership, employment or other contractual relationship. Any product or service engagement will be governed by a separate written agreement, proposal, order form or contract identifying the relevant UVA entity."
      },
      {
        heading: "3. Use of the Website",
        paragraphs: [
          "You may use the website only for lawful purposes.",
          "You must not:"
        ],
        bullets: [
          "Attempt to gain unauthorised access to the website or its systems",
          "Introduce viruses, malicious code or harmful material",
          "Interfere with the operation or security of the website",
          "Use automated systems to excessively scrape or copy website content",
          "Use the website in a fraudulent, unlawful or misleading manner",
          "Misrepresent your identity when submitting an enquiry"
        ],
        footer: "We may restrict or block access where we reasonably believe the website is being misused."
      },
      {
        heading: "4. Enquiries and Submissions",
        paragraphs: ["When submitting information through the website, you confirm that:"],
        bullets: [
          "The information is accurate to the best of your knowledge",
          "You are authorised to provide it",
          "Your submission does not infringe another person’s rights",
          "Your submission does not contain unlawful or malicious material"
        ],
        footer: "We may use the information to respond to your enquiry in accordance with our Privacy Policy. Please do not submit confidential, commercially sensitive or special-category personal information through a general website contact form unless specifically requested."
      },
      {
        heading: "5. Intellectual Property",
        paragraphs: [
          "Unless otherwise stated, the website and its content—including text, designs, graphics, software demonstrations, product names, logos, images and other materials—are owned by or licensed to UVA and its affiliated entities.",
          "You may view and download reasonable portions of the website for your own internal, non-commercial evaluation.",
          "You must not reproduce, modify, distribute, commercially exploit or publicly display website content without prior written permission.",
          "“UVA”, “DP360”, “Pardha”, “AURA” and associated branding may be trademarks or protected brand assets of UVA or its affiliated entities."
        ]
      },
      {
        heading: "6. Product Information and Availability",
        paragraphs: [
          "Website content is provided for general information and product-evaluation purposes.",
          "Product descriptions, features, visuals, timelines, use cases and roadmaps may change as our products evolve.",
          "Certain capabilities shown or described may be: Available features, Prototype or demonstration capabilities, Features under development, or Planned or future applications.",
          "Website content does not constitute a binding offer, warranty or commitment that a particular feature, product or deployment will be available.",
          "Confirmed functionality, pricing, delivery dates, service levels and contractual commitments will be stated only in a separate written agreement."
        ]
      },
      {
        heading: "7. Accuracy and Availability",
        paragraphs: [
          "We take reasonable care to keep website information accurate and current, but we do not guarantee that all content will always be complete, error-free or up to date.",
          "We may change, suspend or withdraw any part of the website without notice.",
          "We do not guarantee that the website will always be available, uninterrupted or free from security vulnerabilities."
        ]
      },
      {
        heading: "8. Third-Party Links",
        paragraphs: [
          "The website may contain links to websites, platforms or services operated by third parties.",
          "These links are provided for convenience only. We do not control and are not responsible for third-party content, availability, security or privacy practices.",
          "A link does not necessarily mean that UVA endorses or approves the third party."
        ]
      },
      {
        heading: "9. Limitation of Liability",
        paragraphs: [
          "Nothing in these Terms excludes or limits liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation.",
          "To the extent permitted by law, UVA will not be liable for losses caused by reliance on general website information, loss of profits, revenue, business, opportunity or anticipated savings, indirect or consequential loss, loss caused by website interruption, malware or third-party services, or loss resulting from unauthorised or improper use of the website.",
          "These Website Terms do not limit liability arising under a separate written product or service agreement."
        ]
      },
      {
        heading: "10. Privacy and Cookies",
        paragraphs: [
          "Our collection and use of personal information is explained in our Privacy Policy.",
          "Information about cookies and similar technologies is also provided in the Privacy Policy or through the website’s cookie controls, where applicable."
        ]
      },
      {
        heading: "11. Changes to These Terms",
        paragraphs: [
          "We may update these Terms to reflect changes to our website, products, business operations or legal requirements.",
          "The updated Terms will be published on this page with a revised “Last updated” date."
        ]
      },
      {
        heading: "12. Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of England and Wales.",
          "The courts of England and Wales will have jurisdiction over disputes relating to these Terms, subject to any mandatory rights that apply under applicable law."
        ]
      },
      {
        heading: "13. Contact",
        paragraphs: [
          "Questions regarding these Terms may be sent to: UVA Product and IT Services Limited",
          "Email: enquiries@uvaproit.com",
          "Company number: 15807431",
          "Registered office: Park House, 37 Clarence Street, Leicester, Leicestershire, England, LE1 3RW"
        ]
      }
    ]
  },
  services: [
    {
      id: "data-analytics",
      title: "Data Analytics & AI",
      description: "Turning raw data into actionable insights with AI-driven analytics.",
      link: "/data-analysis-services"
    },
    {
      id: "embedded-solutions",
      title: "Embedded Solutions",
      description: "Embedded Software & Hardware Solutions – Designing intelligent, high-performance systems.",
      link: "/embedded-solutions"
    },
    {
      id: "cybersecurity",
      title: "CyberSecurity",
      description: "Protecting digital assets with robust security frameworks.",
      link: "/cybersecurity-services"
    },
    {
      id: "web-app",
      title: "Web & App Development",
      description: "Crafting seamless, scalable, and user-centric digital experiences.",
      link: "/webapp-development"
    }
  ],
  quote: {
    text: '"At UVA, we specialize in delivering cutting-edge technology solutions to empower businesses and drive innovation. Whether you need custom development or advanced tech solutions, we’ve got you covered."'
  },
  contact: {
    heading: "What are you building?",
    subheading: "Custom development or embedded systems — tell us what you're building, and we'll tell you how fast we can get there.",
    phones: ["+44 7747523054", "+91 9949919473"],
    emails: ["enquiries@uvaproit.com", "enquiries@uvaproit.in"],
    offices: {
      uk: {
        title: "UK Office",
        company: "UVA Product and IT Service Limited",
        address: "Park House, 37 Clarence Street, Leicester, Leicestershire, England, LE1 3RW",
        email: "enquiries@uvaproit.com",
        phone: "+44 7747523054"
      },
      ind: {
        title: "IND Office",
        company: "UVA Product and IT IND Service Limited",
        address: "Hanamkonda, Warangal, Telangana, India, 506001",
        email: "enquiries@uvaproit.in",
        phone: "+91 9949919473"
      }
    }
  },
  footer: {
    copyright: "© 2024 UVA Product and IT Services Limited. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-and-conditions" }
    ]
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products", isDropdown: true },
    { label: "About Us", href: "/uva-leadership" },
  ]
};

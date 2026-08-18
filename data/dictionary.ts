export type Language = "en" | "ar";

export interface DictionaryContent {
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    startProject: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    videoCaption: string;
    videoSubcaption: string;
    trustPoint1: string;
    trustPoint2: string;
    trustPoint3: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    description: string;
    milestoneLabel: string;
    stages: {
      step: string;
      name: string;
      title: string;
      desc: string;
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    craftLabel: string;
    items: {
      id: string;
      title: string;
      shortDescription: string;
      outcome: string;
    }[];
  };
  beyondSurface: {
    eyebrow: string;
    title: string;
    description: string;
    capabilities: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    featuredBadge: string;
    visitLive: string;
    viewDetails: string;
    grandCafe: {
      category: string;
      title: string;
      subtitle: string;
      summary: string;
      tags: string[];
      cta: string;
    };
    projects?: Record<string, {
      title: string;
      category: string;
      summary: string;
    }>;
    upcomingTitle: string;
  };
  brandVideo: {
    eyebrow: string;
    statement: string;
    subtext: string;
    purposeTitle: string;
    purposeDesc: string;
    flightTitle: string;
    flightDesc: string;
  };
  whyBuildify: {
    eyebrow: string;
    title: string;
    description: string;
    pillarLabel: string;
    reasons: {
      title: string;
      desc: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
  };
  finalCta: {
    question: string;
    buildLine: string;
    flyLine: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    whatsappNote: string;
  };
  footer: {
    description: string;
    philosophyTitle: string;
    tagline: string;
    navTitle: string;
    connectTitle: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  common: {
    whatsappMessage: string;
    contentNeeded: string;
  };
}

export const dictionary: Record<Language, DictionaryContent> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      contact: "Contact",
      startProject: "Start a Project",
    },
    hero: {
      badge: "Digital Studio & Product Craft",
      headlinePart1: "You bring the idea.",
      headlinePart2: "We build it. We make it fly.",
      subheadline:
        "From first concept to a high-quality digital experience, Buildify turns ideas into products designed to perform, connect, and grow.",
      primaryCta: "Start a Project",
      secondaryCta: "Explore Our Work",
      videoCaption: "Built for Ideas. Designed to Fly.",
      videoSubcaption: "3D Architectural Motion & Product Craft",
      trustPoint1: "Performance & Speed",
      trustPoint2: "Mobile-First UX",
      trustPoint3: "SEO & AI Ready",
    },
    philosophy: {
      eyebrow: "Core Process",
      title: "BUILD + FLY — From Idea to Flight",
      description:
        "A clear, proven four-stage methodology that turns raw concepts into flying digital products.",
      milestoneLabel: "Phase Milestone",
      stages: [
        {
          step: "01",
          name: "IMAGINE",
          title: "Strategy & Concept",
          desc: "Understand the core idea, audience, and business goals to map out a winning strategy.",
        },
        {
          step: "02",
          name: "BUILD",
          title: "Design & Engineering",
          desc: "Turn ideas into custom UI design and high-craft responsive code.",
        },
        {
          step: "03",
          name: "LAUNCH",
          title: "Optimization & Go-Live",
          desc: "Test performance across devices, optimize SEO, and launch smoothly.",
        },
        {
          step: "04",
          name: "FLY",
          title: "Growth & Evolution",
          desc: "Continuously refine, scale, and help your product create real business impact.",
        },
      ],
    },
    services: {
      eyebrow: "What We Build",
      title: "Focused digital experiences engineered around business growth.",
      description:
        "We specialize in high-impact digital solutions that deliver tangible results.",
      craftLabel: "Buildify Craft",
      items: [
        {
          id: "web-design-development",
          title: "Web Design & Development",
          shortDescription:
            "Bespoke digital experiences built around your brand identity and business objectives.",
          outcome: "Brand Authority & Engagement",
        },
        {
          id: "landing-pages",
          title: "High-Impact Landing Pages",
          shortDescription:
            "Laser-focused pages engineered around messaging clarity and high conversion rates.",
          outcome: "Maximum Lead Conversion",
        },
        {
          id: "ecommerce",
          title: "E-Commerce Experiences",
          shortDescription:
            "Online shopping experiences designed to make product discovery and purchasing simple.",
          outcome: "Higher Transaction Volume",
        },
        {
          id: "saas-platforms",
          title: "SaaS & Digital Platforms",
          shortDescription:
            "Scalable platform architectures engineered for long-term growth and user retention.",
          outcome: "Long-Term Scalability",
        },
        {
          id: "ui-ux-design",
          title: "UI/UX Design Systems",
          shortDescription:
            "Interfaces that feel clear, intuitive, elegant, and intentional across every device.",
          outcome: "Frictionless User Experience",
        },
      ],
    },
    beyondSurface: {
      eyebrow: "Engineering Rigor",
      title: "Built Beyond the Surface",
      description:
        "A great digital experience looks good and performs exceptionally under the hood.",
      capabilities: [
        {
          title: "Performance & Speed",
          desc: "Sub-second initial loading built for real-world mobile networks.",
          icon: "zap",
        },
        {
          title: "Responsive Design",
          desc: "Flawlessly designed for phones, tablets, laptops, and wide displays.",
          icon: "smartphone",
        },
        {
          title: "SEO Foundations",
          desc: "Clean technical structure and metadata for maximum search discoverability.",
          icon: "search",
        },
        {
          title: "AI Search Ready (AEO)",
          desc: "Structured schema markup designed to be understood by AI answer engines.",
          icon: "cpu",
        },
        {
          title: "Security & Reliability",
          desc: "Security-conscious architecture and robust standards-based development.",
          icon: "shield",
        },
        {
          title: "Accessibility (WCAG AA)",
          desc: "Inclusive design built to be usable by a wider range of people.",
          icon: "eye",
        },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      title: "A look at what we've been building.",
      description:
        "Real project showcases engineered for design excellence and tangible business results.",
      featuredBadge: "Featured Project",
      visitLive: "Visit Live Website",
      viewDetails: "View Details",
      grandCafe: {
        category: "Restaurant Digital Experience",
        title: "Grand Café",
        subtitle: "Digital Hospitality & Menu Experience",
        summary:
          "A bespoke digital experience built around brand storytelling, responsive menu discovery, and online customer engagement.",
        tags: [
          "Web Design",
          "Development",
          "Performance",
          "SEO",
          "Responsive Experience",
        ],
        cta: "View Case Study",
      },
      projects: {
        "grand-cafe": {
          title: "Grand Café",
          category: "Restaurant & Hospitality",
          summary: "A digital menu website built to showcase the café's offerings. We focused on a fast, mobile-friendly design, making it easy for customers to browse the menu and contact the business.",
        },
        "sayed-nada-portfolio": {
          title: "Sayed Nada Portfolio",
          category: "Personal Portfolio",
          summary: "A personal portfolio website focused on clean presentation. We built a simple user experience with subtle animations to highlight the designer's projects without slowing down the site.",
        },
        "su-it-guide": {
          title: "SU IT Guide",
          category: "Educational Guide",
          summary: "A digital resource guide for IT students. We organized study materials and roadmaps into a simple, mobile-friendly interface for quick access on the go.",
        },
        "ziko-portfolio": {
          title: "Ziko Portfolio",
          category: "Personal Portfolio",
          summary: "A personal showcase for creative projects. Designed with a card-based layout and clear typography to make project discovery and navigation as frictionless as possible.",
        },
      },
      upcomingTitle: "Modular Project Architecture",
    },
    brandVideo: {
      eyebrow: "Brand Vision",
      statement: "Built with purpose. Made to fly.",
      subtext: "Crafted with architectural precision and attention to every interaction.",
      purposeTitle: "Built With Purpose",
      purposeDesc: "Architectural precision, clean scalable code, and strategic UX.",
      flightTitle: "Made To Fly",
      flightDesc: "Engineered for high conversion, brand authority, and sustainable growth.",
    },
    whyBuildify: {
      eyebrow: "Studio Pillars",
      title: "Why Buildify",
      description:
        "We combine creative design vision with serious engineering discipline.",
      pillarLabel: "Pillar",
      reasons: [
        {
          title: "Purpose Over Decoration",
          desc: "Every visual decision and layout structure serves an intentional business purpose.",
        },
        {
          title: "Design + Engineering",
          desc: "Beautiful editorial visual experiences backed by thoughtful, performant code.",
        },
        {
          title: "Details Matter",
          desc: "Uncompromising attention to micro-interactions, typography, and accessibility.",
        },
        {
          title: "Built Beyond Launch",
          desc: "Every digital asset is architected so your product has room to evolve.",
        },
        {
          title: "Business First",
          desc: "Your digital experience is built to support actual conversion and growth.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "Clear Answers About Buildify",
      description: "Everything you need to know about our services, process, and how to start.",
    },
    finalCta: {
      question: "Got an idea?",
      buildLine: "Let's build it.",
      flyLine: "Let's make it fly.",
      subtext:
        "Ready to transform your idea into a high-performance digital experience? Talk directly with our team today.",
      primaryCta: "Start Your Project",
      secondaryCta: "Explore Our Work",
      whatsappNote: "Direct WhatsApp Response",
    },
    footer: {
      description:
        "Buildify is a modern digital studio transforming ambitious concepts into high-performance, beautifully crafted digital experiences engineered for growth.",
      philosophyTitle: "Core Philosophy",
      tagline: "You bring the idea. We build it. We make it fly.",
      navTitle: "Navigation",
      connectTitle: "Connect",
      rights: "All rights reserved. Built with purpose.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    common: {
      whatsappMessage: "Hello Buildify team! I have an idea I'd like to build and make fly.",
      contentNeeded: "CONTENT NEEDED",
    },
  },
  ar: {
    nav: {
      services: "خدماتنا",
      work: "أعمالنا",
      about: "إزاي بنشتغل",
      contact: "تواصل معنا",
      startProject: "ابدأ مشروعك",
    },
    hero: {
      badge: "استوديو رقمي وتطوير منتجات",
      headlinePart1: "عندك الفكرة؟",
      headlinePart2: "إحنا بنبنيها ونطير بيها.",
      subheadline:
        "من أول فكرة بتيجي في بالك لحد ما تتحول لتجربة رقمية احترافية، بيلدفاي بتحول أفكارك لمواقع ومنتجات مصممة عشان تشتغل صح وتكبر وتنجح.",
      primaryCta: "ابدأ مشروعك دلوقتي",
      secondaryCta: "شوف شغلنا",
      videoCaption: "مبني صح. متصمم ينجح.",
      videoSubcaption: "تصميمات تفاعلية وبرمجة على أعلى مستوى",
      trustPoint1: "سرعة وأداء استثنائي",
      trustPoint2: "تجربة ممتازة على الموبايل",
      trustPoint3: "جاهز للـ SEO والذكاء الاصطناعي",
    },
    philosophy: {
      eyebrow: "طريقة شغلنا",
      title: "من الفكرة للنجاح — أربع خطوات سريعة",
      description:
        "طريقة عمل واضحة ومجربة عشان نحول فكرتك لمنتج رقمي بيكسبك.",
      milestoneLabel: "مرحلة الإنجاز",
      stages: [
        {
          step: "01",
          name: "التخطيط",
          title: "فهم البزنس بتاعك",
          desc: "بندرس فكرتك، وبنفهم جمهورك وأهدافك عشان نرسم خطة ناجحة من البداية.",
        },
        {
          step: "02",
          name: "البناء",
          title: "التصميم والبرمجة",
          desc: "بنحول الفكرة لتصميم جذاب وسهل، مع كود برمجي سريع وممتاز.",
        },
        {
          step: "03",
          name: "الإطلاق",
          title: "التجربة والنشر",
          desc: "بنجرب الموقع على كل الأجهزة، وبنظبط الـ SEO قبل ما نطلع لايف بأمان.",
        },
        {
          step: "04",
          name: "النمو",
          title: "التطوير والمتابعة",
          desc: "مش بنسيبك بعد الإطلاق، بنتابع معاك ونطور عشان المشروع يجيب نتائج حقيقية.",
        },
      ],
    },
    services: {
      eyebrow: "خدماتنا",
      title: "بنعمل تجارب رقمية هدفها تزود أرباحك وعملائك.",
      description:
        "تركيزنا كله على الحلول الديجيتال اللي بتجيب نتائج ومبيعات ملموسة.",
      craftLabel: "اللي بنميز بيه",
      items: [
        {
          id: "web-design-development",
          title: "تصميم وتطوير المواقع",
          shortDescription:
            "مواقع احترافية مصممة مخصوص عشان تبرز البراند بتاعك وتخدم أهدافك.",
          outcome: "هيبة البراند وتفاعل قوي",
        },
        {
          id: "landing-pages",
          title: "صفحات الهبوط (Landing Pages)",
          shortDescription:
            "صفحات سريعة ومركزة جداً مصممة علشان تضاعف نسبة المبيعات وتجيب عملاء أكتر.",
          outcome: "أعلى نسبة تحويل (Conversion)",
        },
        {
          id: "ecommerce",
          title: "المتاجر الإلكترونية",
          shortDescription:
            "متاجر سريعة وسهلة بتخلي عملية الشراء للعميل بسيطة وتزود مبيعاتك.",
          outcome: "زيادة في حجم المبيعات",
        },
        {
          id: "saas-platforms",
          title: "منصات الـ SaaS والأنظمة",
          shortDescription:
            "أنظمة قوية قابلة للتوسع مصممة للشركات والمشاريع اللي محتاجة تكبر بمرونة.",
          outcome: "بنية قوية جاهزة للتوسع",
        },
        {
          id: "ui-ux-design",
          title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
          shortDescription:
            "واجهات مريحة، واضحة، وشكلها شيك جداً على أي جهاز موبايل أو لابتوب.",
          outcome: "تجربة مستخدم سهلة ومريحة",
        },
      ],
    },
    beyondSurface: {
      eyebrow: "الهندسة والبرمجة",
      title: "بنهتم باللي وراء الكواليس",
      description:
        "الموقع الشاطر مش بس شكله حلو، ده لازم يكون سريع ومبني على أساس برمجي قوي جداً.",
      capabilities: [
        {
          title: "أداء وسرعة طلقة",
          desc: "الموقع بيحمل في أقل من ثانية، ومتصمم يشتغل بسرعة حتى على باقات الموبايل الضعيفة.",
          icon: "zap",
        },
        {
          title: "متجاوب مع كل الشاشات",
          desc: "تصميم بيظبط نفسه أوتوماتيك على الموبايل، التابلت، أو الشاشات الكبيرة.",
          icon: "smartphone",
        },
        {
          title: "تجهيز كامل للـ SEO",
          desc: "بنية برمجية نظيفة تضمن ظهور موقعك بسرعة في الصفحة الأولى لجوجل.",
          icon: "search",
        },
        {
          title: "جاهز للذكاء الاصطناعي (AEO)",
          desc: "داتا منظمة بيسهل على محركات الذكاء الاصطناعي الحديثة إنها تفهمها وتقترحها.",
          icon: "cpu",
        },
        {
          title: "حماية وأمان عالي",
          desc: "بنية برمجية متأمنة كويس جداً وضد ثغرات الويب المعروفة.",
          icon: "shield",
        },
        {
          title: "سهولة الوصول (Accessibility)",
          desc: "تصميم شامل بيسمح لكل فئات المستخدمين إنهم يتصفحوا الموقع بسهولة.",
          icon: "eye",
        },
      ],
    },
    work: {
      eyebrow: "شغلنا",
      title: "بصة سريعة على شوية من أعمالنا.",
      description:
        "أمثلة حقيقية لمشاريع عملناها بهدف واحد: تصميم مبهر ونتائج حقيقية للبزنس.",
      featuredBadge: "شغل مميز",
      visitLive: "زور الموقع لايف",
      viewDetails: "تفاصيل المشروع",
      grandCafe: {
        category: "تجربة رقمية للمطاعم",
        title: "Grand Café — جراند كافيه",
        subtitle: "تجربة ضيافة رقمية وقائمة طعام تفاعلية",
        summary:
          "موقع مخصص مبني عشان يعكس فخامة المكان، مع منيو تفاعلية بتسهل على العميل يطلب أو يتواصل.",
        tags: [
          "تصميم مواقع",
          "تطوير برمجي",
          "أداء سريع",
          "SEO محلي",
          "تجربة موبايل",
        ],
        cta: "شوف تفاصيل المشروع",
      },
      projects: {
        "grand-cafe": {
          title: "Grand Café",
          category: "المطاعم والضيافة",
          summary: "موقع إلكتروني صممناه لعرض قائمة الطعام (المنيو) بشكل ديجيتال سريع. ركزنا على إن التصميم يكون مريح على الموبايل عشان يسهل على العملاء تصفح الأصناف والتواصل مع المطعم مباشرة.",
        },
        "sayed-nada-portfolio": {
          title: "Sayed Nada Portfolio",
          category: "بورتفوليو شخصي",
          summary: "موقع شخصي لعرض الأعمال (بورتفوليو). ركزنا على بناء تجربة مستخدم بسيطة، مع ترتيب المشاريع بشكل يبرز المهارات. استخدمنا تأثيرات حركية خفيفة عشان تدي روح للموقع.",
        },
        "su-it-guide": {
          title: "SU IT Guide",
          category: "دليل أكاديمي",
          summary: "دليل أكاديمي مبسط لطلاب الكلية. الموقع بيجمع مصادر المذاكرة في مكان واحد متقسم بشكل واضح، وتصميمه مبني أساساً عشان يكون سريع وسهل التصفح من الموبايل.",
        },
        "ziko-portfolio": {
          title: "Ziko Portfolio",
          category: "معرض أعمال",
          summary: "معرض أعمال شخصي مبني بتصميم بسيط. اعتمدنا فيه على طريقة الكروت لعرض المشاريع بوضوح، عشان الزاير يقدر يتصفح ويوصل لروابط المشاريع الحية بسهولة.",
        },
      },
      upcomingTitle: "نظام مشاريع مرن",
    },
    brandVideo: {
      eyebrow: "رؤيتنا",
      statement: "مبني صح. متصمم ينجح.",
      subtext: "بنصنع مواقعنا بدقة شديدة واهتمام بكل تفصيلة وحركة في الموقع.",
      purposeTitle: "مبني على أساس",
      purposeDesc: "كود برمجي قوي، سريع، وتجربة مستخدم مدروسة بعناية.",
      flightTitle: "متصمم ينجح",
      flightDesc: "هدفنا نزودلك المبيعات، نعلي من قيمة البراند بتاعك، ونساعدك تكبر.",
    },
    whyBuildify: {
      eyebrow: "ليه تختارنا؟",
      title: "ليه بيلدفاي؟",
      description:
        "عشان إحنا بنجمع بين التصميم الإبداعي والبرمجة النظيفة القوية.",
      pillarLabel: "ميزة أساسية",
      reasons: [
        {
          title: "النتائج قبل الشكل",
          desc: "كل قرار في التصميم بيبقى مبني على إنه يجيبلك نتيجة ومبيعات أكتر، مش مجرد شكل حلو.",
        },
        {
          title: "شكل حلو + برمجة قوية",
          desc: "تجارب بصرية بتخطف العين، مدعومة بكود سريع ومبيقعش.",
        },
        {
          title: "بنهتم بالتفاصيل",
          desc: "بنركز جداً في أصغر الحركات والتفاعلات وأنواع الخطوط اللي بنستخدمها.",
        },
        {
          title: "معاك بعد الإطلاق",
          desc: "موقعك بيبقى مبني بطريقة تخليه سهل يتطور ويكبر معاك بعدين في أي وقت.",
        },
        {
          title: "البزنس بتاعك أولاً",
          desc: "كل سطر كود بنكتبه هدفه إنه يخدم أهدافك وتزود عملائك الحقيقيين.",
        },
      ],
    },
    faq: {
      eyebrow: "أسئلة بتتكرر كتير",
      title: "كل اللي محتاج تعرفه عن بيلدفاي",
      description: "أهم الأسئلة عن خدماتنا، وطريقة شغلنا، وإزاي نبدأ مشروعك.",
    },
    finalCta: {
      question: "عندك فكرة مشروع؟",
      buildLine: "يلا نبنيها.",
      flyLine: "ويلا نطير بيها.",
      subtext:
        "جاهز تحول فكرتك لموقع وتجربة رقمية احترافية؟ تواصل مع فريقنا مباشرة دلوقتي وكلمنا عن مشروعك.",
      primaryCta: "كلمنا نبدأ مشروعك",
      secondaryCta: "استكشف أعمالنا",
      whatsappNote: "بنرد عليك فوراً على واتساب",
    },
    footer: {
      description:
        "بيلدفاي هو استوديو رقمي حديث بيحول الأفكار لمشاريع وتجارب رقمية سريعة ومصممة بعناية عشان تكبر وتنجح.",
      philosophyTitle: "فلسفتنا باختصار",
      tagline: "عندك الفكرة؟ إحنا بنبنيها ونطير بيها.",
      navTitle: "روابط سريعة",
      connectTitle: "تواصل معنا",
      rights: "جميع الحقوق محفوظة. مصنوع باهتمام.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
    common: {
      whatsappMessage: "أهلاً فريق بيلدفاي! عندي فكرة مشروع وحابب نتناقش فيها.",
      contentNeeded: "مطلوب محتوى",
    },
  },
};

export type PortfolioCategory = "client" | "product" | "other";

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  url?: string;
  client?: string;
  category: PortfolioCategory;
  /** Lower number = shown first within its category */
  rank: number;
  /** Set to true to show on /portfolio */
  enabled: boolean;
  source: "vercel" | "manual";
  vercelProjectId?: string;
  domains?: string[];
};

export const portfolioCategoryOrder: PortfolioCategory[] = [
  "client",
  "product",
  "other",
];

export const portfolioCategoryLabels: Record<
  PortfolioCategory,
  { title: string; subtitle: string }
> = {
  client: {
    title: "Client Work",
    subtitle: "Websites and tools built for businesses and individuals.",
  },
  product: {
    title: "Full Products",
    subtitle: "Complete apps and platforms I've built and shipped.",
  },
  other: {
    title: "Other",
    subtitle: "Event pages, personal projects, and one-offs.",
  },
};

/**
 * Curate what appears on /portfolio by toggling `enabled`.
 * Order with `rank` within each category (lower = higher on the page).
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "vang-coffee-bar",
    title: "Vang Coffee Bar",
    description:
      "Full website for a Vietnamese coffee bar with menu, hours, catering, events, and the owner's story. Built so customers can find the shop, learn what's offered, and get in touch.",
    url: "https://www.vangcoffeebar.com",
    client: "Vang Coffee Bar",
    category: "client",
    rank: 1,
    enabled: true,
    source: "manual",
  },
  {
    id: "home-appliances-li",
    title: "Nick's Home Appliances",
    description:
      "Website for a Long Island appliance repair company. Helps local customers see available services, request a free quote, and reach the team quickly from their phone.",
    url: "https://home-appliances-li.vercel.app",
    category: "client",
    rank: 2,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_qFRbA0Wl0wyCUwuCs6KRBcwz7J2f",
  },
  {
    id: "davitt-electric",
    title: "Davitt Electric",
    description:
      "Website for a licensed electrician in Massachusetts. Highlights services, shares customer reviews, and includes a contact form so new clients can request help.",
    url: "https://davitt-electric.vercel.app",
    client: "Davitt Electric",
    category: "client",
    rank: 3,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_gUdKol7lZ0bnjg73uyT0Wwk4J9td",
  },
  {
    id: "as-web",
    title: "Anisa Spaho",
    description:
      "Personal website for a creative professional: a clean, simple place to share their work and introduce themselves online.",
    url: "https://www.anisaspaho.com",
    client: "Anisa Spaho",
    category: "client",
    rank: 4,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_mnlcLkZ32kg8wxnbWT8dxnNq2pFH",
  },
  {
    id: "inventory-tracker",
    title: "Inventory Tracker",
    description:
      "Custom tool that helps a restaurant keep track of supplies, spot items running low, and stay organized across the kitchen and storage areas.",
    url: "https://inventory-tracker-omega-six.vercel.app",
    category: "client",
    rank: 5,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_yqfPyjtRLzLcmdICjIeCGkSbIdiR",
  },
  {
    id: "paranumeron",
    title: "Paranumeron",
    description:
      "Website for a financial equipment company. Showcases safes, cash counting machines, and banking security products, with company background and contact details for customers across the country.",
    url: "https://www.paranumeron.com",
    category: "client",
    rank: 6,
    enabled: true,
    source: "manual",
  },
  {
    id: "masscourtsplus",
    title: "MassCourtsPlus",
    description:
      "Search tool for Massachusetts court records. Lets people look up cases and trends using everyday language, built to handle over a million records reliably.",
    url: "https://masscourtsplus.com",
    category: "product",
    rank: 1,
    enabled: true,
    source: "manual",
  },
  {
    id: "fineprint",
    title: "FinePrint",
    description:
      "Web app that reads contracts and explains them in plain English, so people can understand what they're agreeing to before they sign.",
    url: "https://www.fineprint.dev",
    category: "product",
    rank: 2,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_lJIfcZsB4JIdcdC7wKI8l3j0Zxef",
  },
  {
    id: "attention-arsenal-web",
    title: "Attention Arsenal",
    description:
      "Website for a focus and reminders app on the iPhone App Store. Explains the product, its features, and where to download it.",
    url: "https://attentionarsenal.com",
    category: "product",
    rank: 3,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_e2FMT7UEpM1k71GU3iJF85YYj926",
  },
  {
    id: "tradeguard",
    title: "TradeGuard AI",
    description:
      "Online tool that reviews business documents and flags potential problems before deals move forward.",
    url: "https://tradeguardai.com",
    category: "product",
    rank: 4,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_Y9X0SBBGxbKEJG3em6Q3gYTyD65U",
    domains: [
      "tradeguardai.com",
      "tradeguard-mrsinanis-projects.vercel.app",
    ],
  },
  {
    id: "moneyfi",
    title: "MoneyFi",
    description:
      "App that connects financial accounts in one place and helps people understand their spending and saving habits.",
    url: "https://www.moneyfiapp.com",
    category: "product",
    rank: 5,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_2ty1jrAAOF4KNNWlxDTgoqfMq8Vw",
  },
  {
    id: "cl1ppy",
    title: "Cl1ppy",
    description:
      "Website for a free browser assistant that introduces the product, explains how it works, and guides people to install it.",
    url: "https://www.cl1ppy.boston",
    category: "product",
    rank: 6,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_IYD4jniTNnfnrbC3NnbvlGTfqh4E",
    domains: ["www.cl1ppy.boston", "cl1ppy-landingpage.vercel.app"],
  },
  {
    id: "bitlook",
    title: "Bitlook",
    description:
      "Online dashboard for viewing and exploring data in a clear, organized layout.",
    url: "https://bitlook-mrsinanis-projects.vercel.app",
    category: "product",
    rank: 7,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_LSDmJGvHmPz8lM4LlyYy9y64e0Dq",
  },
  {
    id: "attendance-app",
    title: "Attendance App",
    description:
      "Simple online tool for tracking attendance and keeping check-in records organized.",
    url: "https://attendance-app-indol-two.vercel.app",
    category: "other",
    rank: 1,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_FEuF2aYSpDECBz1PlcArJum2QuOL",
  },
  {
    id: "music-ensamble",
    title: "BU Global Music Ensemble",
    description:
      "Event page for a university music group's open house, with when it happens, where to go, and what guests can expect.",
    url: "https://www.mh561.xyz",
    category: "other",
    rank: 2,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_wkFrkRqp6BX89FLmlXyZG5FV55Hh",
  },
  {
    id: "meme-website",
    title: "Albania Nature Gallery",
    description:
      "Photo gallery and travel guide showcasing destinations across Albania, including parks, coastlines, and scenic spots.",
    url: "https://meme-website-sable.vercel.app",
    category: "other",
    rank: 3,
    enabled: true,
    source: "vercel",
    vercelProjectId: "prj_bC0DctDou7iAtvxxwKuFdGvoS2Bw",
  },
];

export function getEnabledPortfolioProjects() {
  return portfolioProjects
    .filter((project) => project.enabled)
    .sort((a, b) => a.rank - b.rank);
}

export function getEnabledPortfolioProjectsByCategory() {
  return portfolioCategoryOrder
    .map((category) => ({
      category,
      ...portfolioCategoryLabels[category],
      projects: portfolioProjects
        .filter((project) => project.enabled && project.category === category)
        .sort((a, b) => a.rank - b.rank),
    }))
    .filter((section) => section.projects.length > 0);
}

import {
  getEnabledPortfolioProjectsByCategory,
  type PortfolioProject,
} from "@/lib/portfolio-projects";
import type { GitHubStats } from "@/lib/github-stats";

export const SITE_URL = "https://danaidsinani.com";

export const profile = {
  name: "Danaid Sinani",
  title: "Software Engineer",
  tagline:
    "Full-stack developer and ML engineer building production systems that solve real problems at scale.",
  bio: "I build full-stack applications and ML systems that solve real problems at scale. Currently engineering NLP-to-SQL tooling at Civera.",
  email: "danaid@bu.edu",
  phone: "(917) 972-4855",
  phoneTel: "+19179724855",
  birthdate: "2003-08-11",
  website: SITE_URL,
  linkedin: "https://linkedin.com/in/mrsinani/",
  github: "https://github.com/mrsinani",
  resume:
    "https://docs.google.com/document/d/1lxr2HLnieNsidhHZqYtyw5R_e1kjxvcrAiXzkPuaaPg/edit?usp=sharing",
  education: {
    school: "Boston University",
    degree: "B.S. Computer Science",
    period: "Sep 2022 – May 2026",
  },
  skills: {
    tools:
      "React, Python, Next.js, TypeScript, Node.js, Tailwind, GraphQL, Supabase, Prisma, MySQL, PostgreSQL, Docker, GitHub Actions, CI/CD",
    aiMl: "OpenAI API, GPT-4o, LLM Prompt Engineering, Azure Cognitive Services",
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Civera",
      period: "Jan 2026 – Present",
      description:
        "Engineered a natural-language-to-SQL analytics platform enabling non-technical users to query millions of Massachusetts court records in plain English, with a multi-stage GPT-4o pipeline and real-time SSE streaming.",
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Massachusetts Registry of Deeds",
      period: "Sep 2025 – Dec 2025",
      description:
        "Architected a modular OCR + vision-language pipeline that transcribed and structured 269,000+ historical handwritten index entries dating back to the 1600s. Launched a searchable app for archival and public research use.",
    },
    {
      role: "Software Engineer Intern",
      company: "MILL5",
      period: "May 2025 – Sep 2025",
      description:
        "Engineered backend services using Azure and Node.js, integrating Salesforce and ZoomInfo APIs to automate data aggregation and lead enrichment, reducing latency by over 40%.",
    },
    {
      role: "Full Stack Engineer Intern",
      company: "Civera",
      period: "Jan 2025 – May 2025",
      description:
        "Shipped a full-stack Next.js application enabling sub-200ms search across 6M+ court records. Built resilient backend infrastructure with 99.9% uptime.",
    },
    {
      role: "AI Fellow",
      company: "MIT",
      period: "May 2024 – May 2025",
      description:
        "Designed and deployed an AI pipeline integrating a fine-tuned 2D CNN with automated classification logic, achieving 82% accuracy on broadband network impairment detection, replacing a fully manual review process.",
    },
  ],
  awards: [
    { title: "1st Place — EasyA Harvard Hackathon", date: "Sep 2025" },
    { title: "3rd Place — Avalanche Blockchain BU Hackathon", date: "Mar 2025" },
    { title: "Best dApp Deployed on Linea — ETHPrague 2024", date: "Jun 2024" },
  ],
  projects: [
    {
      title: "Fineprint",
      url: "https://fineprint.dev",
      description:
        "AI-powered contract analysis platform that gives users plain-English summaries, clause-by-clause risk scores, and actionable checklists before they sign anything. Shipped across three surfaces: a web app for PDF/DOCX uploads, a native iOS app with a built-in document scanner, and a Chrome extension that auto-detects Terms of Service pages for one-click analysis.",
      tech: "Next.js, TypeScript, Supabase, GPT-4o, GraphQL, Clerk, Swift, Chrome Extensions",
    },
    {
      title: "Attention Arsenal",
      url: "https://attentionarsenal.com",
      description:
        "The reminder app that never gives up. I kept snoozing my notifications while brainrotting, so I made an app that fights back. 400+ users and 12.6K+ App Store impressions.",
      tech: "Swift, Core Data, iCloud, Scheduled Notifications",
    },
    {
      title: "Crypto Cribs",
      url: "https://github.com/theonlyhennygod/Crypto-Cribs/",
      award: "1st Place — Composable dApps Track",
      description:
        "Decentralized travel platform replacing Airbnb with blockchain-powered transparency. Built at EASYA Hackathon @ Harvard.",
      tech: "Blockchain, Web3, React",
    },
    {
      title: "TradeGuard AI",
      url: "https://tradeguardai.com",
      description:
        "AI platform helping commodity traders identify fraudulent documents and assess transaction risks through sophisticated analysis.",
      tech: "React, TypeScript, Express, OpenAI, Supabase",
    },
    {
      title: "MassCourtsPlus",
      description:
        "Next.js app providing public access to Massachusetts court case data with sub-200ms search across 6M+ records and 99.9% uptime.",
      tech: "Next.js, TypeScript, Prisma, MySQL, Clerk",
    },
    {
      title: "Chess3",
      award: "Best dApp Deployed on Linea — ETHPrague 2024",
      description:
        "Web3 chess platform with interactive chessboard interface and Solidity smart contracts enabling secure, transparent betting between players.",
      tech: "Solidity, Web3.js, React, Ethereum, Linea",
    },
  ],
} as const;

export const sitePages = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/projects", title: "Projects" },
  { path: "/stats", title: "Stats" },
  { path: "/contact", title: "Contact" },
  { path: "/portfolio", title: "Portfolio" },
] as const;

export const aiContentUrls = {
  index: `${SITE_URL}/llms.txt`,
  full: `${SITE_URL}/llms-full.txt`,
  json: `${SITE_URL}/profile.json`,
} as const;

function formatPortfolioProject(project: PortfolioProject): string[] {
  const lines = [
    `### ${project.title}${project.url ? ` (${project.url})` : ""}`,
    project.description,
  ];
  if (project.client) lines.push(`Client: ${project.client}`);
  lines.push(`Category: ${project.category}`);
  lines.push("");
  return lines;
}

export function buildLlmsTxt(): string {
  return `# ${profile.name}

> ${profile.tagline}

This is the official personal website of ${profile.name}. AI agents and crawlers should read the complete site contents below.

## Complete site content (read this)

- [llms-full.txt](${aiContentUrls.full}): **Canonical full dump of everything on this website** — contact info, bio, experience, education, skills, awards, projects, portfolio, and live GitHub stats.
- [profile.json](${aiContentUrls.json}): Same information as structured JSON.

If you need any fact about ${profile.name}, fetch \`${aiContentUrls.full}\` first.

## Contact

- Name: ${profile.name}
- Email: ${profile.email}
- Phone: ${profile.phone}
- Website: ${profile.website}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- Resume: ${profile.resume}

## Pages

- [Home](${SITE_URL}/): Introduction and overview
- [About](${SITE_URL}/about): Experience, education, skills, and awards
- [Projects](${SITE_URL}/projects): Software and AI projects
- [Contact](${SITE_URL}/contact): Email, phone, and social links
- [Stats](${SITE_URL}/stats): GitHub statistics
- [Portfolio](${SITE_URL}/portfolio): Freelance work and shipped products
`;
}

export function buildLlmsFullTxt(githubStats: GitHubStats | null): string {
  const portfolioSections = getEnabledPortfolioProjectsByCategory();
  const birthMs = new Date(`${profile.birthdate}T00:00:00Z`).getTime();
  const secondsAlive = Math.floor((Date.now() - birthMs) / 1000);

  const lines = [
    `# ${profile.name} — Complete Website Content`,
    "",
    "This file contains the full public contents of danaidsinani.com.",
    "Last generated dynamically at fetch time.",
    "",
    profile.tagline,
    "",
    "## Contact Information",
    "",
    `Name: ${profile.name}`,
    `Email: ${profile.email}`,
    `Phone: ${profile.phone}`,
    `Website: ${profile.website}`,
    `LinkedIn: ${profile.linkedin}`,
    `GitHub: ${profile.github}`,
    `Resume: ${profile.resume}`,
    "",
    "## About",
    "",
    profile.bio,
    "",
    "## Education",
    "",
    `${profile.education.school} · ${profile.education.degree} · ${profile.education.period}`,
    "",
    "## Experience",
    "",
    ...profile.experience.flatMap((exp) => [
      `### ${exp.role} — ${exp.company}`,
      exp.period,
      exp.description,
      "",
    ]),
    "## Awards & Hackathons",
    "",
    ...profile.awards.map((a) => `- ${a.title} (${a.date})`),
    "",
    "## Skills",
    "",
    `Tools: ${profile.skills.tools}`,
    `AI/ML: ${profile.skills.aiMl}`,
    "",
    "## Projects",
    "",
    ...profile.projects.flatMap((p) => {
      const block = [
        `### ${p.title}${"url" in p && p.url ? ` (${p.url})` : ""}`,
        p.description,
      ];
      if ("award" in p && p.award) block.push(`Award: ${p.award}`);
      block.push(`Tech: ${p.tech}`, "");
      return block;
    }),
    "## Portfolio (Client Work & Shipped Products)",
    "",
    ...portfolioSections.flatMap((section) => [
      `### ${section.title}`,
      section.subtitle,
      "",
      ...section.projects.flatMap(formatPortfolioProject),
    ]),
    "## Stats",
    "",
    `Birthdate: ${profile.birthdate}`,
    `Seconds alive (at fetch time): ${secondsAlive.toLocaleString("en-US")}`,
    ...(githubStats
      ? [
          `GitHub username: ${githubStats.username}`,
          `GitHub profile: ${githubStats.profileUrl}`,
          `Public repos: ${githubStats.publicRepos}`,
          `Total stars: ${githubStats.totalStars}`,
          `Years on GitHub: ${githubStats.yearsOnGithub}`,
        ]
      : [
          "GitHub stats: unavailable at fetch time. See https://github.com/mrsinani",
        ]),
    "",
    "## Site pages",
    "",
    ...sitePages.map(
      (p) => `- ${p.title}: ${SITE_URL}${p.path === "/" ? "" : p.path}`
    ),
  ];

  return lines.join("\n");
}

export function buildProfileJson(githubStats: GitHubStats | null) {
  const portfolioSections = getEnabledPortfolioProjectsByCategory();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: profile.website,
    email: profile.email,
    telephone: profile.phoneTel,
    birthDate: profile.birthdate,
    description: profile.tagline,
    sameAs: [profile.linkedin, profile.github, profile.resume],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.school,
    },
    knowsAbout: profile.skills.tools.split(", "),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "personal",
      email: profile.email,
      telephone: profile.phoneTel,
      url: `${SITE_URL}/contact`,
    },
    hasOccupation: profile.experience.map((exp) => ({
      "@type": "Role",
      roleName: exp.role,
      startDate: exp.period.split(" – ")[0],
      worksFor: { "@type": "Organization", name: exp.company },
      description: exp.description,
    })),
    award: profile.awards.map((a) => a.title),
    mainEntityOfPage: SITE_URL,
    about: profile.bio,
    education: profile.education,
    skills: profile.skills,
    projects: profile.projects,
    portfolio: portfolioSections.map((section) => ({
      category: section.title,
      subtitle: section.subtitle,
      items: section.projects.map((p) => ({
        title: p.title,
        description: p.description,
        url: p.url,
        client: p.client,
      })),
    })),
    stats: githubStats
      ? {
          github: githubStats,
          birthdate: profile.birthdate,
          secondsAlive: Math.floor(
            (Date.now() - new Date(`${profile.birthdate}T00:00:00Z`).getTime()) /
              1000
          ),
        }
      : { birthdate: profile.birthdate, github: null },
    aiContentIndex: aiContentUrls.index,
    aiContentFull: aiContentUrls.full,
  };
}

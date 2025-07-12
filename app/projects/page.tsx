"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const projects = [
    {
      title: "MoneyFi - Financial Independence App",
      description:
        "Developed a comprehensive financial independence planning application that helps users map out their journey to FI while taking future life events into account. The platform provides advanced analytics, progress tracking, and scenario planning to help users understand how future decisions impact their FI timeline.",
      technologies:
        "React, Next.js, TypeScript, Node.js, Financial APIs, Data Analytics, Chart.js, Tailwind CSS",
      keyFeatures: [
        "Financial Independence timeline planning with future life events integration",
        "Personal finance analysis and investment analytics with data import capabilities",
        "Progress tracking and historical data analysis with trend detection",
        "Scenario planning: 'What if' analysis for major life decisions",
        "Automated calculations replacing manual spreadsheets and faulty assumptions",
        "Expense categorization, tagging, and pattern recognition analytics",
      ],
      link: "https://www.moneyfi.app/",
      timeline: "2020 - Present",
      delay: 0.05,
    },
    {
      title: "TradeGuard AI",
      description:
        "Developed a comprehensive SaaS platform that leverages advanced AI to help commodity brokers and traders identify fraudulent trade documents and assess transaction risks. The platform processes trade documents through sophisticated AI analysis to provide detailed risk assessments and fraud detection.",
      technologies:
        "React 18, TypeScript, Vite, Material-UI, Tailwind CSS, Express.js, Supabase PostgreSQL, OpenAI API, Stripe, Railway, Docker",
      keyFeatures: [
        "Custom GPT-4 assistant with specialized trade document analysis",
        "Multi-stage analysis pipeline with structured data extraction",
        "Risk scoring algorithm with weighted fraud indicators",
        "Automated CI/CD pipeline with environment-specific configurations",
      ],
      link: "https://tradeguardai.com/",
      timeline: "Apr 2025 - Present",
      delay: 0.1,
    },
    {
      title: "MassCourts Version 3",
      description:
        "A Next.js web application that provides public access to Massachusetts court case data with advanced search and filtering capabilities. The platform features streaming search results, multi-criteria filtering, detailed case information display, and user authentication.",
      technologies:
        "Next.js, React, TypeScript, Prisma ORM, MySQL, Material-UI, Tailwind CSS, Clerk Authentication",
      keyFeatures: [
        "Streaming search with real-time results processing",
        "Multi-criteria filtering (court, case type, status, date range)",
        "Resilient data access layer with JSON fallback for high availability",
        "Robust error handling and graceful degradation",
      ],
      timeline: "Jan 2025 - May 2025",
      company: "Associated with Civera",
      delay: 0.2,
    },
    {
      title: "Chess3 | ETH Prague",
      description:
        "Led frontend integration using React and Chess.js to create an interactive chessboard interface for Web3 users. Collaborated on backend implementation using Solidity, deploying smart contracts which enable secure, transparent betting between players.",
      award: 'Won the "Best dApp Deployed on Linea" award at ETH Prague 2024',
      technologies: "Solidity, Web3.js, React, Ethereum, Linea, Chess.js",
      delay: 0.3,
    },
    {
      title: "Attention Arsenal | HACKTCNJ",
      description:
        "Collaborated in a team to set up a variety of programs that aid people struggling with ADHD. Created innovative solutions to help improve focus and attention management through technology.",
      award: 'Won Hackathon Award "Most Creative Use of Twilio"',
      technologies: "Arduino, Python, Flask, Twilio API, HTML/CSS, JavaScript",
      delay: 0.4,
    },
    {
      title: "Personal Website",
      description:
        "Built a responsive and visually appealing personal portfolio website using Next.js and Tailwind CSS, showcasing projects, skills, and achievements. Implemented dynamic routing and SEO optimization to enhance discoverability and user experience.",
      technologies: "Next.js, Tailwind CSS, React, TypeScript, Framer Motion",
      delay: 0.5,
    },
  ];

  return (
    <div
      className="max-h-[calc(100vh-120px)] overflow-y-auto ai-style-change-1"
      style={{ marginTop: "80px", position: "relative", top: "0px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: project.delay }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  {project.title && (
                    <h2 className="text-2xl font-bold text-black mb-2">
                      {project.title}
                    </h2>
                  )}
                  {project.timeline && (
                    <p className="text-sm text-gray-600 mb-1">
                      {project.timeline}
                    </p>
                  )}
                  {project.company && (
                    <p className="text-sm text-blue-600 mb-2">
                      {project.company}
                    </p>
                  )}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Visit Site →
                  </a>
                )}
              </div>

              {project.description && (
                <p className="text-black mb-4">{project.description}</p>
              )}

              {project.keyFeatures && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.award && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                  <p className="text-black font-semibold text-sm">
                    🏆 {project.award}
                  </p>
                </div>
              )}

              {project.technologies && (
                <div>
                  <p className="text-black text-sm">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Attention Arsenal",
      description:
        "Native iOS reminder app with 5.8K+ App Store impressions. Features Core Data persistence, iCloud sync, and scheduled notifications.",
      tech: "Swift, SwiftUI, Core Data, iCloud",
      link: "https://attentionarsenal.com",
    },
    {
      title: "Crypto Cribs",
      description:
        "Decentralized travel platform replacing Airbnb with blockchain-powered transparency. Built at EASYA Hackathon @ Harvard.",
      award: "1st Place - Composable dApps Track",
      tech: "Blockchain, Web3, React",
      link: "https://github.com/theonlyhennygod/Crypto-Cribs/",
    },
    {
      title: "TradeGuard AI",
      description:
        "AI platform helping commodity traders identify fraudulent documents and assess transaction risks through sophisticated analysis.",
      tech: "React, TypeScript, Express, OpenAI, Supabase",
      link: "https://tradeguardai.com",
    },
    {
      title: "MassCourtsPlus",
      description:
        "Next.js app providing public access to Massachusetts court case data with sub-200ms search across 6M+ records and 99.9% uptime.",
      tech: "Next.js, TypeScript, Prisma, MySQL, Clerk",
    },
    {
      title: "Chess3",
      description:
        "Web3 chess platform with interactive chessboard interface and Solidity smart contracts enabling secure, transparent betting between players.",
      award: "Best dApp Deployed on Linea - ETH Prague 2024",
      tech: "Solidity, Web3.js, React, Ethereum, Linea",
    },
  ];

  return (
    <div className="scroll-container" style={{ marginTop: "80px" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-black">
                  {project.title}
                </h2>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/70 hover:text-black text-sm"
                  >
                    View →
                  </a>
                )}
              </div>

              <p className="text-black/80 mb-3">{project.description}</p>

              {project.award && (
                <p className="text-sm font-semibold text-black mb-2">
                  {project.award}
                </p>
              )}

              <p className="text-sm text-gray-600">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

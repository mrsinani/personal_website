"use client";
import {motion} from 'framer-motion';

export default function Projects() {
    const cardVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {y: 0, opacity: 1}
    };

    const projects = [
        {
            title: "Personal Website",
            description: "Built a responsive and visually appealing personal portfolio website using Next.js and Tailwind CSS, showcasing projects, skills, and achievements. Implemented dynamic routing and SEO optimization to enhance discoverability and user experience, while leveraging GitHub and Vercel for version control and continuous deployment.",
            technologies: "Next.js, Tailwind CSS, React, JavaScript, HTML/CSS",
            delay: 0.2
        },
        {
            title: "Chess3 | ETH Prague",
            description: "Led frontend integration using React and Chess.js to create an interactive chessboard interface for Web3 users. Collaborated on backend implementation using Solidity, deploying smart contracts which enable secure, transparent betting between players.",
            award: "Won the \"Best dApp Deployed on Linea\" award at ETH Prague 2024",
            technologies: "Solidity, Web3.js, React, Ethereum, Linea",
            delay: 0.2
        },
        {
            title: "Attention Arsenal | HACKTCNJ",
            description: "Collaborated in a team to set up a variety of programs that aid people struggling with ADHD.",
            award: "Won Hackathon Award \"Most Creative Use of Twilio\"",
            technologies: "Arduino, Python, Flask, Twilio API, HTML/CSS, JavaScript",
            delay: 0.4
        },
    ];

    return (
        <div className="max-h-[calc(100vh-120px)] overflow-y-auto ai-style-change-1"
        style={{ marginTop: '80px', position: 'relative', top: '0px' }}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className="max-w-3xl mx-auto"
            >
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: project.delay}}
                        >
                            {project.title && <h2 className="text-2xl font-bold text-black mb-4">{project.title}</h2>}
                            {project.description && <p className="text-black mb-4">{project.description}</p>}
                            {project.award && <p className="text-black font-semibold mb-2">{project.award}</p>}
                            {project.technologies && <p className="text-black">Technologies: {project.technologies}</p>}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}


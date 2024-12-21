"use client";
import { motion } from 'framer-motion';

export default function Projects() {
    // Animation variants for project cards
    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bitch"
        >
            <div className="space-y-6">
                {/* Figure out proper padding here */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay: 0.2}}
                >
                    <h2 className="text-2xl font-bold text-black mb-4">this one</h2>

                </motion.div>
                {/* Chess3 Project */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay: 0.2}}
                >
                    <h2 className="text-2xl font-bold text-black mb-4">Chess3 | ETH Prague</h2>
                    <p className="text-black mb-4">
                        Led frontend integration using React and Chess.js to create an interactive chessboard interface
                        for Web3 users.
                        Collaborated on backend implementation using Solidity, deploying smart contracts which enable
                        secure, transparent betting between players.
                    </p>
                    <p className="text-black font-semibold mb-2">Won the "Best dApp Deployed on Linea" award at ETH
                        Prague 2024</p>
                    <p className="text-black">Technologies: Solidity, Web3.js, React, Ethereum, Linea</p>
                </motion.div>


                {/* Attention Arsenal Project */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{delay: 0.4}}
                >
                    <h2 className="text-2xl font-bold text-black mb-4">Attention Arsenal | HACKTCNJ</h2>
                    <p className="text-black mb-4">
                        Collaborated in a team to set up a variety of programs that aid people struggling with ADHD.
                    </p>
                    <p className="text-black font-semibold mb-2">Won Hackathon Award "Most Creative Use of Twilio"</p>
                    <p className="text-black">Technologies: Arduino, Python, Flask, Twilio API, HTML/CSS, JavaScript</p>
                </motion.div>

                {/* TODO: Add more projects here */}
            </div>
        </motion.div>
    );
}


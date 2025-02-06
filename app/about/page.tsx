"use client";
import { motion } from 'framer-motion';

export default function About() {
    // Animation for the content
    const contentAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={contentAnimation}
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg mt-24"
        >
            <h1 className="text-3xl font-bold mb-6 text-black">about me</h1>
            <div className="space-y-6 text-black">
                <p>
                    Hey there! I'm a Computer Science student at Boston University, set to graduate in May 2026.
                    Before BU, I was at Adelphi University. I'm super into AI, software dev, and using tech to solve real-world problems.
                </p>

                <div>
                    <h2 className="text-2xl font-bold mb-3 text-black">Education</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Boston University - B.S. in Computer Science (Jan 2024 - Present)</li>
                        <li>Adelphi University - B.S. in Computer Science (Sep 2022 - Jan 2024)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-3 text-black">Achievements</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Spring '24 Dean's List at Boston University</li>
                        <li>Spring '23 and Fall '23 Dean's List at Adelphi University</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}


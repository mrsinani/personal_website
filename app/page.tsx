"use client";
import {motion} from 'framer-motion';

export default function Home() {
    // TODO: Add more sections to the home page
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
<h1 className="text-6xl font-bold mb-4" style={{ color: '#ffffff' }}>anisa spaho</h1>
                <p className="text-center text-xl text-black/80">
                    <motion.span
                        initial={{opacity: 1}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8}}
                    >
                        {"ome lale"
                            .split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: index * 0.05}}
                                style={{ color: '#ffffff' }}
                            >
                                    {char}
                                </motion.span>
                    
                        ))}</motion.span>
                </p>
                {/* Maybe add a CTA button here later */}
            </motion.div>
        </div>
    );
}
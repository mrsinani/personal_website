"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4 text-black">Danaid Sinani</h1>
        <div className="space-y-2 mb-6">
          <p className="text-lg text-black/80">
            Computer Science @ Boston University
          </p>
        </div>
        <p className="text-center text-xl text-black/80 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {"Building enterprise cloud applications with AI and machine learning."
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                >
                  {char}
                </motion.span>
              ))}
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
}

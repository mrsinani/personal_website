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
          <p className="text-xl text-black/90 font-medium">
            Software Engineer at MILL5
          </p>
          <p className="text-lg text-black/80">
            Computer Science Student at Boston University
          </p>
        </div>
        <p className="text-center text-xl text-black/80 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {"Building enterprise cloud applications with AI and machine learning. I break stuff, I fix stuff. I'm better at breaking stuff."
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Microsoft Azure
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            Machine Learning
          </div>
          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            Full-Stack Development
          </div>
          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            AI Applications
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

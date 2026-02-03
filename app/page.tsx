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
        <p className="text-xl text-black/80 mb-6">CS @ Boston University</p>
        <p className="text-lg text-black/60 max-w-xl mx-auto">
          Full-stack developer and ML engineer building production systems.
        </p>
      </motion.div>
    </div>
  );
}

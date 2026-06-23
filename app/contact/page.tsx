"use client";
import { motion } from "framer-motion";
import { profile } from "@/lib/site-data";

export default function Contact() {
  return (
    <div className="scroll-container mt-[110px] sm:mt-[80px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-black">Contact</h1>
        <div className="space-y-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-black">Email</h2>
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {profile.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-black">Phone</h2>
            <a
              href={`tel:${profile.phoneTel}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {profile.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-black">Social</h2>
            <div className="space-y-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-800"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

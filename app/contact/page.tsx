"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="scroll-container" style={{ marginTop: "80px" }}>
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
              href="mailto:danaid@bu.edu"
              className="text-blue-600 hover:text-blue-800"
            >
              danaid@bu.edu
            </a>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-black">Phone</h2>
            <p className="text-black">(917) 972-4855</p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-black">Social</h2>
            <div className="space-y-2">
              <a
                href="https://linkedin.com/in/mrsinani/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mrsinani"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
              <a
                href="https://docs.google.com/document/d/1lxr2HLnieNsidhHZqYtyw5R_e1kjxvcrAiXzkPuaaPg/edit?usp=sharing"
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

"use client";
import { motion } from "framer-motion";

export default function About() {
  const contentAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="max-h-[calc(100vh-120px)] overflow-y-auto"
      style={{ marginTop: "80px", position: "relative", top: "0px" }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={contentAnimation}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black">about me</h1>
          <div className="space-y-6 text-black">
            <p>
              Hey there! I'm a Computer Science student at Boston University.
              I'm passionate about AI, full-stack development, and using tech to
              solve real-world problems.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-black">
                Work Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold">
                    Machine Learning Engineer Intern · Massachusetts Registry of
                    Deeds
                  </h3>
                  <p className="text-gray-600 text-sm">Sep 2025 - Dec 2025</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                    <li>
                      Built and deployed a modular OCR + vision-language
                      pipeline that transcribed and structured 269,000+
                      historical handwritten Grantor/Grantee index entries
                      dating back to the 1600s
                    </li>
                    <li>
                      Engineered and deployed a searchable Streamlit application
                      over the extracted results, enabling sub-second querying,
                      filtering, and validation of hundreds of thousands of deed
                      records
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold">
                    Software Engineer Intern · MILL5
                  </h3>
                  <p className="text-gray-600 text-sm">May 2025 - Sep 2025</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                    <li>
                      Built and launched backend services using Microsoft Azure
                      and Node.js, integrating Salesforce and ZoomInfo APIs to
                      automate data aggregation and lead enrichment, reducing
                      latency by over 40%
                    </li>
                    <li>
                      Developed Vision AI prototypes with OCR using Azure
                      Cognitive Services and Python to extract and classify text
                      and image data for client applications
                    </li>
                    <li>
                      Collaborated in a six-member team to deploy, monitor, and
                      optimize scalable Azure-based services across development
                      environments
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold">
                    Full Stack Engineer Intern · Civera
                  </h3>
                  <p className="text-gray-600 text-sm">Jan 2025 - May 2025</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                    <li>
                      Shipped a full-stack Next.js application enabling
                      sub-200ms search across 6M+ court records, creating an
                      alternative to masscourts.org
                    </li>
                    <li>
                      Implemented resilient backend infrastructure (Prisma +
                      MySQL), ensuring 99.9% uptime via JSON fallback
                    </li>
                    <li>
                      Directed frontend development with TypeScript, MUI, and
                      Tailwind, increasing mobile accessibility by 40%
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold">AI Fellow · MIT</h3>
                  <p className="text-gray-600 text-sm">May 2024 - May 2025</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                    <li>
                      Trained and fine-tuned a 2D CNN achieving 82% accuracy in
                      classifying broadband network impairments from time-series
                      data
                    </li>
                    <li>
                      Transformed frequency-amplitude readings into normalized
                      2D plots for improved pattern recognition on a dataset of
                      1,000+ samples
                    </li>
                    <li>
                      Collaborated in a research team to deliver findings with
                      20% accuracy improvement over baseline models
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-black">Education</h2>
              <p className="text-black">
                Boston University · B.S. in Computer Science
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-black">Skills</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Languages:</span> Python,
                  Java, C++, C#, SQL, JavaScript, TypeScript, Kotlin, HTML/CSS,
                  OCaml, Node.js
                </p>
                <p>
                  <span className="font-semibold">Tools:</span> Git, Microsoft
                  Azure, Jira, Docker, React.js, TensorFlow, NumPy, Pandas,
                  CUDA, Kubernetes, Ansible, GitLab, Microservices
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

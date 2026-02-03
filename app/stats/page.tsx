"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Stats() {
  const [githubStats, setGithubStats] = useState<{
    publicRepos: number | null;
    totalStars: number | null;
    yearsOnGithub: number | null;
    loading: boolean;
  }>({
    publicRepos: null,
    totalStars: null,
    yearsOnGithub: null,
    loading: true,
  });

  const [secondsAlive, setSecondsAlive] = useState(
    Math.floor(
      (Date.now() - new Date("2003-08-11T23:00:00+02:00").getTime()) / 1000
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAlive(
        Math.floor(
          (Date.now() - new Date("2003-08-11T23:00:00+02:00").getTime()) / 1000
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/mrsinani");
        const userData = await userRes.json();

        const reposRes = await fetch(
          "https://api.github.com/users/mrsinani/repos?per_page=100"
        );
        const reposData = await reposRes.json();

        const totalStars = reposData.reduce(
          (acc: number, repo: { stargazers_count: number }) =>
            acc + repo.stargazers_count,
          0
        );

        const createdAt = new Date(userData.created_at);
        const yearsOnGithub = Math.floor(
          (Date.now() - createdAt.getTime()) / (1000 * 60 * 60 * 24 * 365)
        );

        setGithubStats({
          publicRepos: userData.public_repos,
          totalStars,
          yearsOnGithub,
          loading: false,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
        setGithubStats({
          publicRepos: null,
          totalStars: null,
          yearsOnGithub: null,
          loading: false,
        });
      }
    }

    fetchGitHubStats();
  }, []);

  return (
    <div className="scroll-container" style={{ marginTop: "80px" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-8 text-black">stats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="text-center p-6 bg-white/70 rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-4xl font-bold text-blue-600">
              {githubStats.loading ? "..." : githubStats.publicRepos ?? "—"}
            </p>
            <p className="text-black">Public Repos</p>
          </motion.div>
          <motion.div
            className="text-center p-6 bg-white/70 rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-4xl font-bold text-blue-600">
              {githubStats.loading ? "..." : githubStats.totalStars ?? "—"}
            </p>
            <p className="text-black">Total Stars</p>
          </motion.div>
          <motion.div
            className="text-center p-6 bg-white/70 rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-4xl font-bold text-blue-600">
              {githubStats.loading ? "..." : githubStats.yearsOnGithub ?? "—"}
            </p>
            <p className="text-black">Years on GitHub</p>
          </motion.div>
          <motion.div
            className="text-center p-6 bg-white/70 rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-4xl font-bold text-blue-600">
              {secondsAlive.toLocaleString()}
            </p>
            <p className="text-black">Seconds Alive</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

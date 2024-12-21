import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="mb-12 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600 mb-4">
                I'm a Computer Science student at Boston University, expected to graduate in May 2026. 
                Previously, I studied at Adelphi University. I'm passionate about AI, software development, 
                and using technology to solve real-world problems.
            </p>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Education</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Boston University - B.S. in Computer Science (Jan 2024 - Present)</li>
                <li>Adelphi University - B.S. in Computer Science (Sep 2022 - Jan 2024)</li>
            </ul>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Achievements</h3>
            <ul className="list-disc list-inside text-gray-600">
                <li>Spring '24 Dean's List at Boston University</li>
                <li>Spring '23 and Fall '23 Dean's List at Adelphi University</li>
                <li>Selected for BreakThrough Tech AI Program at MIT</li>
            </ul>
        </section>
    );
};

export default About;


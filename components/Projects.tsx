import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="pt-30 mt-30 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="mt-30 text-3xl font-bold mb-4 text-gray-800">Projects</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">Chess3 | ETH Prague</h3>
                    <p className="text-gray-600">
                        Led frontend integration using React and Chess.js to create an interactive chessboard interface for Web3 users. 
                        Collaborated on backend implementation using Solidity, deploying smart contracts which enable secure, transparent betting between players.
                    </p>
                    <p className="text-gray-600 font-semibold">Won the "Best dApp Deployed on Linea" award at ETH Prague 2024</p>
                    <p className="text-gray-600">Technologies: Solidity, Web3.js, React, Ethereum, Linea</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">Attention Arsenal | HACKTCNJ</h3>
                    <p className="text-gray-600">
                        Collaborated in a team to set up a variety of programs that aid people struggling with ADHD.
                    </p>
                    <p className="text-gray-600 font-semibold">Won Hackathon Award "Most Creative Use of Twilio"</p>
                    <p className="text-gray-600">Technologies: Arduino, Python, Flask, Twilio API, HTML/CSS, JavaScript</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;


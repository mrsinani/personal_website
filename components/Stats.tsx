import React from 'react';

const Stats: React.FC = () => {
    return (
        <section id="stats" className="mb-12 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">3.50</p>
                    <p className="text-gray-600">Current GPA at Boston University</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">3.71</p>
                    <p className="text-gray-600">GPA at Adelphi University</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">150+</p>
                    <p className="text-gray-600">Hours of AI coursework</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">12+</p>
                    <p className="text-gray-600">Programs implemented as RA</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;


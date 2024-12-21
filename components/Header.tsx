import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-12 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Danaid Sinani</h1>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><Link href="#about" className="text-blue-600 hover:text-blue-800">About</Link></li>
                    <li><Link href="#projects" className="text-blue-600 hover:text-blue-800">Projects</Link></li>
                    <li><Link href="#stats" className="text-blue-600 hover:text-blue-800">Stats</Link></li>
                    <li><Link href="#contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;


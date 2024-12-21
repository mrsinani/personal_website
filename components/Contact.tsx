import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="mb-12 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact</h2>
            <ul className="space-y-2">
                <li>
                    <strong>Email:</strong> <a href="mailto:danaid@bu.edu" className="text-blue-600 hover:text-blue-800">danaid@bu.edu</a>
                </li>
                <li>
                    <strong>Phone:</strong> (917) 972-4855
                </li>
                <li>
                    <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mrsinani/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">linkedin.com/in/mrsinani/</a>
                </li>
                <li>
                    <strong>GitHub:</strong> <a href="https://github.com/mrsinani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">github.com/mrsinani</a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;


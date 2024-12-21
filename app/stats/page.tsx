"use client";
import {motion} from 'framer-motion';
import React from 'react';

export default function Stats() {
    return (
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
                    <p className="text-4xl font-bold text-blue-600">3.50</p>
                    <p className="text-black">Current GPA at Boston University</p>
                </motion.div>
                <motion.div 
                    className="text-center p-6 bg-white/70 rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-4xl font-bold text-blue-600">1</p>
                    <p className="text-black"># times arrested</p>
                </motion.div>
                <motion.div 
                    className="text-center p-6 bg-white/70 rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-4xl font-bold text-blue-600">150+</p>
                    <p className="text-black">Hours of AI coursework</p>
                </motion.div>
                <motion.div 
                    className="text-center p-6 bg-white/70 rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-4xl font-bold text-blue-600">
                        {(() => {
                            const [secondsAlive, setSecondsAlive] = React.useState(
                                Math.floor((Date.now() - new Date('2003-08-11T23:00:00+02:00').getTime()) / 1000)
                            );

                            React.useEffect(() => {
                                const interval = setInterval(() => {
                                    setSecondsAlive(
                                        Math.floor((Date.now() - new Date('2003-08-11T23:00:00+02:00').getTime()) / 1000)
                                    );
                                }, 1000);

                                return () => clearInterval(interval);
                            }, []);

                            return secondsAlive.toLocaleString();
                        })()}
                    </p>
                    <p className="text-black">seconds alive</p>
                </motion.div>
            </div>
        </motion.div>
    );
}


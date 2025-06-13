import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGlobe, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50"
        >
            <div className='w-11/12 py-10 mx-auto'>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">About JobTrack</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        JobTrack is your all-in-one job hunting companion. Whether you're searching for your first opportunity or looking to make your next big move, we help connect talent with opportunity.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-base-100 border border-gray-200 shadow-md rounded-xl p-6 text-center"
                    >
                        <FaBriefcase className="text-4xl text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Wide Job Listings</h3>
                        <p className="text-gray-600">
                            Browse thousands of curated jobs across multiple industries, all in one place.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-base-100 border border-gray-200 shadow-md rounded-xl p-6 text-center"
                    >
                        <FaUsers className="text-4xl text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">For All Job Seekers</h3>
                        <p className="text-gray-600">
                            From entry-level to executive positions, JobTrack supports everyone in their career journey.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-base-100 border border-gray-200 shadow-md rounded-xl p-6 text-center"
                    >
                        <FaGlobe className="text-4xl text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Global Access</h3>
                        <p className="text-gray-600">
                            Find jobs locally or globally, and work from anywhere with remote-friendly listings.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose JobTrack?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're committed to making job search seamless, fast, and personalized. With smart filtering, real-time updates, and a user-friendly interface, JobTrack helps you stay ahead in your job search journey.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;

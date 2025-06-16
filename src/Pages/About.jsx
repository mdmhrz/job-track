import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGlobe, FaUsers } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const cardVariants = {
    hover: {
        scale: 1.05,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 15,
        },
    },
};

const About = () => {
    return (
        <>
            <Helmet>
                <title>About | JobTrack</title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-b from-blue-50 to-blue-100 py-16"
            >
                <div className="w-11/12 max-w-7xl mx-auto">
                    {/* Title Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-primary mb-6">About JobTrack</h1>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
                            JobTrack is your ultimate job-hunting companion. Whether you're a fresh graduate or a seasoned professional, we connect talent with opportunity—faster and smarter.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all border border-blue-100"
                        >
                            <FaBriefcase className="text-5xl text-accent mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2 text-primary">Wide Job Listings</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Explore thousands of curated job opportunities from diverse industries—all in one platform.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all border border-blue-100"
                        >
                            <FaUsers className="text-5xl text-accent mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2 text-primary">Inclusive for All</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Whether you're entry-level or executive, we support your journey with tailored job matches.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all border border-blue-100"
                        >
                            <FaGlobe className="text-5xl text-accent mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2 text-primary">Global Reach</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Discover opportunities around the world or work from anywhere with remote-friendly jobs.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold text-primary mb-4">Why Choose JobTrack?</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                            With real-time updates, intelligent filtering, and a seamless experience, JobTrack is designed to simplify your job search—making it more personalized, effective, and inspiring.
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default About;

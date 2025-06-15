import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import bannerImage from '../assets/bannerImage.jpg';

const Banner = ({ onFindJobsClick }) => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={bannerImage}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="w-11/12 mx-auto py-20 relative z-10">
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6"
                            >
                                Find Your Dream Job with{' '}
                                <span className="text-blue-600">Job</span>Track
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-lg text-gray-700 mb-8 max-w-lg"
                            >
                                Explore thousands of job opportunities from top companies all
                                in one place. Track your applications and find the perfect
                                match for your career goals.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                            >
                                <button onClick={onFindJobsClick} id='top-companies' className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium whitespace-nowrap cursor-pointer !rounded-button">
                                    Find Jobs
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;

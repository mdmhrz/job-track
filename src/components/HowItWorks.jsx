import React from 'react';
import { FaCheck, FaFileAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const steps = [
    {
        id: 1,
        icon: <FaSearch className="text-primary" />,
        title: "Explore Opportunities",
        desc: "Browse through thousands of job listings from top companies across various industries.",
    },
    {
        id: 2,
        icon: <FaFileAlt className="text-primary" />,
        title: "Create Your Profile",
        desc: "Build your professional profile to showcase your skills, experience, and career goals.",
    },
    {
        id: 3,
        icon: <FaCheck className="text-primary" />,
        title: "Apply & Connect",
        desc: "Apply directly to positions that match your qualifications and connect with employers.",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How Job Track Works
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Our streamlined process helps you find and apply for your ideal
                        position in just a few simple steps.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-all duration-300"
                            variants={cardVariants}
                        >
                            <div className="absolute -top-5 -left-5 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
                                {step.id}
                            </div>
                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                {step.title}
                            </h3>
                            <p className="text-gray-700 text-center">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;

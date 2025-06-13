import React from 'react';
import { Link } from 'react-router'; // ✅ Fix: 'react-router-dom'
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
};

const Company = ({ company }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl transition duration-300 group"
        >
            <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-full shadow-inner mb-4 ring-2 ring-blue-200">
                    <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 object-contain"
                    />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">
                    {company.name}
                </h3>

                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                    {company.industry}
                </span>

                <p className="text-gray-600 text-sm mt-3 flex items-center justify-center gap-2">
                    <FaMapMarkerAlt className="text-blue-500" />
                    {company.location}
                </p>

                <p className="text-blue-600 text-sm mt-3 font-medium">
                    {company.jobs.length} {company.jobs.length === 1 ? 'job' : 'jobs'} available
                </p>

                <Link
                    to={`/company-details/${company.id}`}
                    className="mt-5 inline-block bg-blue-600 text-white text-sm px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200 font-medium shadow-md"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
};

export default Company;

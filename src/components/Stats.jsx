import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const statsData = [
    {
        id: 1,
        value: 10000,
        label: 'Active Job Listings',
    },
    {
        id: 2,
        value: 500,
        label: 'Partner Companies',
    },
    {
        id: 3,
        value: 85,
        label: 'Successful Placements',
        suffix: '%',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Stats = () => {
    return (
        <section className="bg-blue-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {statsData.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={cardVariants}
                            className="bg-white p-10 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-blue-600 text-5xl font-bold mb-2">
                                <CountUp
                                    end={stat.value}
                                    duration={2}
                                    separator=","
                                    suffix={stat.suffix || ''}
                                />
                            </h3>
                            <p className="text-gray-700 text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;

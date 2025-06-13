import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaChartLine } from 'react-icons/fa';

const statsData = [
    {
        id: 1,
        value: 10000,
        label: 'Active Job Listings',
        icon: <FaBriefcase className="text-blue-600 text-4xl" />,
    },
    {
        id: 2,
        value: 500,
        label: 'Partner Companies',
        icon: <FaBuilding className="text-blue-600 text-4xl" />,
    },
    {
        id: 3,
        value: 85,
        label: 'Successful Placements',
        suffix: '%',
        icon: <FaChartLine className="text-blue-600 text-4xl" />,
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
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="bg-gradient-to-br from-blue-100 to-blue-200 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {statsData.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={cardVariants}
                            className="bg-white/60 backdrop-blur-lg p-10 rounded-2xl shadow-md border border-blue-200 text-center hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-white p-4 rounded-full shadow-lg ring-2 ring-blue-100">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-blue-700 text-4xl font-extrabold mb-2">
                                {inView && (
                                    <CountUp
                                        end={stat.value}
                                        duration={2}
                                        separator=","
                                        suffix={stat.suffix || ''}
                                    />
                                )}
                            </h3>
                            <p className="text-gray-800 text-base font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;

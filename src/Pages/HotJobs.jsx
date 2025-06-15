import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/hotJobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error("Error loading jobs:", err));
    }, []);

    return (
        <div className="bg-gray-50 py-12 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-primary mb-12">Hot Jobs</h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {jobs.map(job => (
                        <motion.div
                            key={job.id}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all"
                        >
                            <img src={job.logo} alt={job.title} className="w-full h-48 object-cover" />

                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                    <span className="text-emerald-500 text-lg">✔</span> {job.company}
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>

                                <div className="flex flex-wrap gap-2 text-sm">
                                    <span
                                        className="px-3 py-1 rounded-full text-white"
                                        style={{ backgroundColor: job.badgeColor }}
                                    >
                                        {job.type}
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full text-white"
                                        style={{ backgroundColor: job.salaryColor }}
                                    >
                                        {job.salary}
                                    </span>
                                </div>

                                <p className="text-gray-600 text-sm">{job.desc}</p>

                                <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                                    <FaMapMarkerAlt />
                                    {job.location}
                                </div>

                                <Link
                                    to={`/jobs/${job.id}`}
                                    className="inline-block mt-4 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotJobs;

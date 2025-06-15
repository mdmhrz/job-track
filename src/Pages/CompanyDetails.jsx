import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router'; // ✅ Fixed import
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaLocationArrow, FaTimes } from 'react-icons/fa';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';

const CompanyDetails = () => {
    const companyData = useLoaderData();
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const targetCompany = companyData.find((c) => c.id === id);
        setCompany(targetCompany);
    }, [companyData, id]);

    if (!company) {
        return (
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-lg text-red-500 py-10"
            >
                Company not found or still loading...
            </motion.p>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 w-11/12 mx-auto "
        >
            {/* Company Info */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-8 mb-10 bg-white rounded-2xl shadow-md p-6"
            >
                <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 object-contain p-2 rounded-xl ring-2 ring-blue-100 bg-white shadow"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{company.name}</h1>
                    <p className="text-gray-500 mt-1">{company.location} • {company.industry}</p>
                    <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 inline-flex items-center gap-1 mt-2 hover:underline text-sm"
                    >
                        Visit Website <FaExternalLinkAlt />
                    </a>
                </div>
            </motion.div>

            {/* Job Listings */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Jobs</h2>
            {company.jobs?.length > 0 ? (
                <div className="grid xl:grid-cols-2 gap-6">
                    {company.jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-5 transition"
                        >
                            <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                            <p className="text-sm text-blue-500">{company.industry}</p>
                            <div className="flex gap-3 mt-3 flex-wrap">
                                <span className="text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded-full">{job.jobType}</span>
                                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{job.salary}</span>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                                <p className="text-sm text-gray-600 flex items-center gap-1">
                                    <FaLocationArrow className="text-blue-500" /> {job.location}
                                </p>
                                <button
                                    className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
                                    onClick={() => setSelectedJob(job)}
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">No job listings available.</p>
            )}

            {/* Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <motion.div
                        key="modal-bg"
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            key="modal-content"
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 80, opacity: 0 }}
                            transition={{ duration: 0.4, type: 'spring', damping: 20 }}
                            className="relative bg-white p-6 w-10/12 md:w-6/12 max-h-[90vh] rounded-xl overflow-auto"
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
                            >
                                <FaTimes size={22} />
                            </button>
                            <img
                                src={selectedJob.bannerImage}
                                alt="Job Banner"
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedJob.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">{selectedJob.location}</p>
                            <div className="flex gap-3 flex-wrap mt-2">
                                <span className="text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded-full">{selectedJob.jobType}</span>
                                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{selectedJob.salary}</span>
                            </div>
                            <p className="mt-4 text-gray-700">{selectedJob.description}</p>
                            <h4 className="mt-5 text-lg font-semibold">Requirements:</h4>
                            <ul className="mt-2 text-gray-700 space-y-2">
                                {selectedJob.requirements.map((req, i) => (
                                    <li className="flex items-start gap-2" key={i}>
                                        <IoArrowForwardCircleSharp className=" mt-1" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
                                onClick={() => window.open(company.website, '_blank')}
                            >
                                Apply on Company Website
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CompanyDetails;

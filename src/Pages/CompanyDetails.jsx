import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaLocationArrow, FaTimes } from 'react-icons/fa';

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
        return <p className="text-center text-lg text-red-500 py-10">Company not found or still loading...</p>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-10 px-4 max-w-5xl mx-auto"
        >
            {/* Company Info */}
            <div className="flex items-center gap-8 mb-6">
                <img src={company.logo} alt={company.name} className="w-20 h-20 rounded-xl object-contain" />
                <div>
                    <h1 className="text-3xl font-bold">{company.name}</h1>
                    <p className="text-gray-500">{company.location} &bull; {company.industry}</p>
                    <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex items-center gap-1 hover:underline mt-1"
                    >
                        Visit Website <FaExternalLinkAlt className="inline-block" />
                    </a>
                </div>
            </div>

            {/* Job Listings */}
            <h2 className="text-2xl font-semibold mb-4">Available Jobs:</h2>
            {company.jobs?.length > 0 ? (
                <div className="grid gap-4">
                    {company.jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white shadow-md p-4 rounded-xl border border-gray-200"
                        >
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <p className='text-accent'>{company.industry}</p>
                            <div className='flex gap-3 mt-3'>
                                <p className="text-sm bg-violet-100 text-violet-700 rounded-xl px-2 py-1">{job.jobType}</p>
                                <p className="text-sm bg-green-100 text-green-700 rounded-xl px-3 py-1">{job.salary}</p>
                            </div>
                            <div className='flex justify-between items-end mt-3'>
                                <p className='flex gap-3 items-center text-sm'>
                                    <FaLocationArrow className='text-accent' /> {job.location}
                                </p>
                                <button className="btn btn-primary btn-sm" onClick={() => setSelectedJob(job)}>
                                    View Job Details
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
                        key="modal"
                        className="fixed inset-0 bg-[#00000068] flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                            >
                                <FaTimes size={20} />
                            </button>
                            <img src={selectedJob.bannerImage} alt="Job Banner" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                            <p className="text-sm text-gray-600 mb-1">{selectedJob.location}</p>
                            <div className='flex gap-3 mt-3'>
                                <p className="text-sm bg-violet-100 text-violet-700 rounded-xl px-2 py-1">{selectedJob.jobType}</p>
                                <p className="text-sm bg-green-100 text-green-700 rounded-xl px-3 py-1">{selectedJob.salary}</p>
                            </div>
                            <p className="my-3 text-gray-700 font-semibold">{selectedJob.description}</p>
                            <h4 className="font-semibold mb-2">Requirements:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                {selectedJob.requirements.map((req, i) => (
                                    <li className='flex items-center gap-3' key={i}>
                                        <FaArrowRight className='text-green-500' /> {req}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="mt-5 w-full btn btn-primary"
                                onClick={() => window.open(company.website, '_blank')}
                            >
                                Apply
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CompanyDetails;

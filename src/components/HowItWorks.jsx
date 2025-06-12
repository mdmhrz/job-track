import React from 'react';
import { FaCheck, FaFile, FaFileAlt, FaSearch } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <div>
            <section className="bg-gray-100 py-16">
                <div className="max-w-11/12 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How JobTrack Works
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Our streamlined process helps you find and apply for your ideal
                            position in just a few simple steps.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Step 1 */}
                        <div className="bg-white rounded-xl shadow-md p-8 relative">
                            <div className="absolute -top-5 -left-5 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                                1
                            </div>
                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <FaSearch className="text-primary"></FaSearch>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Explore Opportunities
                            </h3>
                            <p className="text-gray-700 text-center">
                                Browse through thousands of job listings from top companies
                                across various industries.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-white rounded-xl shadow-md p-8 relative">
                            <div className="absolute -top-5 -left-5 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                                2
                            </div>
                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <FaFileAlt className="text-primary"></FaFileAlt>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Create Your Profile
                            </h3>
                            <p className="text-gray-700 text-center">
                                Build your professional profile to showcase your skills,
                                experience, and career goals.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-white rounded-xl shadow-md p-8 relative">
                            <div className="absolute -top-5 -left-5 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                                3
                            </div>
                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <FaCheck className="text-primary"></FaCheck>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Apply & Connect
                            </h3>
                            <p className="text-gray-700 text-center">
                                Apply directly to positions that match your qualifications and
                                connect with employers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
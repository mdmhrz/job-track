import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Banner = () => {
    return (
        <div >
            <section className="relative">
                <div className="px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Find Your Dream Job With{" "}
                            <span className="text-blue-600">JobTrack</span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8 max-w-lg">
                            Discover thousands of job opportunities from top companies. We
                            connect talented professionals with employers looking for their
                            perfect match.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Find Jobs
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                                For Employers
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-0 relative">
                        <img
                            src="https://images.pexels.com/photos/5439137/pexels-photo-5439137.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5439137.jpg&fm=jpg"
                            alt="Job Search"
                            className="rounded-lg shadow-xl object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
                            <div className="flex items-center">
                                <div className="bg-green-100 rounded-full p-2 mr-3">
                                    <FaCheck className='text-green-500' />
                                </div>
                                <div>
                                    <p className="text-gray-800 font-medium">5,000+ Jobs</p>
                                    <p className="text-gray-500 text-sm">Updated daily</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden md:block border border-base-200">
                            <div className="flex items-center ">
                                <div className="bg-blue-100 rounded-full p-2 mr-3">
                                    <FaCheck className='text-blue-500' />
                                </div>
                                <div className=''>
                                    <p className="text-gray-800 font-medium">500+ Companies</p>
                                    <p className="text-gray-500 text-sm">Hiring now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
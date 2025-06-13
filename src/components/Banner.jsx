import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Banner = () => {
    return (
        <div >
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=professional%20office%20environment%20with%20soft%20gradient%20blue%20background%2C%20people%20working%20on%20computers%2C%20modern%20workspace%20with%20natural%20light%2C%20clean%20and%20minimal%20design%2C%20soft%20colors%20that%20allow%20text%20to%20be%20readable%20on%20left%20side&width=1440&height=600&seq=hero1&orientation=landscape"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="w-11/12 mx-auto py-20 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Find Your Dream Job with{" "}
                                <span className="text-blue-600">JobTrack</span>
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 max-w-lg">
                                Explore thousands of job opportunities from top companies all
                                in one place. Track your applications and find the perfect
                                match for your career goals.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium whitespace-nowrap cursor-pointer !rounded-button">
                                    Find Jobs
                                </button>
                                <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium whitespace-nowrap cursor-pointer !rounded-button">
                                    For Employers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Banner;
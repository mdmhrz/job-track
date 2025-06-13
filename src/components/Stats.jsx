import React from 'react';

const Stats = () => {
    return (
        <div>
            {/* Stats Section */}
            <section className="bg-blue-50 py-16">
                <div className="max-w-10/12 mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="text-blue-600 text-4xl font-bold mb-2">
                                10,000+
                            </div>
                            <p className="text-gray-700">Active Job Listings</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="text-blue-600 text-4xl font-bold mb-2">
                                500+
                            </div>
                            <p className="text-gray-700">Partner Companies</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="text-blue-600 text-4xl font-bold mb-2">85%</div>
                            <p className="text-gray-700">Successful Placements</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;
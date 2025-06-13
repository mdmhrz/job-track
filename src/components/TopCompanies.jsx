import React, { useEffect, useState } from 'react';
import Company from './Company';

const TopCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('/companies_data.json')
            .then(res => res.json())
            .then(data => setCompanies(data));
    }, []);

    const visibleCompanies = showAll ? companies : companies.slice(0, 4);

    return (
        <div className='bg-gray-100'>
            <section className="py-16">
                <div className="w-11/12 mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Top Companies Hiring Now
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Discover opportunities at leading companies across various industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
                        {visibleCompanies.map(company => (
                            <Company key={company.id} company={company} />
                        ))}
                    </div>

                    {companies.length > 4 && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 whitespace-nowrap"
                            >
                                {showAll ? 'Show Less' : 'View All Companies'}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TopCompanies;

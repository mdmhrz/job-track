import React, { useEffect, useState } from 'react';
import Company from './Company';

const TopCompanies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {

        fetch('/companies_data.json').then(res => res.json()).then(data => setCompanies(data))

    }, [])

    // const data = fetch('/companies_data.json');
    console.log(companies);

    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Top Companies Hiring Now
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Discover opportunities at leading companies across various
                            industries.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {companies.map(company => <Company key={company.id} company={company}></Company>)}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="https://readdy.ai/home/9b47f554-4e98-47d3-80d0-928c13b16819/d029c2db-a8a4-44b6-b3fb-9e38e114bd74"
                            data-readdy="true"
                        >
                            <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                                View All Companies
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopCompanies;
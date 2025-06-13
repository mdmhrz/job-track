import React from 'react';
import { Link } from 'react-router';

const Company = ({ company }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
            <div className="flex flex-col items-center">
                <img
                    src={company.logo}
                    alt={company.name}
                    className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                    {company.name}
                </h3>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                    {company.industry}
                </span>
                <p className="text-gray-600 text-sm mt-3 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2 text-gray-500"></i>
                    {company.location}
                </p>
                <p className="text-blue-600 text-sm mt-3 font-medium">
                    {company.jobs.length}{" "}
                    {company.jobs.length === 1 ? "job" : "jobs"} available
                </p>
                <Link to={`/company-details/${company.id}`} className='btn btn-primary w-full mt-5 '>View Details</Link>
            </div>
        </div>
    );
};

export default Company;
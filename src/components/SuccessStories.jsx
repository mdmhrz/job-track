import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';

const SuccessStories = () => {

    const [successStories, setSuccessStories] = useState([])

    // const data = use(successStories);
    // console.log(data);

    useEffect(() => {
        const successData = fetch('./success_stories.json').then(res => res.json()).then(data => {
            setSuccessStories(data)
        })
    }, [])

    // console.log(successStories);

    return (
        <div className='bg-base-100'>
            <section className="py-16">
                <div className="w-11/12 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Success Stories
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Hear from professionals who found their dream jobs through
                            JobTrack.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {successStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-8 border border-base-300">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-20 h-20 rounded-full object-cover mb-6"
                                    />
                                    <div className="text-yellow-400 flex mb-4">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p className="text-gray-700 text-center italic mb-6">
                                        "{story.quote}"
                                    </p>
                                    <h4 className="text-lg font-bold text-center text-gray-900">
                                        {story.name}
                                    </h4>
                                    <p className="text-gray-600 text-center">{story.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <div className="border bg-blue-50 border-base-200 shadow-2xl rounded-xl p-8 max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Ready to Write Your Success Story?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Join thousands of professionals who have found their ideal
                                positions through JobTrack.
                            </p>
                            <Link
                                to='/register'
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Create Your Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
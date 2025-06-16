import React from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaPaperPlane,
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | JobTrack</title>
            </Helmet>
            <motion.section
                className="py-20 bg-blue-50"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6 }}
            >
                <div className="w-11/12 mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-700">Let’s Help You Land Your Dream Job</h2>
                        <p className="text-gray-600 mt-3 text-lg">
                            Whether you're looking to connect or have questions, we're here to support your job hunt.
                        </p>
                    </div>


                    {/* Contact Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-xl overflow-hidden">
                        {/* Left - Contact Info */}
                        <div className="bg-white p-8 space-y-6 border-r border-blue-100 rounded-md">
                            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-blue-100/40 p-3 rounded-lg">
                                    <FaEnvelope className="text-blue-600 text-xl" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600">Email</p>
                                        <p className="text-gray-800">contact@jobtrack.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-blue-100/40 p-3 rounded-lg">
                                    <FaPhoneAlt className="text-blue-600 text-xl" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600">Phone</p>
                                        <p className="text-gray-800">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-blue-100/40 p-3 rounded-lg">
                                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600">Location</p>
                                        <p className="text-gray-800">New York, USA</p>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="mt-8">
                                <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                                        <FaLinkedin className="text-blue-600 text-xl" />
                                    </a>
                                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                                        <FaGithub className="text-blue-600 text-xl" />
                                    </a>
                                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200">
                                        <FaFacebook className="text-blue-600 text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className="p-8 bg-white rounded-md">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="What's this about?"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        placeholder="Tell us how we can help..."
                                        className="textarea textarea-bordered w-full h-32"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    type="submit"
                                    className="btn bg-blue-600 text-white hover:bg-blue-700 w-full flex items-center justify-center gap-2"
                                >
                                    Send Message <FaPaperPlane />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Contact;

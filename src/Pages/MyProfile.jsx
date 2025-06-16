import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Helmet>
                <title>My Profile | JobTrack</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <img
                            src={user?.photoURL || '/default-avatar.png'}
                            alt="Profile"
                            className="w-28 h-28 rounded-full border-4 border-primary shadow-lg object-cover"
                        />

                        <h2 className="mt-4 text-2xl font-bold text-primary text-center">
                            {user?.displayName || 'Anonymous User'}
                        </h2>
                        <p className="text-gray-500 text-sm text-center mt-1">
                            {user?.email || 'No email provided'}
                        </p>

                        <div className="mt-6 w-full border-t border-base-300 pt-4 text-sm text-gray-600">
                            <p className="text-center">
                                You can manage your profile settings and personal data from this page in future updates.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default MyProfile;

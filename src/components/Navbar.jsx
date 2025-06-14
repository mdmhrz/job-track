import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const avatarRef = useRef(null);

    const handleLogout = () => {
        logOut()
            .then(() => alert('You have logged out successfully'))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (avatarRef.current && !avatarRef.current.contains(event.target)) {
                setIsAvatarDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </>
    );

    return (
        <>
            {/* Navbar */}
            <div className="navbar px-4 md:px-14 bg-base-100 shadow-sm border-b border-base-300 fixed z-20 top-0 w-full">
                <div className="navbar-start">
                    <button onClick={() => setIsDrawerOpen(true)} className="lg:hidden text-2xl">
                        <IoMdMenu />
                    </button>
                    <Link to='/' className="text-xl font-bold ml-4">
                        <span className='text-blue-600'>Job</span>Track
                    </Link>
                </div>

                <div className="navbar-end hidden lg:flex items-center gap-6">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {navLinks}
                    </ul>

                    {user ? (
                        <div className="relative" ref={avatarRef}>
                            <button
                                onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
                                className="focus:outline-none"
                            >
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        alt="User"
                                        className="w-10 h-10 rounded-full ring-2 ring-primary hover:scale-105 transition-transform duration-200"
                                    />
                                ) : (
                                    <FaUser className="text-2xl text-primary" />
                                )}
                            </button>

                            <AnimatePresence>
                                {isAvatarDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-3 w-56 bg-white shadow-xl rounded-xl z-50 overflow-hidden"
                                    >
                                        <div className="px-5 py-3 border-b font-semibold text-gray-700">
                                            {user.displayName || 'User'}
                                        </div>
                                        <ul className="text-sm text-gray-600">
                                            <li>
                                                <Link to="/myprofile" className="block px-5 py-3 hover:bg-gray-100">
                                                    My Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-5 py-3 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <>
                            <Link to='/login' className='btn btn-primary'>Login</Link>
                            <Link to='/register' className='btn btn-outline btn-primary'>Register</Link>
                        </>
                    )}
                </div>
            </div>

            {/* Drawer */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-40 bg-[#00000051] bg-opacity-30" onClick={() => setIsDrawerOpen(false)}>
                    <div className="fixed top-0 left-0 h-full w-64 bg-base-100 p-6 shadow-lg z-50" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <button className="text-2xl" onClick={() => setIsDrawerOpen(false)}>&times;</button>
                        </div>
                        <ul className="space-y-4">
                            {navLinks}
                            {!user && <li><NavLink to='/register'>Register</NavLink></li>}
                            {user ? (
                                <>
                                    <li><NavLink to="/myprofile">My Profile</NavLink></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </>
                            ) : (
                                <li><NavLink to='/login'>Login</NavLink></li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

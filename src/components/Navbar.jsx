import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("You've logged out successfully"))
            .catch((error) => toast.error(`${error}`));
    };

    const handleAvatarClick = () => {
        navigate('/myprofile');
    };

    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            {
                user && <li><NavLink to='/hotJobs'>Featured Jobs</NavLink></li>
            }
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
                        <>
                            <button onClick={handleLogout} className="btn btn-primary mr-3">
                                Logout
                            </button>

                            <button
                                onClick={handleAvatarClick}
                                className="focus:outline-none"
                                aria-label="Go to profile"
                            >
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        alt="User"
                                        className="w-10 h-10  rounded-full ring-2 ring-primary hover:scale-105 transition-transform duration-200"
                                    />
                                ) : (
                                    <FaUser className="w-10 h-10 p-1  rounded-full ring-2 ring-primary hover:scale-105 transition-transform duration-200 text-2xl text-primary" />
                                )}
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='auth/login' className='btn btn-outline btn-primary'>Login</Link>
                            <Link to='auth/register' className='btn btn-primary text-white'>Register</Link>
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
                            {!user && <li><NavLink to='/auth/register'>Register</NavLink></li>}
                            {user ? (
                                <>
                                    <li><NavLink to="/myprofile">My Profile</NavLink></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </>
                            ) : (
                                <li><NavLink to='/auth/login'>Login</NavLink></li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

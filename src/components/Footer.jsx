import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Footer() {
    return (
        <motion.footer
            className="bg-black text-white text-base-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="w-11/12 mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div>
                    <Link to='/' className="text-xl font-bold"><span className='text-primary'>Job</span>Track</Link>
                    <p className="text-sm opacity-80 mt-3">
                        Simplify your job search with powerful tracking tools and career insights. Built for professionals, by professionals.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-1">
                        <li><Link to='/' className="link link-hover">Home</Link></li>
                        <li><Link to='/about' className="link link-hover">About</Link></li>
                        <li><Link to='/contact' className="link link-hover">Contact</Link></li>
                        <li><Link to='/login' className="link link-hover">Login</Link></li>
                        <li><Link to='/register' className="link link-hover">Register</Link></li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Connect</h2>
                    <div className="flex gap-4 mb-4">
                        <a className="btn btn-sm btn-circle btn-outline" href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a className="btn btn-sm btn-circle btn-outline" href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a className="btn btn-sm btn-circle btn-outline" href="https://github.com" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a className="btn btn-sm btn-circle btn-outline" href="mailto:support@jobtrack.com">
                            <FaEnvelope />
                        </a>
                    </div>
                    <p className="text-sm opacity-80">support@jobtrack.com</p>
                </div>
            </div>

            <div className="text-center py-4 border-t border-base-100 text-sm">
                © {new Date().getFullYear()} jobTrack — All rights reserved.
            </div>
        </motion.footer>
    );
}

import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Register = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-base-200 flex items-center justify-center p-6">
            <motion.div
                className="bg-base-100 shadow-2xl rounded-2xl p-8 w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-3xl font-bold text-center mb-6 text-primary"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Create Account
                </motion.h2>

                <form className="space-y-4">
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaUserAlt className="text-primary" />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Full Name"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaEnvelope className="text-primary" />
                        <input
                            type="email"
                            className="grow"
                            placeholder="Email Address"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2  w-full">
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            className="grow"
                            placeholder="Password"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            className="grow"
                            placeholder="Confirm Password"
                        />
                    </label>

                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register
                    </motion.button>
                </form>

                <div className="text-center mt-6 text-sm">
                    Already have an account?{" "}
                    <Link to='/login' className="link link-primary font-semibold">Login</Link>
                </div>
            </motion.div>
        </div>
    );
}

export default Register;
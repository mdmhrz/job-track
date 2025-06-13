import { FaUserAlt, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router"; // ✅ Corrected import

const Login = () => {
    return (
        <div className="bg-base-200 flex items-center justify-center p-6 min-h-[calc(100vh-64px)]">
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
                    Welcome Back
                </motion.h2>

                <form className="space-y-4">
                    <motion.label
                        className="input input-bordered flex items-center gap-2 w-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <FaUserAlt className="text-primary" />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Username or Email"
                        />
                    </motion.label>

                    <motion.label
                        className="input input-bordered flex items-center gap-2 w-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            className="grow"
                            placeholder="Password"
                        />
                    </motion.label>

                    <div className="flex justify-between text-sm mt-2">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                            Remember me
                        </label>
                        <a className="link link-hover text-primary">Forgot Password?</a>
                    </div>

                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Login
                    </motion.button>
                </form>

                {/* Social Login Options */}
                <div className="mt-6">
                    <div className="divider">OR</div>
                    <div className="flex flex-col md:flex-row gap-3 md:w-full justify-between">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline flex items-center justify-center gap-2"
                        >
                            <FaGoogle className="text-red-500" />
                            Login with Google
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline flex items-center justify-center gap-2"
                        >
                            <FaGithub />
                            Login with GitHub
                        </motion.button>
                    </div>
                </div>

                {/* Register Link */}
                <div className="text-center mt-6 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="link link-primary font-semibold">
                        Register
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

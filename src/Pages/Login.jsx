import { FaUserAlt, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Login() {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
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
                    <label className="input input-bordered flex items-center gap-2">
                        <FaUserAlt className="text-primary" />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Username or Email"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <FaLock className="text-primary" />
                        <input type="password" className="grow" placeholder="Password" />
                    </label>

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

                <div className="text-center mt-6 text-sm">
                    Don’t have an account?{" "}
                    <a className="link link-primary font-semibold">Register</a>
                </div>
            </motion.div>
        </div>
    );
}

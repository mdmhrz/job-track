import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

// Motion variants for clean and reusable animation logic
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Register = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-base-200 flex items-center justify-center p-6">
            <motion.div
                className="bg-base-100 shadow-xl rounded-2xl p-10 w-full max-w-md"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    className="text-3xl font-bold text-center mb-6 text-primary"
                    variants={itemVariants}
                >
                    Create Account
                </motion.h2>

                <motion.form className="space-y-4" variants={itemVariants}>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaUserAlt className="text-primary" />
                        <input type="text" className="grow" placeholder="Full Name" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaEnvelope className="text-primary" />
                        <input type="email" className="grow" placeholder="Email Address" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaLock className="text-primary" />
                        <input type="password" className="grow" placeholder="Password" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaLock className="text-primary" />
                        <input type="password" className="grow" placeholder="Confirm Password" />
                    </label>

                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register
                    </motion.button>
                </motion.form>

                <motion.div
                    className="divider text-sm mt-6"
                    variants={itemVariants}
                >
                    or
                </motion.div>

                {/* Google Sign In Button */}
                <motion.button
                    className="btn btn-outline w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    variants={itemVariants}
                    onClick={() => {
                        // Trigger your Google auth function here
                        console.log("Sign in with Google");
                    }}
                >
                    <FcGoogle size={20} />
                    Continue with Google
                </motion.button>

                <motion.div
                    className="text-center mt-6 text-sm"
                    variants={itemVariants}
                >
                    Already have an account?{" "}
                    <Link to="/login" className="link link-primary font-semibold">
                        Login
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Register;

import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ErrorPage() {
    return (
        <motion.div
            className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h1
                className="text-8xl font-extrabold text-error drop-shadow-lg mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                404
            </motion.h1>

            <motion.h2
                className="text-3xl md:text-4xl font-bold text-base-content mb-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                Page Not Found
            </motion.h2>

            <motion.p
                className="text-base-content max-w-md mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                Oops! It seems like the page you're trying to visit doesn't exist or has been moved.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <Link to="/" className="btn btn-primary btn-wide gap-2 text-lg">
                    <FaArrowLeft className="text-lg" />
                    Back to Home
                </Link>
            </motion.div>
        </motion.div>
    );
}

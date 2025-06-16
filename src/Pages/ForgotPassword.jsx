import { useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleReset = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setLoading(true);

        try {
            await sendPasswordResetEmail(auth, email);
            setLoading(false);
            window.open("https://mail.google.com", "_blank");
        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
            <motion.div
                className="w-full max-w-md p-8 bg-base-100 rounded-3xl shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-3xl font-extrabold text-center text-primary"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Forgot Password
                </motion.h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Enter your email address to receive a password reset link.
                </p>

                <form onSubmit={handleReset} className="space-y-4">
                    <motion.label
                        className="form-control w-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="label">
                            <span className="label-text font-medium">Email Address</span>
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full pl-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </motion.label>

                    {errorMsg && (
                        <motion.div
                            className="text-red-500 text-sm font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {errorMsg}
                        </motion.div>
                    )}

                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        disabled={loading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {loading ? "Sending..." : "Send Reset Email"}
                    </motion.button>
                </form>

                <motion.div
                    className="text-center mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <button
                        onClick={() => navigate("/auth/login")}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Back to Login
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ForgotPassword;

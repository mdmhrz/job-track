import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const { signIn, googleSignIn, forgotPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                toast.success("You've successfully logged in!");
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                const errorCode = error.code;
                let message = "Something went wrong.";

                switch (errorCode) {
                    case "auth/user-not-found":
                        message = "No account found with this email.";
                        break;
                    case "auth/wrong-password":
                        message = "Incorrect password. Please try again.";
                        break;
                    case "auth/invalid-email":
                        message = "Please enter a valid email address.";
                        break;
                    case "auth/invalid-credential":
                        message = "Invalid email or password.";
                        break;
                    case "auth/too-many-requests":
                        message = "Too many login attempts. Try again later.";
                        break;
                    default:
                        message = "Login failed. Please check your credentials.";
                }

                toast.error(message);
            });

    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                toast.success("You've successfully logged in!");
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(`Google sign-in failed: ${error.message}`);
            });
    };

    const handleForgotPassword = () => {
        if (!email) {
            toast.warn("Please enter your email to reset password.");
            return;
        }

        forgotPassword(email)
            .then(() => {
                toast.success("Password reset email sent.");
            })
            .catch((error) => {
                toast.error(`Reset failed: ${error.message}`);
            });
    };

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
                    Please Login
                </motion.h2>

                <form className="space-y-4" onSubmit={handleLogin}>
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
                            name="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
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
                            name="password"
                            required
                        />
                    </motion.label>

                    <div className="flex justify-between text-sm mt-2">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                            Remember me
                        </label>
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="link link-hover text-primary"
                        >
                            Forgot Password?
                        </button>
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
                    <small className="divider">OR</small>
                    <motion.button
                        onClick={handleGoogleLogin}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline btn-primary flex items-center justify-center gap-2 w-full"
                    >
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </motion.button>
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

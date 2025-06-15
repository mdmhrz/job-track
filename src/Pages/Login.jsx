import { FaUserAlt, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router"; // ✅ Corrected import
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('');


    const [error, setError] = useState('')


    const { signIn, googleSignIn, forgotPassword } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password).then(result => {
            const user = result.user;
            // console.log(user);
            toast.success("You've succefully logged in")
            navigate(`${location.state ? location.state : "/"}`)

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorMessage, errorCode)
            setError(errorCode)
        });
    }

    const handleGoogleLogin = () => {
        googleSignIn().then(result => {
            const user = result.user;
            // console.log(user);
            navigate(`${location.state ? location.state : "/"}`)
            toast.success("You've succefully logged in")

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorMessage, errorCode)
            setError(errorCode)
        });
    };

    const handleForgotPassword = () => {
        if (!email) {
            return alert("Please enter your email to reset password.");
        }

        forgotPassword(email)
            .then(() => {
                alert('A reset email has been sent to your email.');
            })
            .catch((error) => {
                setError(error.code);
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
                        />
                    </motion.label>


                    <div className="flex justify-between text-sm mt-2">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                            Remember me
                        </label>
                        <a onClick={handleForgotPassword} className="link link-hover text-primary">Forgot Password?</a>
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
                    <div className="">
                        <motion.button
                            onClick={handleGoogleLogin}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline btn-primary flex items-center justify-center gap-2 w-full"
                        >
                            <FcGoogle className="text-red-500" />
                            Continue with Google
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

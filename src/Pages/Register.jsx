import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaPhotoFilm } from "react-icons/fa6";
import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

// Motion variants
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
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);

    const handleNameOnChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (value.trim().length < 6) {
            setNameError("Name must be 6 characters or longer");
        } else {
            setNameError("");
        }
    };

    const handlePasswordOnChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(value)) {
            setPasswordError("Password must have uppercase, lowercase, and be at least 6 characters");
        } else {
            setPasswordError("");
        }
    };

    const firebaseError = (code) => {
        switch (code) {
            case "auth/email-already-in-use":
                return "This email is already in use.";
            case "auth/invalid-email":
                return "Invalid email address.";
            case "auth/weak-password":
                return "Password is too weak.";
            default:
                return "Something went wrong. Please try again.";
        }
    };

    const handleGoogleSignUp = () => {
        setLoading(true);
        googleSignIn()
            .then((result) => {
                toast.success("You've created profile successfully!");
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(firebaseError(error.code));
            })
            .finally(() => setLoading(false));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value.trim();
        const photo = form.photo.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success("Account created successfully!");
                        navigate("/");
                    })
                    .catch((error) => {
                        console.error(error);
                        setUser(user);
                        toast.error("Profile update failed.");
                    });
            })
            .catch((error) => {
                toast.error(firebaseError(error.code));
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            <Helmet>
                <title>Register | JobTrack</title>
            </Helmet>
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

                    <motion.form className="space-y-4" variants={itemVariants} onSubmit={handleRegister}>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaUserAlt className="text-primary" />
                            <input
                                type="text"
                                className="grow"
                                placeholder="Full Name"
                                name="name"
                                required
                                onChange={handleNameOnChange}
                                value={name}
                            />
                        </label>
                        {nameError && <small className="text-red-500">{nameError}</small>}

                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaPhotoFilm className="text-primary" />
                            <input type="text" className="grow" placeholder="Photo URL" name="photo" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaEnvelope className="text-primary" />
                            <input
                                type="email"
                                className="grow"
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaLock className="text-primary" />
                            <input
                                type="password"
                                className="grow"
                                placeholder="Password"
                                name="password"
                                onChange={handlePasswordOnChange}
                                value={password}
                                required
                            />
                        </label>
                        {passwordError && <small className="text-red-500">{passwordError}</small>}

                        <motion.button
                            type="submit"
                            className="btn btn-primary w-full mt-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={loading || nameError || passwordError}
                        >
                            {loading ? "Registering..." : "Register"}
                        </motion.button>
                    </motion.form>

                    <motion.div className="divider text-sm mt-6" variants={itemVariants}>
                        or
                    </motion.div>

                    <motion.button
                        className="btn btn-outline w-full flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        variants={itemVariants}
                        onClick={handleGoogleSignUp}
                        disabled={loading}
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </motion.button>

                    <motion.div className="text-center mt-6 text-sm" variants={itemVariants}>
                        Already have an account?{" "}
                        <Link to="/login" className="link link-primary font-semibold">
                            Login
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Register;

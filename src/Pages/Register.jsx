import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaPhotoFilm } from "react-icons/fa6";
import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

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
    const [nameError, setNameError] = useState('')

    const navigate = useNavigate()
    const location = useLocation();


    const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);

    const handleGoogleSignUp = () => {
        googleSignIn().then(result => {
            const user = result.user;
            // console.log(user);
            navigate(`${location.state ? location.state : "/"}`)

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorMessage, errorCode)
            setError(errorCode)
        });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if (name.length < 5) {
            setNameError('Name should be more than 6 characters');
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    alert('success')
                    navigate('/')
                }).catch((error) => {
                    console.log(error);
                    setUser(user)
                    alert('failed')
                })
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

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

                <motion.form className="space-y-4" variants={itemVariants} onSubmit={handleRegister}>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaUserAlt className="text-primary" />
                        <input type="text" className="grow" placeholder="Full Name" name="name" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaPhotoFilm className="text-primary" />
                        <input type="text" className="grow" placeholder="Photo URL" name="photo" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaEnvelope className="text-primary" />
                        <input type="email" className="grow" placeholder="Email Address" name="email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <FaLock className="text-primary" />
                        <input type="password" className="grow" placeholder="Password" name="password" />
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
                    onClick={handleGoogleSignUp}
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

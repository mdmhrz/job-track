import { useContext, useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const auth = getAuth();
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await updateProfile(auth.currentUser, {
                displayName,
                photoURL,
            });
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error("Update failed:", error);
            toast.error("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
            <motion.div
                className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-center text-primary mb-6">
                    Update Profile
                </h2>

                <form onSubmit={handleUpdate} className="space-y-5">
                    {/* Name Field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            required
                        />
                    </label>

                    {/* Photo URL Field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Photo URL</span>
                        </div>
                        <input
                            type="url"
                            placeholder="Paste photo URL"
                            className="input input-bordered w-full"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                    </label>

                    {/* Profile Preview */}
                    {photoURL && (
                        <div className="flex justify-center">
                            <img
                                src={photoURL}
                                alt="Profile Preview"
                                className="w-24 h-24 rounded-full border-2 border-primary mt-2"
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="btn btn-primary w-full mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Set Update Data"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default UpdateProfile;

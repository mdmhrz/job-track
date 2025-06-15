import { motion } from "framer-motion";
import { FaSearch, FaCode, FaLink, FaWordpress, FaClipboardList } from "react-icons/fa";

const services = [
    {
        icon: <FaSearch className="text-5xl text-primary" />,
        title: "Keyword Research",
        description: "Discover low-competition, high-converting keywords through deep analysis to drive targeted traffic and improve your SEO performance effectively.",
    },
    {
        icon: <FaClipboardList className="text-5xl text-primary" />,
        title: "On Page SEO",
        description: "Optimize titles, content, meta tags, and structure to enhance relevance, improve rankings, and deliver a better user experience consistently.",
    },
    {
        icon: <FaCode className="text-5xl text-primary" />,
        title: "Technical SEO",
        description: "Fix site speed, indexing, crawlability, and core web vitals to ensure strong search visibility and smooth user experience throughout.",
    },
    {
        icon: <FaLink className="text-5xl text-primary" />,
        title: "Link Building",
        description: "Build high-authority, relevant backlinks through ethical strategies that improve domain authority, keyword rankings, and sustainable organic traffic growth.",
    },
    {
        icon: <FaWordpress className="text-5xl text-primary" />,
        title: "WordPress SEO",
        description: "Enhance your WordPress site with tailored SEO setups, plugin optimization, and speed improvements for higher visibility and search performance.",
    },
];

const SEOFeatures = () => {
    return (
        <div className="py-16 px-6 bg-base-200">
            {/* Section Heading */}
            <motion.div
                className="text-center max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold text-primary mb-2">Our SEO Services</h2>
                <p className="text-base-content">
                    Drive measurable growth through proven SEO strategies customized to your business goals.
                </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-base-100 rounded-xl shadow-md p-6 text-center border border-primary hover:shadow-xl transition duration-300"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                    >
                        <div className="mb-4 flex justify-center">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-base-content mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SEOFeatures;

import { useState } from "react";
import { PROJECTS } from "../constants/Index";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiMaximize2, FiX } from "react-icons/fi"; 

const Projects = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="border-b border-neutral-900 pb-4 relative">
            
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
            >
                {t("projectsTitle")}
            </motion.h2>

            <div className="flex flex-col gap-12 lg:gap-20">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap lg:justify-center items-center lg:items-start group">
                        
                        {/* Image Section */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/4 relative flex justify-center lg:justify-start"
                        >
                            {/* Subtle purple glow behind image */}
                            <div className="absolute -inset-2 bg-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                            {/* 
                               FIX: 
                               1. Added fixed width/height classes (w-full max-w-[300px] h-[200px] lg:h-[200px]) 
                               2. This creates a uniform box for ALL images (vertical or horizontal)
                            */}
                            <div 
                                className="relative w-full max-w-[300px] h-[200px] rounded-xl overflow-hidden border border-neutral-800 shadow-lg cursor-pointer"
                                onClick={() => setSelectedImage(project.image)}
                            >
                                <img
                                    src={project.image}
                                    alt={t(project.title)}
                                    // FIX: object-cover fills the box, object-top ensures phone screens show the header area
                                    className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                                />
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-neutral-900/80 p-3 rounded-full border border-neutral-700 backdrop-blur-sm">
                                        <FiMaximize2 className="text-purple-300 text-xl" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-xl lg:w-3/4 lg:pl-12 mt-6 lg:mt-0"
                        >
                            <h6 className="mb-3 text-xl font-bold text-neutral-200 group-hover:text-purple-300 transition-colors duration-300">
                                {t(project.title)}
                            </h6>
                            <p className="mb-6 text-neutral-400 leading-relaxed">
                                {t(project.description)}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-900/10 border border-purple-800/30 text-purple-300 hover:bg-purple-900/30 hover:border-purple-500/50 transition-all duration-300 cursor-default"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors">
                            <FiX size={30} />
                        </button>

                        <motion.img 
                            src={selectedImage} 
                            alt="Enlarged project" 
                            // The modal will naturally handle the tall image using object-contain
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-purple-900/20 border border-neutral-800"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
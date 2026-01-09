import { useState } from "react";
import { PROJECTS } from "../constants/Index";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiMaximize2, FiX } from "react-icons/fi"; 

const Projects = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
            
            <div className="absolute top-1/4 left-0 -z-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-0 -z-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]"></div>

            <div className="flex flex-col items-center justify-center my-20">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl lg:text-5xl font-thin tracking-tight"
                >
                    <span className="text-neutral-500 mr-4">03.</span>
                    {t("projectsTitle")}
                </motion.h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4"
                />
            </div>

            <div className="flex flex-col gap-24 lg:gap-32 px-4 lg:px-16">
                {PROJECTS.map((project, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-wrap items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        
                        <motion.div
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 relative group"
                        >
                            <div className="relative p-2 rounded-2xl border border-dashed border-neutral-700/50 bg-neutral-900/30 backdrop-blur-sm">
                                
                                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-cyan-500/50"></div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-cyan-500/50"></div>

                                <div 
                                    className="relative w-full h-[250px] lg:h-[300px] rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedImage(project.image)}
                                >
                                    <img
                                        src={project.image}
                                        alt={t(project.title)}
                                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="flex items-center gap-2 text-cyan-300 font-mono text-sm tracking-widest uppercase border border-cyan-500/30 px-4 py-2 rounded-full bg-cyan-900/20 backdrop-blur-md">
                                                <FiMaximize2 /> {t("clickToEnlarge")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="flex flex-col items-start">
                                <span className="text-8xl font-bold text-neutral-800/30 -mb-10 -ml-4 z-0 pointer-events-none select-none">
                                    0{index + 1}
                                </span>

                                <h3 className="relative z-10 text-3xl font-light text-white mb-4 group-hover:text-purple-300 transition-colors">
                                    {t(project.title)}
                                </h3>

                                <div className="relative z-10 p-6 bg-neutral-900/50 border border-white/5 backdrop-blur-sm rounded-xl shadow-lg mb-6 hover:border-purple-500/30 transition-colors duration-300">
                                    <p className="text-neutral-400 font-light leading-relaxed">
                                        {t(project.description)}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.technologies.map((technology, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-mono text-cyan-200/80 bg-cyan-900/10 border border-cyan-700/30 rounded"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/95 z-[60] p-4 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors p-2 border border-transparent hover:border-neutral-700 rounded-full">
                            <FiX size={24} />
                        </button>

                        <motion.img 
                            src={selectedImage} 
                            alt="Project Detail" 
                            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl shadow-purple-900/20"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
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
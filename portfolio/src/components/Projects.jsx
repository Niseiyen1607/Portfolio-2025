import { useState } from "react";
import { PROJECTS } from "../constants/Index";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                {t("projectsTitle")}
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    width={250}
                                    height={250}
                                    alt={t(project.title)}
                                    className="mb-6 rounded cursor-pointer object-cover w-64 h-64"
                                    onClick={() => openModal(project.image)}
                                />
                                <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                    {t("clickToEnlarge")}
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 lg:pl-8"
                        >
                            <h6 className="mb-2 font-semibold">{t(project.title)}</h6>
                            <p className="mb-4 text-neutral-400">{t(project.description)}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((technology, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4"
                    onClick={closeModal}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={selectedImage} alt="Enlarged project" className="max-w-full max-h-full object-contain" />
                </motion.div>
            )}
        </div>
    );
};

export default Projects;

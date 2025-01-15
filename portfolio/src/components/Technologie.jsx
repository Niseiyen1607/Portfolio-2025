import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpring } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri"
import { FaPython } from "react-icons/fa";

import { useTranslation } from 'react-i18next';


import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    inital: { y: -10 },
    animate: {
        y: [7, -7],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologie = () => {
    const { t } = useTranslation();

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }} 
            className="my-20 text-center text-4xl">
                {t('technologiesTitle')}
            </motion.h2>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-8">
                <motion.div
                variants={iconVariants(2.5)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 p-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500">
                    <RiReactjsLine className="text-7xl text-cyan-400" /> 
                </motion.div>
                <motion.div
                variants={iconVariants(5)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500-800 p-4">
                    <FaAngular className="text-7xl text-red-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4">
                    <FaJava className="text-7xl text-blue-500" /> 
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4">
                    <SiSpring className="text-7xl text-green-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4">
                    <DiBootstrap className="text-7xl text-purple-700" />
                </motion.div>
                <motion.div
                variants={iconVariants(6)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4">
                    <DiGit className="text-7xl text-orange-500" /> 
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="inital"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-400" /> 
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="inital"
                    animate="animate"
                    whileHover={{ scale: 1.2 }}
                    className="rounded-2xl border-4 border-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 p-4"
                >
                    <FaPython className="text-7xl text-yellow-500" />
                </motion.div>   
            </motion.div>
        </div>
    );
};

export default Technologie;

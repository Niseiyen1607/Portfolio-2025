import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaAngular, FaJava, FaPython, FaUnity } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpring, SiPostgresql, SiOracle } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const floatAnimation = (duration) => ({
    initial: { y: 0 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    const { t } = useTranslation();

    const techs = [
        { icon: <RiReactjsLine className="text-6xl" />, name: "React", color: "text-cyan-400", shadow: "shadow-cyan-500/50" },
        { icon: <FaNodeJs className="text-6xl" />, name: "Node.js", color: "text-green-500", shadow: "shadow-green-500/50" },
        { icon: <FaAngular className="text-6xl" />, name: "Angular", color: "text-red-500", shadow: "shadow-red-500/50" },
        { icon: <FaJava className="text-6xl" />, name: "Java", color: "text-blue-500", shadow: "shadow-blue-500/50" },
        { icon: <IoLogoJavascript className="text-6xl" />, name: "JavaScript", color: "text-yellow-500", shadow: "shadow-yellow-500/50" },
        { icon: <SiSpring className="text-6xl" />, name: "Spring", color: "text-green-400", shadow: "shadow-green-400/50" },
        { icon: <DiGit className="text-6xl" />, name: "Git", color: "text-orange-500", shadow: "shadow-orange-500/50" },
        { icon: <RiTailwindCssFill className="text-6xl" />, name: "Tailwind", color: "text-cyan-400", shadow: "shadow-cyan-400/50" },
        { icon: <FaPython className="text-6xl" />, name: "Python", color: "text-yellow-500", shadow: "shadow-yellow-500/50" },
        { icon: <FaUnity className="text-6xl" />, name: "Unity", color: "text-white", shadow: "shadow-white/50" },
        { icon: <SiPostgresql className="text-6xl" />, name: "PostgreSQL", color: "text-sky-500", shadow: "shadow-sky-500/50" },
        { icon: <SiOracle className="text-6xl" />, name: "Oracle", color: "text-red-500", shadow: "shadow-red-500/50" },
    ];

    return (
        <div className="border-b border-neutral-800 pb-24 relative overflow-hidden">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>

            <div className="flex flex-col items-center justify-center my-20">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl lg:text-5xl font-thin tracking-tight"
                >
                    <span className="text-neutral-500 mr-4">02.</span>
                    {t("technologiesTitle")}
                </motion.h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4"
                />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16 px-4">
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={floatAnimation(2.5 + Math.random() * 3.5)} 
                        initial="initial"
                        animate="animate"
                        className="relative group"
                    >
                        <div className={`p-4 rounded-full bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 
                                        transition-all duration-300 ease-in-out
                                        group-hover:scale-110 group-hover:border-neutral-600 
                                        group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${tech.color} group-hover:${tech.shadow}`}>
                            {tech.icon}
                        </div>

                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-medium text-neutral-300 bg-neutral-900/80 px-2 py-1 rounded whitespace-nowrap border border-neutral-700">
                                {tech.name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
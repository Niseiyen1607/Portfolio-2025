import profilPic from '../assets/images/profile.jpg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const StaggeredText = ({ text, className }) => {
  const letters = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };
  return (
    <motion.div 
        style={{ display: "flex", flexWrap: "wrap" }} 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className={`${className} justify-center lg:justify-start`}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>{letter === " " ? "\u00A0" : letter}</motion.span>
      ))}
    </motion.div>
  );
};

const containerVariants = (delay) => ({
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: delay, duration: 0.5 } },
});

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="relative border-b border-neutral-900 pb-12 pt-24 lg:pb-20 lg:pt-32 lg:mb-35 px-4 sm:px-6 lg:px-16 overflow-hidden">
            
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] bg-purple-900/20 rounded-full blur-[80px] lg:blur-[120px] opacity-50"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] bg-cyan-900/10 rounded-full blur-[80px] lg:blur-[100px] opacity-30"></div>

            <div className="flex flex-col lg:flex-row items-center">
                
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start z-10 order-2 lg:order-1 mt-12 lg:mt-0">
                    <StaggeredText 
                        text="Thiraiyan Mooneesawmy" 
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-white mb-4 sm:mb-6 text-center lg:text-left" 
                    />

                    <motion.div
                        variants={containerVariants(1.2)} 
                        initial="hidden"
                        animate="visible"
                        className="relative inline-block"
                    >
                        <span className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent font-light">
                            {t("Studies")}
                        </span>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-pink-500/50 to-transparent"></div>
                    </motion.div>
                    
                    <motion.p
                        variants={containerVariants(1.5)}
                        initial="hidden"
                        animate="visible"
                        className="my-6 lg:my-8 max-w-xl text-base sm:text-lg font-light tracking-wide text-neutral-300 leading-relaxed text-center lg:text-left"
                    >
                        {t("Summary")}
                    </motion.p>
                </div>

                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end order-1 lg:order-2">
                    
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] flex items-center justify-center"
                    >
                        
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                            className="absolute -inset-4 sm:-inset-8 lg:-inset-10 rounded-full border border-neutral-800/30 w-[110%] h-[110%] sm:w-[115%] sm:h-[115%] lg:w-[120%] lg:h-[120%] top-[-5%] left-[-5%] sm:top-[-7.5%] sm:left-[-7.5%] lg:top-[-10%] lg:left-[-10%]"
                        >
                            <div className="absolute top-1/2 -left-[5px] lg:-left-[6px] -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-rose-500 rounded-full shadow-[0_0_15px_#f43f5e]"></div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-neutral-700/60 w-full h-full"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"></div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            className="absolute inset-8 sm:inset-10 lg:inset-12 rounded-full border border-neutral-800/50"
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full shadow-[0_0_12px_#a855f7]"></div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 180 }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            className="absolute inset-16 sm:inset-20 lg:inset-24 rounded-full border border-dotted border-white/10"
                        ></motion.div>

                        <motion.div 
                            className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-neutral-800/50 shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)]"
                            whileHover={{ scale: 1.02, borderColor: "rgba(34,211,238,0.5)" }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={profilPic}
                                alt="Profile"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
import aboutImg from '../assets/About.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="border-b border-neutral-900 pb-24 relative">
            
            <div className="flex flex-col items-center justify-center my-20">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl lg:text-5xl font-thin tracking-tight"
                >
                    <span className="text-neutral-500 mr-4">01.</span>
                    {t('aboutTitle')}
                </motion.h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4"
                />
            </div>

            <div className="flex flex-wrap px-4 lg:px-16 items-center">
                
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 lg:p-8 mb-12 lg:mb-0 relative"
                >
                    <div className="flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full opacity-40 -z-10"></div>
                        
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900/50 backdrop-blur-sm group">
                                <img 
                                    className="rounded-2xl w-full max-w-md object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                                    src={aboutImg} 
                                    alt="About" 
                                />
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </div>

                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-6 -right-6 bg-neutral-900/90 border border-neutral-700 p-4 rounded-lg shadow-xl hidden lg:block"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-xs text-neutral-400 font-mono">{t('statusAvailable')}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <div className="max-w-xl space-y-6">
                            <div className="w-12 h-[2px] bg-cyan-500 mb-6"></div>
                            
                            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed font-light">
                                {t('aboutDescription')}
                            </p>
                            
                            <div className="w-12 h-[2px] bg-blue-500 mb-6"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
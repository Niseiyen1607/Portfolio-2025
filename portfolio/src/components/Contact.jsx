import { useState } from "react";
import { CONTACT } from "../constants/Index";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FiMail, FiCopy, FiCheck, FiSend } from "react-icons/fi";

const Contact = () => {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(CONTACT.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div id="contact" className="border-b border-neutral-900 pb-20 relative overflow-hidden">
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-purple-900/20 to-transparent blur-[100px] -z-10"></div>

            <div className="flex flex-col items-center justify-center mt-20 mb-12">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl lg:text-5xl font-thin tracking-tight"
                >
                    <span className="text-neutral-500 mr-4">03.</span>
                    {t('contactTitle')}
                </motion.h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-4"
                />
            </div>

            <div className="flex flex-col items-center justify-center px-4">
                
                <motion.p 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-neutral-400 text-center max-w-xl text-lg mb-12 font-light leading-relaxed"
                >
                    {t('contactDesc')}
                </motion.p>

                <motion.div 
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                    
                    <div className="relative bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center gap-6 shadow-2xl backdrop-blur-sm">
                        
                        <div className="p-4 bg-neutral-800/50 rounded-full border border-neutral-700">
                            <FiMail className="text-3xl text-cyan-400" />
                        </div>

                        <div className="text-center">
                            <h3 className="text-sm font-mono text-neutral-500 mb-2 uppercase tracking-widest">{t('getInTouch')}</h3>
                            <a 
                                href={`mailto:${CONTACT.email}`} 
                                className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent hover:text-cyan-300 transition-all"
                            >
                                {CONTACT.email}
                            </a>
                        </div>

                        <div className="flex gap-4 mt-2">
                            <a 
                                href={`mailto:${CONTACT.email}`}
                                className="flex items-center gap-2 px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full border border-neutral-700 transition-all hover:scale-105 hover:border-cyan-500/50"
                            >
                                <FiSend /> {t('sayHello')}
                            </a>

                            <button 
                                onClick={handleCopy}
                                className="relative flex items-center gap-2 px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full border border-neutral-700 transition-all hover:scale-105 active:scale-95 hover:border-purple-500/50"
                            >
                                <AnimatePresence mode='wait'>
                                    {copied ? (
                                        <motion.div 
                                            key="check"
                                            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                            className="flex items-center gap-2 text-green-400"
                                        >
                                            <FiCheck /> <span>{t('copied')}</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="copy"
                                            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <FiCopy /> <span>{t('copyEmail')}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
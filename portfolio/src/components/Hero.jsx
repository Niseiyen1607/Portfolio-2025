import profilPic from '../assets/images/profile.jpg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5,
        },
    },
});

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Thiraiyan Mooneesawmy
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            {t("Studies")}
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light"
                        >
                            {t("Summary")}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center relative lg:justify-end">
                        <motion.div
                            initial={{ x:100, scale: 0, opacity: 0 }}
                            animate={{ x: 0, scale: 1, opacity: 1 }}
                            transition={{ delay: 1, duration: 1.2 }}
                            className="absolute inset-0 flex items-center justify-center lg:justify-end"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 10,
                                    ease: "linear",
                                }}
                                className="absolute w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-dashed border-slate-300"
                            />
                        </motion.div>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 1.2 }}
                            src={profilPic}
                            alt="Profile"
                            className="rounded-full w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

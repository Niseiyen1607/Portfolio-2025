import logo from '../assets/images/TM.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
        localStorage.setItem('language', lng); 
    };

    return (
        <motion.nav 
            className="mb-20 flex items-center justify-between py-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-shrink-0 items-center">
                <motion.img 
                    className="mx-2 w-20" 
                    src={logo} 
                    alt="logo"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/thiraiyan-mooneesawmy-99b8742b0" className="hover:text-blue-500 transition-colors duration-300">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Niseiyen" className="hover:text-gray-500 transition-colors duration-300">
                    <FaGithub />
                </a>
                <motion.a 
                    className="ml-4 px-4 py-2 bg-transparent text-white rounded relative"
                    initial={{ boxShadow: '0 0 0px rgba(255, 0, 255, 0.5)' }}
                    animate={{ 
                        boxShadow: [
                            '0 0 120px rgba(255, 0, 255, 0.5)', 
                            '0 0 120px rgba(0, 0, 255, 0.5)', 
                            '0 0 120px rgba(255, 0, 255, 0.5)', 
                            '0 0 120px rgba(0, 255, 255, 0.5)', 
                            '0 0 120px rgba(255, 0, 255, 0.5)', 
                            '0 0 120px rgba(0, 0, 255, 0.5)', 
                            '0 0 120px rgba(255, 0, 255, 0.5)'
                        ] 
                    }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                    href='#contact'
                >
                    Contact
                </motion.a>
                <div className="ml-6 flex items-center gap-2">
                    <button 
                        className="px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700"
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </button>
                    <button 
                        className="px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700"
                        onClick={() => changeLanguage('fr')}
                    >
                        FR
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

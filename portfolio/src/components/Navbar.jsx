import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import i18n from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
        localStorage.setItem('language', lng); 
    };

    const { t } = useTranslation();

    return (
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-8 backdrop-blur-md bg-neutral-950/30 border-b border-neutral-800/50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-6 text-xl hidden md:flex">
          <a
            href="https://www.linkedin.com/in/thiraiyan-mooneesawmy-99b8742b0"
            className="text-neutral-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Niseiyen1607"
            className="text-neutral-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <motion.a
            className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-900 to-blue-900 text-white rounded-full text-sm font-medium border border-cyan-700/50"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(6, 182, 212)",
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
          >
            {t("contactTitle")}
          </motion.a>
          <div className="ml-6 flex items-center gap-2 border-l border-neutral-700 pl-6">
            <button
              className="text-sm font-medium hover:text-cyan-400 transition"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className="text-sm font-medium hover:text-cyan-400 transition"
              onClick={() => changeLanguage("fr")}
            >
              FR
            </button>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <motion.button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white"
            initial={{ rotate: 0 }}
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {dropdownOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              className="absolute top-32 right-0 bg-gray-800 text-white w-full py-4 px-6 flex flex-col items-start md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.linkedin.com/in/thiraiyan-mooneesawmy-99b8742b0"
                className="py-2 hover:text-blue-500 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Niseiyen1607"
                className="py-2 hover:text-gray-500 transition-colors duration-300"
              >
                GitHub
              </a>
              <motion.a
                className="py-2 rounded hover:text-white transition-colors duration-300"
                href="#contact"
              >
                {t("contactTitle")}
              </motion.a>
              <div className="flex gap-4 mt-4">
                <button
                  className="px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700"
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
                <button
                  className="px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700"
                  onClick={() => changeLanguage("fr")}
                >
                  FR
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
};

export default Navbar;

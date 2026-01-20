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
        className="mb-20 flex items-center justify-between py-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Navbar Links */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl hidden md:flex">
          <a
            href="https://www.linkedin.com/in/thiraiyan-mooneesawmy-99b8742b0"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Niseiyen1607"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <motion.a
            className="ml-4 px-4 py-2 bg-transparent text-white rounded relative"
            initial={{ boxShadow: "0 0 0px rgba(255, 0, 255, 0.5)" }}
            animate={{
              boxShadow: [
                "0 0 120px rgba(255, 0, 255, 0.5)",
                "0 0 120px rgba(0, 0, 255, 0.5)",
                "0 0 120px rgba(255, 0, 255, 0.5)",
                "0 0 120px rgba(0, 255, 255, 0.5)",
                "0 0 120px rgba(255, 0, 255, 0.5)",
                "0 0 120px rgba(0, 0, 255, 0.5)",
                "0 0 120px rgba(255, 0, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            href="#contact"
          >
            {t("contactTitle")}
          </motion.a>
          <div className="ml-6 flex items-center gap-2">
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
                href="https://github.com/Niseiyen"
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

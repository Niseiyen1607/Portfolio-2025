import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import i18n from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const navItems = [
        { href: '#about', label: t('navAbout') },
        { href: '#technologies', label: t('navTechnologies') },
        { href: '#projects', label: t('navProjects') },
    ];

    const closeMenu = () => setDropdownOpen(false);

    return (
      <motion.nav
        aria-label={t('mainNavigation')}
        className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 bg-neutral-950/70 px-5 py-3 backdrop-blur-md lg:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a
            href="#top"
            className="shrink-0 text-lg font-semibold tracking-widest text-white hover:text-cyan-300 transition-colors"
            aria-label="Thiraiyan Mooneesawmy"
          >
            TM
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-300 transition-colors hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="https://www.linkedin.com/in/thiraiyan-mooneesawmy-99b8742b0"
              aria-label={t('openLinkedIn')}
              className="text-neutral-300 transition-colors hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Niseiyen1607"
              aria-label={t('openGitHub')}
              className="text-neutral-300 transition-colors hover:text-purple-400"
            >
              <FaGithub />
            </a>
            <a
              className="rounded-full border border-cyan-700/50 bg-gradient-to-r from-cyan-900 to-blue-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-cyan-400"
              href="#contact"
            >
              {t('contactTitle')}
            </a>
            <div className="flex items-center gap-2 border-l border-neutral-700 pl-4">
              <button
                type="button"
                aria-pressed={i18n.resolvedLanguage?.startsWith('en')}
                className="text-sm font-medium text-neutral-300 transition hover:text-cyan-400 aria-pressed:text-cyan-300"
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={i18n.resolvedLanguage?.startsWith('fr')}
                className="text-sm font-medium text-neutral-300 transition hover:text-cyan-400 aria-pressed:text-cyan-300"
                onClick={() => changeLanguage('fr')}
              >
                FR
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-pressed={i18n.resolvedLanguage?.startsWith('en')}
                className="text-xs font-medium text-neutral-300 transition hover:text-cyan-400 aria-pressed:text-cyan-300"
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={i18n.resolvedLanguage?.startsWith('fr')}
                className="text-xs font-medium text-neutral-300 transition hover:text-cyan-400 aria-pressed:text-cyan-300"
                onClick={() => changeLanguage('fr')}
              >
                FR
              </button>
            </div>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="rounded p-2 text-white hover:text-cyan-300"
              aria-label={t('toggleNavigation')}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-navigation"
            >
              {dropdownOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              id="mobile-navigation"
              className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-neutral-800 bg-neutral-950/95 px-6 py-4 text-white backdrop-blur-md lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-2 text-neutral-300 transition-colors hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="py-2 text-neutral-300 transition-colors hover:text-cyan-300"
              >
                {t('contactTitle')}
              </a>
              <div className="mt-2 flex gap-5 border-t border-neutral-800 pt-4">
                <a
                  href="https://www.linkedin.com/in/thiraiyan-mooneesawmy-99b8742b0"
                  aria-label={t('openLinkedIn')}
                  className="text-neutral-300 transition-colors hover:text-cyan-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Niseiyen1607"
                  aria-label={t('openGitHub')}
                  className="text-neutral-300 transition-colors hover:text-purple-400"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
};

export default Navbar;

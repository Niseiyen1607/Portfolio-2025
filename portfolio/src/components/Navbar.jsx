import logo from '../assets/images/placeholder/logo.png';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/thiraiyan-mooneesawmy-99b8742b0">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Niseiyen">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useNavigateAndScroll from '../../hooks/useNavigateAndScroll';
import g_light from '../../assets/images/G-light.png';
import g_dark from '../../assets/images/G-black.png';
import img__light from '../../assets/images/perfil-light.png';
import img__dark from '../../assets/images/perfil-dark.png';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {

    const { darkMode } = useTheme();

    const navigateAndScroll = useNavigateAndScroll();
    const handleScrollToTop = (e, path) => {
        if (location.pathname === path) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="header__container" aria-label="Navegación principal">
                <Link to="/" onClick={(e) => handleScrollToTop(e, '/')}>
                    <img src={darkMode ? g_light : g_dark} width="40" height="40" className="header__logo" alt="Logo" />
                </Link>

                <div className="header__toggle">
                    <li><ThemeToggle /></li>
                    <input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                </div>

                 {/* Menú de móvil */}
                <ul className={`header__mobile ${isMenuOpen ? 'active' : ''}`}>
                <div className="header__mobile-perfil">
                    <img src={darkMode ? img__light : img__dark} alt="menu__photo"  width="65" height="75" />
                    <div>
                        <h2>Gherson Sánchez</h2>
                        <h3>Desarrollador Web</h3>
                        <h4>Disponible para trabajar</h4>
                    </div>
                </div>
                <h2 className="header__mobile-h2">- Menu -</h2>
                <li><Link to="/" onClick={(e) => { handleScrollToTop(e, '/'); toggleMenu(); }}  className="header__a">Inicio</Link></li>
                <li><Link to="/projects" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }} className="header__a">Proyectos</Link></li>
                <li><button onClick={() => { navigateAndScroll('about'); toggleMenu(); }} className="header__a">Sobre mí</button></li>
                <li><button onClick={() => { navigateAndScroll('formulario'); toggleMenu(); }} className="header__a">Contacto</button></li>
                <h2 className="header__mobile-h2">- Social -</h2>
                <li>
                    <a href="https://www.linkedin.com/in/gherson-sa/" target="_blank" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in linkedin__mobile"></i>
                    </a>
                    <a href="https://github.com/GhersonSA" target="_blank" aria-label="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <h2 className="header__mobile-h2">- Currículum -</h2>
                <li><a className="header__cv" href="/assets/pdf/CV_SANCHEZ GHERSON.pdf" download="CV_SANCHEZ GHERSON.pdf" onClick={toggleMenu}>CV <i className="fa-regular fa-file"></i></a></li>
                <h2 className="header__mobile-h2">- Tema -</h2>
                <li><ThemeToggle /></li>
                </ul>
                {/* */}
                
                <ul className="header__menu">
                    <li><Link to="/" onClick={(e) => handleScrollToTop(e, '/')} className="header__a">Inicio</Link></li>
                    <li><Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="header__a">Proyectos</Link></li>
                    <li><button onClick={() => navigateAndScroll('about')} className="header__a">Sobre mí</button></li>
                    <li><button onClick={() => navigateAndScroll('formulario')} className="header__a">Contacto</button></li>
                    <li><a className="header__cv" href="/assets/pdf/CV_SANCHEZ GHERSON.pdf" download="CV_SANCHEZ GHERSON.pdf">CV <i className="fa-solid fa-file-invoice"></i></a></li>
                </ul>


                <ul className="header__social">
                    <li>
                        <ThemeToggle />
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gherson-sa/" target="_blank" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/GhersonSA" target="_blank" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>                  
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
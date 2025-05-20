import { useState } from 'react';
import { Link } from 'react-router-dom';
import useNavigateAndScroll from '../../hooks/useNavigateAndScroll';
import g_light from '../../assets/images/G-light.png';
import './Header.css';

const Header = () => {

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
                    <img width="40" height="40" className="header__logo" src={g_light} alt="Logo" />
                </Link>

                <div className="header__toggle">
                    <input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                </div>

                 {/* Menú de móvil */}
                <ul className={`header__mobile ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={(e) => { handleScrollToTop(e, '/'); toggleMenu(); }}  className="header__a">Inicio</Link></li>
                <li><Link to="/projects" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }} className="header__a">Proyectos</Link></li>
                <li><button onClick={() => { navigateAndScroll('about'); toggleMenu(); }} className="header__a">Sobre mí</button></li>
                <li><button onClick={() => { navigateAndScroll('formulario'); toggleMenu(); }} className="header__a">Contacto</button></li>
                <li><a className="header__cv" href="../../../public/assets/pdf/CV_SANCHEZ GHERSON.pdf" download="CV_SANCHEZ GHERSON.pdf" onClick={toggleMenu}>CV <i className="fa-regular fa-file"></i></a></li>
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
                {/* */}

                <ul className="header__menu">
                    <li><Link to="/" onClick={(e) => handleScrollToTop(e, '/')} className="header__a">Inicio</Link></li>
                    <li><Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="header__a">Proyectos</Link></li>
                    <li><button onClick={() => navigateAndScroll('about')} className="header__a">Sobre mí</button></li>
                    <li><button onClick={() => navigateAndScroll('formulario')} className="header__a">Contacto</button></li>
                    <li><a className="header__cv" href="../../../public/assets/pdf/CV_SANCHEZ GHERSON.pdf" download="CV_SANCHEZ GHERSON.pdf">CV <i className="fa-solid fa-file-invoice"></i></a></li>
                </ul>

                <ul className="header__social">
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
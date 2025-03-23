import React, { useState } from 'react';
import g_light from '../../assets/images/G-light.png';
import './Header.css';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="header__container" aria-label="Navegación principal">
                <a href="#">
                    <img width="40" height="40" className="header__logo" src={g_light} alt="Logo" />
                </a>

                <div className="header__toggle">
                    <input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                </div>

                 {/* Menú de móvil */}
                <ul className={`header__mobile ${isMenuOpen ? 'active' : ''}`}>
                <li><a className="header__a" href="#" onClick={toggleMenu}>Inicio</a></li>
                <li><a className="header__a" href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
                <li><a className="header__a" href="#about" onClick={toggleMenu}>Sobre mí</a></li>
                <li><a className="header__a" href="#formulario" onClick={toggleMenu}>Contacto</a></li>
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
                    <li><a href="#" className="header__a">Inicio</a></li>
                    <li><a href="#proyectos" className="header__a">Proyectos</a></li>
                    <li><a className="header__a" href="#about">Sobre mí</a></li>
                    <li><a className="header__a" href="#formulario">Contacto</a></li>
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
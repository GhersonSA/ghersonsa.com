import { useTheme } from '../../context/ThemeContext';
import g__logo from '../../assets/images/GhersonSA-light.png';
import g__logo2 from '../../assets/images/GhersonSA-black.png';
import './Footer.css';

const Footer = () => {

    const { darkMode } = useTheme();

    return (
        <footer>
            <div className="footer__container">
                <p><span>©</span> Todos los derechos reservados a GhersonSA</p>
                <a href="#"><img src={darkMode ? g__logo : g__logo2} alt="Logo GhersonSA" className="g__logo"/></a>
            </div>
        </footer>
    )
}

export default Footer;
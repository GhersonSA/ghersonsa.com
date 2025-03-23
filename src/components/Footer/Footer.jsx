import './Footer.css';
import g__logo from '../../assets/images/GhersonSA-light.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <p><span>©</span> Todos los derechos reservados a GhersonSA</p>
                <a href="#"><img src={g__logo} alt="Logo GhersonSA" className="g__logo"/></a>
            </div>
        </footer>
    )
}

export default Footer;
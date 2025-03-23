import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import img__light from '../../assets/images/perfil-light.png';
import './Hero.css';

const Hero = () => {

    const [sectionRef, isVisible] = useIntersectionObserver();

    return (
        <section ref={sectionRef} className={`hero ${isVisible ? "visible" : ""}`}>
            <div className="hero__container">
                <section className="hero-left">
                    <h2 className={`gherson hero-left__animation ${isVisible ? "visible" : ""}`}>
                        <span className="G">G</span>
                        <span className="H">H</span>
                        <span className="E">E</span>
                        <span className="R">R</span>
                        <span className="S">S</span>
                        <span className="O">O</span>
                        <span className="N">N</span>
                    </h2>
                    <h3 className={`fullstack neon-text hero-left__animation ${isVisible ? "visible" : ""}`}>FullStack</h3>
                </section>

                <div className="hero__tools">
                    <a className={`hero__linkedin hero-right__animation ${isVisible ? "visible" : ""}`} href="https://www.linkedin.com/in/gherson-sa/" target="_blank">
                        <p className="hero__linkedin--p"><i className="fa-brands fa-linkedin"></i> LinkedIn</p>
                    </a>
                    <a className={`hero__github hero-right__animation ${isVisible ? "visible" : ""}`} href="https://github.com/GhersonSA" target="_blank">
                        <p className="hero__github--p"><i className="devicon-github-original"></i> GitHub</p>
                    </a>
                </div>

                <div className={`hero__email hero-left__animation ${isVisible ? "visible" : ""}`}>
                    <a href="#formulario">
                        <p className="hero__email--p"><i className="fa-regular fa-envelope"></i> Gherson2002@outlook.com</p>
                    </a>
                </div>

                <section className="hero-right">
                    <h2 className={`sanchez hero-right__animation ${isVisible ? "visible" : ""}`}>
                        <span className="S">S</span>
                        <span className="A">A</span>
                        <span className="N">N</span>
                        <span className="C">C</span>
                        <span className="H">H</span>
                        <span className="E">E</span>
                        <span className="Z">Z</span>
                    </h2>
                    <h3 className={`developer neon-text hero-right__animation ${isVisible ? "visible" : ""}`}>Developer</h3>
                </section>
                <div className="hero__mb">
                    <h3 className="fullstack-mb neon-text">FullStack</h3>
                    <h3 className={`developer-mb neon-text hero-right__animation ${isVisible ? "visible" : ""}`}>Developer</h3>
                </div>
                <div className="hero__tools-mb">
                    <li>
                        <a href="https://www.linkedin.com/in/gherson-sa/" target="_blank" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in neon-text"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/GhersonSA" target="_blank" aria-label="GitHub">
                            <i className="fa-brands fa-github neon-text"></i>
                        </a>                  
                    </li>
                </div>
                <div className="hero__photo">
                    <img width="280" height="340" className="hero__img" src={img__light} alt="photo__gherson" />
                </div>
            </div>
            <div className="hero__footer">
                <a href="#proyectos">
                    <i className="fa-solid fa-arrow-down"></i>
                    Proyectos
                    <i className="fa-solid fa-arrow-down"></i>
                </a>
            </div>
        </section>
    )
}

export default Hero;
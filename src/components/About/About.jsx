import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useTheme } from '../../context/ThemeContext';
import { techIcons } from '../../data/techIcons';
import './About.css';
import g__photo from '../../assets/images/img-light.webp';
import g__photo2 from '../../assets/images/img-dark.webp';

const About = () => {

    const { darkMode } = useTheme();

    const [sectionRef, isVisible] = useIntersectionObserver();

    return (
        <section ref={sectionRef} className={`sobre-mi ${isVisible ? "visible" : ""}`} id="about">
            <div className="sobre-mi__container">
                <h2 className="h2-title">Sobre mí</h2>
                <div className="sobre-mi__card">
                    <div className="sobre-mi__img">
                        <span className={`g-photo__mobile ${darkMode ? "dark" : "light"}`}></span>
                        <img src={darkMode ? g__photo : g__photo2} alt="g-photo__desktop" className={`g-photo__desktop left__animation ${isVisible ? "visible" : ""}`} />
                    </div>
                    <div className="sobre-mi__section">
                        <div className="section__container">
                            <h2 className={`sobre-mi__nombre down__animation ${isVisible ? "visible" : ""}`}>GHERSON SÁNCHEZ</h2>
                            <h3 className={`sobre-mi__profesion down__animation ${isVisible ? "visible" : ""}`}>{'"Desarrollador Web"'}</h3>
                            <h4 className={`sobre-mi__disponibilidad down__animation ${isVisible ? "visible" : ""}`}><span>•</span> Disponible para trabajar</h4>

                            <p className={`sobre-mi__p right__animation ${isVisible ? "visible" : ""}`}>La programación me atrapó por la posibilidad infinita de crear. <span>Hoy, desarrollo aplicaciones web modernas con TypeScript, React, Next.js, Node.js y las últimas tecnologías, manteniéndome siempre actualizado y en busca de nuevos desafíos.</span></p>

                            <p className={`sobre-mi__p left__animation ${isVisible ? "visible" : ""}`}>He tenido la oportunidad de hacer de mi hobby una profesión y, <span>mis proyectos personales están enfocados a brindar soluciones a problemas de la vida cotidiana.</span></p>

                            <p className={`sobre-mi__p right__animation ${isVisible ? "visible" : ""}`}>Fuera del código, me dedico a cuidar tanto mi cuerpo como mi mente. Leer me mantiene en equilibrio mental, mientras que ir al gimnasio me recuerda la importancia de la disciplina y el esfuerzo constante.</p>

                            <span className={`sobre-mi__float-1 left__animation ${isVisible ? "visible" : ""}`}>
                                <i className="fa-regular fa-circle-check"></i> Alta adaptabilidad <i className="fa-solid fa-person-rays"></i> <br />
                                <i className="fa-regular fa-circle-check"></i> Resultados <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <br />
                            </span>
                            <span className={`sobre-mi__float-2 right__animation ${isVisible ? "visible" : ""}`}>
                                • Trabajo en equipo <i className="fa-solid fa-user-plus"></i> <br />
                                • Comunicación <i className="fa-solid fa-comments"></i> <br />
                                • Creativo <i className="fa-solid fa-pen-nib"></i>
                            </span>
                        </div>
                        <div className="sobre-mi__skills">
                            <h2 className={`h2-title top__animation ${isVisible ? "visible" : ""}`}>Habilidades</h2>
                            <div className={`skills__container top__animation ${isVisible ? "visible" : ""}`}>
                                {Object.entries(techIcons).map(([name, tech]) => (
                                    <span key={name}>
                                    <div className={`skills__icon ${name.toLowerCase()}`}
                                    style={{ backgroundColor: tech.color, color: "#fff" }}>
                                        <i className={tech.class}></i>
                                        <p>{name}</p>
                                    </div>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
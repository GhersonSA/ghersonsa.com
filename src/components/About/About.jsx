import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useTheme } from '../../context/ThemeContext';
import './About.css';
import g__photo from '../../assets/images/img-light.png';
import g__photo2 from '../../assets/images/img-dark.png';

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

                            <p className={`sobre-mi__p right__animation ${isVisible ? "visible" : ""}`}>La programación me atrapó por la posibilidad infinita de crear. <span>Hoy, desarrollo aplicaciones web con JavaScript, React y las últimas tecnologías, manteniéndome siempre actualizado y en busca de nuevos desafíos.</span></p>

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
                                <span>
                                    <div className="skills__icon html">
                                        <i className="devicon-html5-plain colored"></i>
                                        <p>HTML</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon css">
                                        <i className="devicon-css3-plain colored"></i>
                                        <p>CSS</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon javascript">
                                        <i className="devicon-javascript-plain colored"></i>
                                        <p>JavaScript</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon react">
                                        <i className="devicon-react-original colored"></i>
                                        <p>React</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon tailwind">
                                        <i className="devicon-tailwindcss-original colored"></i>
                                        <p>TailwindCSS</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon sass">
                                        <i className="devicon-sass-original colored"></i>
                                        <p>Sass</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon node">
                                        <i className="devicon-nodejs-plain colored"></i>
                                        <p>Node</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon express">
                                        <i className="devicon-express-original"></i>
                                        <p>Express</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon postgresql">
                                        <i className="devicon-postgresql-plain-wordmark colored"></i>
                                        <p>PostgreSQL</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon mysql">
                                        <i className="devicon-mysql-original colored"></i>
                                        <p>MySQL</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon mongodb">
                                        <i className="devicon-mongodb-plain colored"></i>
                                        <p>MongoDB</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon git">
                                        <i className="devicon-git-plain colored"></i>
                                        <p>Git</p>
                                    </div>
                                </span>
                                <span>
                                    <div className="skills__icon github">
                                        <i className="devicon-github-plain"></i>
                                        <p>GitHub</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Contact.css';
import form__photo from '../../assets/images/img-casual.jpg';

const Contact = () => {

    const [sectionRef, isVisible] = useIntersectionObserver();

    return (
        <section ref={sectionRef} className={`formulario ${isVisible ? "visible" : ""}`} id="formulario">
            <div className="formulario__container">
                <h2 className="h2-title">Contáctame</h2>
                <div className="formularios">
                    <div className="formulario__1">
                        <div className="formulario__1--blur"></div>
                        <div>
                            <img className="form__img" height="300px" width="300px" src={form__photo} alt="form__photo" />
                        </div>
                        <div className="form__name">
                            <h3 className="h2-title">Gherson Sánchez</h3>
                            <h4>Desarrollador Web</h4>
                        </div>
                        <div className="form__social">
                            <div className={`form__linkedin social__animation ${isVisible ? "visible" : ""}`}>
                                <a href="https://www.linkedin.com/in/gherson-sa/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <div className={`form__github social__animation ${isVisible ? "visible" : ""}`}>
                            <a href="https://github.com/GhersonSA" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="formulario__2">
                        <div className="form__chat">
                            <div>
                                <img width="30" height="30" src={form__photo} alt="foto" className="form__photo"/>
                                <span className="green__point"></span> 
                                <div>
                                    <h3 className="form__chat-nombre">Gherson Sánchez</h3>
                                    <h4 className="form__chat-disponibilidad">Disponible para trabajar</h4> 
                                </div>
                            </div>
                            <div>
                                <a href="https://wa.me/34624313994" target="_blank"><i className="fa-solid fa-phone"></i></a>
                            </div>
                        </div>
                        <div className="form__message">
                            <time>11:11</time>
                            <img width="35" height="35" src={form__photo} alt="foto" className="form__photo"/>
                            <span className="green__point-2"></span> 
                            <p className={`message__animation ${isVisible ? "visible" : ""}`}>Envíame un mensaje y te responderé lo más rápido posible!</p>

                        </div>
                        {/* */}
                        <div className="form__group">
                            <div>
                                <i className="fa-brands fa-whatsapp"></i>
                                <input type="text" value="+34 624313994" readOnly />
                            </div>
                        </div>
                        <div className="form__group">
                            <div>
                                <i className="fa-solid fa-square-envelope"></i>
                                <input type="text" value="Gherson2002@outlook.com" readOnly />
                            </div>
                        </div>
                        <div className="form__message-2">
                            <img width="35" height="35" src={form__photo} alt="foto" className="form__photo"/>
                            <span className="green__point-3"></span> 
                            <p className={`message-2__animation ${isVisible ? "visible" : ""}`}>¡Gracias por visitar mi portafolio!<br />Estoy constantemente aprendiendo y mejorando mis habilidades. Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto conmigo a través de WhatsApp, correo electrónico o por mis redes sociales. ¡Me encantaría saber tu opinión!</p>
                            <span className="form__miniphoto"></span>
                        </div>
                        <div className="form__button">
                            <a href="../../../public/assets/pdf/CV_SANCHEZ GHERSON.pdf" download="CV_SANCHEZ GHERSON.pdf" className="submit__button">Curriculum <i className="fa-solid fa-file-pdf"></i></a>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
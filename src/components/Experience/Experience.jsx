import './Experience.css';

const Experience = () => {
    return (
        <section className="experiencia-laboral">
            <div className="experiencia-laboral__container">
                <h2 className="h2-title">Experiencia</h2>
                <article className="exp__container">
                    <ul className="exp__ul">
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-suitcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Practicante Desarrollador Web</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Zaragoza</span>
                            </h3>
                            <time className="exp__time">Septiembre 2025 - Diciembre 2025</time>
                            <p className="exp__p">Futuras prácticas para terminar mi grado superior de DAW</p>
                        </li>
                        {/*}
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-suitcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Practicante de desarrollo de aplicaciones web</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Accenture</span>
                            </h3>
                            <time className="exp__time">Septiembre 2025 - Diciembre 2025</time>
                            <p className="exp__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores iusto fugit a laborum quos incidunt nemo? Voluptatibus tenetur asperiores quasi veritatis voluptas explicabo et suscipit fuga, id, officia ipsum.</p>
                        </li>
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-suitcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Practicante de desarrollo de aplicaciones web</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Accenture</span>
                            </h3>
                            <time className="exp__time">Septiembre 2025 - Diciembre 2025</time>
                            <p className="exp__p">Estuve de practicante para finalizar mi grado superior de DAW</p>
                        </li>
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-suitcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Practicante de desarrollo de aplicaciones web</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Accenture</span>
                            </h3>
                            <time className="exp__time">Septiembre 2025 - Diciembre 2025</time>
                            <p className="exp__p">Estuve de practicante para finalizar mi grado superior de DAW</p>
                        </li>
                        {*/}
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Experience;
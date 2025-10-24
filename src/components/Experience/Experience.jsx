import './Experience.css';

const Experience = () => {
    return (
        <section className="experiencia-laboral">
            <div className="experiencia-laboral__container">
                <h2 className="h2-title">Experiencia Laboral</h2>
                <article className="exp__container">
                    <ul className="exp__ul">
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-suitcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Desarrollador FullStack - CodeArts Solutions (Remoto)</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Zaragoza</span>
                            </h3>
                            <time className="exp__time">Septiembre 2025 - Actualidad</time>
                            <p className="exp__p">· <strong>Lideré el desarrollo completo de un entorno colaborativo</strong> (equipo de 6 desarrolladores) para una plataforma de eventos, integrando módulos dinámicos permitiendo a administradores editar eventos destacados y redes sociales desde el panel de control.</p>
                            <p className="exp__p">· <strong>Desarrollé e implementé APIs RESTful, un sistema de reservas y gestión de entidades</strong> para un estudio musical.</p>
                            <p className="exp__p">· <strong>Integré funcionalidades como autenticación JWT,</strong> verificación de correo y gestión de roles en un entorno Docker</p>
                            <p className="exp__p">· <strong>Apliqué metodologías ágiles (KANBAN y Git Flow),</strong> con seguimiento diario en Slack y despliegue continuo en Docker.</p>
                            <p className="exp__p"><strong>Stack:</strong> Angular, Symfony, PostgreSQL, TypeScript, Node.js, Postman, Docker, GitLab</p>
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
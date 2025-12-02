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
                                <i className="fa-solid fa-briefcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Fundador & Desarrollador Web - Tradifusion</span>
                            </h3>
                            <time className="exp__time">Diciembre 2025 - Actualidad</time>
                            <p className="exp__p">· <strong>Consultoría y Digitalización para PYMES:</strong> Creación de soluciones digitales a medida para potenciar la visibilidad y operativa de negocios locales, actuando como socio tecnológico integral.</p>
                            <p className="exp__p">· <strong>Desarrollo Web & Branding 360º:</strong> Diseño y despliegue de sitios corporativos y landing pages de alto rendimiento (incluyendo el caso de éxito &#34;Restaurante Los Manolos&#34;), abarcando desde la identidad visual hasta la configuración de hosting y dominio.</p>
                            <p className="exp__p">· <strong>Optimización SEO y Performance:</strong> Implementación de estrategias de SEO local y optimización de Core Web Vitals para garantizar posicionamiento en buscadores y tiempos de carga mínimos.</p>
                            <p className="exp__p">· <strong>Soporte y Mantenimiento:</strong> Gestión continua de infraestructura digital, actualizaciones de seguridad y asesoramiento técnico personalizado para la escalabilidad del negocio.</p>
                            <p className="exp__p"><strong>Stack:</strong> Next.js, TypeScript, TailwindCSS, NestJS, PostgreSQL, Docker.</p>
                        </li>
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
                            <p className="exp__p">· <strong>Lideré el desarrollo completo de un entorno colaborativo</strong> (equipo de 6 desarrolladores) para una plataforma de eventos, integrando módulos dinámicos permitiendo a administradores editar eventos destacados y redes sociales desde el panel de control con Angular, Tailwind CSS y TypeScript.</p>
                            <p className="exp__p">· <strong>Desarrollé e implementé arquitectura de APIs RESTful robustas </strong>para un sistema de reservas y gestión de entidades para un estudio musical.</p>
                            <p className="exp__p">· <strong>Contenerización de aplicaciones </strong>y gestión de entornos de despliegue continuo con Docker.</p>
                            <p className="exp__p">· <strong>Gestión de bases de datos relacionales, incluyendo migraciones complejas </strong> y modelado de entidades con PostgreSQL.</p>
                            <p className="exp__p">· <strong>Integré funcionalidades como autenticación social con Google API y seguridad mediante JWT,</strong> verificaciones de correo y gestión de roles y pasarelas de pagos seguras con Stripe.</p>
                            <p className="exp__p">· <strong>Apliqué metodologías ágiles (KANBAN y Git Flow),</strong> con seguimiento diario en Slack.</p>
                            <p className="exp__p"><strong>Stack:</strong> Angular, Symfony, PostgreSQL, TypeScript, Node.js, Postman, Docker, GitLab.</p>
                        </li>
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-suitcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Desarrollador FullStack (Lead) - CoPiloto Carpooling App</span>
                                <span className="exp__span-1"></span>
                                <span className="exp__span-2"></span>
                            </h3>
                            <time className="exp__time">Abril 2025 - Actualidad</time>
                            <p className="exp__p">· <strong>Lideré el desarrollo técnico e integral</strong> de una plataforma SaaS de movilidad compartida (Carpooling) diseñada para resolver la falta de transporte en zonas industriales periféricas de Zaragoza.</p>
                            <p className="exp__p">· <strong>Arquitectura Full Stack escalable: </strong>Diseñé un sistema desacoplado utilizando Next.js (App Router) en el frontend y NestJS (Modular) en el backend, garantizando mantenibilidad y separación de responsabilidades.</p>
                            <p className="exp__p">· <strong>Gestión de Datos Compleja: </strong>Modelado de base de datos relacional con PostgreSQL y Prisma ORM para gestionar relaciones entre conductores, pasajeros, rutas y sistemas de reseñas.</p>
                            <p className="exp__p">· <strong>Seguridad y Accesibilidad: </strong> Implementación de autenticación robusta (NextAuth + JWT + Cookies HttpOnly), gestión de roles (RBAC) y un modo invitado seguro.</p>
                            <p className="exp__p">· <strong>Infraestructura & DevOps:</strong> Contenerización del entorno (Frontend, Backend, DB) mediante Docker para asegurar la paridad entre desarrollo y producción. Preparación de endpoints API para futura migración a móvil (React Native).</p>
                            <p className="exp__p"><strong>Stack:</strong> Next.js, TypeScript, Tailwind, NestJS, PostgreSQL, Prisma, Docker, Google Maps API</p>
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
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
                                <span className="exp__span-1">Full-Stack Engineer & Software Architect - CoPiloto Carpooling App</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Zaragoza, España</span>
                            </h3>
                            <time className="exp__time">Marzo 2025 - Actualidad</time>
                            <p className="exp__p"><span className="exp__p exp__span-2">Reto:</span> Crear una plataforma de carpooling (+20 usuarios activos) para zonas industriales. Responsable del ciclo completo: desde la arquitectura hasta el despliegue (E2E).</p>
                            <p className="exp__p">· <strong>Logré una reducción del 40% en el tiempo de desarrollo</strong> mediante la arquitectura de código compartido en TypeScript, permitiendo que la lógica de negocio se ejecute de forma idéntica en la web administrativa (Next.js) y la aplicación móvil (React Native).</p>
                            <p className="exp__p">· <strong>Optimicé la integridad de datos críticos </strong>modelando una base de datos relacional compleja en PostgreSQL con Prisma ORM, gestionando flujos de concurrencia entre conductores y pasajeros en tiempo real.</p>
                            <p className="exp__p">· <strong>Aseguré la paridad total del entorno (Dev/Prod) </strong>mediante la implementación de un stack de contenedores con Docker, facilitando la integración de NextAuth y RBAC para una seguridad de grado empresarial.</p>
                            <p className="exp__p"><strong>Stack:</strong> Next.js, TypeScript, Tailwind, NestJS, PostgreSQL, Prisma, Docker, Google Maps API, React Native</p>
                        </li>
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-suitcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Full-Stack Developer - CodeArts Solutions (Remoto)</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Sevilla, España</span>
                            </h3>
                            <time className="exp__time">Septiembre 2025 - Mayo 2026</time>
                            <p className="exp__p"><span className="exp__p exp__span-2">Reto:</span> Desarrollar y escalar plataformas de alto tráfico para el sector cultural y de eventos. </p>
                            <p className="exp__p">· <strong>Escalé el rendimiento de la plataforma de un Museo (+26k usuarios/mes)</strong> integrando módulos dinámicos con Next.js y TypeScript que permitieron una gestión de contenido en tiempo real sin degradación del rendimiento.</p>
                            <p className="exp__p">· <strong>Reduje el tiempo de respuesta del servidor en un 30% </strong>para una plataforma de eventos (+15k usuarios/mes) mediante la optimización de consultas en Node.js/NestJS y estrategias avanzadas de caché.</p>
                            <p className="exp__p">· <strong>Garanticé el 99.9% de disponibilidad </strong>en sistema de reservas simultáneas mediante el diseño de una arquitectura de base de datos idempotente en PostgreSQL, gestionando migraciones complejas sin tiempo de inactividad. </p>
                            <p className="exp__p">· <strong>Mitigué riesgos financieros y de identidad </strong> integrando pasarelas de pago con Stripe y sistemas de autenticación social con JWT y Google API.</p>
                            <p className="exp__p">· <strong>Integré funcionalidades como autenticación social con Google API y seguridad mediante JWT,</strong> verificaciones de correo y gestión de roles y pasarelas de pagos seguras con Stripe.</p>
                            <p className="exp__p"><strong>Stack:</strong> React (Next.js), Node.js, NestJS, TypeScript, PostgreSQL, Docker, Stripe, Google API, Git Flow </p>
                        </li>
                        <li className="exp__card">
                            <span className="exp__logo">
                                <i className="fa-solid fa-briefcase"></i>
                            </span>
                            <h3 className="exp__h3">
                                <span className="exp__span-1">Full-Stack Developer - Tradifusion</span>
                                <span className="exp__span-1">-</span>
                                <span className="exp__span-2">Zaragoza, España</span>
                            </h3>
                            <time className="exp__time">Diciembre 2023 - Agosto 2025</time>
                            <p className="exp__p"><span className="exp__p exp__span-2">Reto:</span> Liderar la transformación digital y desarrollo de software de alto rendimiento en sector PYME. </p>
                            <p className="exp__p">· <strong>Incrementé la eficiencia operativa en un 30%</strong> mediante el desarrollo de aplicaciones de gestión interna en tiempo real con Next.js y NestJS para el sector restauración.</p>
                            <p className="exp__p">· <strong>Logré puntuaciones 100/100 en Core Web Vitals</strong> para productos mediante el uso avanzado de SSR/ISR y optimización SEO técnica, mejorando la conversión de clientes en un 25%.</p>
                            <p className="exp__p">· <strong>Reduje latencias y aumenté la seguridad perimetral </strong> gestionando infraestructuras en VPS y configurando Cloudflare (CDN/SSL) para entornos de producción.</p>
                            <p className="exp__p">· <strong>Soporte y Mantenimiento:</strong> Gestión continua de infraestructura digital, actualizaciones de seguridad y asesoramiento técnico personalizado para la escalabilidad del negocio.</p>
                            <p className="exp__p"><strong>Stack:</strong> React (Next.js), TypeScript, TailwindCSS, NestJS, PostgreSQL, Docker, Cloudflare, VPS </p>
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
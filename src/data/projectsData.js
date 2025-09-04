import CoPiloto_Login from "../assets/images/CoPiloto-Login.webp";
import CoPiloto_Home from "../assets/images/CoPiloto-Home.webp";
import CoPiloto_Home_3 from "../assets/images/CoPiloto-Home-3.webp";
import CoPiloto_Passengers from "../assets/images/CoPiloto-Passengers.webp";
import CoPiloto_Payments from "../assets/images/CoPiloto-Payments.webp";
import CoPiloto_Mobile from "../assets/images/CoPiloto-Mobile.webp";


export const projects = [
    {
        id: "proyecto-1",
        img: CoPiloto_Home_3,
        img_detail: CoPiloto_Login,
        link: "https://copiloto-carpooling.vercel.app/",
        repo: "https://github.com/GhersonSA/CoPiloto-Carpooling-App",
        title: "CoPiloto Carpooling App",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        stack: "Fullstack",
        summary: "CoPiloto es una red social (Carpooling App) que conecta a personas con destinos similares para compartir viajes al trabajo. Permitiendo que los conductores generen ingresos extras ofreciendo asientos disponibles en sus recorridos diarios utilizando nuestra app.",
        introduccion: "CoPiloto es una aplicación web tipo carpooling que funciona como una red social de movilidad laboral. Permite que trabajadores encuentren transporte compartido hacia sus destinos y que conductores ofrezcan sus recorridos diarios, generando ingresos adicionales. Además, cuenta con un sistema de gestión de usuarios (CMS), donde se registran choferes y pasajeros con perfiles personalizados.",
        description: "CoPiloto surge como solución a la dificultad de transporte hacia zonas de trabajo alejadas, ofreciendo una plataforma que combina carpooling y comunidad. Implementé un backend con Node.js, Express y PostgreSQL que soporta un CRUD completo con consultas y relaciones entre usuarios, choferes, pasajeros y rutas. Para la autenticación se usan JWT y cookies seguras (cookie-parser), asegurando sesiones confiables. En frontend, la experiencia es intuitiva y responsive gracias a React y TailwindCSS. La aplicación también funciona como un CMS donde el administrador puede registrar y gestionar usuarios, choferes y pasajeros. Incluye un dashboard para choferes con historial de viajes, pasajeros e ingresos, además de un sistema de reseñas que fomenta la confianza entre la comunidad.",
        highlights: [
            { description: "Red social (Carpooling App)." },
            { description: "Autenticación con JWT y cookies seguras." },
            { description: "CMS para gestionar choferes y pasajeros." },
            { description: "Dashboard con historial de viajes e ingresos." },
            { description: "Backend completo (CRUD, relaciones en BD)." },
            { description: "Responsive y Mobile First." }
        ],
        features: [
            {
                description: "Entre las características principales destacan las siguientes:"
            },
            {
                title: "Autenticación segura con JWT",
                text: "Inicio de sesión con cookies HttpOnly y soporte para modo invitado (Demo)."
            },
            {
                title: "Gestión de usuarios (CMS)",
                text: "Administración de choferes y pasajeros con perfiles personalizados y control de accesos."
            },
            {
                title: "Búsqueda de transporte eficiente",
                text: "Todo lo importante, al alcance de un toque. La pantalla de inicio ofrece accesos rápidos a tus rutas y funcionalidades."
            },
            {
                title: "Historial de viajes y pagos",
                text: "Consulta tus trayectos realizados y visualiza lo que ganas como conductor."
            },
            {
                title: "Dashboard personalizado",
                text: "Vista clara de tu actividad diaria. Revisa tus próximos viajes, historial de pasajeros y viajes desde un solo lugar."
            },
            {
                title: "Calificaciones y reseñas",
                text: "Después de cada trayecto, usuarios pueden calificar y dejar comentarios, fomentando la seguridad y el buen comportamiento."
            },
            {
                title: "Optimización de rendimiento",
                text: "Backend con consultas eficientes en PostgreSQL y relaciones entre usuarios, choferes, pasajeros y viajes."
            },
            {
                title: "Responsive Design & Mobile First",
                text: "Diseño adaptado a múltiples dispositivos. Interfaces limpias, jerarquía visual clara y navegación optimizada para pantallas pequeñas."
            }
        ],
        screenshots: [
            CoPiloto_Login,
            CoPiloto_Home,
            CoPiloto_Passengers,
            CoPiloto_Payments,
            CoPiloto_Mobile
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para los componentes" },
            { tech: "Node.js", use: "Entorno de ejecución para JavaScript del lado del servidor" },
            { tech: "Express.js", use: "Framework para el desarrollo ágil de API con NodeJS" },
            { tech: "PostgreSQL", use: "Consultas, relaciones y almacenamiento de datos" },
            { tech: "JWT + Cookie parser", use: "Autenticación y manejo seguro de sesiones" }
        ],
        tools: ["React", "TailwindCSS", "Node.js", "Express.js", "PostgreSQL", "JWT", "Cookies"]
    },
    {
        id: "proyecto-2",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        repo: "",
        link: "url del proyecto 2",
        title: "Spotify Full Clone (En progreso...)",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        stack: "Frontend",
        summary: "Clon que replica la experiencia completa de Spotify en versión web, ofreciendo diseño fiel al original, reproducción de música, sincronización de letras y gestión de colecciones locales, todo en una interfaz moderna y responsiva.",
        introduccion: "Spotify Full Clone es un proyecto personal desarrollado con HTML, JavaScript, React y TailwindCSS, cuyo objetivo es recrear la plataforma de música más popular del mundo. Este proyecto busca no solo imitar su estética, sino también ofrecer funcionalidades que brinden una experiencia inmersiva al usuario.",
        description: "La aplicación combina diseño responsivo, control dinámico de reproducción y sincronización de letras en tiempo real, logrando un entorno muy cercano al original. Además, permite la gestión local de colecciones musicales, garantizando una experiencia completa tanto en escritorio como en dispositivos móviles. Este clon es una demostración práctica de cómo integrar tecnologías modernas en un proyecto ambicioso y escalable.",
        highlights: [
            { description: "Experiencia de Usuario Completa." },
            { description: "Sincronización de Letras en Tiempo Real." },
            { description: "Réplica exacta del Diseño Original." },
            { description: "Control de Reproducción Dinámico." },
            { description: "Gestión de Colecciones de Musica Local." },
            { description: "Responsive y Mobile First." }
        ],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Réplica exacta del Diseño Original",
                text: "Se ha cuidado cada detalle de su diseño manteniendo su armonía original."
            },
            {
                title: "Sincronización de Letras en Tiempo Real",
                text: "Esta es la funcionalidad estrella. Destaca la precisión con la que las letras se sincronizan al ritmo de la música, ofreciendo una experiencia inmersiva y atractiva para los usuarios."
            },
            {
                title: "Experiencia de Usuario Completa",
                text: "La aplicación ofrece una experiencia de usuario fluida e intuitiva, similar a la plataforma original de Spotify."
            },
            {
                title: "Control de Reproducción Dinámico",
                text: "Controla el avance de la canción, el volumen, el orden de la cola y la reproducción aleatoria."
            },
            {
                title: "Gestión de Colecciones de Musica Local",
                text: "La biblioteca de canciones se gestionan de manera local."
            },
            {
                title: "Responsive Design & Mobile First",
                text: "Diseño adaptado a múltiples dispositivos. Interfaces limpias, jerarquía visual clara y navegación optimizada para pantallas pequeñas."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" }
        ],
        tools: ["HTML", "JavaScript", "React", "TailwindCSS"]
    },
    {
        id: "proyecto-3",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        link: "url del proyecto 3",
        repo: "",
        title: "Próximamente...",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        summary: "App destinada a...",
        introduccion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        highlights: [{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."}],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Funcionalidad 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            },
            {
                title: "Funcionalidad 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" },
            { tech: "Node.js", use: "Backend" },
            { tech: "Express.js", use: "Backend" },
            { tech: "MongoDB", use: "Base de datos" }
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express.js"]
    },
    {
        id: "proyecto-4",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        link: "url del proyecto 4",
        repo: "",
        title: "Próximamente...",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        summary: "App destinada a...",
        introduccion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        highlights: [{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."}],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Funcionalidad 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            },
            {
                title: "Funcionalidad 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" },
            { tech: "Node.js", use: "Backend" },
            { tech: "Express.js", use: "Backend" },
            { tech: "MongoDB", use: "Base de datos" }
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express.js"]
    },
    {
        id: "proyecto-5",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        link: "url del proyecto 5",
        repo: "",
        title: "Próximamente...",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        summary: "App destinada a...",
        introduccion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        highlights: [{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."}],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Funcionalidad 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            },
            {
                title: "Funcionalidad 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" },
            { tech: "Node.js", use: "Backend" },
            { tech: "Express.js", use: "Backend" },
            { tech: "MongoDB", use: "Base de datos" }
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express.js"]
    },
    {
        id: "proyecto-6",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        link: "url del proyecto 6",
        repo: "",
        title: "Próximamente...",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        summary: "App destinada a...",
        introduccion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        highlights: [{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."}],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Funcionalidad 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            },
            {
                title: "Funcionalidad 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" },
            { tech: "Node.js", use: "Backend" },
            { tech: "Express.js", use: "Backend" },
            { tech: "MongoDB", use: "Base de datos" }
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express.js"]
    },
    {
        id: "proyecto-7",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        link: "url del proyecto 7",
        repo: "",
        title: "Próximamente...",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        summary: "App destinada a...",
        introduccion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        highlights: [{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."}],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Funcionalidad 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            },
            {
                title: "Funcionalidad 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" },
            { tech: "Node.js", use: "Backend" },
            { tech: "Express.js", use: "Backend" },
            { tech: "MongoDB", use: "Base de datos" }
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express.js"]
    },
    {
        id: "proyecto-8",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        link: "url del proyecto 8",
        repo: "",
        title: "Próximamente...",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        summary: "App destinada a...",
        introduccion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        highlights: [{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."}],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Funcionalidad 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            },
            {
                title: "Funcionalidad 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" },
            { tech: "Node.js", use: "Backend" },
            { tech: "Express.js", use: "Backend" },
            { tech: "MongoDB", use: "Base de datos" }
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express.js"]
    },
    {
        id: "proyecto-9",
        img: "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
        link: "url del proyecto 9",
        repo: "",
        title: "Próximamente...",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        summary: "App destinada a...",
        introduccion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.",
        highlights: [{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non. epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non.epe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."}],
        features: [
            { description: "Entre las características principales destaca..."},
            {
                title: "Funcionalidad 1",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            },
            {
                title: "Funcionalidad 2",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate obcaecati est doloremque commodi illum ea quidem dolorum odit saepe distinctio molestiae voluptates, neque explicabo harum, esse ullam? Maxime, non."
            }
        ],
        screenshots: [
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg",
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" },
            { tech: "Node.js", use: "Backend" },
            { tech: "Express.js", use: "Backend" },
            { tech: "MongoDB", use: "Base de datos" }
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "Express.js"]
    }
];
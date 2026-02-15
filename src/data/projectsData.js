import CoPiloto_Login from "../assets/images/CoPiloto-Login.webp";
import CoPiloto_Home from "../assets/images/CoPiloto-Home-v2.webp";
import CoPiloto_Mobile_2 from "../assets/images/CoPiloto-Mobile-2.webp";
import CoPiloto_Home_v2 from "../assets/images/CoPiloto-Home-v2.webp";
import CoPiloto_Passengers from "../assets/images/CoPiloto-Passengers.webp";
import CoPiloto_Payments from "../assets/images/CoPiloto-Payments.webp";
import CoPiloto_Mobile from "../assets/images/CoPiloto-Mobile.webp";
import CoPiloto_App from "../assets/images/CoPiloto-App.webp";
import Spotify_Full_Clone from "../assets/images/Spotify-Full-Clone.webp"
import Spotify_Full_Clone_2 from "../assets/images/Spotify-Full-Clone-2.webp"
import Spotify_Full_Clone_3 from "../assets/images/Spotify-Full-Clone-3.webp"
import Spotify_Full_Clone_Mobile from "../assets/images/Spotify-Full-Clone-Mobile.webp"
import Spotify_Full_Clone_Desktop from "../assets/images/Spotify-Full-Clone-Desktop.webp"
import Restaurante_Los_Manolos_Desktop from "../assets/images/Restaurante-Los-Manolos-Desktop.webp"
import Restaurante_Los_Manolos from "../assets/images/Restaurante-Los-Manolos.webp"
import Restaurante_Los_Manolos_2 from "../assets/images/Restaurante-Los-Manolos-2.webp"
import Restaurante_Los_Manolos_3 from "../assets/images/Restaurante-Los-Manolos-3.webp"
import Restaurante_Los_Manolos_4 from "../assets/images/Restaurante-Los-Manolos-4.webp"
import Airbnb_Full_Clone_Desktop from "../assets/images/Airbnb-Full-Clone-Desktop.webp"
import Airbnb_Full_Clone from "../assets/images/Airbnb-Full-Clone.webp"
import Airbnb_Full_Clone_2 from "../assets/images/Airbnb-Full-Clone-2.webp"
import Proximamente from "../assets/images/proximamente.webp"


export const projects = [
    {
        id: "proyecto-1",
        img: CoPiloto_Home_v2,
        img_detail: CoPiloto_Login,
        link: "https://copiloto-carpooling.vercel.app/",
        repo: "https://github.com/GhersonSA/CoPiloto-Carpooling-App",
        title: "CoPiloto Carpooling App",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        stack: "App móvil (+20 usuarios activos)",
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
            CoPiloto_App,
            CoPiloto_Login,
            CoPiloto_Home,
            CoPiloto_Mobile_2,
            CoPiloto_Passengers,
            CoPiloto_Payments,
            CoPiloto_Mobile
        ],
        techDetails: [
            { tech: "Next.js", use: "Frontend web moderno, SSR y rutas protegidas" },
            { tech: "TypeScript", use: "Tipado estático y robustez en todo el stack" },
            { tech: "React Native", use: "Desarrollo de la app móvil multiplataforma" },
            { tech: "NestJS", use: "Backend modular y escalable con Node.js" },
            { tech: "PostgreSQL", use: "Base de datos relacional y consultas avanzadas" },
            { tech: "Docker", use: "Contenerización y despliegue de todos los servicios" }
        ],
        tools: ["Nextjs", "TypeScript", "ReactNative", "NestJS", "PostgreSQL", "Docker"]
    },
    {
        id: "proyecto-2",
        img: Spotify_Full_Clone_Desktop,
        img_detail: Spotify_Full_Clone,
        repo: "https://github.com/GhersonSA/Spotify-Full-Clone",
        link: "https://spotify-full-clone-react.vercel.app/",
        title: "Spotify Full Clone (En progreso...)",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        stack: "(Canciones y letras sincronizadas)",
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
            Spotify_Full_Clone,
            Spotify_Full_Clone_2,
            Spotify_Full_Clone_3,
            Spotify_Full_Clone_Mobile
        ],
        techDetails: [
            { tech: "React", use: "Diseño de componentes para el Frontend" },
            { tech: "TailwindCSS", use: "Facilidad de estilos para el Frontend" }
        ],
        tools: ["HTML", "JavaScript", "React", "TailwindCSS"]
    },
    {
        id: "proyecto-3",
        img: Restaurante_Los_Manolos_Desktop,
        img_detail: Restaurante_Los_Manolos,
        link: "https://restaurante-los-manolos.vercel.app/",
        repo: "https://github.com/GhersonSA/Restaurante-Los-Manolos",
        title: "Restaurante Los Manolos (Cliente Real)",
        cliente: "Negocio Local - Zaragoza", 
        type: "Digitalización & Desarrollo Web",
        stack: "Negocio Local (+30% clientes)",
        summary: "Digitalización integral de un restaurante tradicional. Desde el branding y la UX hasta el desarrollo de una plataforma de alto rendimiento con menús digitales QR, mejorando la captación de clientes y la operativa del negocio.",
        introduccion: "Este proyecto representa un caso de éxito real donde la tecnología se pone al servicio de un negocio local. Como desarrollador único (Lead Developer), gestioné todo el ciclo de vida del producto: toma de requisitos con el cliente, diseño de la identidad visual, arquitectura de la información y despliegue en producción.",
        description: "La solución no es solo una landing page; es una herramienta de venta. Desarrollada con Next.js y TypeScript para garantizar tiempos de carga instantáneos (vital para usuarios con datos móviles en el restaurante), la web cuenta con un sistema de menús optimizado y accesible. Se implementaron prácticas avanzadas de SEO local y accesibilidad, logrando posicionar al restaurante digitalmente. El resultado es una plataforma robusta, escalable y mantenible que ha modernizado la imagen de 'Los Manolos'.",
        highlights: [
            { description: "Solución de Negocio Real y Operativa." },
            { description: "UX centrada en la conversión y accesibilidad." },
            { description: "Integración de Menús Digitales QR." },
            { description: "Arquitectura Escalable con Next.js & TS." },
            { description: "Responsive y Mobile First." }
        ],
        features: [
            { description: "Entre las características principales destaca la fusión de diseño y rendimiento..."},
            {
                title: "Desarrollo Full Cycle",
                text: "Demostración de autonomía total: gestión de cliente, diseño UI/UX, desarrollo frontend/backend, configuración de dominio y hosting."
            },
            {
                title: "Diseño UX/UI & Branding",
                text: "Interfaz centrada en el usuario con una estética alineada a la identidad del restaurante, totalmente responsive y optimizada para SEO local."
            },
            {
                title: "Menú Digital QR",
                text: "Implementación de un sistema de carta digital optimizada para móviles, accesible mediante códigos QR en mesa, mejorando la higiene y la agilidad del servicio."
            },
            {
                title: "Performance & Core Web Vitals",
                text: "Optimización agresiva de recursos e imágenes para garantizar carga inmediata en redes 4G/5G, crucial para la experiencia de menú en mesa."
            },
            {
                title: "SEO Local y Posicionamiento",
                text: "Estructura semántica y metadatos optimizados para mejorar la visibilidad del restaurante en búsquedas locales en Zaragoza."
            }
        ],
        screenshots: [
            Restaurante_Los_Manolos,
            Restaurante_Los_Manolos_2,
            Restaurante_Los_Manolos_3,
            Restaurante_Los_Manolos_4
        ],
        techDetails: [
            { tech: "Next.js", use: "Framework principal para SSR y optimización SEO" },
            { tech: "TypeScript", use: "Lógica robusta y tipado estático" },
            { tech: "TailwindCSS", use: "Estilizado rápido y diseño responsive" },
            { tech: "Figma", use: "Prototipado y diseño de interfaz (UI)" },
            { tech: "Vercel", use: "Despliegue y Hosting (CI/CD)" }
        ],
        tools: ["Nextjs", "TypeScript", "TailwindCSS"]
    },
    {
        id: "proyecto-4",
        img: Airbnb_Full_Clone_Desktop,
        img_detail: Airbnb_Full_Clone,
        link: "url del proyecto 4",
        repo: "https://github.com/GhersonSA/Airbnb-Full-Clone",
        title: "Airbnb Full Clone (Arquitectura Hexagonal & Microservicios)",
        cliente: "Proyecto personal", 
        type: "Aplicación web",
        stack: "Fullstack + Microservicios",
        summary: "Clon completo de Airbnb con arquitectura hexagonal de microservicios. Incluye búsqueda avanzada, calendario interactivo, gestión de propiedades y sistema de reservas.",
        introduccion: "Airbnb Full Clone es un proyecto ambicioso que replica la funcionalidad completa de Airbnb utilizando arquitectura hexagonal y microservicios. El objetivo es demostrar cómo construir una aplicación escalable de nivel empresarial con tecnologías modernas.",
        description: "Este proyecto va más allá de un simple clon visual. Implementa una arquitectura de microservicios real con API Gateway en NestJS que estructura módulos independientes: Auth, Properties, Bookings, Favorites, Payments y Reviews. Cada módulo sigue principios de arquitectura hexagonal, permitiendo escalabilidad y mantenibilidad. El frontend en Next.js 15 con React 19 ofrece una experiencia pixel-perfect, incluyendo una SearchBar dinámica con calendario doble, selector de viajeros y búsqueda por 10 ciudades españolas. La comunicación entre servicios se gestiona con RabbitMQ para operaciones asíncronas, PostgreSQL con Prisma ORM para persistencia de datos, y Redis para caché de alto rendimiento. Todo orquestado con Docker Compose y gestionado en un monorepo Turborepo.",
        highlights: [
            { description: "Arquitectura de microservicios con NestJS." },
            { description: "API Gateway modular." },
            { description: "Base de datos PostgreSQL con Prisma ORM." },
            { description: "Mensajería asíncrona con RabbitMQ." },
            { description: "Cache con Redis para optimización." },
        ],
        features: [
            { description: "Entre las características principales destacan..."},
            {
                title: "SearchBar Avanzada",
                text: "Búsqueda por destino con 10 ciudades españolas, calendario doble con días pasados deshabilitados, flexibilidad de fechas (±1-14 días) y selector de viajeros (adultos, niños, bebés, mascotas)."
            },
            {
                title: "Arquitectura de Microservicios",
                text: "API Gateway que estructura módulos independientes: Auth (autenticación JWT), Properties (CRUD de propiedades), Bookings (reservas), Favorites (favoritos), Payments (pagos) y Reviews (reseñas)."
            },
            {
                title: "Carruseles de Propiedades",
                text: "Carruseles interactivos con categorías: Populares en España, De moda, Cercanos. Cada card incluye carrusel de imágenes, favoritos, ratings y badges."
            },
            {
                title: "Base de Datos Relacional",
                text: "Prisma ORM con PostgreSQL. Modelos completos para User, Property, Booking, Review, Favorite con relaciones optimizadas."
            },
            {
                title: "Comunicación Asíncrona",
                text: "RabbitMQ gestiona eventos entre microservicios (ej: crear reserva → procesar pago → enviar email → actualizar estadísticas)."
            },
            {
                title: "Cache Inteligente",
                text: "Redis cachea propiedades populares, sesiones de usuario y resultados de búsqueda frecuentes para reducir carga en la base de datos."
            },
            {
                title: "Monorepo Escalable",
                text: "Turborepo con workspaces: apps/ (web, api-gateway), packages/ (database, shared, ui). Facilita el desarrollo y deploy independiente."
            },
            {
                title: "Responsive Design & Mobile First",
                text: "Diseño adaptado a múltiples dispositivos con transiciones suaves estilo Airbnb original."
            }
        ],
        screenshots: [
            Airbnb_Full_Clone,
            Airbnb_Full_Clone_2,
            "https://st5.depositphotos.com/5845802/64038/v/600/depositphotos_640383330-stock-video-question-mark-old-television-screen.jpg"
        ],
        techDetails: [
            { tech: "Next.js 15", use: "Framework frontend con SSR y optimización SEO" },
            { tech: "React 19", use: "Biblioteca para construcción de UI" },
            { tech: "TailwindCSS 4", use: "Estilizado utility-first y diseño responsive" },
            { tech: "NestJS", use: "API Gateway y arquitectura de microservicios" },
            { tech: "PostgreSQL", use: "Base de datos relacional principal" },
            { tech: "Prisma ORM", use: "ORM type-safe para consultas y migraciones" },
            { tech: "RabbitMQ", use: "Cola de mensajes para comunicación entre servicios" },
            { tech: "Redis", use: "Cache distribuido para optimización" },
            { tech: "Docker Compose", use: "Estructura de contenedores en desarrollo" },
            { tech: "Turborepo", use: "Monorepo con builds optimizados" },
            { tech: "Zustand", use: "Estado global con persistencia" },
            { tech: "TypeScript", use: "Tipado estático en todo el proyecto" }
        ],
        tools: ["Next.js", "TypeScript", "TailwindCSS", "NestJS", "PostgreSQL", "Docker"]
    }, /*
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
    } */
];
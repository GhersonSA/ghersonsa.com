import { projects } from "../../data/projectsData";
import './Projects.css';
import Card from './Card';

const Projects = () => {
    return (
        <section className="proyectos" id="proyectos">
        <div className="proyectos__container">
            <h2 className="h2-title">Proyectos</h2>
            <div className="proyectos__grid">
                {projects.slice(0, 6).map((project) => (
                    <Card
                        key={project.id}
                        id={project.id}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        tools={project.tools}
                    />
                ))}
            </div>

            <a href="#proyectos">
                <p className="proyectos__p">Próximamente <i className="fa-solid fa-arrow-right"></i></p>
            </a>
        </div>
    </section>
    )
}

export default Projects;
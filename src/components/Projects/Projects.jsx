import { Link } from 'react-router-dom';
import { projects } from "../../data/projectsData";
import './Projects.css';
import Card from './Card';

const Projects = () => {
    return (
        <section className="proyectos" id="proyectos">
        <div className="proyectos__container">
            <h2 className="h2-title">Proyectos Destacados</h2>
            <div className="proyectos__grid">
                {projects.slice(0, 3).map((project) => (
                    <Card
                        key={project.id}
                        id={project.id}
                        img={project.img}
                        stack={project.stack}
                        title={project.title}
                        highlights={project.highlights}
                        link={project.link}
                        tools={project.tools}
                    />
                ))}
            </div>

            <Link to="/projects">
                <p className="proyectos__p">Todos los proyectos <i className="fa-solid fa-arrow-right"></i></p>
            </Link>
        </div>
    </section>
    )
}

export default Projects;
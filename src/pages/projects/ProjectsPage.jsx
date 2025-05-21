import { Link } from 'react-router-dom';
import Card from '../../components/Projects/Card';
import { projects } from '../../data/projectsData';
import { proyectHero } from '../../assets/images/proyectosHero-dark.jpg';
import '../../components/Projects/Projects.css';
import './ProjectsPage.css';

const AllProjectsPage = () => {
    return (
      <section className="proyectos">
        <div className="proyectos__container">
          <div className="proyectos__hero">
             <img src={proyectHero} alt="proyectos__hero--img" className="proyectos__hero--img"/> 
          </div>
          <h2 className='h2-title'>Todos mis proyectos</h2>
          <p className="proyectos__description">Explora una <span>colección única de proyectos</span> inspirados en la <span>vida cotidiana y transformados en tecnología innovadora.</span> Cada pieza refleja creatividad, dedicación y funcionalidad, mostrando cómo las <span>ideas simples pueden convertirse en soluciones únicas y significativas.</span></p>
          <div className='proyectos__grid proyectos__grid--all'>
            {projects.map(project => (
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

          <Link to="/">
                <p className="proyectos__p proyectos__regresar"> <i className="fa-solid fa-arrow-left"></i> Regresar al Inicio</p>
          </Link>
        </div>
      </section>
    )
}

export default AllProjectsPage;
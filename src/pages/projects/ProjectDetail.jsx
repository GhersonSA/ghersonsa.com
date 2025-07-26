import { useParams, Link } from 'react-router-dom'
import { projects } from '../../data/projectsData'
import '../../components/Projects/Projects.css';
import './ProjectsPage.css';

const ProjectDetail = () => {
  const { projectId } = useParams()
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <section className="proyectos">
        <div className="proyectos__container">
          <h2 className="h2-title">Proyecto no encontrado!</h2>
          <p className="proyectos-detalle__p">El proyecto que buscas no existe o fue eliminado.</p>

          <img src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" alt="error404" className="proyectos__error404"/>
          <Link to="/">
            <p className="proyectos__p"> <i className="fa-solid fa-arrow-left"></i> Regresar al Inicio</p>
          </Link>
          <Link to="/projects">
            <p className="proyectos__p proyectos__regresar"> <i className="fa-solid fa-arrow-left"></i> Volver a Proyectos</p>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="proyectos">
      <div className="proyectos__container">
        <div className="proyectos__header">
            <img src={project.img} alt="" className="proyectos-detalle__img" />
          <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="proyectos-detalle__link">
              <h2 className="proyectos-detalle__title">{project.title}</h2>
            </a>
            <ul className="proyectos-detalle__ul">
              <li><i className="fa-solid fa-user-tie"></i> {project.cliente}</li>
              <li><i className="fa-solid fa-earth-americas"></i> {project.type}</li>
              <li><i className="fa-solid fa-screwdriver-wrench"></i> {project.tools.join(', ')}</li>
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="proyectos-detalle__link">
              Ir al sitio <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="proyectos-detalle__link-2">
              Ir al repositorio <i className="fa-brands fa-git-alt"></i>
            </a>
          </div>
        </div>
        <main>
          <blockquote className="proyectos-detalle__blockquote">{project.summary}</blockquote>
          <div>
            <p className="proyectos-detalle__p">{project.introduccion}</p>
            <p className="proyectos-detalle__p">{project.description}</p>
            <h2 className="proyectos-detalle__subtitle">Funcionalidades</h2>
              <p className="proyectos-detalle__p">{project.features[0].description}</p>
              <ul className="proyectos-detalle__features">
                {project.features.slice(1).map((feature, i) => (
                  <li key={i}>
                    <strong>{feature.title}:</strong> {feature.text}
                  </li>
                ))}
              </ul>
            <h2 className="proyectos-detalle__subtitle">Vista previa (Screenshots)</h2>
            <div className="proyectos-detalle__gallery">
              {project.screenshots.map((src, i) => (
                <img key={i} src={src} alt={`Screenshot ${i+1}`} />
              ))}
            </div>
            <h2 className="proyectos-detalle__subtitle">Tecnologías</h2>
            <table className="proyectos-detalle__table">
              <thead>
                <tr>
                  <th>TECNOLOGÍA</th>
                  <th>USO</th>
                </tr>
              </thead>
              <tbody>
                {project.techDetails.map((row, i) => (
                  <tr key={i}>
                    <td>{row.tech}</td>
                    <td>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <Link to="/projects">
          <p className="proyectos__p proyectos__regresar"> <i className="fa-solid fa-arrow-left"></i> Volver a Proyectos</p>
        </Link>
      </div>
      </section>
  )
}

export default ProjectDetail;

import { Link } from 'react-router-dom';
import { techIcons } from '../../data/techIcons';
import './Projects.css';

const Card = ({ id, img, title, highlights = [], stack, tools }) => {
    return (
        <Link to={`/projects/${id}`} className="proyectos__card">
            <div className="proyectos__img">
                <img src={img} alt={title} className="card__img" />
                <span className="card__stack">{stack}</span>
            </div>
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <ul className="card__highlights">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="card__highlights_li">• {highlight.description}</li>
                    ))}
                </ul>
                <ul className="card__ul">
                    {tools.map((tool, index) => {
                        const tech = techIcons[tool];
                        return (
                        <li
                            key={index}
                            className="card__li"
                            style={tech ? { backgroundColor: tech.color, color: "#fff" } : {}}
                        >
                            {tech ? <i className={tech.class} style={{ marginRight: 6 }}></i> : null}
                            {tool}
                        </li>
                        );
                    })}
                </ul>
            </div>
        </Link>
    )
}

export default Card;
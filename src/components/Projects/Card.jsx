import { Link } from 'react-router-dom';
import './Projects.css';

const Card = ({ id, img, title, highlights = [], link, stack, tools }) => {
    return (
        <Link to={`/projects/${id}`} className="proyectos__card">
            <div className="proyectos__img">
                <img src={img} alt={title} className="card__img" />
                <span className="absolute top-2 right-2 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-lg z-10 text-sm font-semibold text-dark-100 ">{stack}</span>
            </div>
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <ul className="card__highlights">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="card__highlights_li">• {highlight.description}</li>
                    ))}
                </ul>
                <ul className="card__ul">
                    {tools.map((tool, index) => (
                        <li key={index} className="card__li">{tool}</li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}

export default Card;
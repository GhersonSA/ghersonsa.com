import { Link } from 'react-router-dom';

import './Projects.css';

const Card = ({ id, img, title, description, link, tools }) => {
    return (
        <Link to={`/projects/${id}`} className="proyectos__card">
            <div className="proyectos__img">
                <img src={img} alt={title} className="card__img" />
            </div>
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
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
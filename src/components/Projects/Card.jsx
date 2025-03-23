import './Projects.css';

const Card = ({ img, title, description, link, tools}) => {
    return (
        <a href={link} target="_blank" className="proyectos__card">
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
        </a>
    )
}

export default Card;
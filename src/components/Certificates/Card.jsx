import './Certificates.css';

const Card = ({ img }) => {
    return (
        <article className="certificados__card">
            <img src={img} alt="certificado" className="certificado__img" />
        </article>
    )
}

export default Card;
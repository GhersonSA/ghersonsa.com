import './Certificates.css';
import Card from './Card';
import Certificate__1 from '../../assets/images/dip-react-tailwindcss.jpg'
import Certificate__2 from '../../assets/images/dip-fullstack-javascript.jpg'
import Certificate__3 from '../../assets/images/dip-git-github.jpg'
import Certificate__4 from '../../assets/images/dip-responsive-design.jpg'
import Certificate__5 from '../../assets/images/dip-ecmascript-6.jpg'
import Certificate__6 from '../../assets/images/dip-en-infinitive.jpg'

const certificates = [
    { img: Certificate__1 },
    { img: Certificate__2 },
    { img: Certificate__3 },
    { img: Certificate__4 },
    { img: Certificate__5 },
    { img: Certificate__6 },
];

const Certificates = () => {
    return (
        <section className="certificados" id="certificados">
            <div className="certificados__container">
                <h2 className="h2-title">Certificados</h2>
                <div className="certificados__grid">
                {certificates.map((certificate, index) => (
                    <Card key={index} img={certificate.img} />
                ))}
                </div>
            </div>
        </section>
    )
}

export default Certificates;
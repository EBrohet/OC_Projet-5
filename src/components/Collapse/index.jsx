import '../../styles/Collapse.scss'
import arrow from '../../assets/arrow.png'
import { useState } from 'react'

function Collapse() {
    const [isOpen, setIsOpen] = useState(true)
    const p = [
        {"id": "fiabilite", "text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
        {"id": "respect", "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
        {"id": "service", "text": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."},
        {"id": "securite", "text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
    ]
    const text = p.map(({id, text}) =>
        <div key={id}>
            <p>{text}</p>
        </div>)
    
    return isOpen ? (
        <div className='about'>
            <ul>
                <li><span>Fiabilité</span><img src={arrow} alt="flèche" onClick={() => setIsOpen(false)} /></li>
                <li><span>Respect</span><img src={arrow} alt="flèche" onClick={() => setIsOpen(false)} /></li>
                <li><span>Service</span><img src={arrow} alt="flèche" onClick={() => setIsOpen(false)} /></li>
                <li><span>Sécurité</span><img src={arrow} alt="flèche" onClick={() => setIsOpen(false)} /></li>
            </ul>
        </div>
    ) : (
        <div className='about'>
            <ul>
                <li>Fiabilité<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(true)} /></li>
                {text.slice(0, 1)}
                <li>Respect<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(true)} /></li>
                {text.slice(1, 2)}
                <li>Service<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(true)} /></li>
                {text.slice(2, 3)}
                <li>Sécurité<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(true)} /></li>
                {text.slice(3, 4)}
            </ul>
        </div>
    )
}

export default Collapse
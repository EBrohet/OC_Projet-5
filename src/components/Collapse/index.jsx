import '../../styles/Collapse.scss'
import arrow from '../../assets/arrow.png'
import { useState } from 'react'

function Collapse({page, logement}) {
    const [isOpen, setIsOpen] = useState(false)
    
    return page !== 'about' ? (
        <div className='collapse equip'>
            {isOpen ? (
                <ul>
                    <div className='open'>
                        <li>Description<img src={arrow} alt="flèche" onClick={() => setIsOpen(false)} /></li>
                        <p>{logement.description}</p>
                    </div>
                    <div className='open'>
                        <li>Équipements<img src={arrow} alt="flèche" onClick={() => setIsOpen(false)} /></li>
                        <p>{logement.equipments}</p>
                    </div>
                </ul>
            ) : (
                <ul>
                    <li>Description<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(true)} /></li>
                    <li>Équipements<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(true)} /></li>
                </ul>
            )}
        </div>
    ) : !isOpen ? (
        <div className='collapse about'>
            <ul>
                <li>Fiabilité<img src={arrow} alt="flèche" onClick={() => setIsOpen(true)} /></li>
                <li>Respect<img src={arrow} alt="flèche" onClick={() => setIsOpen(true)} /></li>
                <li>Service<img src={arrow} alt="flèche" onClick={() => setIsOpen(true)} /></li>
                <li>Sécurité<img src={arrow} alt="flèche" onClick={() => setIsOpen(true)} /></li>
            </ul>
        </div>
    ) : (
        <div className='collapse about'>
            <ul>
                <li>Fiabilité<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(false)} /></li>
                <p className={isOpen ? 'masquer' : 'afficher'}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
    
                <li>Respect<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(false)} /></li>
                <p className={isOpen ? 'masquer' : 'afficher'}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    
                <li>Service<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(false)} /></li>
                <p className={isOpen ? 'masquer' : 'afficher'}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
    
                <li>Sécurité<img src={arrow} alt="flèche" className="rotate" onClick={() => setIsOpen(false)} /></li>
                <p className={isOpen ? 'masquer' : 'afficher'}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </ul>
        </div>
    )
}

export default Collapse
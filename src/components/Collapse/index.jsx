import '../../styles/Collapse.scss'
import arrow from '../../assets/arrow.png'
import { useState } from 'react'

function Open({title, message}) {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleClick() {
        isOpen ? (setIsOpen(false)
    ) : (setIsOpen(true));
    }

    return (
        <div>
            <h2>{title}</h2>
            <img className={isOpen ? 'btn rotate' : 'btn'} src={arrow} alt='flèche' onClick={handleClick} />
            {isOpen && (
                <p className='message'>{message}</p>
            )}
        </div>   
    )
}

function Collapse({page, logement}) {
    return page !== 'about' ? (
        <div className='collapse equip'>
            <Open 
                title='Description' 
                message={logement.description}>
            </Open>
            <Open 
                title='Équipments' 
                message={logement.equipments.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}>
            </Open>
        </div>
    ) : (
        <div className='collapse about'>
            <Open 
                title='Fiabilité' 
                message="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.">
            </Open>
            <Open 
                title='Respect' 
                message="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.">
            </Open>
            <Open 
                title='Service' 
                message="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.">
            </Open>
            <Open 
                title='Sécurité' 
                message="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.">
            </Open>
        </div>
    )
}

export default Collapse
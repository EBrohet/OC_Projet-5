import logements from '../../datas/logements.json'
import Collapse from "../../components/Collapse"
import Slideshow from "../../components/Slideshow"
import Error from '../../components/Error'
import '../../styles/Accomodation.scss'
import starGrey from '../../assets/star_grey.png'
import star from '../../assets/star.png'
import { useParams } from "react-router-dom"

function Accomodation() {
    let {appartId} = useParams()
    const logement = logements.find((el) => el.id === appartId)

    return logement ? (
        <div>
            <Slideshow logement={logement}/>
            
            <div key={logement.id} className='appart'>
                <div className='desc'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <ul>
                        {logement.tags.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))} 
                    </ul>
                </div>
                <div className='host'>
                    <figure>
                        <img src={logement.host.picture} alt={logement.host.name} className='host-image' />
                        <figcaption>{logement.host.name}</figcaption>
                    </figure>
                    <div className='rating'>
                        <img className='star' src={logement.rating >= '1' ? `${star}` : `${starGrey}`} alt="étoile" />
                        <img className='star' src={logement.rating >= '2' ? `${star}` : `${starGrey}`} alt="étoile" />
                        <img className='star' src={logement.rating >= '3' ? `${star}` : `${starGrey}`} alt="étoile" />
                        <img className='star' src={logement.rating >= '4' ? `${star}` : `${starGrey}`} alt="étoile" />
                        <img className='star' src={logement.rating === '5' ? `${star}` : `${starGrey}`} alt="étoile" />
                    </div>
                </div>
            </div>
            <Collapse logement={logement} />
        </div>
    ) : (
        <Error />
    )
}

export default Accomodation
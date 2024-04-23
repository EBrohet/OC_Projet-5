import { Link, useParams } from 'react-router-dom';
import logements from '../../datas/logements.json'
import '../../styles/Card.scss'

const card = logements.slice (0, 6);

function Card() {
    let {appartId} = useParams()

    return (
        <div className='container'>
            {appartId}
            <ul>
                {card.map(({id, title, cover}) =>
                    <Link key={id} to={`/accomodation/${id}`} className='card-link'>
                    <li>
                        <img src={cover} alt={title} />
                        <p title={title}>{title}</p>
                    </li>
                    </Link>
                )}
            </ul>           
        </div>
    )
}

export default Card
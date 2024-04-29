import { Link, useParams } from 'react-router-dom';
import logements from '../../datas/logements.json'
import '../../styles/Card.scss'

function Card() {
    let {appartId} = useParams()

    return (
        <div className='container'>
            {appartId}
            <ul>
                {logements.map(({id, title, cover}) =>
                    <Link key={id} to={`/accomodation/${id}`} className='card-link'>
                    <li>
                        <img src={cover} alt={title} />
                        <div className='gradient'></div>
                        <p title={title}>{title}</p>
                    </li>
                    </Link>
                )}
            </ul>           
        </div>
    )
}

export default Card
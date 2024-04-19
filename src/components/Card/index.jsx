import logements from '../../datas/logements.json'
import '../../styles/Card.scss'

function Card() {
    return (
        <div className='container'>
            <ul>
            {logements.map(({id, title, cover}) =>
            <li key={id}>
                <img src={cover} alt={title} />
                <p title={title}>{title}</p>
            </li>
        )}
            </ul>
        </div>
    )
}

export default Card
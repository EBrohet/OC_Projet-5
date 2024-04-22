import logements from '../../datas/logements.json'
import '../../styles/Card.scss'

const card = logements.slice (0, 6);

function Card() {
    return (
        <div className='container'>
            <ul>
                {card.map(({id, title, cover}) =>
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
import logements from '../../datas/logements.json'
// import Collapse from "../../components/Collapse"
import Slideshow from "../../components/Slideshow"
import { useParams } from "react-router-dom"

function Accomodation() {
    let {appartId} = useParams()
    const logement = logements.find((el) => el.id === appartId)

    return logement && (
        <div>
            <Slideshow logement={logement}/>
            
            <div key={logement.id}>
            <h1>{logement.title}</h1>
            <p>{logement.description}</p>
            <figure></figure>
            <ul></ul>
            </div>
            {/* <Collapse /> */}
        </div>
    )
}

export default Accomodation
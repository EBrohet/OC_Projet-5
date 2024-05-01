import { Link } from "react-router-dom"
import '../../styles/Error.scss'

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que <span>vous demandez n'existe pas.</span></p>
            <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error
import "./style/Error.css"
import {Link} from "react-router-dom"

export function Error(){
    return(
        <>
            <h1 className="title">
                404
            </h1>
            <p className="writer_error">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="back_home" to="/">
                    <p className="writer_back_home">Retourner sur la page d'accueil</p>
            </Link>
        </>
    )
}
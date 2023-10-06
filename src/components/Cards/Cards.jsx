import { Link } from "react-router-dom"
import "../../components/Cards/style/Cards.css"

export function Cards(props){
    return(
        <Link to={props.to} className="container_img_logement">
            <img className="img_card" src={props.img} alt={props.alt}/>
            <div className="border_transparent"/>
            <p className="title_location">
                {props.name}
            </p>
        </Link>  
    )
}
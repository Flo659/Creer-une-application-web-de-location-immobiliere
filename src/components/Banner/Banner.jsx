import "./style/Banner.css"

export function Banner(props){
    return(
        <div className={props.className_container_img}>  
            <img className="img_paysage" src={props.src} alt={props.alt}/>
            {props.children}
        </div>
    )
}

export function Banner(props){
    return(
        <div className={props.className_container_img}>  
            <img className={props.className} src={props.src} alt={props.alt}/>
            {props.children}
        </div>
    )
}
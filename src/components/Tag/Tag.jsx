import "./style/Tag.css"

export function Tag(props){
    return( 
        <div className="tag">
            <p className="writer">
                {props.getTag}
            </p>
        </div>
    )
}

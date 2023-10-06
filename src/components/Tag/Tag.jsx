import "./Tag.css"

export function Tag({getTag}){
    return( 
        <div className="tag">
            <p className="writer">
                {getTag}
            </p>
        </div>
    )
}

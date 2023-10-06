import "./Paragraph.css"

export function Paragraph({get_equipments}){
    return(
        <ul className="list_equipments">
            <li >{get_equipments}</li>
        </ul>
    )
}
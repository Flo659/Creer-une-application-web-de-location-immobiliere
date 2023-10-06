import "./style/LayoutPage.css"

export function LayoutPage(props){
    return(
        <section className="margin_page">{props.children}</section>
    )
}
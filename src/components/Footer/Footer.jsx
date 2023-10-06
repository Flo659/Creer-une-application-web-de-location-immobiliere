import "./style/Footer.css"
import logoFooter from "../../Images/logo_footer.png"

export function Footer(){
    return(
        <footer className="footer">
            <div className="container_footer">
                <img className="logo_footer" 
                    src={logoFooter}
                    alt="logo footer"/>
                <p className="writing_footer">
                    &copy; 2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    )
}
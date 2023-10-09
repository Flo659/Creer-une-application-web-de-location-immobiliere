import { NavLink } from "react-router-dom"
import "./style/Header.css"
import logoHeader from"../../Images/logo.png"
import { Link } from "react-router-dom"

export function Header(){
    return(
        <header className="margin_page">
          <nav className="nav">
            <div>
              <Link to="/">
                <img className="img_logo" 
                    src={logoHeader}
                    alt="logo"/>
              </Link>       
            </div> 
            <div className="container_nav_position">   
              <NavLink to="/"
                       className={({isActive})=>(isActive ?'tab_navActive':"tab_nav_notActive")}
              >
                Accueil
              </NavLink>
              <NavLink  to="/a-propos"
                        className={({isActive})=>(isActive ?'tab_navActive':"tab_nav_notActive")}
              >
                A Propos
              </NavLink>
            </div>     
          </nav>
        </header>
    )
}


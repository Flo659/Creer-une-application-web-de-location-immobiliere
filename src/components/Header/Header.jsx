import { NavLink } from "react-router-dom"
import "./Header.css"
import logoHeader from"../../Images/logo.png"

export function Header(){
    return(
        <header className="margin_page">
          <nav className="nav">
            <div>
              <img className="img_logo" 
                   src={logoHeader}
                   alt="logo"/>  
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
                A propos
              </NavLink>
            </div>     
          </nav>
        </header>
    )
}


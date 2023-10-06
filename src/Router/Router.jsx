import {Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Error } from "../pages/Error/Error";
import { Logement } from "../pages/Logement/Logement";
import "./style/Router.css"

function App() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/a-propos" element={<About/>}/>
            <Route path="/logement/:id" element={<Logement/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default App;

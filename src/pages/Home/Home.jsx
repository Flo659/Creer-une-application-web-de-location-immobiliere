import imgRoche from "../../Images/Mask Group.png";
import { Banner } from "../../components/Banner/Banner";
import { Cards } from "../../components/Cards/Cards";
import "../Home/style/Home.css"
import products from "../../Products/Products.json"
import { LayoutPage } from "../../components/LayoutPage/LayoutPage";

export function Home(){
    return(
        <>
            <LayoutPage>
                <Banner 
                    className_container_img="container_img_paysage--home" 
                    src={imgRoche} 
                    alt="mer et rochers" 
                    children={
                        <>
                            <div className="container_text">
                                <h1 className="text_over_img">
                                    Chez vous, partout et ailleurs
                                </h1>
                            </div>
                        </>
                    }
                /> 
                <section className="section_cards">
                    {products.map((product)=>{
                        return(
                            <Cards  img={product.cover} 
                                    to={`/logement/${product.id}`} 
                                    key={product.id} 
                                    name={product.title}/>
                        )
                    })} 
                </section>
            </LayoutPage>
        </>
    ) 
}
import { useParams } from "react-router-dom"
import { Collapsible } from "../../components/Collapsible/Collapsible"
import { Slideshow } from "../../components/Slideshow/Slideshow"
import { Tag } from "../../components/Tag/Tag"
import "./style/Logement.css"
import products from "../../Products/Products.json"
import { Paragraph } from "../../components/Paragraph/Paragraph"
import { Stars } from "../../components/Stars/Stars"
import { Error } from "../../pages/Error/Error"
import { LayoutPage } from "../../components/LayoutPage/LayoutPage"

export function Logement(){
  const {id}= useParams();
  const productFind= products.find(element=> element.id===id);

  if (productFind===undefined){
    return(
      <Error/>
    )
  }

  const{description, host, location, pictures, title, rating} =productFind;

  const length= productFind.pictures.length;
  
  return(
    <>
      <LayoutPage>
        <section className="section_carroussel">
          <Slideshow length={length} 
                      images={pictures} 
                      alt={title}/>
        </section>
        <section>
          <div className="container_name_logement_and_rating">
            <div className="container_name_logement">
              <h1 className="title_logement">{title}</h1>
              <p className="location_logement">
                {location}
              </p>
              <div className="container_tag">
                {productFind.tags.map((tags, index)=>{
                  return(
                    <Tag getTag={tags} 
                          key={index}/>
                  )
                })}
              </div>
            </div>
            <div className="container_host_and_stars_rating">
              <div className="container_name_host">
                <p className="name_host">
                  {host.name}
                </p>
                <img className="circle_picture" 
                      src={host.picture} 
                      alt="hôte"/>
              </div>
              <Stars rating={rating}/>
            </div>
          </div>
            <div className="container_collapsible_logement">
              <Collapsible className="container__collapse--logement"
                            label="Description"
                            paragraph={description}/>
              <Collapsible className="container__collapse--logement"
                            label="Équipements"
                            paragraph={
                              productFind.equipments.map((equipments,index)=>{
                                return(
                                  <Paragraph key={index} 
                                             get_equipments={equipments}/>
                                )
                              })
                            }/>
            </div>
        </section>
      </LayoutPage>
    </>
  ) 
}

import { Collapsible } from "../../components/Collapsible/Collapsible";
import imgPaysage from "../../Images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../About/style/About.css"
import { Banner } from "../../components/Banner/Banner";
import { LayoutPage } from "../../components/LayoutPage/LayoutPage";


export function About() {

    return (
        <>
            <LayoutPage>
                <Banner className_container_img="container_img_paysage--about img_paysage--about" 
                        src={imgPaysage} 
                        alt="paysage montagneux"/> 
                <section className="margin_page--collapse_about">
                    <Collapsible className="container__collapse--about"
                                 label="Fiabilité"
                                paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                    <Collapsible className="container__collapse--about"
                                 label="Respect"
                                 paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."/>
                    <Collapsible className="container__collapse--about"
                                 label="Service"
                                 paragraph="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                    <Collapsible className="container__collapse--about"
                                 label="Sécurité"
                                 paragraph="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
                </section>
            </LayoutPage> 
        </>
    )
}


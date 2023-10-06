import "./Stars.css"
import star_orange from "../../Images/star_orange.jpg"
import star_grey from "../../Images/star_grey.jpg"

export function Stars(props){
    const rating=props.rating;
    console.log(rating)
    const number_star=[1,2,3,4,5];
  
    return(
        <div className="block_stars">
            {number_star.map((star,index)=>{
                console.log(star)
                return(  
                    <img className="img_stars" key={index} 
                         src={rating >= star ? star_orange :star_grey} 
                         alt="notation"/>
                )
            })}      
        </div>
    )
}
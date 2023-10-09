import "./style/Slideshow.css"
import { useState } from "react";

export function Slideshow(props){

    const [index, setindex] =useState(0);
    const length= props.length;

    function handlePrevious(){
        const newIndex= index -1;
        setindex(index === 0 ? length-1 : newIndex)
    }

    function handleNext(){
        const newIndex= index +1;
        setindex(index === length-1 ? 0: newIndex)
    }

    const index_initial= index+1;

    return(
        <div className="container_carousel">
            <div className="carousel">
                <div className="carousel--inner">
                    {props.images.map((image, current)=>{
                        return(
                            <div key={current} className={index===current ?"slideActive":"slide"}>
                                {index===current &&(
                                    <img className="img_caroussel"
                                         src={image} 
                                         alt={props.alt}/>
                                )}
                                <div className={index===current ?"container_number_length_Active":"container_number_length"}>
                                    <p className={length===1 ?"number_length_desactive":"number_length"}>
                                        {index_initial} / {length}
                                    </p>
                                </div>
                            </div>   
                        ) 
                    })}
                    <div className="carousel--controls">
                        <button className={length===1 ?"previous_desactive":"previous"} type="button" aria-label="previous" onClick={handlePrevious}>
                            <svg className="size_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" fill="none">
                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                            </svg>
                        </button>
                        <button className={length===1 ?"next_desactive":"next"} type="button" aria-label="next" onClick={handleNext}>
                            <svg className="size_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" fill="none">
                                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div> 
            </div>    
        </div>
    )
}
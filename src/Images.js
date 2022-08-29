import React from "react";
import "./Images.css"
export default function Images(props){
    if(props.photos){
 return(
<section>
    <div className="row">
    {props.photos.map(function(photo , index){
       return <div className="col-md-4 my-2 img-div" key={index}> <img src={photo.src.portrait} alt={photo.alt} className="img-fluid" /> </div>
    })}
    </div>
</section>
 )}
 else return null
}
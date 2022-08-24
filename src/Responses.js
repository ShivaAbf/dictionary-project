import React from "react";
import Meanings from "./Meanings";
import "./Responses.css";



 export default function Responses(props){
  console.log(props.results)
  if(props.results){
    return(
      <div>
   <div className="word-info">
    <h3>{props.results.word}</h3>
   </div>
   <div>

      {props.results.meanings.map(function(meaning , index) {
        return <div key={index}>
          <Meanings meaning={meaning} />
             </div>
       })} 
   </div>
   </div>
    )
  }
  else{
  return null

  }
 }
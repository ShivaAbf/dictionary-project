import React from "react";
import Meanings from "./Meanings";
import "./Responses.css";
import Phonetics from "./Phonetics";



 export default function Responses(props){
  console.log(props.results)
  if(props.results){
    return(
      <div>
        <section className="px-5 py-3">
   <div className="word-info">
    <h3>{props.results.word}</h3>
   </div>

   {props.results.phonetics.map(function(phonetic , index){
        return  <div key={index}><Phonetics phonetic={phonetic} /></div>
      })}
       </section>
      {props.results.meanings.map(function(meaning , index) {
        return <div key={index}>
          <Meanings meaning={meaning} />
             </div>
       })} 
  
   </div>
    )
  }
  else{
  return null

  }
 }
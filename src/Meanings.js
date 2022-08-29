import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css"
export default function Meanings(props){
 return (
    <div>
      <section>
 <h3>{props.meaning.partOfSpeech}</h3>
  {props.meaning.definitions.map(function(definition , index){
 return   <div key={index} className="my-3">
        
       <p> <strong>definition:  </strong>{definition.definition}</p>
       <i className="text-muted">{definition.example}</i>
       <Synonyms synonyms={definition.synonyms} />
 </div>
 })} 
 </section>
 </div>
 )
}
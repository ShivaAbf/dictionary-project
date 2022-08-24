import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props){
 return (
    <div>
 <h3>{props.meaning.partOfSpeech}</h3>
  {props.meaning.definitions.map(function(definition , index){
 return   <span key={index}>
  
       <p> <strong>definition:</strong>{definition.definition}</p>
       <br />
       
       <i><strong>example:</strong>{definition.example}</i>
       <Synonyms synonyms={definition.synonyms} />
 </span>
 })} 
 </div>
 )
}
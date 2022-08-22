import React from "react";
import Definitions from "./Definitions";

export default function Meanings(props){
 return (
    <div>
 <h3>{props.meaning.partOfSpeech}</h3>
  {props.meaning.definitions.map(function(definition , index){
 return   <div key={index}><Definitions info={definition} /></div>
 }
 )} 

 {/* <p>{props.meaning.definitions[0].definition}</p>
 <i>{props.meaning.definitions[0].example}</i> */}
 </div>
 )
}
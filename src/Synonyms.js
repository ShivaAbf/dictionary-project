import React from "react";
import "./Synonyms.css"
export default function Synonyms(props){
    if(props.synonyms === null) return null;
    else{
        return(
            <div className="synonyms">
                <p>similars:</p>
            <ul>
            {props.synonyms.map(function(synonym , index){
                return <li key={index}><small>{synonym}</small></li>
                })}
            </ul>
            </div>
        )
    }
}
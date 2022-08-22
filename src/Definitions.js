import React from "react";


export default function Definitions(props){
    return(
        <div>
      <p>{props.info.definition}</p>
      <i>{props.info.example}</i>
      </div>

    )
}
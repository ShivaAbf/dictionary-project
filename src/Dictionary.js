import React, { useState } from "react";
import "./Dictionary.css"
export default function Dictionary(){
    let [word , setWord] = useState(null)
    function handleSubmit(event){
      event.preventDefault();
      alert(`searching  ${word}`)
    }

    function handleChange(event){
        setWord(event.target.value);
    }
    return(

        <form className="mt-4" onSubmit={handleSubmit}>
            <input type='search' className="form-control" autoFocus placeholder="Enter a word..." onChange={handleChange} />
        </form>
     
    )
}
import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary(){
    let [word , setWord] = useState(null)

    function handleResponse(response){
      console.log(response.data)
    }


    function handleSubmit(event){
      event.preventDefault();
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      axios.get(url).then(handleResponse)
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
import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Responses from "./Responses";

export default function Dictionary(){
    let [word , setWord] = useState("");
    let [results , setResults] = useState(null)

    function handleResponse(response){
      setResults(response.data[0]);
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
   <div>
        <form className="mt-4" onSubmit={handleSubmit}>
            <input type='search' className="form-control" autoFocus placeholder="Enter a word..." onChange={handleChange}/>
        </form>
        <div>
            <Responses results={results} />  
        </div>
         
        </div>
    )
   
}
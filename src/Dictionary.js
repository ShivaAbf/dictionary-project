import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Responses from "./Responses";
import Images from "./Images";

export default function Dictionary(props){
    let [word , setWord] = useState(props.defaultWord);
    let [results , setResults] = useState(null);
    let [loeded , setLoeded] = useState(false);
    let [image , setImage] = useState(null);


    function handleResponse(response){
        setLoeded(true)
      setResults(response.data[0]);
    }

    function handlePhotoResponse(response){
        setImage(response.data.photos)
    }

    function search(){
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        axios.get(url).then(handleResponse)

        const apikey = `563492ad6f91700001000001b4f4dfa9efed4134a6e176e6d9388a76`
        let photoUrl =  `https://api.pexels.com/v1/search?query=${word}&per_page=9`
        axios.get(photoUrl , {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": apikey
            }}).then(handlePhotoResponse)
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleChange(event){
        setWord(event.target.value);
    }
    if(loeded){

    return(
   <div>
    <section className="form-section">
        <h2 className="mb-3">What word are you looking for?</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
            <input type='search' className="form-control text-muted" autoFocus placeholder="Enter a word..." onChange={handleChange}/>
        </form>
        </section>
        <div>
        <Responses results={results} />  
        <Images photos={image} />
        </div>
         
        </div>
    )
}
else 
search();
   
}
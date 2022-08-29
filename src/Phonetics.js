import React from "react";
import "./Phonetics.css"
 export default function Phonetics(props){
  console.log(props.phonetic)
  if(props.phonetic.text == null && props.phonetic.audio === "") return null
 
else if(props.phonetic) {
  return(
    <div className="row my-3 phonetic">
  <div className="col-md-2 d-inline"> <p className=" mx-3">{props.phonetic.text}</p></div>
  <div className="col-md-3"> <a className="btn btn-light btn-sm rounded-circle" href={props.phonetic.audio}  rel="noreferrer" target="_blank"><i className="fa-solid fa-volume-high"></i></a></div>
    </div>
  )
}
else return null
 }
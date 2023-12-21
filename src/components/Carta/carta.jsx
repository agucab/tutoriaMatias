import React from "react";
import './carta.css';

const Carta = ({nombre, img, duracion, director, año, precio}) =>{

    return (
    <div>
    <div className= 'card'>
      
      <h1>{nombre}</h1>
      <img src={img}/>
      <h5>{duracion}</h5>
      <h5>{director}</h5>
      <h5>{año}</h5>
      <p>${precio}</p>
      
  
    </div></div>
    )}

    export default Carta
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Carta, Colors } from './components';

function App () {
  return (
    <div>
      <Carta nombre='El conde' img= {'../imagenes/conde.png'} duracion='168 min' año='2023' precio={'528'} ></Carta>
      <Carta nombre='Dogtooth' img= {'../imagenes/dogtooth.jpg'}  duracion='221 min' año='2009' precio={'325'} ></Carta>
      <Carta nombre='Passages' img= {'../imagenes/passages.jpg'} duracion='136 min' año='2023' precio={'528'} ></Carta>
    </div>
  )
    
  
  
}

export default App







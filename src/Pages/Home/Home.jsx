import React from 'react'

import HomeMainText from '../../components/HomeMainText/HomeMainText';
import HomeTextRight from '../../components/HomeTextRight/HomeTextRight';

import "./Home.css";

const textLeft = "Somos el equipo que potenciará la chispa tecnológica en tu empresa.";
const textRight = "Nos dedicamos a mejorar tu interacción con los clientes a través de una puerta que tus clientes y tú puedan manejar. Tenemos las soluciones que tu empresa necesita.";


const Home = () => {
  return (
    <div className='my-3'>
      <div id="homeContainer" className='container'>
        <HomeMainText Text={textLeft} />
        <span className='arrow'></span>
        <HomeTextRight Text={textRight} headlineTwo={"Notarás cambios instantaneos"} />
      </div>
    </div>
  )
}

export default Home

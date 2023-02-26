import React from 'react';
import {HiOutlineCodeBracketSquare} from "react-icons/hi2";

import codeWall from '../../utilities/walkator-klMii3cR9iI-unsplash.jpg';
import './Servicios.css'

import Proyectos from '../../components/Proyectos/Proyectos';

const projects = [
    {
      id: 1,
      title: "Transporte Villarreal",
      description:
        "Sitio web realizado para un cliente dedicado al transporte de personal. En el sitio el usuario recibe una cuenta de acceso," +
        " lo que le permite ver los choferes asignados, así como las rutas de ellos",
      screenshots: [
        "https://res.cloudinary.com/dngbwenom/image/upload/v1655672640/portfolio/googleMaps/Screenshot_2022-06-19_160315_mltmgm.png",
        "https://res.cloudinary.com/dngbwenom/image/upload/v1655672745/portfolio/googleMaps/Screenshot_2022-06-19_160524_fz9efn.png",
      ],
      isOnline: false,
      url: undefined
    },
    {
      id: 2,
      title: "Restaurants Demo",
      description:
        "Sitio web realizado como demo sobre un menú para solo personalizarlo para los clientes.",
      screenshots: [
        "https://res.cloudinary.com/dngbwenom/image/upload/v1677449894/portfolio/restaurant_demo/unnamed_jz4k8f.jpg",
        "https://res.cloudinary.com/dngbwenom/image/upload/v1677449894/portfolio/restaurant_demo/unnamed_1_h8hbgs.jpg",
        "https://res.cloudinary.com/dngbwenom/image/upload/v1677449894/portfolio/restaurant_demo/unnamed_2_aoqmyo.jpg",
      ],
      isOnline: true,
      url: "https://elaborate-torrone-61bd62.netlify.app/"
    },
]

const Servicios = () => {
  return (
    <>
      <div className="container mb-5">
        <h1>
            Servicios de Desarrollo de Software <HiOutlineCodeBracketSquare/>
        </h1>
        <div className="row">
           <div className="col-6">
                <img id='serviciosCodeWall' className='img-fluid' src={codeWall} alt="code" />
           </div>
           <div className="col-6 serviciosTextHolder">
                <span className='serviciosText'>
                    Somos un pequeño grupo de programadores enfocados en construir el software que su empresa requiera, 
                    utilizando las mejores prácticas y técnicas que asegurarán la calidad del mismo.
                </span>
           </div>
        </div>
        <div className="row mb-5">
            <h2>Proyectos</h2>
            {projects.map(project => <Proyectos data={project} />)}
        </div>
      </div>
    </>
  )
}

export default Servicios

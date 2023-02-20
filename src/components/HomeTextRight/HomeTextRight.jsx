import React from 'react';
import {AiOutlineDoubleRight} from "react-icons/ai"

const HomeTextRight = (props) => {
  return (
    <div className="Home-main">
        <div className="row">
            <span className='homeTextRight'>
                {props.Text}
            </span>
        </div>
        <div className="row mt-5 ms-1">
            <h3>{props.headlineTwo}</h3>
            <span className='homeTextRight'><AiOutlineDoubleRight/> Visibilidad en línea</span>
            <span className='homeTextRight'><AiOutlineDoubleRight/> Mejor manejo de inventarios</span>
            <span className='homeTextRight'><AiOutlineDoubleRight/> Crecimiento de ventas</span>
        </div>
    </div>
  )
}

export default HomeTextRight

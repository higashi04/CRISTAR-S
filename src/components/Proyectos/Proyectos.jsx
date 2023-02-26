import React from 'react'
import { Link } from 'react-router-dom';

import './Proyectos.css'

const Proyectos = ({data}) => {
  return (
    <div className='mb-5'>
        <div className='row projectTitle'>
            <h3>{data.title}</h3>
        </div>
        <div className="row my-3 projectDescription">
            <p className='projectText'>
                {data.description}
            </p>
        </div>
        <div className="row mb-5">
            {data.screenshots.map((item) => (
                <div className="col-4">
                    <img
                    className="projectImg"
                    src={item}
                    alt="slide"
                    />
                </div>
            ))}
           <div className="col my-3">
           {data.isOnline && <Link className='btn btn-outline-primary' to={data.url} >Demo</Link>}
           </div>
        </div>
        
    </div>
  )
}

export default Proyectos;
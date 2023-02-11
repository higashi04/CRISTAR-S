import React from 'react'

import './Proyectos.css'

const Proyectos = ({data}) => {
  return (
    <>
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
                <div className="col mb-3">
                    <img
                    className="projectImg"
                    src={item}
                    alt="slide"
                    />
                </div>
            ))}
        </div>
    </>
  )
}

export default Proyectos;
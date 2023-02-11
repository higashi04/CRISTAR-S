import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-text" className='m-5 ps-5'>
        CRISTAR'S CO 2023 &copy; 
        {/* {window.innerWidth} x {window.innerHeight} remove window size when pushing for production plis */}
      </div>
    </div>
  )
}

export default Footer

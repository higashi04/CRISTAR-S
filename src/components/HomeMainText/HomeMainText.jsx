import React from 'react';
import logo from '../../utilities/CRISTARS_banner2.jpg';

const HomeMainText = (props) => {
  return (
    <div className="Home-main p-3">
        <img className='Home-img-logo' src={logo} alt="logo" />
            <span className='homeText'>
                {props.Text}
            </span>
    </div>
  )
}

export default HomeMainText

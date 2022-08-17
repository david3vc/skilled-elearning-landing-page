import React from 'react';
import imagenLogo from '../assets/logo-dark.svg';
import '../styles/cabecera.css'

const Cabecera = () => {
  return (
    <div className='cabecera'>
        <div className="cabecera__logo">
            <img src={imagenLogo} alt="" className="cabecera__img" />
        </div>
        <div className="boton-get-started">
            <span className="boton-get-started__texto">
                Get Started
            </span>
        </div>
    </div>
  )
}

export default Cabecera
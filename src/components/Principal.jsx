import React from 'react'
import imagenPrincipal from '../assets/image-hero-mobile.png'
import '../styles/cabecera.css'
import '../styles/principal.css'

const Principal = () => {
  return (
    <div className='principal'>
        <div className="principal__texto">
            <div className="principal__titulo">
                Maximize skill, minimize budget
            </div>
            <div className="principal__descripcion">
                Our modern courses across a range of in-demand skills will give you the 
                knowledge you need to live the life you want.
            </div>
            <div className="boton-get-started boton-get-started--rosado">
                <span className="boton-get-started__texto">
                    Get Started
                </span>
            </div>
        </div>
        <div className="principal__imagen">
            <img src={imagenPrincipal} alt="" className='principal__imagen-receptiva' />
        </div>
    </div>
  )
}

export default Principal
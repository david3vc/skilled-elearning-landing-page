import React from 'react'
import imagenPrincipalMobile from '../assets/image-hero-mobile.png'
import imagenPrincipalTablet from '../assets/image-hero-tablet.png'
import imagenPrincipalDesktop from '../assets/image-hero-desktop.png'
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
            <img src={imagenPrincipalMobile} alt="" className='principal__imagen-receptiva principal__imagen-mobile' />
            <img src={imagenPrincipalTablet} alt="" className='principal__imagen-tablet' />
            <img src={imagenPrincipalDesktop} alt="" className='principal__imagen-desktop' />
        </div>
    </div>
  )
}

export default Principal
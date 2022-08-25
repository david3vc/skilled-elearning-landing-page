import React from 'react'
import iconAnimation from '../assets/icon-animation.svg'
import iconBusiness from '../assets/icon-business.svg'
import iconCrypto from '../assets/icon-crypto.svg'
import iconDesign from '../assets/icon-design.svg'
import iconPhotography from '../assets/icon-photography.svg'
import '../styles/cuerpo.css'

const Cuerpo = () => {
  return (
    <div className='cuerpo'>
        <div className="card-1">
            <div className="card-1__texto">
                Check out our most popular courses!
            </div>
        </div>
        <div className="card-2">
            <div className="card-2__icono">
                <img src={iconAnimation} alt="" />
            </div>
            <div className="card-2__cuerpo">
                <div className="card-2__titulo">
                    Animation
                </div>
                <div className="card-2__descripcion">
                    Learn the latest animation techniques to create stunning motion 
                    design and captivate your audience.
                </div>
                <div className="card-2__boton">
                    Get Started
                </div>
            </div>
        </div>
        <div className="card-2">
            <div className="card-2__icono">
                <img src={iconDesign} alt="" />
            </div>
            <div className="card-2__cuerpo">
                <div className="card-2__titulo">
                    Design
                </div>
                <div className="card-2__descripcion">
                Create beautiful, usable interfaces to help shape the future of 
  how the web looks.
                </div>
                <div className="card-2__boton">
                    Get Started
                </div>
            </div>
        </div>
        <div className="card-2">
            <div className="card-2__icono">
                <img src={iconPhotography} alt="" />
            </div>
            <div className="card-2__cuerpo">
                <div className="card-2__titulo">
                    Photography
                </div>
                <div className="card-2__descripcion">
                Explore critical fundamentals like lighting, composition, and focus 
  to capture exceptional photos.
  Get Started
                </div>
                <div className="card-2__boton">
                    Get Started
                </div>
            </div>
        </div>
        <div className="card-2">
            <div className="card-2__icono">
                <img src={iconCrypto} alt="" />
            </div>
            <div className="card-2__cuerpo">
                <div className="card-2__titulo">
                    Crypto
                </div>
                <div className="card-2__descripcion">
                All you need to know to get started investing in crypto. Go from beginner 
  to advanced with this 54 hour course.
                </div>
                <div className="card-2__boton">
                    Get Started
                </div>
            </div>
        </div>
        <div className="card-2">
            <div className="card-2__icono">
                <img src={iconBusiness} alt="" />
            </div>
            <div className="card-2__cuerpo">
                <div className="card-2__titulo">
                    Business
                </div>
                <div className="card-2__descripcion">
                A step-by-step playbook to help you start, scale, and sustain your business 
  without outside investment.
                </div>
                <div className="card-2__boton">
                    Get Started
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cuerpo
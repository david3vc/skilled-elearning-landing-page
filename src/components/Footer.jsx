import imagenLogo from '../assets/logo-light.svg';
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={imagenLogo} alt="" className="cabecera__img" />
      </div>
      <div className="boton-get-started boton-get-started--rosado-morado">
          <span className="boton-get-started__texto">
              Get Started
          </span>
      </div>
    </div>
  )
}

export default Footer
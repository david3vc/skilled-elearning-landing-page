import { useState } from 'react'
import Cabecera from './components/Cabecera'
import Cuerpo from './components/Cuerpo'
import Principal from './components/Principal'
import Footer from './components/Footer'

function App() {

  return (
    <div className="">
      <Cabecera />
      <Principal />
      <Cuerpo />
      <Footer />
    </div>
  )
}

export default App

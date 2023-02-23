import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Cuadrado from './cuadrado'
import Triangulo from './triangulo'
import Rectangulo from './rectangulo'
import Figuras from './figuras'
useState

function App() {

  return (
    <div>
      <h1>Formulario Basico</h1>
      <Figuras
      base = {15}
      altura = {25}
      lado = {10}
      />

      </div>
  )
}


export default App

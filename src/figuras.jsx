import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Cuadrado from './cuadrado'
import Triangulo from './triangulo'
import Rectangulo from './rectangulo'
import PropTypes from 'prop-types';
useState

function Figuras({base, altura, lado}) {

  const [valor, setvalor] = useState(0)

    const handleTri = (event) => {
        setvalor((base*altura)/2);
     }
 
     const handleRec = (event) => {
         setvalor(base*altura);
      }
 
      const handleCua = (event) => {
         setvalor(lado*lado);
      }

      const handleReset = (event) => {
        setvalor(0);
     }


  return (
    <div>
        <h2>Area = {valor}</h2>
        <h3>Base = {base}</h3>
        <h3>Altura = {altura}</h3>
        <h3>Lado = {lado}</h3>
        <button class='triangulo' onClick={handleTri}>Triangulo</button>
        <button class='cuadrado' onClick={handleCua}>Cuadrado</button>
        <button class='rectangulo' onClick={handleRec}>Rectangulo</button>
        <button class='reset' onClick={handleReset}>Borrar</button>
    </div>
  )
}

Figuras.propTypes = {
  base: PropTypes.number.isRequired,
  altura: PropTypes.number.isRequired,
  lado: PropTypes.number
}



export default Figuras
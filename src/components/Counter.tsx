/** --------------ESTADOS--------------------
 * -¿Qué es? -> Una variable cualquiera, que al momento de cambiarla no solo cambia la variable, cambia la "lógica" del html
 * -Siempre contiene 2 cosas: {variable, setVariable}
 * -Siempre debe especificarse el tipo y un valor inicial: <TIPO>(VALOR INICIAL)

 * 
 * - El HTML ya no es fijo, se introducen funciones que nos permiten cambiar la funcionalidad "En vivo"
 * 
 * - Conceptos importantes:
 *    - RENDER (Primera vez): Se ejecuta el .tsx en cliente y me devuelve el html, css y javascript
 *    - RE-RENDER: Partes pequeñas de la página se vuelven a renderizar sin necesidad de volver a hacer una llamada
 * 
 * - Sabemos que necesitamos re-renderizar de la página gracias a los estados
 * 
 * - En cuanto un componente tiene un estado, re-renderizara TODO el componente. No es tan listo como para solo renderizar
 * una parte del componente 
 */




import { useState } from "react";


const Counter = () => {
  const [contador, setContador] = useState<number>(0); //<TIPO>(VALOR INICIAL)

  return(
    <div>
      <h1>El contador esta en el valor {contador}</h1>
      <button onClick={()=>{setContador(contador+1)}}>Sumale una pichi</button>
      <button onClick={()=>{setContador(contador-1)}}>Restale una pichi</button>
    </div>
  )
}

export default Counter;
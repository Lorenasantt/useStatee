import {useState} from "react"
import { Button } from './Button'

export function App(){
  const [numero, setNumero] = useState(100)

  function handleAumentar() {
    setNumero(numero + 100)
  }

  return (
    <section>
      <h1>App</h1>

      <div>
        <h2>Número: {numero}</h2>

        <button onClick={handleAumentar}>Aumentar</button>
        <Button/>
      </div>
    </section>
  )
}
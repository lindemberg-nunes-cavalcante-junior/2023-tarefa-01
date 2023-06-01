import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente_Principal from './Componentes/Componente_Principal/Componente_Principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
			  <div className="row">
				  <div className="col-md-12">
					  <div className="card card-white">
              <Componente_Principal />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

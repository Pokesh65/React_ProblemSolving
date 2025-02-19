import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import About from './About'
import { DineshContext } from './DineshContext'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  const val=useSelector((s)=>s.mano)
  console.log(val)

  return (
    <div className='App'>
      <p>App Reducer</p>
      <p>{val.name}</p>

      {/* <DineshContext.Provider value={{ StudentName: "Mano", StudentAge: 20, StudentAddress: "Porur" }}> */}
        <Menu />
      {/* </DineshContext.Provider> */}
      <About />


      <p>App End</p>


    </div>
  )
}

export default App

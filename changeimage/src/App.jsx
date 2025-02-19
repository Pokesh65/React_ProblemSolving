import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Menu from './Menu'
import About from './About'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </div>
  )
}

export default App

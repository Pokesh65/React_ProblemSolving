import React from 'react'

function Navbar() {
  return (
    <div class="Navbar">
        <ul className="nav-ul">
            <li className="nav-li"><a href='/'>Home</a></li>
            <li className="nav-li"><a href='/about'>About</a></li>
            <li className="nav-li"><a href='/menu'>Menu</a></li>
            <li className="nav-li"><a href='#'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
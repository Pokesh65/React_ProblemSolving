import React, { useContext } from 'react'
import { DineshContext } from './DineshContext'

function Menu() {

    const details=useContext(DineshContext)
  return (
    <div>Menu
        <p>{details.StudentName}</p>
        <p>{details.StudentAge}</p>
        <p>{details.StudentAddress}</p>
    </div>
  )
}

export default Menu
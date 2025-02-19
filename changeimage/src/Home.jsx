import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SvgIcon from '@mui/material/SvgIcon';
// import { SvgIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Home() {

  let [count,setCount]=useState(1);

  // count+=1
  console.log("Count-> ", count)

  function Previous() {
    setCount(--count) }

  function Next() {
    setCount(++count);
  }



  return (
    <div className='Home'>Home

      <button ></button>

      <div className="Home-container">
        <button className='div-btn' onClick={() => Previous()} style={{ backgroundColor: "green" }}><ArrowBackIosIcon /></button>
        <div>
          <img style={{ width: "50vw", height: "40vh" }} src={`src/assets/demon${count}.jpg`} alt="denom" />
        </div>
        <button className='div-btn' onClick={() => Next()} style={{ backgroundColor: "green" }}><ArrowForwardIosIcon /></button>
      </div>
    </div>
  )
}

export default Home
import logo from './logo.svg';
import './App.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SvgIcon from '@mui/material/SvgIcon';
// import { SvgIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

function App() {

  let [count,setCount]=useState(1);

  // count+=1
  console.log("Count-> ", count)

  function Previous() {
    setCount(--count) }

  function Next() {
    setCount(++count);
  }

  if(count>11){
    setCount(1)
  }
  if(count<1){
    setCount(11)
  }

  return (
    <div className='Home'>Home
    <center>
      <div className="Home-container">
        <button className='div-btn' onClick={() => Previous()} style={{ backgroundColor: "green" }}><ArrowBackIosIcon /></button>
        <div>
          <img style={{ width: "80vw", height: "80vh",border:"10px solid green",objectFit:"cover", boxshadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} src={`assets/demon${count}.jpg`} alt="denom" />
        </div>
        <button className='div-btn' onClick={() => Next()} style={{ backgroundColor: "green" }}><ArrowForwardIosIcon /></button>
      </div>
      </center>
    </div>
    
  )
}

export default App;
import React, { useContext, useState } from 'react'
import { Link } from 'react-router'


function Menu() {

  const [clickcount, setclickcount] = useState(0);
  const [circle, setcircle] = useState([])
  const [background, setbackground] = useState("Orange")

  // const cirarr = [{ x: 300, y: 450, size: 100 }, { x: 200, y: 350, size: 80 }, { x: 500, y: 600, size: 150 }]

  const generatecircle = () => {
    const x = Math.floor(Math.random() * (innerWidth - 100)) + 20;
    const y = Math.floor(Math.random() * (innerHeight - 100)) + 20;
    const size = Math.floor(Math.random() * (200 - 20)) + 20;
    return { x, y, size }
  }

  // const handleClick = () => {
  //   const newCircle = generatecircle();
  //   const UpdatedCirlce = [...circle, newCircle];
  //   setcircle(UpdatedCirlce)
  // }

  const CallRapidly = () => {
    
    for(let i=0;i<50;i++){
      setTimeout(() => {
        setcircle(precircle=>[...precircle,generatecircle()])
      }, 1*10);
    }

  }

  return (
    <div style={{
      background,
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer"

    }} onClick={CallRapidly}>
      {
        circle.map((circle, index) => (
          <div key={index} style={{
            position: 'absolute',
            top: circle.x,
            left: circle.y,
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            backgroundColor: "red"

          }}>

          </div>
        ))
      }
      {/* <div>Are you Fine Mrs Pokesh</div>
        <marquee><Link to={"/"}>Home</Link></marquee> */}
    </div>
  )
}

export default Menu
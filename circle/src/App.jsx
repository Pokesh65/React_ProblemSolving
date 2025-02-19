import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router'

function App() {

  const [circles, setcircles] = useState([]);
  const [clickCount, setclickCount] = useState(0);
  const [backgroundColor,setbackgroundColor] = useState('lightgrey')

  const generatedCRandomircles = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100)) + 20;
    const y = Math.floor(Math.random() * (window.innerHeight - 100)) + 20;
    const size = Math.floor(Math.random() * (200 - 20)) + 20;
    return { x, y, size };
  };




  const handleClick = () => {
    const newClick = clickCount + 1;

    if (newClick === 3) {
      setclickCount(0);
      setcircles([]);
      setbackgroundColor('lightgrey');

    } else {
      const newCircles = generatedCRandomircles();
      const UpdatedCircle = [...circles, newCircles]
      setcircles(UpdatedCircle)

      for (let i = 0; i < UpdatedCircle.length-1; i++) {
        const circleOne = UpdatedCircle[i];
        const distance = Math.sqrt(
          Math.pow(circleOne.x - newCircles.x, 2) +
          Math.pow(circleOne.y - newCircles.y, 2)
        );
        if (distance < (circleOne.size + newCircles.size) / 2) {
          setbackgroundColor('black')
        }
      }
      setclickCount(newClick);
    }
  };




  return (
    <div className='App'
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor,
        position: 'relative',
        overflow: 'hidden'
      }}
      onClick={handleClick}
      >
      {
        circles.map((circle, index) => (
          <div
          key={index}
          style={{
            position: 'absolute',
            top: circle.y,
            left: circle.x,
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            background:'linear-gradient(to right,#5ee7df,#b490ca)'
          }}
        >
          </div>


        ))}

    </div>
  )
}

export default App

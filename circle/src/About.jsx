import React, { useState } from 'react';
import './App.css';

function App() {
  const [circles, setCircles] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const generateRandomCircle = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100)) + 20;
    const y = Math.floor(Math.random() * (window.innerHeight - 100)) + 20;
    const size = Math.floor(Math.random() * (200 - 20)) + 20;
    return { x, y, size };
  };

  const handleClick = () => {
    const newClickCount = clickCount + 1;

    if (newClickCount === 3) {
      // Reset everything
      setCircles([]);
      setBackgroundColor('#ffffff');
      setClickCount(0);
    } else {
      const newCircle = generateRandomCircle();
      const updatedCircles = [...circles, newCircle];
      setCircles(updatedCircles);

      // Check for intersection
      for (let i = 0; i < updatedCircles.length - 1; i++) {
        const circleA = updatedCircles[i];
        const distance = Math.sqrt(
          Math.pow(circleA.x - newCircle.x, 2) +
          Math.pow(circleA.y - newCircle.y, 2)
        );
        if (distance < (circleA.size + newCircle.size) / 2) {
          setBackgroundColor('#ffcccc'); // Change background color on intersection
        }
      }
      setClickCount(newClickCount);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
      }}
      onClick={handleClick}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: circle.y,
            left: circle.x,
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            backgroundColor: 'blue',
          }}
        >
        </div>


      ))}
    </div>
  );
}

export default App;

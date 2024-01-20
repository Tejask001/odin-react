import './App.css'
import List from './components/List'
//import Button from './components/Button'
import { useState } from 'react'

function App() {

  const colors = ["yellow", "white", "green", "red"];

  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  }


  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h1>Colors: </h1>
      <List colors={colors} onButtonClick={handleButtonClick} />
    </div>
  )
}

export default App

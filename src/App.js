import logo from './logo.svg';
import './App.css';
import ImagesList from './ImagesList.js'
import { useEffect, useState } from 'react'

function App() {
  // get images from backend
  const [images, setImages] = useState([])

  useEffect(async () => {
    const response = await fetch('https://dqfji3ug64.execute-api.us-east-1.amazonaws.com/dev/images') 
    const images = await response.json()
    setImages(images)
  })

  // pass images into ImagesList component
  return (
    <ImagesList data={images} />
  );
}

export default App;

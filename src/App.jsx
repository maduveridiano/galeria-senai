import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sobre from './components/Sobre.jsx'
import Image from './components/Image.jsx'
import Header from './components/Header.jsx'

function App() {
 
  return (
   <div>
    <Header/>
    <Image
    img= './batman.jfif'/>
      <Image
    img= './i835095.jpeg'/>
     <Image
    img= './57f13ec1b6e2d5712d03fec842e08356.jpg'/>
     <Image
    img= './blabla.avif'/>
    <Sobre/>
   </div>
  )
}

export default App

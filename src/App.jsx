import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home2 from './pages/Home2'
import About from './pages/About'
import Footer from './components/Footer'
import Ribbons from '../Reactbits/Ribbons/Ribbons'

function App() {
  return (
    <>
      <Ribbons
        baseThickness={24}
        colors={["#01BFBD", "#00A8A6", "#008A88"]}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={true}
        enableShaderEffect={true}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartSidebar from './components/CartSidebar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
      </Routes>
      <CartSidebar />
      <Footer />
    </>
  )
}

export default App

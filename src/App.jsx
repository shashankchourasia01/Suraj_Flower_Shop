import React from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pages from './pages/Pages'
import Portfolio from './pages/Portfolio'
import Shop from './pages/Shop'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/portfolio' element={<Portfolio /> } />
        <Route path='/shop' element={<Shop />} />

        {/* fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>


    </>
  )
}

export default App
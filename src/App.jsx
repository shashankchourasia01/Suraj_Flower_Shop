import React from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pages from './pages/Pages'
import Portfolio from './pages/Portfolio'
import Shop from './pages/Shop'

// sub pages imports
import AboutUs from './pages/pages/AboutUs'
import OurTeam from './pages/pages/OurTeam'
import PricingPlan from './pages/pages/PricingPlan'
import ContactUs from './pages/pages/ContactUs'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages' element={<Pages />} />

        {/* Pages Sub Routes */}
        <Route path='/pages/about-us' element={<AboutUs />} />
        <Route path='/pages/our-team' element={<OurTeam />} />
        <Route path='/pages/pricing-plan' element={<PricingPlan />} />
        <Route path='/pages/contact-us' element={<ContactUs />} />

        <Route path='/portfolio' element={<Portfolio /> } />
        <Route path='/shop' element={<Shop />} />

        {/* fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
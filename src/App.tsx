// import React from 'react'
import About from './components/About'
import CoffeeSection from './components/CoffeeSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import MenuSection from './components/MenuSection'

import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'


const App = () => {
  return (
    <div>
     
      <Navbar/>
      <CoffeeSection/>
      <MenuSection/>
      <Gallery/>
      <About/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     
    
      
    </div>
  )
}

export default App

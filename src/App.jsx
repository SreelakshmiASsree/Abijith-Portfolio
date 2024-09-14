import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Home/Navbar';
import Homes from './Components/Home/Homes';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Home/Footer'
import Collections from './Components/Works/Collections'
import About from './Components/About/About';
// import Products from './Components/Works/Products'

const App = () => {
  return (
    <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Homes/>}/>
   <Route path='/collections' element={<Collections/>}/>
  {/* <Route path='/products' element={<Products/>}/>  */}
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </div>
  )
}

export default App

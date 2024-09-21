import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Home/Navbar';
import Homes from './Components/Home/Homes';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Home/Footer'
import Collections from './Components/Works/Collections'
import About from './Components/About/About';
import AdminPanel from './Components/AdminPanel/AdminPanel';
// import Products from './Components/Works/Products'
import Layout from './Layout';
import AllWork from './Components/AdminPanel/AllWork';
import AddWork from './Components/AdminPanel/AddWork';

const App = () => {
  return (
    <div>
  <BrowserRouter>
  {/* <Navbar/> */}
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Homes/>}/>
     <Route path='/collections' element={<Collections/>}/>
      <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>

    </Route>

    <Route >
    <Route path='/AdminPanel' element={<AdminPanel/>}/>
    <Route path='/AllWorks' element={<AllWork/>}/>
    <Route path='/AddWork' element={<AddWork/>}/>
    </Route>
 
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App

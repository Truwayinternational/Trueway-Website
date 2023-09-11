import React from "react";
import TopBar from "./Components/Layout/TopBar";
import NavBar from "./Components/Layout/NavBar/NavBar";
import HomeIndex from "./Pages/Home/HomeIndex";
import Footer from './Components/Layout/Footer'
import ServicesIndex from "./Pages/OtherServices/ServicesIndex";
import AboutIndex from "./Pages/AboutUs/AboutIndex";
import WesIndex from "./Pages/WES/WesIndex";
import BlogsIndex from "./Pages/Blog&Video/BlogsIndex";
import ContactIndex from "./Pages/ContactUS/ContactIndex";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <TopBar />
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomeIndex />} /> 
          <Route path="/about" element={<AboutIndex />} /> 
          <Route path="/wes" element={<WesIndex />} /> 
          <Route path="/services" element={<ServicesIndex />} /> 
          <Route path="/blogs" element={<BlogsIndex />} /> 
          <Route path="/contact" element={<ContactIndex />} /> 
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

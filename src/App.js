import React from "react";
import { Route, Routes} from "react-router-dom";
 
// Navbar router in web page
import TopBar from "./Components/Layout/TopBar";
import NavBar from "./Components/Layout/NavBar/NavBar";
import HomeIndex from "./Pages/Home/HomeIndex";
import Footer from './Components/Layout/Footer'
// import ServicesIndex from "./Pages/OtherServices/ServicesIndex";
import AboutIndex from "./Pages/AboutUs/AboutIndex";
import WesIndex from "./Pages/WES/WesIndex";
import BlogsIndex from "./Pages/Blog&Video/BlogsIndex";
import ContactIndex from "./Pages/ContactUS/ContactIndex";


// Services section router 
import CertificateAttestation_index from "./Pages/OtherServices/Certificate Attestation/CertificateAttestation_index";
import EmbassyAttestation_index from "./Pages/OtherServices/Embassy Attestation/EmbassyAttestation_index";




function App() {
  return (
    <div>
      <TopBar />
      <NavBar/>
        <Routes>
          {/* Navbar menus  router*/}
          <Route exact path="/" element={<HomeIndex />} /> 
          <Route path="/about" element={<AboutIndex />} /> 
          <Route path="/wes" element={<WesIndex />} /> 
          {/* <Route path="/services" element={<ServicesIndex />} />  */}
          <Route path="/blogs" element={<BlogsIndex />} /> 
          <Route path="/contact" element={<ContactIndex />} /> 

          {/* services router */}
          <Route path="/certificateAttestation" element={<CertificateAttestation_index />} />
          <Route path="/embassyAttestation" element={ <EmbassyAttestation_index /> } />

        </Routes>
      <Footer />
    </div>
  );
}

export default App;

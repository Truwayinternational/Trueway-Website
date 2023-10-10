import React from "react";
import { Route, Routes} from "react-router-dom";
 
// Navbar router in web page
import TopBar from "./Components/Layout/TopBar";
import NavBar from "./Components/Layout/NavBar/NavBar";
import HomeIndex from "./Pages/Home/HomeIndex";
import Footer from './Components/Layout/Footer'

import QuickAction from "./Components/Layout/QuickAction";

// import ServicesIndex from "./Pages/OtherServices/ServicesIndex";
import AboutIndex from "./Pages/AboutUs/AboutIndex";
import WesIndex from "./Pages/WES/WesIndex";
import BlogsIndex from "./Pages/Blog&Video/BlogsIndex";
import ContactIndex from "./Pages/ContactUS/ContactIndex";


// Services section router 
import CertificateAttestationIndex from "./Pages/OtherServices/Certificate Attestation/CertificateAttestationIndex";
import EmbassyAttestationIndex from "./Pages/OtherServices/Embassy Attestation/EmbassyAttestationIndex";
import HRDIndex from "./Pages/OtherServices/HRD Attestation/HRDIndex";
import MEAIndex from "./Pages/OtherServices/MEA Attestation/MEAIndex";
import MOFAindex from "./Pages/OtherServices/MOFA Attestation/MOFAindex";
import HomeAttIndex from "./Pages/OtherServices/Home Attestation/HomeAttIndex";
import DataFlowIndex from "./Pages/OtherServices/Data Flow/DataFlowIndex";


// clicking to nav link and scroll to top section
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth scrolling behavior for a smoother transition
  });
}


function App() {
  
  return (
    <div>
      <TopBar />
      <NavBar/>
      <QuickAction/>
        <Routes>
          {/* Navbar menus  router*/}
          <Route exact path="/" element={<HomeIndex/>} onClick={scrollToTop}/> 
          <Route path="/about" element={<AboutIndex/>} onClick={scrollToTop}/> 
          <Route path="/wes" element={<WesIndex/>} onClick={scrollToTop}/> 
          <Route path="/services" element={<CertificateAttestationIndex />} onClick={scrollToTop}/> 
          <Route path="/blogs" element={<BlogsIndex/>} onClick={scrollToTop}/> 
          <Route path="/contact" element={<ContactIndex/>} onClick={scrollToTop}/> 


          {/* services router */}
          <Route path="/certificateAttestation" element={ <CertificateAttestationIndex/> } onClick={scrollToTop}/>
          <Route path="/embassyAttestation" element={<EmbassyAttestationIndex/>} />
          <Route path="/hrdAttestation" element={ <HRDIndex/> } onClick={scrollToTop}/>
          <Route path="/meaAttestation" element={ <MEAIndex/> } onClick={scrollToTop}/>
          <Route path="/mofaAttestation" element={ <MOFAindex/> } onClick={scrollToTop}/>
          <Route path="/homeAttestation" element={ <HomeAttIndex/>} onClick={scrollToTop}/>
          <Route path="/dataflow" element={ <DataFlowIndex/> } onClick={scrollToTop}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

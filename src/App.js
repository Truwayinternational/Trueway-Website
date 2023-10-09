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




function App() {
  
  return (
    <div>
      <TopBar />
      <NavBar/>
      <QuickAction/>
        <Routes>
          {/* Navbar menus  router*/}
          <Route exact path="/" element={<HomeIndex/>} /> 
          <Route path="/about" element={<AboutIndex/>} /> 
          <Route path="/wes" element={<WesIndex/>} /> 
          <Route path="/services" element={<CertificateAttestationIndex />} /> 
          <Route path="/blogs" element={<BlogsIndex/>} /> 
          <Route path="/contact" element={<ContactIndex/>} /> 


          {/* services router */}
          <Route path="/certificateAttestation" element={ <CertificateAttestationIndex/> } />
          <Route path="/embassyAttestation" element={<EmbassyAttestationIndex/>} />
          <Route path="/hrdAttestation" element={ <HRDIndex/> } />
          <Route path="/meaAttestation" element={ <MEAIndex/> } />
          <Route path="/mofaAttestation" element={ <MOFAindex/> } />
          <Route path="/homeAttestation" element={ <HomeAttIndex/>} />
          <Route path="/dataflow" element={ <DataFlowIndex/> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

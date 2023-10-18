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



// We Provide Dataflow Services For different countries 
import MohIndex from "./Pages/OtherServices/Data Flow/MOH/MohIndex";
import BahrainDataflowIndex from "./Pages/OtherServices/Data Flow/BAHRAIN/BahrainDataflowIndex";
import DHAindex from "./Pages/OtherServices/Data Flow/DHA/DHAindex";
import SaudiDataflowIndex from "./Pages/OtherServices/Data Flow/SAUDI/SaudiDataflowIndex";
import OmanDataflowIndex from "./Pages/OtherServices/Data Flow/OMAN/OmanDataflowIndex";
import QatarDataflowIndex from "./Pages/OtherServices/Data Flow/QATAR/QatarDataflowIndex";
import HAADdataflowIndex from "./Pages/OtherServices/Data Flow/HAAD/HAADdataflowIndex";





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


          {/* We Provide Dataflow Services For ---DATAFLOW VERIFICATIONS ---*/}
          <Route path="/df_moh" element={ <MohIndex/> } />
          <Route path="df_saudiArabia" element = { <SaudiDataflowIndex/> } />
          <Route path="df_oman" element = { <OmanDataflowIndex/> } />
          <Route path="/df_bahrain" element={ <BahrainDataflowIndex/> } />
          <Route path="/df_qatar" element={ <QatarDataflowIndex/> } />
          <Route path="/df_dha" element={ <DHAindex/> } />
          <Route path="/df_haad" element={ <HAADdataflowIndex/> } />
          
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

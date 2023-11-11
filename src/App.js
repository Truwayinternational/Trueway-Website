import React, {lazy , Suspense} from "react";
import { Route, Routes} from "react-router-dom";
 
// Navbar router in web page
import TopBar from "./Components/Layout/TopBar";
import NavBar from "./Components/Layout/NavBar/NavBar";
import Footer from './Components/Layout/Footer'
import QuickAction from "./Components/Layout/QuickAction";

// all pages from navbar router
const HomeIndex = lazy(() => import("./Pages/Home/HomeIndex"));
const AboutIndex = lazy(() => import("./Pages/AboutUs/AboutIndex"));
const WesIndex = lazy(() => import("./Pages/WES/WesIndex"));
const BlogsIndex = lazy(() => import("./Pages/Blog&Video/BlogsIndex"));
const ContactIndex = lazy(() => import("./Pages/ContactUS/ContactIndex"));


// Services section router 
const CertificateAttestationIndex = lazy(() => import("./Pages/OtherServices/Certificate Attestation/CertificateAttestationIndex"));
const EmbassyAttestationIndex = lazy(() => import("./Pages/OtherServices/Embassy Attestation/EmbassyAttestationIndex"));
const HRDIndex = lazy(() => import("./Pages/OtherServices/HRD Attestation/HRDIndex"));
const MOFAindex = lazy(() => import("./Pages/OtherServices/MOFA Attestation/MOFAindex"));
const MEAIndex = lazy(() => import("./Pages/OtherServices/MEA Attestation/MEAIndex"));
const HomeAttIndex = lazy(() => import("./Pages/OtherServices/Home Attestation/HomeAttIndex"));
const DataFlowIndex = lazy(() => import("./Pages/OtherServices/Data Flow/DataFlowIndex"));
const PccIndex = lazy(() => import("./Pages/OtherServices/PCC/PccIndex"));
const ExamCoachingIndex = lazy(() => import("./Pages/OtherServices/Exam Coaching/ExamCoachingIndex"));


// We Provide Dataflow Services For different countries 
const MohIndex = lazy(() => import("./Pages/OtherServices/Data Flow/MOH/MohIndex"));
const BahrainDataflowIndex = lazy(() => import("./Pages/OtherServices/Data Flow/BAHRAIN/BahrainDataflowIndex"));
const DHAindex = lazy(() => import("./Pages/OtherServices/Data Flow/DHA/DHAindex"));
const SaudiDataflowIndex = lazy(() => import("./Pages/OtherServices/Data Flow/SAUDI/SaudiDataflowIndex"));
const OmanDataflowIndex = lazy(() => import("./Pages/OtherServices/Data Flow/OMAN/OmanDataflowIndex"));
const QatarDataflowIndex = lazy(() => import("./Pages/OtherServices/Data Flow/QATAR/QatarDataflowIndex"));
const HAADdataflowIndex = lazy(() => import("./Pages/OtherServices/Data Flow/HAAD/HAADdataflowIndex"));
const KuwaitDataflowIndex = lazy(() => import("./Pages/OtherServices/Data Flow/KUWAIT/KuwaitDataflowIndex"));


// We Provide embassy attestation services For different countries 
const QatarEmbassyIndex = lazy(() => import("./Pages/OtherServices/Embassy Attestation/Qatar/QatarEmbassyIndex"));
const KuwaitEmbassyIndex = lazy(() => import("./Pages/OtherServices/Embassy Attestation/Kuwait/KuwaitEmbassyIndex"));
const UaeEmbassyIndex = lazy(() => import("./Pages/OtherServices/Embassy Attestation/Uae/UaeEmbassyIndex"));
const MalaysiaEmbassyIndex = lazy(() => import("./Pages/OtherServices/Embassy Attestation/Malaysia/MalaysiaEmbassyIndex"));
const BahrainEmbassyIndex = lazy(() => import("./Pages/OtherServices/Embassy Attestation/Bahrain/BahrainEmbassyIndex"));


// We Provide PCC services For different countries 
const UaePccIndex = lazy(() => import("./Pages/OtherServices/PCC/UAE/UaePccIndex"));
const SaudiPccIndex = lazy(() => import("./Pages/OtherServices/PCC/SAUDI/SaudiPccIndex"));
const QatarPccIndex = lazy(() => import("./Pages/OtherServices/PCC/QATAR/QatarPccIndex"));
const OmanPccIndex = lazy(() => import("./Pages/OtherServices/PCC/OMAN/OmanPccIndex"));
const KuwaitPccIndex = lazy(() => import("./Pages/OtherServices/PCC/KUWAIT/KuwaitPccIndex"));


// we provide -- exam coaching -- for
const OetIndex = lazy(() => import("./Pages/OtherServices/Exam Coaching/OET/OetIndex"));
const IeltsIndex = lazy(() => import("./Pages/OtherServices/Exam Coaching/IELTS/IeltsIndex"));
const PrometricsIndex = lazy(() => import("./Pages/OtherServices/Exam Coaching/PROMETRICS/PrometricsIndex"));




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
      <Suspense fallback={ <h1 className="flex justify-center items-center text-xl"> Loading... </h1>}>
        <Routes>

          {/* Navbar menus  router*/}
          <Route exact path="/" element={ <HomeIndex/> } onClick={scrollToTop}/>
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
          <Route path="/pcc" element={<PccIndex/>} onClick={scrollToTop} />
          <Route path="/examCoaching" element={<ExamCoachingIndex/>} onClick={scrollToTop}/>

          {/* We Provide Dataflow Services For ---DATAFLOW VERIFICATIONS ---*/}
          <Route path="/df_moh" element={ <MohIndex/> } />
          <Route path="/df_saudiArabia" element = { <SaudiDataflowIndex/> } />
          <Route path="/df_oman" element = { <OmanDataflowIndex/> } />
          <Route path="/df_bahrain" element={ <BahrainDataflowIndex/> } />
          <Route path="/df_qatar" element={ <QatarDataflowIndex/> } />
          <Route path="/df_dha" element={ <DHAindex/> } />
          <Route path="/df_haad" element={ <HAADdataflowIndex/> } />
          <Route path="/df_kuwait" element={ <KuwaitDataflowIndex/> } />

          {/* We Provide Embassy attestation For --- embassy attestation ---*/}
          <Route path="/qatarembassy" element={ <QatarEmbassyIndex/> } />
          <Route path="/kuwaitembassy" element={ <KuwaitEmbassyIndex/> } />
          <Route path="/uaeembassy" element={ <UaeEmbassyIndex/> } />
          <Route path="/malaysiaembassy" element={ <MalaysiaEmbassyIndex/> } />
          <Route path="/bahrainembassy" element={ <BahrainEmbassyIndex/> } />

          {/* We Provide PCC For --- POLICE CLEARANCE CERTIFICATE ---*/}
          <Route path="/pcc_uae" element={ <UaePccIndex/> } />
          <Route path="/pcc_ksa" element={<SaudiPccIndex/>} />
          <Route path="/pcc_qatar" element={<QatarPccIndex/>} />
          <Route path="/pcc_oman" element={<OmanPccIndex/>} />
          <Route path="/pcc_kuwait" element={<KuwaitPccIndex/>} />

          {/* We Provide --- EXAMS COACHING --- FOR */}
          <Route path="/oet" element={<OetIndex/>}/>
          <Route path="/ielts" element={<IeltsIndex/>}/>
          <Route path="/prometric" element={<PrometricsIndex/>}/>

        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

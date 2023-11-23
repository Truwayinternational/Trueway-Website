import React, {lazy , Suspense} from "react";
import { Route, Routes} from "react-router-dom";
import { SyncLoader } from 'react-spinners'
 
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
const ApostilleIndex = lazy(()=> import("./Pages/OtherServices/Apostille Attestaion/ApostilleIndex"));
const GoodStandingIndex = lazy(()=>import("./Pages/OtherServices/Good Standing & Verification/GoodStandingIndex"));




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

// goodstanding Nursing councils are :-
const KeralaNursingIndex = lazy( ()=>import("./Pages/OtherServices/Good Standing & Verification/Kerala Nursing/KeralaNursingIndex"));
const TamilNaduNursingIndex = lazy( ()=> import("./Pages/OtherServices/Good Standing & Verification/TamilNadu Nursing/TamilNaduNursingIndex"))
const KarnatakaNursingIndex = lazy( ()=> import("./Pages/OtherServices/Good Standing & Verification/Karnataka Nursing/KarnatakaNursingIndex"))
const MPnursingIndex = lazy(()=> import("./Pages/OtherServices/Good Standing & Verification/Madhya Predhesh Nursing/MPnursingIndex"));
const MaharashtraIndex = lazy(()=> import("./Pages/OtherServices/Good Standing & Verification/Maharashtra/MaharashtraIndex"))
const TelenganaIndex =lazy(()=>import("./Pages/OtherServices/Good Standing & Verification/Telangana/TelenganaIndex"));
const DelhiNursingIndex =lazy(()=>import("./Pages/OtherServices/Good Standing & Verification/Delhi/DelhiNursingIndex"));
const SaudiNursingIndex =lazy(()=>import("./Pages/OtherServices/Good Standing & Verification/Saudi/SaudiNursingIndex"));
const AndhraNursingIndex=lazy(()=>import("./Pages/OtherServices/Good Standing & Verification/Andhra pradesh/AndhraNursingIndex"));
const TCMCindex=lazy(()=>import("./Pages/OtherServices/Good Standing & Verification/TCMC/TCMCindex"));
const KeralaDentalIndex=lazy(()=>import("./Pages/OtherServices/Good Standing & Verification/Kerala Dental/KeralaDentalIndex"));
const KeralaParamedicalIndex =lazy(()=> import("./Pages/OtherServices/Good Standing & Verification/Kerala Paramedical/KeralaParamedicalIndex"));








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
      <Suspense fallback={ <h1 className="flex justify-center items-center text-xl text-center font-HeadingFont"> Loading 
          <SyncLoader color="#2bb134" loading/>
        </h1>}>

        <Routes>
          {/* Navbar menus  router*/}
          <Route exact path="/" element={ <HomeIndex/> } onClick={scrollToTop}/>
          <Route path="/about" element={<AboutIndex/>} onClick={scrollToTop}/> 
          <Route path="/wes" element={<WesIndex/>} onClick={scrollToTop}/> 
          <Route path="/services" element={<CertificateAttestationIndex />} onClick={scrollToTop}/> 
          <Route path="/blogs" element={<BlogsIndex/>} onClick={scrollToTop}/> 
          <Route path="/contact" element={<ContactIndex/>} onClick={scrollToTop}/> 

          {/* services router */}
          <Route path="/certificate-attestation" element={ <CertificateAttestationIndex/> } onClick={scrollToTop}/>
          <Route path="/embassy-attestation" element={<EmbassyAttestationIndex/>} />
          <Route path="/hrd-attestation" element={ <HRDIndex/> } onClick={scrollToTop}/>
          <Route path="/mea-attestation" element={ <MEAIndex/> } onClick={scrollToTop}/>
          <Route path="/mofa-attestation" element={ <MOFAindex/> } onClick={scrollToTop}/>
          <Route path="/home-attestation" element={ <HomeAttIndex/>} onClick={scrollToTop}/>
          <Route path="/dataflow" element={ <DataFlowIndex/> } onClick={scrollToTop}/>
          <Route path="/pcc" element={<PccIndex/>} onClick={scrollToTop} />
          <Route path="/exam-coaching" element={<ExamCoachingIndex/>} onClick={scrollToTop}/>
          <Route path="/apostille-attestation" element={<ApostilleIndex/>} onClick={scrollToTop}/>
          <Route path="/goodstanding-council-verification" element={<GoodStandingIndex/>} onClick={scrollToTop} />


          {/* We Provide Dataflow Services For ---DATAFLOW VERIFICATIONS ---*/}
          <Route path="/dataflow-moh" element={ <MohIndex/> } />
          <Route path="/dataflow-saudiArabia" element = { <SaudiDataflowIndex/> } />
          <Route path="/dataflow-oman" element = { <OmanDataflowIndex/> } />
          <Route path="/dataflow-bahrain" element={ <BahrainDataflowIndex/> } />
          <Route path="/dataflow-qatar" element={ <QatarDataflowIndex/> } />
          <Route path="/dataflow-dha" element={ <DHAindex/> } />
          <Route path="/dataflow-haad" element={ <HAADdataflowIndex/> } />
          <Route path="/dataflow-kuwait" element={ <KuwaitDataflowIndex/> } />

          {/* We Provide Embassy attestation For --- embassy attestation ---*/}
          <Route path="/qatar-embassy" element={ <QatarEmbassyIndex/> } />
          <Route path="/kuwait-embassy" element={ <KuwaitEmbassyIndex/> } />
          <Route path="/uae-embassy" element={ <UaeEmbassyIndex/> } />
          <Route path="/malaysia-embassy" element={ <MalaysiaEmbassyIndex/> } />
          <Route path="/bahrain-embassy" element={ <BahrainEmbassyIndex/> } />

          {/* We Provide PCC For --- POLICE CLEARANCE CERTIFICATE ---*/}
          <Route path="/pcc-uae" element={ <UaePccIndex/> } />
          <Route path="/pcc-saudiArabia" element={<SaudiPccIndex/>} />
          <Route path="/pcc-qatar" element={<QatarPccIndex/>} />
          <Route path="/pcc-oman" element={<OmanPccIndex/>} />
          <Route path="/pcc-kuwait" element={<KuwaitPccIndex/>} />

          {/* We Provide --- EXAMS COACHING --- FOR */}
          <Route path="/oet" element={<OetIndex/>}/>
          <Route path="/ielts" element={<IeltsIndex/>}/>
          <Route path="/prometric" element={<PrometricsIndex/>}/>

          {/* goodstanding Nursing Councils  */}
          <Route path="/kerala-nursing-council" element={<KeralaNursingIndex/>}/>
          <Route path="/tamilnadu-nursing-council" element={<TamilNaduNursingIndex/>}/>
          <Route path="/karnataka-nursing-council" element={<KarnatakaNursingIndex/>}/>
          <Route path="/madhyapradesh-nursing-council" element={<MPnursingIndex/>}/>
          <Route path="/maharashtra-nursing-council" element={<MaharashtraIndex/>}/>
          <Route path="/telangana-nursing-council" element={<TelenganaIndex/>}/>
          <Route path="/delhi-nursing-council" element={<DelhiNursingIndex/>}/>
          <Route path="/saudiarabia-nursing-council" element={<SaudiNursingIndex/>}/>
          <Route path="/andhrapredesh-nursing-council" element={<AndhraNursingIndex/>}/>
          <Route path="/travancore-cochin-medical-council"element={<TCMCindex/>}/>
          <Route path="/kerala-dental-council" element={<KeralaDentalIndex/>}/>
          <Route path="/kerala-paramedical-council" element={<KeralaParamedicalIndex/>}/>

        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

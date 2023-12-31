import React, {lazy , Suspense} from "react";
import { Route, Routes} from "react-router-dom";
import { SyncLoader } from 'react-spinners'
import { ToastContainer } from "react-toastify";

 
// Navbar router in web page
import TopBar from "./Components/Layout/TopBar";
import NavBar from "./Components/Layout/NavBar/NavBar";
import Footer from './Components/Layout/Footer'
import QuickAction from "./Components/Layout/QuickAction";




// root backend
const Login = lazy(()=>import("./Components/Forms/Login"))
const ErrorPage = lazy(()=>import("./Pages/ErrorPage"))
const AdminBlogs = lazy(()=>import("./Components/Admin/AdminBlogs"))
const SingleBlog = lazy(()=>import("./Components/Admin/SingleBlog"))
const AdminAuth = lazy(()=>import("./Components/Admin/AdminAuth"))
const SingleBlogPage = lazy(()=>import("./Pages/Blog&Video/SingleBlogPage"))


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
const AclsBlsIndex = lazy(()=> import("./Pages/OtherServices/ACLS-BLS/AclsBlsIndex"));




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
const KeralaPharmacyIndex =lazy(()=> import("./Pages/OtherServices/Good Standing & Verification/Kerala Pharmacy/KeralaPharmacyIndex"));


// CGFNS - COUNCIL VERIFICATION HOME PAGE AND INNER PAGES 
const CgfnsIndex = lazy(()=> import("./Pages/Verifications/CGFNS/CgfnsIndex"))
const KeralaCgfnsIndex = lazy(()=> import("./Pages/Verifications/CGFNS/Kerala-CGFNS/KeralaCgfnsIndex"))
const TamilnaduCgfnsIndex = lazy(()=>import("./Pages/Verifications/CGFNS/Tamilnadu-CGFNS/TamilnaduCgfnsIndex"))
const MaharashtraCgfnsIndex = lazy(()=> import("./Pages/Verifications/CGFNS/Mahrarashtra-CGFNS/MaharashtraCgfnsIndex"))
const KarnatakaCgfnsIndex =lazy(()=>import("./Pages/Verifications/CGFNS/Karnataka-CGFNS/KarnatakaCgfnsIndex"))
const TelanganaCgfnsIndex =lazy(()=>import("./Pages/Verifications/CGFNS/Telangana-CGFNS/TelanganaCgfnsIndex"))
const MadhyapredeshCgfnsIndex =lazy(()=>import("./Pages/Verifications/CGFNS/MadhyaPredesh-CGFNS/MadhyapredeshCgfnsIndex"))
const DelhiCgfnsIndex =lazy(()=>import("./Pages/Verifications/CGFNS/Delhi-CGFNS/DelhiCgfnsIndex"))
const SaudiCgfnsIndex=lazy(()=>import("./Pages/Verifications/CGFNS/Saudi-CGFNS/SaudiCgfnsIndex"))
const AndhraCfgnsIndex=lazy(()=>import("./Pages/Verifications/CGFNS/Andhra-CGFNS/AndhraCfgnsIndex"))
const GujratCgfnsIndex =lazy(()=>import("./Pages/Verifications/CGFNS/Gujrat-CGFNS/GujratCgfnsIndex"))
const PunjabCgfnsIndex =lazy(()=>import("./Pages/Verifications/CGFNS/Punjab-CGFNS/PunjabCgfnsIndex"))
const OmanCgfnsIndex =lazy(()=>import("./Pages/Verifications/CGFNS/Oman-CGFNS/OmanCgfnsIndex"))



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
      <Suspense fallback={ <p className="flex justify-center items-center text-xl text-center font-HeadingFont"> Loading 
          <SyncLoader color="#2bb134" loading/>
        </p>}>
          
        <Routes>
          {/* Navbar menus  router*/}
          <Route exact path="/" element={ <HomeIndex/> } onClick={scrollToTop}/>
          <Route path="/about" element={<AboutIndex/>} onClick={scrollToTop}/> 
          <Route path="/wes" element={<WesIndex/>} onClick={scrollToTop}/> 
          <Route path="/services" element={<CertificateAttestationIndex />} onClick={scrollToTop}/> 
          <Route path="/blogs" element={<BlogsIndex/>} onClick={scrollToTop}/>
          <Route path="/blogs/:blogId" element={<SingleBlogPage/>} />
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
          <Route path="/dataflow-saudiArabia" element = { <SaudiDataflowIndex/>}/>
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
          <Route path="/kerala-pharmacy-council" element={<KeralaPharmacyIndex/>}/>
          <Route path="/acls-bls" element={<AclsBlsIndex/>}/>

          {/* CGFNS - VERIFICATION HOME & Inner pages */}
          <Route path="/cgfns-council-verification" element={<CgfnsIndex/>}/>
          <Route path="/cgfns-kerala-council-verification" element={<KeralaCgfnsIndex/>}/>
          <Route path="/cgfns-tamilnadu-council-verification" element={<TamilnaduCgfnsIndex/>}/>
          <Route path="/cgfns-maharashtra-council-verification" element={<MaharashtraCgfnsIndex/>}/>
          <Route path="/cgfns-karnataka-council-verification" element={<KarnatakaCgfnsIndex/>}/>
          <Route path="/cgfns-telangana-council-verification" element={<TelanganaCgfnsIndex/>}/>
          <Route path="/cgfns-madhyapradesh-council-verification" element={<MadhyapredeshCgfnsIndex/>}/>
          <Route path="/cgfns-delhi-council-verification" element={<DelhiCgfnsIndex/>}/>
          <Route path="/cgfns-saudiarabia-council-verification" element={<SaudiCgfnsIndex/>}/>
          <Route path="/cgfns-andhrapradesh-council-verification" element={<AndhraCfgnsIndex/>}/>
          <Route path="/cgfns-gujarat-council-verification" element={<GujratCgfnsIndex/>}/>
          <Route path="/cgfns-punjab-council-verification" element={<PunjabCgfnsIndex/>}/>
          <Route path="/cgfns-oman-council-verification" element={<OmanCgfnsIndex/>}/>


          {/* backend root  Admin */}
            <Route path="/admin" element={<Login/>}/>
            <Route element={<AdminAuth/>}>
              <Route path="/admin/add-blog" element={<SingleBlog/>} />
              <Route path="/admin/blogs" element={<AdminBlogs/>}/>
              <Route path="/admin/blogs/:blogId" element={<SingleBlog/>}/>
            </Route>


          {/* 404 error */}
          <Route path="/*" element={<ErrorPage/>}/>

        </Routes>
        </Suspense>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;

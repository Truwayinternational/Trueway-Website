import React from 'react'

// images import for sidebar
import Certificate_img from '../../Assets/services_Sidebar/certificate.png';
import embassy_img from '../../Assets/services_Sidebar/embassy.png'
import MEA_img from '../../Assets/services_Sidebar/mea.png'
import Mofa_img from '../../Assets/services_Sidebar/mofa.png'
import HRD_img from '../../Assets/services_Sidebar/HRD.png'
import Apostille_img from '../../Assets/services_Sidebar/APOSTILLE.png'
import HOME_img from '../../Assets/services_Sidebar/HOME.png'
import Dataflow_img from '../../Assets/services_Sidebar/DATAFLOW.png'
import Exam_img from '../../Assets/services_Sidebar/EXAM.png'
import ACLS_BLS_img from '../../Assets/services_Sidebar/ACLS.png'
import PCC_img from '../../Assets/services_Sidebar/PCC.png'
import migration_img from '../../Assets/services_Sidebar/MIGRATION.png'
import verification_img from '../../Assets/services_Sidebar/verifications.png'

// clicking to nav link and scroll to top section
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior for a smoother transition
    });
}


function HeroSidebar() {
  return (
    <>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <ul className='list-none mt-4'>
                        <li className='my-[-15px]'>
                            <a href="/certificate-attestation" onClick={scrollToTop}>
                                <img src={Certificate_img} alt="CertificateAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg'  />
                            </a>
                        </li> 
                        <li className='my-[-15px]'>
                            <a href="/embassy-attestation" onClick={scrollToTop}>
                                <img src={embassy_img} alt="embassy_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/mea-attestation" onClick={scrollToTop}>
                                <img src={MEA_img} alt="MEA_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/mofa-attestation" onClick={scrollToTop}>
                                <img src={Mofa_img} alt="Mofa_Attestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/hrd-attestation" onClick={scrollToTop}>
                                <img src={HRD_img} alt="HrdAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/apostille-attestation" onClick={scrollToTop}>
                                <img src={Apostille_img} alt="AppostilleAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li>
                            <a href="/home-attestation" onClick={scrollToTop}>
                                <img src={HOME_img} alt="HomeAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/dataflow" onClick={scrollToTop}>
                                <img src={Dataflow_img} alt="dataflow_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/exam-coaching" onClick={scrollToTop}>
                                <img src={Exam_img} alt="examCoaching_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]' onClick={scrollToTop}>
                            <a href="/acls-bls">
                                <img src={ACLS_BLS_img} alt="ACLS_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/pcc" onClick={scrollToTop}>
                                <img src={PCC_img} alt="pcc_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]'>
                            <a href="/migration" onClick={scrollToTop}>
                                <img src={migration_img} alt="migration_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                        <li className='my-[-15px]' onClick={scrollToTop}>
                            <a href="/goodstanding-council-verification">
                                <img src={verification_img} alt="otherServices_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default HeroSidebar
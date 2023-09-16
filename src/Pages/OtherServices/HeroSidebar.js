import React from 'react'
import { Link }from 'react-router-dom'

// // pages import for sidebar
// import CertificateAttestation_index from './CertificateAttestation_index'


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
import otherServices_img from '../../Assets/services_Sidebar/OTHERSERVICS.png'



// const routes = [
//     {
//         path:"/certificateAttestation",
//         exact:true,
//         main: () => <CertificateAttestation_index />
//     },
//     {
//         path:"/embassyAttestation",
//         exact:true,
//         // slidebar: () => <div> Embassy Attestation</div>,
//         main: () => <div> Embassy Attestation _ index  page</div>
//     },
//     {
//         path:"/mea_mofaAttestation",
//         exact:true,
//         // slidebar: () => <div> MEA / MOFA Attestation</div>,
//         main: () => <div> MEA / MOFA Attestation _ index page</div>
//     },
//     {
//         path:"/hrdAttestation",
//         exact:true,
//         // slidebar: () => <div> Certificate attestation</div>,
//         main: () => <div> HRD attestation index_ page </div>
//     },
//     {
//         path:"/apostilleAttestation",
//         exact:true,
//         // slidebar: () => <div> HRD attestation</div>,
//         main: () => <div> HRD attestation_index page </div>
//     },
// ];


function HeroSidebar() {
  return (
    <>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <ul className='list-none mt-4'>
                        <li className='my-[-15px]'>
                            <Link to="/certificateAttestation">
                                <img src={Certificate_img} alt="CertificateAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg'  />
                            </Link>
                        </li> 
                        <li className='my-[-15px]'>
                            <Link to="/embassyAttestation">
                                <img src={embassy_img} alt="embassy_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/meaAttestation">
                                <img src={MEA_img} alt="MEA_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/mofaAttestation">
                                <img src={Mofa_img} alt="Mofa_Attestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/hrdAttestation">
                                <img src={HRD_img} alt="HrdAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/apostilleAttestation">
                                <img src={Apostille_img} alt="AppostilleAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li>
                            <Link to="/homeAttestation">
                                <img src={HOME_img} alt="HomeAttestation_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/dataflow">
                                <img src={Dataflow_img} alt="dataflow_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/examCoaching">
                                <img src={Exam_img} alt="examCoaching_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/acls_bls">
                                <img src={ACLS_BLS_img} alt="ACLS_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/pcc">
                                <img src={PCC_img} alt="pcc_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/migration">
                                <img src={migration_img} alt="migration_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                        <li className='my-[-15px]'>
                            <Link to="/verification_otherServices">
                                <img src={otherServices_img} alt="otherServices_link" 
                                className='border border-solid border-transparent rounded-xl hover:border-green-500 hover:shadow-lg' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default HeroSidebar
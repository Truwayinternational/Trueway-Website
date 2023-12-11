import React from 'react'


import Certificate from '../../Assets/services/Certificate.webp'
import embassy from '../../Assets/services/Embassy.webp'
import MEA_MOFA from '../../Assets/services/MOFA-&-MEA.webp'
import HRD from '../../Assets/services/HRD-Attestation.webp'
import apostille from '../../Assets/services/Apostille.webp'
import Home from '../../Assets/services/Home-attestation.webp'
import DataFlow from '../../Assets/services/Data-Flow.webp'
import ExamCoaching from '../../Assets/services/Exam-Coaching.webp'
import ACLS from '../../Assets/services/ACLS.webp'
import PCC from '../../Assets/services/Police-Clearance.webp'
import Migration from '../../Assets/services/Migration_1.webp'
import verification from '../../Assets/services/Verification.webp'



const ServicesCardData = [

    {
        id:1,
        img: Certificate,
        title:"Certificate Attestation",
        titleLink:"/certificate-attestation",
        description:"Certificate attestation is the process of verifying the authenticity of a document when a person heads out to another nation."
    },
    {
        id:2,
        img: embassy,
        title:"Embassy Attestation",
        titleLink:"/embassy-attestation",
        description:"Embassy attestation is the process of legalizing official documents in order to be accepted in a foreign country."
    },
    {
        id:3,
        img: MEA_MOFA,
        title:" MEA & MOFA Attestation",
        titleLink:"/mea-attestation",
        description:"MEA is the process of getting documents authenticated of a country.The MOFA is the Ministry of Foreign Affairs of the destination country verifies and certifies the authenticity of the documents."
    },
    {
        id:5,
        img: HRD,
        title:"HRD Attestation",
        titleLink:"/hrd-attestation",
        description:"The purpose of HRD attestation is to verify the authenticity of educational documents issued by educational institutions"
    },
    {
        id:6,
        img: apostille,
        title:"Apostille Attestation",
        titleLink:"/apostille-attestation",
        description:"Apostille attestation verifies public document authenticity for international use, like birth certificates or diplomas, ensuring foreign recognition."
    },
    {
        id:7,
        img: Home,
        title:"Home Attestation",
        titleLink:"/home-attestation",
        description:"It is the attestation of non-educational documents from home countries where the documents are issued"
    },
    {
        id:8,
        img: DataFlow,
        title:"Dataflow verification",
        titleLink:"/dataflow",
        description:"Data flow verification is a process that ensures the correct and secure data movement within a system or application."
    },
    {
        id:9,
        img: ExamCoaching,
        title:"Exam coaching",
        titleLink:"/exam-coaching",
        description:"Expert coaching for OET, IELTS, and Prometric exams."
    },
    {
        id:10,
        img: ACLS,
        title:"ACLS/BLS",
        titleLink:"/acls-bls",
        description:"Providing life-saving ACLS and BLS medical training and support as a valuable and responsive service"
    },
    {
        id:11,
        img: PCC,
        title:"Police clearance certificate",
        titleLink:"/pcc",
        description:"PCC is an official document by police, confirming an individual's criminal record status within a jurisdiction."
    },
    {
        id:12,
        img: Migration,
        title:"Migration",
        titleLink:"/migration",
        description:"Migration services guide and support individuals moving abroad, ensuring a smooth immigration process for countries like New Zealand, the UK, Ireland, Australia, and Canada."
    },
    {
        id:13,
        img: verification,
        title:"Goodstanding & Council Verification",
        titleLink:"/goodstanding-council-verification",
        description:"Validation & additional offerings for authentication and assistance, including immigration, documentation, and consultation services."
    }
]


// clicking to nav link and scroll to top section
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior for a smoother transition
    });
}

function ServicesSection(props) {

    
  return (
    <div className='w-full lg:my-20 mt-20'>
        <div className='max-w-[1240px] mx-auto place-content-center'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold font-HeadingFont'>Our  <b className='text-green-500'>  Services</b></h2>
            </div>
            <div className='mx-auto max-w-5xl px-6 lg:px-8 pt-20 '>
                <div className='hidden lg:grid grid-wrap grid-cols-1 lg:gap-x-8 lg:gap-y-10  text-center lg:grid-cols-4  grid-flow-row' >
                    {ServicesCardData.map((card, index) => (
                        <div key={index} className="mx-auto flex max-w-sm flex-col gap-y-4 bg-zinc-100 border border-green-500 px-3 py-3 rounded-3xl hover:shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] h-[135px] py-2 mx-auto " src={card.img}alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href={card.titleLink} >
                                    <h6 className="text-md font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold font-HeadingFont  hover:text-gray-700" onClick={scrollToTop}>
                                    {card.title} </h6> 
                                </a>
                                <p className=" font-light tracking-tighter text-zinc-500  md:text-sm"> {card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection;

import React, {useState} from 'react'
import AboutWeb from '../../Assets/AboutUs/AboutWeb.png'
import AboutMob from '../../Assets/mobile banners/Mob About Us.webp'


function AboutBanner() {

    const [readMore, setReadMore] = useState(false);

  const extraContent = <div>
          <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pt-1'>
          The prime services we provide include Embassy Attestations, HRD Verifications, Apostille Attestation, Dataflow Verifications, Prometric Coaching and Bookings, College, Hospital, and Council Verifications for NMBI, CGFNS, NNAS, NCLEX, etc., Registration Renewals, Good Standing Certificates, Nursing Council, Pharmacy Council, Paramedical Council, Dental Council, and Medical Council service guidance, Admission Guidances, BLS and ACLS, PCC from GCC countries, Saudi Nursing Council Verification, Oman Nursing Council Verification, WES Verification, and others.
          </p>
        </div>

const linkName = readMore ? '' : 'Read More...'


  return (

    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={AboutWeb} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={AboutMob} alt="dataFlow Mobile banner" />
            </div>
            <div className='w-full px-5 my-10'>
                <p className='text-md md:text-lg  text-justify text-gray-500 font-poppins lg:p-0'>
                    <b>Trueway International</b> has been an ISO 901-certified agency in India since 2008. Trueway International is affirmed by ministries and government offices in India and abroad. We are the leading organisation in India that provides attestation, authentication, and verification services all over India. The way we do our work paves the way to the hearts of many, and that leads to many satisfied customers.
                    <br/>
                    We have a fully dedicated team of staff who are available round the clock. Fast and secure services in a pocket-friendly manner are our highest priority. We provide tracking services so that you can track the progress of the procedure and the documents’ current status. Therefore, if you hand over your work to us, we will take care of that without giving you any tension in a hassle-free way.
                </p>
                {/* readMore add in paragraph */}
                <div className='md:hidden flex'>
                    <h6  onClick={()=> {setReadMore (!readMore)}}>
                    <p className='text-green-500 text-lg cursor-pointer font-poppins pt-1'>{linkName}</p>
                    </h6>
                    { readMore && extraContent }
                  </div>
                  <p className='hidden md:flex text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                  The prime services we provide include Embassy Attestations, HRD Verifications, Apostille Attestation, Dataflow Verifications, Prometric Coaching and Bookings, College, Hospital, and Council Verifications for NMBI, CGFNS, NNAS, NCLEX, etc., Registration Renewals, Good Standing Certificates, Nursing Council, Pharmacy Council, Paramedical Council, Dental Council, and Medical Council service guidance, Admission Guidances, BLS and ACLS, PCC from GCC countries, Saudi Nursing Council Verification, Oman Nursing Council Verification, WES Verification, and others.
                </p>
            </div>  
        </div>
    </>
  )
}

export default AboutBanner
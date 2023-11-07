import React, {useState} from 'react'


import KuwaitPccBanner from '../../../../Assets/pcc/PCC for Kuwait.png'
import MObKuwaitPCC from '../../../../Assets/mobile banners/MOB PCC - Kuwait.png'

function KuwaitPccHero() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pt-2 '>
            The PCC will be issued by the Kuwaiti government to residents who have lived in Kuwait for at least two years. The police authority won't provide them with Kuwait PCC if they participate in any illegal demonstrations. The main purpose of this declaration is to vouch for his lack of any prior arrests, convictions, legal proceedings, etc. A police freedom certificate essentially serves as a travel authorization to other foreign countries.
            <br/>
            Choosing the best agency to handle all the necessary processes and paperwork for the Police Clearance Certificate (PCC) from Kuwait will greatly simplify and expedite the entire application process. Trueway International ensures a smoother and more efficient experience for the applicant.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...'

  return (

    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={KuwaitPccBanner} alt="kuwait pcc banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MObKuwaitPCC} alt="kuwait pcc banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Trusted<b className='text-green-500'>  Police Clearance Certificate(PCC) </b>  <br/> Services in india from Kuwait
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                As a long-standing Arab nation, Kuwait will assist its citizens by providing verification when they relocate to another country. This document is known as a Kuwait PCC, or police clearance certificate. The Kuwaiti authorities will use this documentation  to prove that the person has no illegal bases in Kuwait. To obtain a legitimate Kuwait PCC, Kuwaitis need to contact the relevant police specialist. However, the police will conduct a review of the candidate's prior activities.
                </p>
                {/* readMore add in paragraph */}
                    <div className='md:hidden flex'>
                        <p  onClick={()=> {setReadMore (!readMore)}}>
                        <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                        </p>
                        { readMore && extraContent }
                    </div>
                    <p className='hidden md:flex md:text-lg lg:text-center text-justify text-gray-500 font-poppins mb-10 lg:pt-1'>
                    The PCC will be issued by the Kuwaiti government to residents who have lived in Kuwait for at least two years. The police authority won't provide them with Kuwait PCC if they participate in any illegal demonstrations. The main purpose of this declaration is to vouch for his lack of any prior arrests, convictions, legal proceedings, etc. A police freedom certificate essentially serves as a travel authorization to other foreign countries.
                    <br/>
                    Choosing the best agency to handle all the necessary processes and paperwork for the Police Clearance Certificate (PCC) from Kuwait will greatly simplify and expedite the entire application process. Trueway International ensures a smoother and more efficient experience for the applicant.
                    </p>
            </div>    
      </div>
    </>
  )
}

export default KuwaitPccHero
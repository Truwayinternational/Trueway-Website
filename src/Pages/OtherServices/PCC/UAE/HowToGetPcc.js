import React, {useState} from 'react'
import Avatar_3 from '../../../../Assets/certificate attestation/avatar_3.png'


function HowToGetPcc() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-start text-gray-500 font-poppins mb-10 pr-3 pt-2 '>
            In general, you will need to give a copy of your passport, a valid UAE residency visa, and a completed police clearance certificate application form. Attestation and notarization: You may be required to notarize and attest your documents, depending on your home country and the needs of the Dubai authorities.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...'

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3"/>
                <h3 className='md:text-5xl lg:pl-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>How to get a <br/> <b className='text-green-500'> PCC in the UAE ?</b></h3>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-150px] py-4'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    Both UAE citizens and foreigners living there frequently need a police clearance certificate for a variety of reasons. You can be eager to pursue admission to a foreign university or you might want to apply for immigration as your goal. A few companies in the UAE, in addition to international institutions and immigration offices, also want this endorsement. The Police Clearance Certificate is becoming a vital document since employers must confirm that the employee has never run afoul of the law
                    </p>

                    {/* readMore add in paragraph */}
                    <div className='md:hidden flex'>
                        <p  onClick={()=> {setReadMore (!readMore)}}>
                        <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                        </p>
                        { readMore && extraContent }
                    </div>
                    <p className='hidden md:flex text-md lg:text-lg md:text-xl text-start text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
                    In general, you will need to give a copy of your passport, a valid UAE residency visa, and a completed police clearance certificate application form. Attestation and notarization: You may be required to notarize and attest your documents, depending on your home country and the needs of the Dubai authorities.
                    </p>
                </div>    
            </div>
        </div>
    </>
  )
}

export default HowToGetPcc
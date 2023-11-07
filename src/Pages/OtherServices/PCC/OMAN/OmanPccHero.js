import React from 'react'


import OmanPccBanner from '../../../../Assets/pcc/PCC for Oman.png'
import MobOmanPcc from '../../../../Assets/mobile banners/MOB PCC - Oman.png'

function OmanPccHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={OmanPccBanner} alt="Oman pcc banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobOmanPcc} alt="Oman saudi pcc banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Fast, Secure and Reliable <br/><b className='text-green-500'>  Police Clearance Certificate(PCC) </b>  <br/> Services in India from Oman
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                For people who have lived in Oman for more than a year, a Police Clearance Certificate (PCC), also known as an Oman PCC, is of utmost importance. This important document is issued by a national designated authority, usually a police department specialist. Its main goal is to determine whether a person has committed any crimes that could hurt not just other people but also the state or the country as a whole. Also, they will check a person’s history and previous behaviour. It's crucial to remember that anyone who has broken any Omani laws or rules is unable to get an Oman PCC. To protect the nation from illegal activity and potential threats is the primary goal of the Police Clearance Certificate.
                </p>
            </div>    
      </div>
    </>
  )
}

export default OmanPccHero
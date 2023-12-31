import React from 'react'

import dentalCouncil from '../../../Assets/goodstanding/dentalcouncil.webp'
import pharmacyCouncil from '../../../Assets/goodstanding/pharmacyCouncil.webp'
import paramedicalCouncil from '../../../Assets/goodstanding/paramedicalCouncil.webp'
import TCMC from '../../../Assets/goodstanding/TCMC.webp'

function OtherCouncil() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>

            {/*  other councils images */}
            <div className=' w-7/8 grid md:grid-cols-4 grid-cols-2 mx-auto my-5 md:gap-6 gap-2 py-5 px-5 '>

                <div className='flex w-full'>
                    <a href='/kerala-dental-council'>
                    <img className='cursor-pointer w-[300px] lg:rounded-[32px] lg:hover:shadow-xl' src={dentalCouncil} alt="dental council" />
                    </a>
                </div>

                <div className='flex w-full'>
                    <a href='/kerala-paramedical-council'>
                        <img className='cursor-pointer lg:rounded-[32px] lg:hover:shadow-xl w-[300px]' src={paramedicalCouncil} alt="paramedical council" />
                    </a>
                </div>

                <div className='flex w-full'>
                    <a href='/kerala-pharmacy-council'>
                        <img className='cursor-pointer lg:rounded-[32px] lg:hover:shadow-xl w-[300px]' src={pharmacyCouncil} alt="pharmacy council" />
                    </a>
                </div>

                <div className='flex w-full'>
                    <a href='/travancore-cochin-medical-council'>
                        <img className='cursor-pointer lg:rounded-[32px] lg:hover:shadow-xl w-[300px]' src={TCMC} alt="TCMC For doctors" />
                    </a>
                </div>
            </div> 
        </div>
    </>
  )
}

export default OtherCouncil
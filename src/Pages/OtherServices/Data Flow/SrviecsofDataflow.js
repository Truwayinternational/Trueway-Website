import React from 'react'

import uae from '../../../Assets/dataflow/uae.png'
import ksa from '../../../Assets/dataflow/soudi.png'
import oman from '../../../Assets/dataflow/oman.png'
import bahrain from '../../../Assets/dataflow/bahrain.png'
import qatar from '../../../Assets/dataflow/qatar.png'
import kuwait from '../../../Assets/dataflow/kuwait.png'

import ServicesDataflowMob from './ServicesDataflowMob'



function SrviecsofDataflow() {

  return (
    
    <div className=' w-full mt-20'>
        <div className='max-w-[1240px] mx-auto place-content-center'>
            <div className='text-center'>
                <h2 className='md:text-5xl text-3xl font-bold font-HeadingFont pb-10'>We Provide <br/> <b className='text-green-500'> Dataflow Services For </b> </h2>
            </div>
            <div className='hidden lg:grid grid-cols-4 mx-10 my-5 gap-5'>
                {/* card 1 MOH SERVICE */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                     <img className='px-3 w-[150px] mx-auto' src={uae} alt="uae_logo" />
                     <a href="/df_moh">
                        <h1 className='font-HeadingFont lg:text-3xl text-xl font-bold text-center pb-4 '>
                            MOH
                        </h1>
                     </a>
                </div>

                {/* card 2 SAUDI SERVICE */}
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                     <img className='px-3 w-[150px] mx-auto' src={ksa} alt="ksa_logo" />
                     <a href="/df_saudiArabia">
                        <h1 className='font-HeadingFont text-3xl font-bold text-center pb-4 '>
                            Saudi Arabia
                        </h1>
                     </a>
                </div>
                {/* card 3 oman SERVICE */}
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={oman} alt="oman_logo" />
                     <a href="/df_oman">
                        <h1 className='font-HeadingFont text-3xl font-bold text-center pb-4 '>
                            Oman
                        </h1>
                     </a>
                </div>
                {/* card 4 bahrain SERVICE */}
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={bahrain} alt="bahrain_logo" />
                     <a href="/df_bahrain">
                        <h1 className='font-HeadingFont text-3xl font-bold text-center pb-4'>
                            Bahrain
                        </h1>
                     </a>
                </div>

                {/* card 5 DHA SERVICE */}
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={uae} alt="DHA_logo" />
                     <a href="/df_dha">
                        <h1 className='font-HeadingFont text-3xl font-bold text-center pb-4'>
                            DHA
                        </h1>
                     </a>
                </div>

                {/* card 6 QATAR SERVICE */}
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={qatar} alt="QATAR_logo" />
                     <a href="/df_qatar">
                        <h1 className='font-HeadingFont text-3xl font-bold text-center pb-4'>
                            QATAR
                        </h1>
                     </a>
                </div>

                {/* card 7 KUWAIT SERVICE */}
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={kuwait} alt="kuwait_logo" />
                     <a href="/df_kuwait">
                        <h1 className='font-HeadingFont text-3xl font-bold text-center pb-4'>
                            KUWAIT
                        </h1>
                     </a>
                </div>
                {/* card  HAAD SERVICE */}
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={uae} alt="kuwait_logo" />
                     <a href="/df_haad">
                        <h1 className='font-HeadingFont text-3xl font-bold text-center pb-4'>
                            HAAD
                        </h1>
                     </a>
                </div>
            </div>

            {/*SCREEN MOBOILE & TAB VIEW IN CARDS */}
            <ServicesDataflowMob/>
        </div>
    </div>
  )
}

export default SrviecsofDataflow
import React from 'react'


import qatarembassy from '../../../Assets/embassy attestation/QATAR Embassy.webp'
import kuwaitembassy from '../../../Assets/embassy attestation/KUWAIT Embassy.webp'
import ueaembassy from '../../../Assets/embassy attestation/UAE Embassy.webp'
import malaysiaembassy from '../../../Assets/embassy attestation/MALAYSIA Embassy.webp'
import bahrainembassy from '../../../Assets/embassy attestation/BAHRAIN Embassy.webp'
import WeProvideAttestationMob from './WeProvideAttestationMob'

function WeProvideAttestaionFor() {
  return (
    <div className=' w-full mt-20'>
        <div className='max-w-[1240px] mx-auto place-content-center'>
            <div className='text-center px-2'>
                <h2 className='md:text-5xl text-3xl font-bold font-HeadingFont pb-10'>We Provide <br/> <b className='text-green-500'> Embassy Attestation For </b> </h2>
            </div>
            <div className='hidden lg:grid grid-cols-3 mx-10 my-5 gap-12'>
                {/* card 1 qatar embassy */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4 '>
                     <img className='px-3 w-[200px] mx-auto' src={qatarembassy} alt="qatarembassy" />
                     <a href="/qatar-embassy">
                        <p className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            QATAR EMBASSY
                        </p>
                     </a>
                </div>

                {/* card 2 kuwait embassy */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                     <img className='px-3 w-[200px] mx-auto' src={kuwaitembassy} alt="kuwaitembassy" />
                     <a href="/kuwait-embassy">
                        <p className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            KUWAIT EMBASSY 
                        </p>
                     </a>
                </div>
                {/* card 3 bahrain embassy */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                     <img className='px-3 w-[200px] mx-auto' src={bahrainembassy} alt="bahrainembassy" />
                     <a href="/bahrain-embassy">
                        <p className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            BAHRAIN EMBASSY  
                        </p>
                     </a>
                </div>
                {/* card 4 Malasia attestation */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4 ml-52'>
                     <img className='px-3 w-[200px] mx-auto' src={malaysiaembassy} alt="malaysiaembassy" />
                     <a href="/malaysia-embassy">
                        <p className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            MALAYSIA EMBASSY  
                        </p>
                     </a>
                </div>

                {/* card 5 uae attestation */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4 ml-52'>
                     <img className='px-3 w-[200px] mx-auto' src={ueaembassy} alt="uaeembassy" />
                     <a href="/uae-embassy">
                        <p className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            UAE EMBASSY  
                        </p>
                     </a>
                </div>

                
            </div>

            {/*SCREEN MOBOILE & TAB VIEW IN CARDS */}
            <WeProvideAttestationMob/>
        </div>
    </div>
  )
}

export default WeProvideAttestaionFor
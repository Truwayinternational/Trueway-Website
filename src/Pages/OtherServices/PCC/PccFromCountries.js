import React from 'react'

// added countries logs 
import PccUae from '../../../Assets/pcc/PCC UAE.png'
import PccSaudi from '../../../Assets/pcc/PCC Saudi.png'
import PccQatar from '../../../Assets/pcc/PCC Qatar.png'
import PccOman from '../../../Assets/pcc/PCC Oman.png'
import PccKuwait from '../../../Assets/pcc/PCC Kuwait.png'


// responsive card slider added here
import PccFromCountriesMob from './PccFromCountriesMob'


function PccFromCountries() {
  return (
    <>
        <div className=' w-full my-20'>
        <div className='max-w-[1240px] mx-auto place-content-center'>
            <div className='text-center px-2'>
                <h2 className='md:text-5xl text-3xl font-bold font-HeadingFont pb-10'>Get PCC from<br/> <b className='text-green-500'> GCC countries swiftly </b> </h2>
            </div>
            <div className='hidden lg:grid grid-cols-3 mx-10 my-5 gap-12'>
                {/* card 1 UAE PCC */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4 '>
                     <img className='px-3 w-[200px] mx-auto' src={PccUae} alt="pcc UAE" />
                     <a href="/pcc_uae">
                        <h1 className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            PCC UAE
                        </h1>
                     </a>
                </div>

                {/* card 2 PCC SAUDI */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                     <img className='px-3 w-[200px] mx-auto' src={PccSaudi} alt="PCC SAUDI ARABIA" />
                     <a href="/pcc_ksa">
                        <h1 className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            PCC SAUDI 
                        </h1>
                     </a>
                </div>
                {/* card 3 PCC QATAR */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                     <img className='px-3 w-[200px] mx-auto' src={PccQatar} alt="PCC QATAR" />
                     <a href="/pcc_qatar">
                        <h1 className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            PCC QATAR  
                        </h1>
                     </a>
                </div>
                {/* card 4 PCC OMAN */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4 ml-52'>
                     <img className='px-3 w-[200px] mx-auto' src={PccOman} alt="PCC OMAN" />
                     <a href="/pcc_oman">
                        <h1 className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            PCC OMAN  
                        </h1>
                     </a>
                </div>

                {/* card 5 PCC KUWAIT */}
                <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4 ml-52'>
                     <img className='px-3 w-[200px] mx-auto' src={PccKuwait} alt="PCC KUWAIT" />
                     <a href="/pcc_kuwait">
                        <h1 className='font-HeadingFont lg:text-2xl font-bold text-center pb-4 '>
                            PCC KUWAIT  
                        </h1>
                     </a>
                </div>

                
            </div>

            {/*SCREEN MOBOILE & TAB VIEW IN CARDS slider */}
            <PccFromCountriesMob/>
        </div>
    </div>
    </>
  )
}

export default PccFromCountries
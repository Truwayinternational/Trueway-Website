import React from 'react'
import Avatar_4 from '../../../Assets/embassy attestation/avatar 4.webp'

function BestCgfns() {

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='hidden md:flex h-full lg:ml-6 py-4 md:-mt-16 lg:-mt-5 md:w-[26%] lg:w-[22%]'  src={Avatar_4} alt="avatar 4"/>
                <div className='md:flex md:flex-col md:pl-3'>
                    <div className='flex md:flex-col'>
                    <img className='md:hidden grid  w-[100px]  mt-[-30px]'src={Avatar_4} alt="Avatar_4 "/>
                    <h3 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>Best <b className='text-green-500'>CGFNS Council Verification Service</b> in kerala</h3>
                    </div>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    Our team is experienced in handling verification processes from multiple nursing councils, ensuring accuracy and compliance. 
                    </p>
                </div>
            </div>
        </div>

        {/* Provided countries list added here like grids */}
        <div className='w-full h-full flex justify-between mb-10'>
            <div className="w-full">
                <div className='grid grid-cols-3 max-w-3xl px-4 gap-3 content-center mx-auto py-4 mb-4'>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href="/cgfns-kerala-council-verification" className='font-HeadingFont text-md md:text-xl font-semibold text-center py-auto'>
                            Kerala
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href="/cgfns-tamilnadu-council-verification" className='font-HeadingFont text-md md:text-xl font-semibold text-center'>
                            Tamil Nadu
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-maharashtra-council-verification' className='font-HeadingFont text-sm md:text-xl font-semibold text-center '>
                            Maharashtra
                        </a>

                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-karnataka-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center '>
                            Karnataka
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-punjab-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center'>
                            Punjab 
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-delhi-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center '>
                            Delhi
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer p-3  md:p-5'>
                        <a href='/cgfns-telangana-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center py-auto'>
                            Telangana
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-gujarat-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center'>
                        Gujarat
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-oman-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center'>
                        Oman
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-andhrapradesh-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center '>
                            Andhra Pradesh
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-madhyapradesh-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center '>
                            Madhya Pradesh
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-3  md:p-5'>
                        <a href='/cgfns-saudiarabia-council-verification' className='font-HeadingFont text-md md:text-xl font-semibold text-center '>
                            Saudi Arabia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BestCgfns
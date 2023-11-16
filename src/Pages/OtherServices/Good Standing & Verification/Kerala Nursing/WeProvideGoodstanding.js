import React from 'react'

import Avatar_4 from '../../../../Assets/embassy attestation/avatar 4.png'

function WeProvideGoodstanding() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='hidden md:flex h-full lg:ml-6 py-4 md:-mt-16 lg:-mt-5 md:w-[26%] lg:w-[22%]'  src={Avatar_4} alt="avatar 4" />
                <div className='md:flex md:flex-col md:pl-3'>
                    <div className='flex md:flex-col'>
                    <img className='md:hidden grid  w-[100px]  mt-[-30px]'src={Avatar_4} alt="Avatar_4 "/>
                    <h2 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'><b className='text-green-500'>We Provide Good Standing </b> for these Countries</h2>
                    </div>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    Trueway provides good standing certificates mainly for two countries, which are GCC countries and European countries. Mentioned below are the countries we provide good standing certificates.
                    </p>
                </div>
            </div>
        </div>

        {/* Provided countries list added here like grids */}
        <div className='w-full h-full flex justify-between mb-10'>
            <div className="w-full">
                <h6 className='text-2xl md:text-3xl py-2 text-green-500 font-bold font-HeadingFont text-center'>
                    GCC Countries 
                </h6>

                {/* gcc countries */}
                <div className='grid grid-cols-2 max-w-lg px-4 pt-10 gap-3 content-center mx-auto'>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center py-auto'>
                        BAHRAIN
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        KUWAIT
                        </h3>
                    </div>
                </div>

                <div className='grid grid-cols-3 max-w-3xl px-4 gap-3 content-center mx-auto py-4 mb-4'>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center py-auto'>
                             DHA
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center'>
                            HAAD
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center'>
                            MOH
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        QATAR
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        OMAN
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        SAUDI
                        </h3>
                    </div>
                </div>

                {/* European countries */}
                <h6 className='text-2xl md:text-3xl py-3 text-green-500 font-bold font-HeadingFont text-center'>
                    European Countries
                </h6>

                <div className='grid grid-cols-2 max-w-xl px-4 pt-10 gap-3 content-center mx-auto'>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center py-auto'>
                        NMBI <br/>(IRELAND)
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        ANMAC <br/>(AUSTRALIA)
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        MALDIVES
                        </h3>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        MALTA
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeProvideGoodstanding
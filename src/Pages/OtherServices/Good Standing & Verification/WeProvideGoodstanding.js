import React from 'react'

function WeProvideGoodstanding() {
  return (
    <>
        <div className='w-full h-full flex justify-between mb-5'>
            <div className="max-w-[1240px] m-auto place-content-center">
                <div className='flex justify-center items-center w-full px-2 py-4 max-w-2xl'>
                    <h3 className='text-3xl md:text-5xl tracking-normal font-bold text-center font-HeadingFont text-black'><b className='text-green-500 font-bold'>We provide Good standing</b> for these countries
                    </h3>
                </div>
                <h6 className='text-2xl md:text-3xl py-2 text-green-500 font-bold font-HeadingFont text-center'>
                    GCC Countries 
                </h6>


                    {/* countries show like grids */}

                <div className='grid grid-cols-2 max-w-md px-4 pt-10 gap-3 content-center mx-auto'>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center py-auto'>
                        BAHRAIN
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        KUWAIT
                        </h6>
                    </div>
                </div>


                <div className='grid grid-cols-3 max-w-3xl px-4 gap-3 content-center mx-auto py-4 mb-4'>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center py-auto'>
                             DHA
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center'>
                            HAAD
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center'>
                            MOH
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        QATAR
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        OMAN
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        SAUDI
                        </h6>
                    </div>
                </div>

                <h6 className='text-2xl md:text-3xl py-3 text-green-500 font-bold font-HeadingFont text-center'>
                    European Countries
                </h6>
                <div className='grid grid-cols-2 max-w-xl px-4 pt-10 gap-3 content-center mx-auto'>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center py-auto'>
                        NMBI <br/>(IRELAND)
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        ANMAC <br/>(AUSTRALIA)
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        MALDIVES
                        </h6>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-2xl hover:bg-green-500 hover:text-white cursor-pointer  p-5'>
                        <h6 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                        MALTA
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeProvideGoodstanding
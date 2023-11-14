import React, {useState} from 'react'

import NursingCouncilImage from '../../../Assets/goodstanding/Nursing Council_.png'

function NursingCouncilCards() {

    const [showGrid, setShowGrid] = useState(false)

  return (
    <>
        <div className='hidden md:flex max-w-[1240px] mx-auto place-content-center my-10'>
            <div className='grid mx-10 lg:mx-16 bg-white border border-gray-300 rounded-3xl xl:w-3/4 w-full shadow-lg'>
                <div className='flex justify-center mx-auto my-5'>
                    <img className='py-5 px-3' src={NursingCouncilImage} alt="Nursing council" />
                    <h6 className='text-2xl font-HeadingFont font-semibold my-auto pt-12 px-3'>Nursing Council</h6>
                </div>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-2xl w-fit mx-auto mb-5'
                onClick={ ()=> setShowGrid (!showGrid) }>
                    {!showGrid ? `View All`: `Close All`}
                </button>

                {/* show and hide content on click button */}
                { showGrid && 
                <div className='grid grid-cols-3 my-10 mx-10 gap-6'>
                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/kerala-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Kerala <br/> Nursing Council
                        </h3>
                     </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/tamilnadu-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Tamil Nadu <br/> Nursing Council
                        </h3>
                        </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/andhrapredesh-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Andhra Pradesh <br/> Nursing Council
                        </h3>
                     </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/karnataka-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Karnataka <br/> Nursing Council
                        </h3>
                     </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/maharashtra-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Maharashtra <br/> Nursing Council
                        </h3>
                     </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/delhi-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Delhi <br/> Nursing Council
                        </h3>
                     </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/telangana-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Telangana <br/> Nursing Council
                        </h3>
                     </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/madhyapradesh-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Madhya Pradesh <br/> Nursing Council
                        </h3>
                     </a>
                    </div>

                    <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                        <a href="/saudiarabia-nursing-council">
                        <h3 className='font-HeadingFont lg:text-2xl font-semibold text-center '>
                            Saudi Arabia <br/> Nursing Council
                        </h3>
                     </a>
                    </div>
                </div>
                }
            </div>
        </div>
    </>
  )
}

export default NursingCouncilCards
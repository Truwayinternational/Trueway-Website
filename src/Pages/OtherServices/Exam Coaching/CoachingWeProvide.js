import React from 'react'
import CoachingWeProvideMob from './CoachingWeProvideMob'

function CoachingWeProvide() {
  return (
    <>
        <div className=' w-full my-10 lg:mt-20'>
            <div className='max-w-[1240px] mx-auto place-content-center'>
                <div className='text-center px-2'>
                    <h2 className='md:text-5xl text-3xl font-bold font-HeadingFont pb-10 px-10'>Coaching <b className='text-green-500'> we provide </b> are</h2>
                </div>

                <div className='hidden w-2/3  lg:grid grid-cols-3 mx-auto my-5 gap-10'>

                <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-16'>
                    <a href="/oet">
                        <h3 className='font-HeadingFont lg:text-2xl font-bold text-center '>
                            OET
                        </h3>
                     </a>
                </div>


                <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer py-16'>
                    <a href="/ielts">
                        <h3 className='font-HeadingFont lg:text-2xl font-bold text-center '>
                            IELTS  
                        </h3>
                    </a>
                </div>

                <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer py-16'>
                    <a href="/prometaic">
                        <h3 className='font-HeadingFont lg:text-2xl font-bold text-center '>
                            PROMETRICS  
                        </h3>
                    </a>
                </div>
            </div>

            {/*SCREEN MOBOILE & TAB VIEW IN CARDS slider */}
            <CoachingWeProvideMob/>
        </div>
        </div>
    </>
  )
}

export default CoachingWeProvide
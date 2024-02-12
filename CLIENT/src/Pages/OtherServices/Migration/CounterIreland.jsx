import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CounterIreland() {
  const [countOn, setCountOn]= useState(false)
  return (
    <>
    <ScrollTrigger onEnter={()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
        <div className='max-w-3xl mx-auto place-content-center my-10'>
            <div className='grid grid-cols-2 mx-auto md:gap-20 gap-5 lg:px-20 px-5'>
                <div className='bg-zinc-100 border border-t-4 border-t-green-500 shadow-xl p-5 rounded-xl'>
                    <p className='md:text-6xl text-4xl text-center text-green-500 font-bold '>
                        {countOn && <CountUp 
                            start={0} 
                            end={30} 
                            duration={3} 
                            delay={0}
                        />}+
                    </p>
                    <p className='md:text-3xl text-lg font-semibold text-center font-HeadingFont mt-5'>
                        Migration
                    </p> 
                </div>
                <div className='bg-zinc-100 border border-t-4 border-t-green-500 shadow-xl p-5 rounded-xl'>
                <p className='md:text-6xl text-4xl text-center text-green-500 font-bold '>
                {countOn && <CountUp 
                            start={0} 
                            end={25} 
                            duration={3} 
                            delay={0}
                        />}+
                    </p>
                    <p className='md:text-3xl text-lg font-semibold text-center font-HeadingFont mt-5'>
                        Happy Clients
                    </p> 
                </div>
            </div>
        </div>
    </ScrollTrigger>
    </>
  )
}

export default CounterIreland
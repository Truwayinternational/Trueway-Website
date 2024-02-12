import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import iso from  '../../Assets/ISO/isocertified.webp'
import thumb from  '../../Assets/ISO/thumb.webp'
import document from  '../../Assets/ISO/Document.webp'
import Projects from  '../../Assets/ISO/folders.webp'


function ISO() {
  
  const [countOn, setCountOn]= useState(false)

  return (
    <ScrollTrigger onEnter={()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
      <div className="bg-green-500 py-16 sm:px-8 ">
        <div className="m-auto max-w-5xl px-3 lg:px-8">
          <dl className="grid  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white p-4 rounded-3xl shadow-3xl ">
                <img src={iso} alt="iso_icons" className='order-first w-[150px] h-[150px] py-2'/>
                <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl py-2">ISO Certified Company </dd>
              </div>
              <div className="m-auto flex max-w-xs flex-col gap-y-4 bg-white p-4 rounded-3xl shadow-2xl ">
                <img src={thumb} alt="iso_icons" className='order-first w-[150px] h-[150px]'/>
                <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl">Happy Clients </dd> 
                <dt className="text-2xl font-bold text-black">
                  {countOn &&  <CountUp start={0} end={9500} duration={3} delay={0} />}+
                </dt>
              </div>
              <div className="m-auto flex max-w-xs flex-col gap-y-4 bg-white p-4 rounded-3xl shadow-2xl ">
                <img src={document} alt="iso_icons" className='order-first w-[150px] h-[150px]'/>
                <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl">Document Attested </dd>
                <dt className="text-2xl font-bold text-black">
                  {countOn &&  <CountUp start={0} end={10000} duration={3} delay={0} />}+
                </dt>
              </div>
              <div className="m-auto flex max-w-xs flex-col gap-y-4 bg-white p-4 rounded-3xl shadow-2xl ">
                <img src={Projects} alt="iso_icons" className='order-first w-[150px] h-[150px]'/>
                <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl">Ongoing Projects</dd>
                <dt className="text-2xl font-bold text-black">
                  {countOn &&  <CountUp start={0} end={8000} duration={3} delay={0} />}+
                </dt>
              </div>
          </dl>
        </div>
      </div>
    </ScrollTrigger>
  )
}
export default ISO;





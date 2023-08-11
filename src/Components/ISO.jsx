import React from 'react'


import iso from  '../Assets/ISO/isocertified.png'
import thumb from  '../Assets/ISO/thumb.png'
import document from  '../Assets/ISO/Document.png'
import Projects from  '../Assets/ISO/folders.png'


function ISO() {
  
    return (
    <div className="bg-green-500 py-16 sm:px-8 ">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <dl className="grid  grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white p-6 rounded-3xl shadow-2xl ">
              <img src={iso} alt="iso_icons" className='order-first w-[150px] h-[150px] py-2'/>
              <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl py-2">ISO Certified Company </dd>
              {/* <dt className="text-2xl text-center font-bold text-black"></dt> */}
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white p-6 rounded-3xl shadow-2xl ">
              <img src={thumb} alt="iso_icons" className='order-first w-[150px] h-[150px]'/>
              <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl">Happy Clients </dd>
              <dt className="text-2xl font-bold text-black"> 2500+</dt>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white p-6 rounded-3xl shadow-2xl ">
              <img src={document} alt="iso_icons" className='order-first w-[150px] h-[150px]'/>
              <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl">Document Attested </dd>
              <dt className="text-2xl font-bold text-black"> 3000+</dt>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white p-6 rounded-3xl shadow-2xl ">
              <img src={Projects} alt="iso_icons" className='order-first w-[150px] h-[150px]'/>
              <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl">Ongoing Projects</dd>
              <dt className="text-2xl font-bold text-black"> 1200+</dt>
            </div>
        </dl>
      </div>
    </div>
  )
}
export default ISO





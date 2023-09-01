import React from 'react'
import avatar from '../../Assets/avatar.png'
import {FaQuoteLeft} from 'react-icons/fa'

function FromClients() {
  return (
    <div>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
            <div className="max-w-[1240px] my-20 m-auto">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4 md:pl-16'>
                    <h2 className='text-3xl md:text-4xl tracking-wide font-bold text-center'> Know From <span className='text-green-500 font-bold'> Our Clients  </span> </h2>
                </div>
                <div className='md:flex  p-5 '>
                    <div className='h-full text-center m-5 p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl '>
                        <img className='h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 items-center justify-center' src={avatar} alt="avatar_icon" />
                        <FaQuoteLeft className='block w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>Friendly handling and they complete the works with in the time frame. Thanks for your support to finish my paper works.</p>
                        <hr className='inline-flex h-1 w-14 rounded bg-green-400 mt-4 mb-2 '></hr>
                        <h2 className='title-font font-medium text-sm tracking-wider '>Rupa Soman </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>

                    <div className='h-full text-center m-5 p-5  bg-zinc-100 hover:bg-green-100 rounded-2xl '>
                        <img className='h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 items-center justify-center' src={avatar} alt="avatar_icon" />
                        <FaQuoteLeft className='block w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>Excellent service. Special thanks to Ms. Suhana and Mr Aneesh for your guidance and support.</p>
                        <hr className='inline-flex h-1 w-14 rounded bg-green-400 mt-4 mb-2 '></hr>
                        <h2 className='title-font font-medium text-sm tracking-wider '>Renjitha Raju </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>

                    <div className='h-full text-center m-5 p-5 bg-zinc-100 hover:bg-green-100 rounded-2xl '>
                        <img className='h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 items-center justify-center' src={avatar} alt="avatar_icon" />
                        <FaQuoteLeft className='block w-5 h-5 text-green-500 '/>
                        <p className='leading-relaxed text-zinc-500'>I am grateful for your excellent service specially Ms suhana. I strongly recommending those who need thier overseas processing, they will update you.</p>
                        <hr className='inline-flex h-1 w-14 rounded bg-green-400 mt-4 mb-2 '></hr>
                        <h2 className='title-font font-medium text-sm tracking-wider '>Chaithra Chaithraod </h2>
                        <p className='text-gray-500'> Customer </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FromClients
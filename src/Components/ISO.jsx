import React from 'react'

import iso from  '../Assets/ISO/isocertified.png'

const stats = [
    { id: 0, imgUrl:"../Assets/ISO/isocertified.png", name:'ISO Certified Company'},
    { id: 1, imgUrl:{iso}, name: 'Happy Clients', value: '2500+'},
    { id: 2, imgUrl:"", name: 'Document Attested', value: '3000+' },
    { id: 3, imgUrl:"", name: 'Ongoing Projects', value: '1200+' },
]

function ISO() {

    
    return (
        <div className="bg-green-500 py-16 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <dl className="grid  grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white p-6 rounded-3xl shadow-2xl ">
              <img src={stat.imgUrl} alt="iso_icons" className='order-first w-[150px] h-[150px]'/>
              <dd className="text-md font-semibold tracking-tight  text-gray-500 md:text-1xl"> {stat.name}</dd>
              <dt className="text-2xl font-bold text-black">{stat.value}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
export default ISO






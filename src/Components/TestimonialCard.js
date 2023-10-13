import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


import avatar from '../Assets/avatar.png'
import {FaQuoteLeft} from 'react-icons/fa'


const TestimonialData = [
    {
        id:1,
        img:avatar,
        quote: "I personally appreciate Ms Shimna for her communication skills and service which makes the customer well satisfied. My attestation processing was much faster than imagined and I'm so much grateful to this institute as well as the staffing coordination.",
        name:"JAFER",
        relation:"Customer"

    },
    {
        id:2,
        img:avatar,
        quote: "Friendly handling and they complete the works with in the time frame. Thanks for your support to finish my paper works.",
        name:"RUPA SOMAN",
        relation:"Customer"

    },
    {
        id:3,
        img:avatar,
        quote: "Excellent service. Special thanks to Ms. Suhana and Mr Aneesh for your guidance and support.",
        name:" REANJITHA",
        relation:"Customer"

    },
    {
        id:4,
        img:avatar,
        quote: "I am grateful for your excellent service specially Ms suhana. I strongly recommending those who need thier overseas processing, they will update you.",
        name:"CHAITHRA",
        relation:"Customer"

    },
    {
        id:5,
        img:avatar,
        quote: "I sincerely appreciate on Trueway international for their excellent services. I personally appreciate Ms Shimna for her excellent services and communications for me. My all process was smooth and much faster than I expected and I'm so much thankful to this institute.",
        name:"SREERAG ",
        relation:"Customer"

    },
    {
        id:6,
        img:avatar,
        quote: "It was a really good experience on collaborating with Trueway international for the attestation process. Ms. Mary Jemi helped me for the registration, tracking and document submission for the process. Mary coordinated so professionally,efficiently and politely for the assignment.",
        name:"SANJAY MS",
        relation:"Customer"

    },

]


function TestimonialCard() {


  return (
    <div >
     <Swiper
          style={{
              "--swiper-pagination-color": "#43b54b",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": ".3",
              "--swiper-pagination-bullet-size": "5px",
              "--swiper-pagination-bullet-width": "1px",
              "--swiper-pagination-bullet-horizontal-gap": "2px"
            }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
      }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        { TestimonialData.map((Data, Index) => (
          <SwiperSlide key={Index}>
            <div className='flex flex-col justify-center items-center mt-10 mb-14 mx-10 max-w-[1280px]'>
                  <div key={Index} className='bg-green-100 max-w-2xl md:p-10 p-4 rounded-3xl'>
                    <img className='block h-28 w-28 object-cover mx-auto my-3'  src={Data.img}  alt='avatar_img'/>
                    <FaQuoteLeft className=' text-4xl text-green-500 my-3'/>
                    <p className='leading-relaxed text-zinc-500 my-3'>
                      { Data.quote }
                    </p>
                    <hr className='h-1 w-24 rounded bg-green-400 mx-auto my-2 '/>
                    <h2 className='font-bold  text-sm tracking-wider text-center my-3'> {Data.name} </h2>
                    <p className='text-gray-400 text-center my-3'> {Data.relation} </p>
                  </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialCard


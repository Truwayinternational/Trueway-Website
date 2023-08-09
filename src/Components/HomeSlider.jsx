import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

import slider1 from '../Assets/trueway welcome.png'
import slider2 from '../Assets/Migration.png'
import slider3 from '../Assets/Exam Coaching.png'
import slider4 from '../Assets/Abrod.png'

import {IoLogoWhatsapp} from 'react-icons/io'

function HomeSlider() {
  return (
    <div>
    <Swiper spaceBetween={50} slidesPerView={1} >
      <SwiperSlide>
        <div className="image relative">
          <img src={slider1} alt="" />
          <div className="title_content absolute top-[20%] left-[6rem] space-y-5">
            <h3 className='text-[30px]'> Hello From </h3>
            <h2 className='text-[40px] f-[700]'><b> Trueway International </b></h2>
            <p className='text-[14px] w-[40%] justify-center text-gray-600'>
              Trueway International is an ISO-assured confirmation organisation providing UAE Attestation Services in Trivandrum and is affirmed by Ministries and government offices in India and abroad. Main services include Embassy Attestation, MEA, MOFA, HRD, Home, Apostille Attestation, etc.
            </p>
            <button className='flex  rounded-lg p-3 px-4  bg-transparent border-solid border-2 border-green-600'>
             <IoLogoWhatsapp className='text-green-700 text-2xl px-[1px]  hover:text-white'/> Reach out to us to know more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
          <img src={slider2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
          <img src={slider3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img">
          <img src={slider4} alt="" />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

export default HomeSlider
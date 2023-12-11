 import React from 'react'
 import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
 
import { Autoplay} from 'swiper/modules';


import slider1 from '../Assets/Why Trueway/grp1.webp'
import slider2 from '../Assets/Why Trueway/grp2.webp'
import slider3 from '../Assets/Why Trueway/grp3.webp'
import slider4 from '../Assets/Why Trueway/grp4.webp'
import slider5 from '../Assets/Why Trueway/grp5.webp'
import slider6 from '../Assets/Why Trueway/grp6.webp'
import slider7 from '../Assets/Why Trueway/grp7.webp'
import slider8 from '../Assets/Why Trueway/grp8.webp'
import slider9 from '../Assets/Why Trueway/grp9.webp'
import slider10 from '../Assets/Why Trueway/grp10.webp'
import slider11 from '../Assets/Why Trueway/grp11.webp'
import slider12 from '../Assets/Why Trueway/grp12.webp'
import slider13 from '../Assets/Why Trueway/grp13.webp'
import slider14 from '../Assets/Why Trueway/grp14.webp'
import slider15 from '../Assets/Why Trueway/grp15.webp'
import slider16 from '../Assets/Why Trueway/grp16.webp'


function WhyTruewaycards() {
    
    
  return (
        <div className="mx-auto px-10 md:px-20 my-10  max-w-[1240px]">
            <Swiper 
                className="w-full h-full mb-20"
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                '0': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '280': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '480': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                '720': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                '1240': {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                }}
                modules={[ Autoplay]}

            >
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider1} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider2} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider3} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider4} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider5} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider6} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider7} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider8} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider9} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider10} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider11} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider12} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider13} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider14} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider15} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img className='block w-full h-full object-cover cursor-pointer ' src={slider16} alt="services" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default WhyTruewaycards;
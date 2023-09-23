 import React from 'react'
 import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
 
import { Autoplay} from 'swiper/modules';


import slider1 from '../Assets/Why Trueway/grp1.png'
import slider2 from '../Assets/Why Trueway/grp2.png'
import slider3 from '../Assets/Why Trueway/grp3.png'
import slider4 from '../Assets/Why Trueway/grp4.png'
import slider5 from '../Assets/Why Trueway/grp5.png'
import slider6 from '../Assets/Why Trueway/grp6.png'
import slider7 from '../Assets/Why Trueway/grp7.png'
import slider8 from '../Assets/Why Trueway/grp8.png'
import slider9 from '../Assets/Why Trueway/grp9.png'
import slider10 from '../Assets/Why Trueway/grp10.png'
import slider11 from '../Assets/Why Trueway/grp11.png'
import slider12 from '../Assets/Why Trueway/grp12.png'
import slider13 from '../Assets/Why Trueway/grp13.png'
import slider14 from '../Assets/Why Trueway/grp14.png'
import slider15 from '../Assets/Why Trueway/grp15.png'
import slider16 from '../Assets/Why Trueway/grp16.png'


function WhyTruewaycards() {
    
    
  return (
        <div className="mx-auto px-10 md:px-20 my-10 max-w-[1240px]">
            <Swiper 
                className="w-full h-full"
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                '@0.00': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                '@1.50': {
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
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

function CoachingWeProvideMob() {
  return (
    <>
        <div className="lg:hidden flex mx-auto px-10  max-w-[1240px]">
    <Swiper 
        className="w-full h-full "
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        breakpoints={{
        '250': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '480': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '1020': {
          slidesPerView: 3,
          spaceBetween: 10,
        }
        }}
        modules={[ Autoplay]}>

        <SwiperSlide>
            <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-16'>
                    <a href="/oet">
                        <h3 className='font-HeadingFont lg:text-2xl font-bold text-center '>
                            OET
                        </h3>
                     </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer py-16'>
                    <a href="/ielts">
                        <h3 className='font-HeadingFont lg:text-2xl font-bold text-center '>
                            IELTS  
                        </h3>
                    </a>
                </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='grid w-full  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer py-16'>
                    <a href="/prometaic">
                        <h3 className='font-HeadingFont lg:text-2xl font-bold text-center '>
                            PROMETRICS  
                        </h3>
                    </a>
                </div>
        </SwiperSlide>

    </Swiper>
    </div>
    </>
  )
}

export default CoachingWeProvideMob
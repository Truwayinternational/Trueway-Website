import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

// added countries logs 
import PccUae from '../../../Assets/pcc/PCC UAE.webp'
import PccSaudi from '../../../Assets/pcc/PCC Saudi.webp'
import PccQatar from '../../../Assets/pcc/PCC Qatar.webp'
import PccOman from '../../../Assets/pcc/PCC Oman.webp'
import PccKuwait from '../../../Assets/pcc/PCC Kuwait.webp'



function PccFromCountriesMob() {
  return (
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
            <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                <img className='px-3 w-[150px] mx-auto' src={PccUae} alt="PCC UAE" />
                <a href="/pcc-uae">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                    PCC UAE
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                <img className='px-3 w-[150px] mx-auto' src={PccSaudi} alt="PCC SAUDI" />
                <a href="/pcc-saudiArabia">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                        PCC SAUDI
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                <img className='px-3 w-[150px] mx-auto' src={PccQatar} alt="PCC QATAR" />
                <a href="/pcc-qatar">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                    PCC QATAR 
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                <img className='px-3 w-[150px] mx-auto' src={PccOman} alt="PCC OMAN" />
                <a href="/pcc-oman">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                        PCC OMAN 
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
            <img className='px-3 w-[150px] mx-auto' src={PccKuwait} alt="PCC KUWAIT" />
             <a href="/pcc-kuwait">
                <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4'>
                    PCC KUWAIT
                </h1>
             </a>
        </div>
        </SwiperSlide>

    </Swiper>
    </div>
  )
}

export default PccFromCountriesMob
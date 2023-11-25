import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

import qatarembassy from '../../../Assets/embassy attestation/QATAR Embassy.webp'
import kuwaitembassy from '../../../Assets/embassy attestation/KUWAIT Embassy.webp'
import ueaembassy from '../../../Assets/embassy attestation/UAE Embassy.webp'
import malaysiaembassy from '../../../Assets/embassy attestation/MALAYSIA Embassy.webp'
import bahrainembassy from '../../../Assets/embassy attestation/BAHRAIN Embassy.webp'

function WeProvideAttestationMob() {

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
                <img className='px-3 w-[150px] mx-auto' src={qatarembassy} alt="qatarembassy" />
                <a href="/qatar-embassy">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                    QATAR EMBASSY
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                <img className='px-3 w-[150px] mx-auto' src={kuwaitembassy} alt="kuwaitembassy" />
                <a href="/kuwait-embassy">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                        KUWAIT EMBASSY
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                <img className='px-3 w-[150px] mx-auto' src={bahrainembassy} alt="bahrainembassy" />
                <a href="/bahrain-embassy">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                    BAHRAIN EMBASSY 
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                <img className='px-3 w-[150px] mx-auto' src={malaysiaembassy} alt="malaysiaembassy" />
                <a href="/malaysia-embassy">
                    <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4 '>
                        MALAYSIA EMBASSY 
                    </h1>
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
            <img className='px-3 w-[150px] mx-auto' src={ueaembassy} alt="uaeembassy" />
             <a href="/uae-embassy">
                <h1 className='font-HeadingFont md:text-lg text-md font-bold text-center pb-4'>
                    UAE EMBASSY
                </h1>
             </a>
        </div>
        </SwiperSlide>

    </Swiper>
    </div>
  )
}

export default WeProvideAttestationMob
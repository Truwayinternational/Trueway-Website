import React from 'react'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import in countries images
import uae_img from '../../../Assets/embassy attestation/Mob uae.png'
import qatar_img from '../../../Assets/embassy attestation/Mob Qatar .png'
import oman_img from '../../../Assets/embassy attestation/Mob Oman .png'
import kuwait_img from '../../../Assets/embassy attestation/Mob Kuwait .png'
import bahrain_img from '../../../Assets/embassy attestation/Mob Bahrain .png'
import malaysia_img from '../../../Assets/embassy attestation/Mob Malaysia .png'

//  react icon for 
import {BiSolidChevronRightCircle} from 'react-icons/bi'


function PopularContreisCardMob() {
  return (
    <>
        <div className='md:hidden h-full w-full '>
            <Swiper
            style={{
                "--swiper-pagination-color": "#43b54b",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": ".3",
                "--swiper-pagination-bullet-size": "3px",
                "--swiper-pagination-bullet-margin-top": "20px",
                "--swiper-pagination-bullet-width": "1px",
                "--swiper-pagination-bullet-horizontal-gap": "3px"
              }}
                className="w-full h-full"
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                dynamicBullets: true,
                clickable: true,
                }}
                breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }}}
                modules={[Pagination]}
            >
                {/* uae embassy attestation */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={uae_img} alt="Services_image" />
                            <hr />
                            <div className="text-center py-2 my-3">
                                <h5 className="flex text-xl font-semibold text-green-500 font-HeadingFont pl-4  sm:ml-40">
                                <span> <BiSolidChevronRightCircle 
                                className='text-green-500 mt-[-8px]'/> </span>
                                 UAE Embassy Attestation</h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">If you want to migrate to the UAE for any purposes then UAE Embassy Attestation is required. Embassy attestation is mandatory for everything from education to starting a new business.</p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* qatar embassy attestation */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={qatar_img} alt="Services_image" />
                            <hr />
                            <div className="text-center py-2 my-3">
                                <h5 className="flex text-xl font-semibold text-green-500 font-HeadingFont pl-4  sm:ml-40">
                                <span> <BiSolidChevronRightCircle 
                                className='text-green-500 mt-[-8px]'/> </span>
                                 Qatar Embassy Attestation</h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">If Qatar is your dream place to settle then Qatar Embassy Attestation is important since the authorities need to check the authenticity of documents.</p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* Oman embassy attestation */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={oman_img} alt="Services_image" />
                            <hr />
                            <div className="text-center py-2 my-3">
                                <h5 className="flex text-xl font-semibold text-green-500 font-HeadingFont pl-4  sm:ml-40">
                                <span> <BiSolidChevronRightCircle 
                                className='text-green-500 mt-[-8px]'/> </span>
                                 Oman Embassy Attestation</h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">Oman Embassy Attestation is not needed to get a work permit, get a family visa or continue studies in Oman. This embassy attestation is not essential for documents. </p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* kuwait embassy attestation */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={kuwait_img} alt="Services_image" />
                            <hr />
                        <div className="text-center py-2 my-3">
                            <h5 className="flex text-xl font-semibold text-green-500 font-HeadingFont pl-4  sm:ml-40">
                            <span> <BiSolidChevronRightCircle 
                            className='text-green-500 mt-[-8px]'/> </span>
                            Kuwait Embassy Attestation</h5>
                            <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                            To verify the authenticity of documents to start employment or education Kuwait Embassy Attestation is highly needed. </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Bahrain embassy attestation */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={bahrain_img} alt="Services_image" />
                            <hr />
                        <div className="text-center py-2 my-3">
                            <h5 className="flex text-xl font-semibold text-green-500 font-HeadingFont pl-4  sm:ml-40">
                            <span> <BiSolidChevronRightCircle 
                            className='text-green-500 mt-[-8px]'/> </span>
                            Bahrain embassy attestation</h5>
                            <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                            To get a Bahrain visa for any purpose, Bahrain embassy attestation is significant. All the papers you submit should be checked by the Bahrain embassy for migration. </p>
                        </div>
                    </div>
                </SwiperSlide>

                 {/* Malaysia embassy attestation */}
                 <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={malaysia_img} alt="Services_image" />
                            <hr />
                        <div className="text-center py-2 my-3 ">
                            <h5 className="flex text-xl font-semibold text-green-500 font-HeadingFont sm:ml-40">
                            <span> <BiSolidChevronRightCircle 
                            className='text-green-500 mt-[-8px]'/> </span>
                            Malaysia embassy attestation</h5>
                            <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                            Before getting a visa to Malaysia you have to prove the authenticity of your documents then only you can apply for a job, higher studies or a resident visa.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default PopularContreisCardMob
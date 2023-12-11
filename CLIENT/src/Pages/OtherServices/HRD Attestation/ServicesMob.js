import React from 'react'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import states images 
import KA from '../../../Assets/HRD Attestation/karnatakaMob.webp'
import TN from '../../../Assets/HRD Attestation/tamilnaduMob.webp'
import maharashtra from '../../../Assets/HRD Attestation/MaharashtraMob.webp'
import andhra from '../../../Assets/HRD Attestation/andhraMob.webp'
import telengana from '../../../Assets/HRD Attestation/TelenganaMob.webp'
import delhi from '../../../Assets/HRD Attestation/Delhi Mob.webp'
import MP from '../../../Assets/HRD Attestation/Madhya PredheshMob.webp'

//  react icon for 
import {BiSolidChevronRightCircle} from 'react-icons/bi'


function ServicesMob() {
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
                {/* Karnataka */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={KA} alt="Services_image" />
                            <hr />
                            <div className="text-center py-2 my-3">
                                <h5 className="flex justify-center text-2xl font-semibold text-green-500 font-HeadingFont   ">
                                <p> <BiSolidChevronRightCircle 
                                className='text-green-500 mx-2 mt-1'/></p>
                                Karnataka </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">Bangalore HRD attestation is compulsory for those who completed their studies in Karnataka.</p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* Tamil Nadu */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={TN} alt="Services_image" />
                            <hr />
                            <div className="text-center py-2 my-3">
                                <h5 className="flex justify-center text-2xl font-semibold text-green-500 font-HeadingFont ">
                                <b> <BiSolidChevronRightCircle 
                                className='text-green-500 mx-2 mt-1'/> </b>
                                 Tamil Nadu </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">If you finished your education in Tamil Nadu, then you definitely should do Tamil Nadu HRD attestation.</p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* Maharashtra */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={maharashtra} alt="Services_image" />
                            <hr />
                            <div className="text-center py-2 my-3">
                                <h5 className="flex justify-center text-2xl font-semibold text-green-500 font-HeadingFont ">
                                <b> <BiSolidChevronRightCircle 
                                className='text-green-500  mx-2 mt-1'/> </b>
                                Maharashtra </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4"> Maharashtra HRD attestation is mandatory for all who have completed their studies in Maharashtra.</p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* Andhra predhesh */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={andhra} alt="Services_image" />
                            <hr />
                        <div className="text-center py-2 my-3">
                            <h5 className="flex justify-center text-2xl font-semibold text-green-500 font-HeadingFont">
                            <b> <BiSolidChevronRightCircle 
                            className='text-green-500  mx-2 mt-1'/> </b>
                            Andhra Pradesh </h5>
                            <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                            You have to complete an HRD attestation from Andhra Pradesh if you finished your education in Andhra Pradesh.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Telangana */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={telengana} alt="Services_image" />
                            <hr />
                        <div className="text-center py-2 my-3">
                            <h5 className="flex justify-center text-2xl font-semibold text-green-500 font-HeadingFont">
                            <b> <BiSolidChevronRightCircle 
                            className='text-green-500  mx-2 mt-1'/> </b>
                            Telangana </h5>
                            <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                            If you are a Telangana student who is planning to move abroad, then HRD attestation from Telangana is mandatory.</p>
                        </div>
                    </div>
                </SwiperSlide>

                 {/* Delhi */}
                 <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={delhi} alt="Services_image" />
                            <hr />
                        <div className="text-center py-2 my-3 ">
                            <h5 className="flex justify-center text-2xl font-semibold text-green-500 font-HeadingFont">
                            <b> <BiSolidChevronRightCircle 
                            className='text-green-500 mx-2 mt-1'/> </b>
                            Delhi </h5>
                            <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                            Delhi HRD Attestation is prime and significant for those who graduated from Delhi Educational Institutions.</p>
                        </div>
                    </div>
                </SwiperSlide>

                 {/* Madhya Pradesh*/}
                 <SwiperSlide>
                    <div className="flex flex-col justify-center items-center m-5 p-2  px-3  cursor-pointer">
                        <img className="order-first p-2 block object-cover " src={MP} alt="Services_image" />
                            <hr />
                        <div className="text-center py-2 my-3 ">
                            <h5 className="flex justify-center text-2xl font-semibold text-green-500 font-HeadingFont">
                            <b> <BiSolidChevronRightCircle 
                            className='text-green-500 mx-2 mt-1'/> </b>
                            Madhya Pradesh </h5>
                            <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                            Madhya Pradesh HRD attestation is one of the procedures you should follow if you completed your education in Madhya Pradesh.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default ServicesMob
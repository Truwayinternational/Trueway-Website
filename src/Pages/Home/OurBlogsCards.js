import React from 'react'
import {SlCalender} from 'react-icons/sl'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function OurBlogsCards() {

    const BlogDatas = [
        {
          id:1,
          date:"02 Jun 2022",
          title:"HRD Attestation - What, Why & How",
          details:"HRD stands for Human Resources Development. While applying for jobs certain documents needed to be attested by the HRD Department of the state. This process is called HRD Attestation. In this article we are looking at some of the mostly asked doubts and questions related to HRD Attestation"
      
        },
        {
          id:2,
          date:"22 Sep 2022",
          title:"College Certificate Verifications",
          details:"No Objection Certificate or NOC Letter Format for Students for obtaining college degree or diploma, for college migration. This certificate is issued as per request of person for his specific need. NOC shows no objection upon the particular person and purpose.This article provides a discussion on NOC. "
        },
        {
          id:3,
          date:"01 Jun 2023",
          title:"Nursing Council KNC",
          details:"Trueway Tours & Travels is one of the foremost companies in India with an array of gratified clients. Being proficient in the line of work, we are proud to declare that we have kept a substantial track record since our start. Our happy customers who had known our dedication and experience in the field and satisfied with the Excellency of our assistance. "
        },
      
        {
          id:4,
          date:"19 Feb 2021",
          title:"Understanding IELTS",
          details:"The biggest mistake candidates make while preparing for IELTS is that they prepare on their language skills alone ignoring the more important aspect, communication. we need to differentiate language from communication. Planning a short talk in English for improving your pronunciation.Exam techniques to help you tackle all types of test questions."
        },
        {
          id:5,
          date:"29 Oct 2021",
          title:"What is Police Clearance Certificate?",
          details:"A police clearance certificate is a confirmation issued by the country of origin, in which a designated police specialist in the country of origin issues a police clearance certificate with their official seal or signature.Getting a PCC is very complicated if you have criminal records in the name of a person."
        },
      ]


  return (

    <>
        <div className='max-w-[1240px] mx-auto place-content-center mb-10'>
                <div className='my-10 '>
                    <h1 className='text-center font-bold text-gray-800 text-3xl md:text-5xl lg:my-[100px] font-HeadingFont'>
                        Read<span className='text-green-500 font-bold '>Our Blogs</span>
                    </h1>
                </div>
                <div className='flex flex-row pb-10 mx-5'>
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
                        className="w-full h-full mb-10 grid grid-cols-3"
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                        }}
                        modules={[Pagination, Autoplay]}
                    >

                        { BlogDatas.map((BlogData, index) => (
                            <SwiperSlide>
                                <div className="mb-16 h-fit py-5  justify-center px-auto m-4 p-3 bg-zinc-100 px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                    <div className='flex   text-green-800 px-4'>
                                        <SlCalender className='mt-3 text-lg'/> <span className='font-bold'>{BlogData.date}</span>
                                    </div>
                                    <div className=" h-full py-2">
                                        <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> {BlogData.title} </h5>
                                        <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-lg">
                                            {BlogData.details}
                                        </p>
                                        <a href="#!" className='pt-8 font-bold text-green-600 hover:text-green-900 px-3 text-center mx-auto'>
                                            Read More..
                                        </a>
                                    </div>
                                </div>
                        </SwiperSlide>
                            )) }
                    </Swiper>
            </div>
        </div>
    </>
  )
}

export default OurBlogsCards
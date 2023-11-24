import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import starRating from '../Assets/googleStar.webp'
import {FaQuoteLeft} from 'react-icons/fa'


const TestimonialData = [
    {
        id:1,
        img:starRating,
        quote: "I personally appreciate Ms Shimna for her communication skills and service which makes the customer well satisfied. My attestation processing was much faster than imagined and I'm so much grateful to this institute as well as the staffing coordination.",
        name:"JAFER",
        relation:"Customer"

    },
    {
        id:2,
        img:starRating,
        quote: "I have completed my Qatar embassy attestation of educational documents with Trueway international. I had such a wonderful experience all along the way of procedure. Thank you Shimna mam for your assistance. Your cordial, systematic and timely arrangements made me so happy.",
        name:"Chandra",
        relation:"Customer"

    },
    {
        id:3,
        img:starRating,
        quote: "I appreciate and happy for the excellent service of Trueway international. I Personally appreciate mrs Lezitha for the good customer service and I got Qatar PCC earlier than expected.Thank you Truway International and mrs Lezitha",
        name:" Santhosh Renuka",
        relation:"Customer"

    },
    {
        id:4,
        img:starRating,
        quote: "I am super happy to found Trueway International for the apostille attestation and translation process of my documents in the study abroad process. Within a short time I have received my certificate and got updated with every steps in the process via WhatsApp.",
        name:"Anna Shaji",
        relation:"Customer"

    },
    {
        id:5,
        img:starRating,
        quote: "I sincerely appreciate on Trueway international for their excellent services. I personally appreciate Ms Shimna for her excellent services and communications for me. My all process was smooth and much faster than I expected and I'm so much thankful to this institute.",
        name:"SREERAG ",
        relation:"Customer"

    },
    {
        id:6,
        img:starRating,
        quote: "It was a really good experience on collaborating with Trueway international for the attestation process. Ms. Mary Jemi helped me for the registration, tracking and document submission for the process. Mary coordinated so professionally,efficiently and politely for the assignment.",
        name:"SANJAY MS",
        relation:"Customer"

    },
    {
      id:7,
      img:starRating,
      quote: "I had a wonderful experience with trueway international. Especially I would like to thank Ms. Lezitha for assisting me to get the relevant documents from the colleges, and being extremely patient, supportive and responsive throughout the process.",
      name:"Binitha KB",
      relation:"Customer"

    },
  {
    id:8,
    img:starRating,
    quote: "A very good experience that I had been through Trueway and especially Shimna .As Shimna Ma'am was  continuously guided in each and every step of process from the start until the end Process. Thank you very much to the entire team of Trueway International and Shimna Ma'am.",
    name:"Radhika Mahendra",
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
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
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
              spaceBetween: 10,
          }
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        { TestimonialData.map((Data, Index) => (
          <SwiperSlide key={Index} className=''>
             <div className="mb-16 h-fit md:h-[400px] py-5 justify-center px-auto m-4 p-3 bg-green-50 px-4 rounded-3xl hover:shadow-lg hover:bg-zinc-100 cursor-pointer">
                <div >
                  <h2 className='font-bold  text-md tracking-wider text-center mt-3'> {Data.name} </h2>
                  <p className='text-gray-400 text-center my-1'> {Data.relation} </p>
                  <hr className='h-1 w-24 rounded bg-green-400 mx-auto mt-2 '/>
                  <img className='block w-24 object-cover mx-auto my-2'  src={Data.img}  alt='star rating'/>
                  <FaQuoteLeft className=' text-4xl text-green-500 mb-3'/>
                  <p className='leading-relaxed text-zinc-500 my-3'>
                    { Data.quote }
                  </p>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialCard

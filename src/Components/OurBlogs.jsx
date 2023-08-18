import React from 'react';

// import HRD from '../Assets/blogs/hrd.png'
// import college_certificate from '../Assets/blogs/certificate-attestation.jpg'
// import nursing from '../Assets/services/ACLS.png'
// import coaching from '../Assets/services/Exam-Coaching.png'

import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import {SlCalender} from 'react-icons/sl'

const BlogData = [
  {
    id:1,
    img:"",
    date:"02 Jun 2022",
    title:"HRD Attestation - What, Why & How",
    details:"HRD stands for Human Resources Development. While applying for jobs certain documents needed to be attested by the HRD Department of the state. This process is called HRD Attestation. In this article we are looking at some of the mostly asked doubts and questions related to HRD Attestation"

  },
  {
    id:2,
    img:"",
    date:"22 Sep 2022",
    title:"College Certificate Verifications",
    details:"No Objection Certificate or NOC Letter Format for Students for obtaining college degree or diploma, for college migration. This certificate is issued as per request of person for his specific need. NOC shows no objection upon the particular person and purpose.This article provides a discussion on NOC. "
  },
  {
    id:3,
    img:"",
    date:"01 Jun 2023",
    title:"Nursing Council KNC",
    details:"Trueway Tours & Travels is one of the foremost companies in India with an array of gratified clients. Being proficient in the line of work, we are proud to declare that we have kept a substantial track record since our start. Our happy customers who had known our dedication and experience in the field and satisfied with the Excellency of our assistance. "
  },

  {
    id:4,
    img: "",
    date:"19 Feb 2021",
    title:"Understanding IELTS",
    details:"The biggest mistake candidates make while preparing for IELTS is that they prepare on their language skills alone ignoring the more important aspect, communication. we need to differentiate language from communication. Planning a short talk in English for improving your pronunciation.Exam techniques to help you tackle all types of test questions."
  },
  {
    id:4,
    img: "",
    date:"29 Oct 2021",
    title:"What is Police Clearance Certificate?",
    details:"A police clearance certificate is a confirmation issued by the country of origin, in which a designated police specialist in the country of origin issues a police clearance certificate with their official seal or signature.Getting a PCC is very complicated if you have criminal records in the name of a person."
  },
]
function OurBlogs(props) {


  const scrollLeft = () =>{
      document.getElementById('blog_card').scrollLeft -= 400
  }

  const scrollRight = () =>{
    document.getElementById('blog_card').scrollLeft += 400
  }

  return (
    <div className='relative'>
      <div className='my-10'>
        <h1 className='text-center font-bold text-gray-800 text-3xl md:text-4xl my-[100px]'>
            Read<span className='text-green-500 font-bold'>Our Blogs</span>
        </h1>
      </div>
      <div className='absolute right-4 md:right-24 top-20'>
        <button onClick={scrollLeft} className='bg-green-500 text-white font-bold p-4 m-2 rounded-full ' ><AiOutlineLeft /></button>
        <button onClick={scrollRight} className='bg-green-500 text-white font-bold p-4 m-2 rounded-full '><AiOutlineRight /></button>
      </div>
      <div id='blog_card' className="carousel scroll-smooth p-4 md:mx-10 flex items-center justify-start overflow-x-auto overflow-y-hidden">
        {BlogData.map((data, index) => (
            <div className="Card m-4 bg-green-100 w-[100%] h-full rounded-lg shadow-lg">
            <div className="top" key={index}>
              <img src={data.img} alt="blog_img" className='w-[400px] h-[300px] object-fill p-3'/>
            </div>
            <hr />
            <div className="bottom flex flex-col justify-center items-start p-3">
              <div className='flex   text-green-800 px-4'>
                <SlCalender className='mt-3 text-lg'/> <span className='font-bold'>{data.date}</span>
              </div>
              <div className="title font-bold my-1 text-xl px-10">{data.title}</div>
              <div className="details font-light my-1 text-justify px-3">{data.details}</div>
              <div className='mb-5 mx-32 mt-3'>
                <a className='text-green-800 font-bold text-lg ' href="#!">Read More </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>  
  )
}

export default OurBlogs


 
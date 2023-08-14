import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import id_1 from '../Assets/serveses_icons/1.png'
import id_2 from '../Assets/serveses_icons/2.png'
import id_3 from '../Assets/serveses_icons/3.png'
import id_4 from '../Assets/serveses_icons/4.png'
import id_5 from '../Assets/serveses_icons/5.png'
import id_6 from '../Assets/serveses_icons/6.png'
import id_7 from '../Assets/serveses_icons/7.png'
import id_8 from '../Assets/serveses_icons/8.png'
import id_9 from '../Assets/serveses_icons/9.png'
import id_10 from '../Assets/serveses_icons/10.png'
import id_11 from '../Assets/serveses_icons/11.png'
import id_12 from '../Assets/serveses_icons/12.png'
import id_13 from '../Assets/serveses_icons/13.png'
import id_14 from '../Assets/serveses_icons/14.png'
import id_15 from '../Assets/serveses_icons/15.png'
import id_16 from '../Assets/serveses_icons/16.png'



const TruewayCard = [
    {
      id:1,
      img:id_1,
      title:`Ministry & Embassy Approved`
    },
    {
      id:2,
      img:id_2,
      title:"15 years of experience & validity"
    },
    {
      id:3,
      img:id_3,
      title:"Most trusted Attestation company"
    },
    {
      id:4,
      img:id_4,
      title:"Attestation in just 7 days"
    },
    {
      id:5,
      img:id_5,
      title:"24*7 Customer Support"
    },
    {
        id:6,
        img:id_6,
        title:"100% Safety for the documents"
    },
    {
      id:7,
      img:id_7,
      title:"Expert & Knowledgeable team"
    },
    {
        id:8,
        img:id_8,
        title:"Online tracking services"
    },
    {
        id:9,
        img:id_9,
        title:"Affordable rate"
    },
    {
        id:10,
        img:id_10,
        title:"Free Consultancy"
    },
    {
        id:11,
        img:id_11,
        title:"Fast Tracking Services"
    },
    {
        id:12,
        img:id_12,
        title:"Branches across India"
    },
    {
        id:13,
        img:id_13,
        title:"Award-winning customer support"
    },
    {
        id:14,
        img:id_14,
        title:"High-quality services"
    },
    {
        id:15,
        img:id_15,
        title:"Services available for PAN India"
    },
    {
        id:16,
        img:id_16,
        title:"Reliable & Hassle-free services"
    }
]  


function WhyTruewayCard() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 2000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 2000, min: 1094 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
    };
    
  return (
        <div className="mx-auto md:px-20 my-10 ">
            <Carousel responsive={responsive}>
                {TruewayCard.map((value, index) => (
                    <div key={index} className="flex flex-col bg-green-100  gap-x-6 h-auto sm:w-52 py-5 rounded-2xl ">
                    <div className=" bg-green-500 w-1/2 rounded-full shadow-md mx-10">
                        <img
                        className="p-5 w-[100px] h-[100px]"
                        src={value.img}
                        alt="services_icons"
                        />
                    </div>
                    <p className="block  px-6  py-4 text-xs font-bold text-center text-black ">
                        {value.title}
                    </p>
                </div>
                ))}
            </Carousel>
        </div>
  )
}

export default WhyTruewayCard
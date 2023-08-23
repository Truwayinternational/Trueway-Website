import React from 'react'
import whiteLogo from '../Assets/Trueway_Wt.png'

// import {FaLocationDot} from 'react-icons/fa6'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube} from 'react-icons/bs'


const footerLinks = [  
    {
        title: "Our Branches",
        links: [
            {
                name: "Trivandrum",
                link:""
            },
            {
                name:"Attingal",
                link:""
            },
            {
                name:"Bangalore",
                link:""
            },
            {
                name:"Cochin",
                link:""
            },
            {
                name:"Chennai",
                link:""
            },
        ]
    },
    {
        title: "Useful Links",
        links: [
            {
                name:"Home",
                link:""
            },
            {
                name:"About us",
                link:""
            },
            {
                name:"Sitemap",
                link:""
            },
            {
                name:"Terms & Conditions",
                link:""
            },
            {
                name:"Refund Policy",
                link:""
            },{
                name:"Privacy Policy",
                link:""
            },
        ]
    },
    {
        title: "Our Services",
        links: [
            {
                name:"Certificate Attestation",
                link:""
            },
            {
                name:"Certificate Apostille",
                link:""
            },
            {
                name:"HRD Attestation",
                link:""
            },
            {
                name:"MOFA Attestation",
                link:""
            },
            {
                name:"Police Clearance Certificate",
                link:""
            },{
                name:"Embassy Attestation",
                link:""
            },
        ]
    }
]



function Footer() {

  return (
    <section className="flex justify-center items-center flex-col py-6 sm:pt-16 bg-green-500">
        <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full '>
            <div className='flex flex-1 flex-col justify-start mr-10 '>
                <img 
                src={whiteLogo} 
                alt="Trueway " 
                className='w-[266px] h-[72px] object-contain'
                />
                <p className='font-poppins font-normal text-white text-[16px] leading-[30.8px] mt-4 max-w-[310px] md:pl-10 px-5 text-justify'>
                    We are the Experts to make your dream migration seamless. The True way to your future can be paid by us. Trust us to help you take the leap towards a rewarding career abroad. 
                </p>
            </div>
            <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0'>
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className='flex flex-col sm:my-0 my-4 min-w-[150px]'>
                        <h4 className='font-md text-[18px] leading-[27px] text-zinc-100 font-bold'>
                            {footerLink.title}
                        </h4>
                        <ul className='list-none mt-4'>
                            {footerLink.links.map((link, index) => (
                                <li key={link.name}
                                className="font-poppins font-normal text-[14px] leading-[24px] text-white hover:text-green-950 cursor-pointer p-2">
                                 {link.name}  
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white'>
            <p className='font-poppins font-normal text-center text-[14px] leading-[27px] text-white px-6'>
             &copy; Copyright 2023 Trueway International. All Rights Reserved 
            </p>
            <div className='flex flex-row md:mt-0 mt-6 px-6 '>
                     <a href="https://www.facebook.com/truewayinternational" className='text-[14px] text-white hover:text-green-900 m-2'>
                        <BsFacebook />
                    </a>
                    <a href="https://wa.link/c3ukjh" className='text-[14px] text-white hover:text-green-900 m-2'>
                        <BsWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/truewayinternational/?hl=en" className='text-[14px] text-white hover:text-green-900 m-2'>
                        <BsInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/trueway-international-tvm/" className='text-[14px] text-white hover:text-green-900 m-2'>
                        <BsLinkedin />
                    </a>
                    <a href="https://www.youtube.com/channel/UCRq22m2bbJ5AONWGQug9FpA" className='text-[14px] text-white hover:text-green-900 m-2'>
                        <BsYoutube />
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTruewayinterna1" className='text-[14px] text-white hover:text-green-900 m-2'>
                        <BsTwitter />
                    </a>
            </div>
        </div>
    </section>
  )
}

export default Footer
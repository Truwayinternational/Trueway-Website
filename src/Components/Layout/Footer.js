import React from 'react'
import whiteLogo from '../../Assets/Trueway_Wt.png'
import FooterAccordian from './FooterAccordian'

import { Link } from 'react-router-dom'

// import {FaLocationDot} from 'react-icons/fa6'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube} from 'react-icons/bs'

// clicking to nav link and scroll to top section
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior for a smoother transition
    });
}


const footerLinks = [  
    {
        title: "Useful Links",
        links: [
            {
                name:"Home",
                link:"/"
            },
            {
                name:"About us",
                link:"/about"
            },
            {
                name:"Sitemap",
                link:"/sitemap"
            },
            {
                name:"Terms & Conditions",
                link:"/terms&conditions"
            },
            {
                name:"Refund Policy",
                link:"/refundpolicy"
            },{
                name:"Privacy Policy",
                link:"/privacypolicy"
            },
        ]
    },
    {
        title: "Our Services",
        links: [
            {
                name:"Certificate Attestation",
                link:"/certificateAttestation"
            },
            {
                name:"Embassy Attestation",
                link:"/embassyAttestation"
            },
            {
                name:"MEA Attestation",
                link:"/meaAttestation"
            },
            {
                name:"MOFA Attestation",
                link:"/mofaAttestation"
            },
            {
                name:"HRD Attestation",
                link:"/hrdAttestation"
            },
            {
                name:"Apostille Attestation",
                link:"/apostilleAttestation"
            },
            {
                name:"Home Attestation",
                link:"/homeAttestation"
            },
            {
                name:"Data Flow Verification",
                link:"/dataflow"
            },
            {
                name:"Exam Coaching",
                link:"/examCoaching"
            },
            {
                name:"ACLS/BLS",
                link:"/acls_bls"
            },
            {
                name:"Police Clearance Certificate",
                link:"/pcc"
            },
            {
                name:"Migration",
                link:"/migration"
            },
            {
                name:"Goodstanding & Council Verification",
                link:"/Council_verification"
            },
        ]
    }
]



function Footer() {

    const OurBranches = [
        {
            place:"Trivandrum",
            location: <a href="https://www.google.com/maps/place/Trueway+international/@8.5682433,76.868242,16z/data=!4m6!3m5!1s0x3b05bb83a7f4081b:0xefc31dbc16018dff!8m2!3d8.5648563!4d76.8757937!16s%2Fg%2F11pdw9prh1?authuser=0&entry=ttu">Logtech Tower, Bypass Junction, Kazhakkoottam, Thiruvananthapuram, Kerala 695582</a>
        },
        {
            place:"Attingal",
            location: <a href="https://www.google.com/maps/place/Adsomia+india+pvt+ltd/@8.6936387,76.8197565,20.43z/data=!4m14!1m7!3m6!1s0x3b05e9a0e100813f:0xffd7aae933928cfc!2sAdsomia+india+pvt+ltd!8m2!3d8.6934554!4d76.8199276!16s%2Fg%2F11sbd0j9fk!3m5!1s0x3b05e9a0e100813f:0xffd7aae933928cfc!8m2!3d8.6934554!4d76.8199276!16s%2Fg%2F11sbd0j9fk?authuser=0&entry=ttu">opp. CSI Road, hsopital, Attingal, Kerala 695101</a> 
        },
        {
            place:"Kochi",
            location: <a href="https://www.google.com/maps/place/Trueway+Attestation/@9.9723527,76.2831195,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0873a7cd8c8ddb:0xd5318173f12c4809!8m2!3d9.9723474!4d76.2856944!16s%2Fg%2F11rr5z000x?authuser=0&entry=ttu">
                G08 Wolfpack work spaces, Iyyattil Ln, near maharajas metro station, jn, Kochi, Kerala 682011
            </a> 
        },
        {
            place:"Chennai",
            location: <a href="#!">Chennai</a>
        },
        {
            place:"Bangalore",
            location: <a href="#!">Bangalore</a>
        }
    ]

  return (
    <section className="flex justify-center items-center flex-col py-6 sm:pt-16 bg-green-600">
        <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full '>
            <div className='flex flex-1 flex-col justify-start mx-auto '>
                <img 
                src={whiteLogo} 
                alt="Trueway " 
                className='w-[266px] h-[72px] object-contain mx-2'
                />
                <p className='font-poppins font-normal text-white text-md  md:text-lg  mt-4  md:pl-10 px-6 md:px-0 text-start'>
                    We are the Experts to make your dream migration seamless. The True way to your future can be paid by us. Trust us to help you take the leap towards a rewarding career abroad. 
                </p>
            </div>
    
            <div className='flex-[2] lg:flex-[3] pl-4 text-start w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0'>
                <div className='flex flex-col sm:my-2 my-4 lg:ml-10 '>
                    <h4 className='lg:text-2xl text-xl text-zinc-100 font-bold px-3'> Our Branches </h4>
                    <div className='list'>
                        {
                            OurBranches.map((item, index) => (
                                <div key={index}>
                                    <FooterAccordian data={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key}  className='flex flex-col sm:my-1 my-4 min-w-[150px] pl-4 md:mx-0'>
                        <h4 className='lg:text-2xl text-xl text-zinc-100 font-bold px-3'>
                            {footerLink.title}
                        </h4>
                        <ul className='list-none mt-4'>
                            {footerLink.links.map((toFooterlink, index) => (
                                <li key={toFooterlink.index}
                                className="font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-green-950 cursor-pointer px-3 py-1">
                                    <Link to={toFooterlink.link} className='hover:text-black hover:font-semibold' onClick={scrollToTop}>
                                    {toFooterlink.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white'>
            <p className='font-poppins font-normal text-center text-[16px] leading-[27px] text-white px-6'>
             &copy; Copyright 2023 Trueway International. All Rights Reserved 
            </p>
            <div className='flex flex-row md:mt-0 mt-6 px-6 '>
                     <a href="https://www.facebook.com/truewayinternational" className='text-[20px] text-white hover:text-green-900 m-2'>
                        <BsFacebook />
                    </a>
                    <a href="https://wa.link/c3ukjh" className='text-[20px] text-white hover:text-green-900 m-2'>
                        <BsWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/truewayinternational/?hl=en" className='text-[20px] text-white hover:text-green-900 m-2'>
                        <BsInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/trueway-international-tvm/" className='text-[20px] text-white hover:text-green-900 m-2'>
                        <BsLinkedin />
                    </a>
                    <a href="https://www.youtube.com/channel/UCRq22m2bbJ5AONWGQug9FpA" className='text-[20px] text-white hover:text-green-900 m-2'>
                        <BsYoutube />
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTruewayinterna1" className='text-[20px] text-white hover:text-green-900 m-2'>
                        <BsTwitter />
                    </a>
            </div>
        </div>
    </section>
  )
}

export default Footer
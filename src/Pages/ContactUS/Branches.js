import React from 'react'


// Location images added here
import Kazhakkoottam from '../../Assets/contactUs/kazhakoottam_web.webp'
import attingal from '../../Assets/contactUs/attingal_web.webp'
import kochi from '../../Assets/contactUs/kochi_web.webp'
import chennai from '../../Assets/contactUs/chennai_web.webp'
import bangalore from '../../Assets/contactUs/Bangalure_web.webp'
import BranchesMob from './BranchesMob'


function Branches() {
  return (
    <>
        <div className='w-full my-20'>
            <div className='max-w-[1240px] mx-auto place-content-center'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold font-HeadingFont'>Our <b className='text-green-500'> Branches</b></h2>
                </div>
                <div className='hidden md:grid grid-cols-3 mx-10 my-14 gap-5'>
                    {/* kazhakkoottam */}
                    <div className='mx-5'>
                        <a href="https://www.google.com/maps/place/Trueway+international/@8.5682433,76.868242,16z/data=!4m6!3m5!1s0x3b05bb83a7f4081b:0xefc31dbc16018dff!8m2!3d8.5648563!4d76.8757937!16s%2Fg%2F11pdw9prh1?authuser=0&entry=ttu" target='_blank' rel="noopener noreferrer">
                            <img src={Kazhakkoottam} alt="kazhakkoottam Location" />
                        </a>
                    </div>
                    {/* attingal location */}
                    <div className='mx-5'>
                        <a href="https://www.google.com/maps/place/Adsomia+india+pvt+ltd/@8.6936387,76.8197565,20.43z/data=!4m14!1m7!3m6!1s0x3b05e9a0e100813f:0xffd7aae933928cfc!2sAdsomia+india+pvt+ltd!8m2!3d8.6934554!4d76.8199276!16s%2Fg%2F11sbd0j9fk!3m5!1s0x3b05e9a0e100813f:0xffd7aae933928cfc!8m2!3d8.6934554!4d76.8199276!16s%2Fg%2F11sbd0j9fk?authuser=0&entry=ttu" target='_blank' rel="noopener noreferrer">
                            <img src={attingal} alt="attingal Location" />
                        </a>
                    </div>
                    {/* kochi location */}
                    <div className='mx-5'>
                        <a href="https://www.google.com/maps/place/Trueway+Attestation/@9.9723527,76.2831195,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0873a7cd8c8ddb:0xd5318173f12c4809!8m2!3d9.9723474!4d76.2856944!16s%2Fg%2F11rr5z000x?authuser=0&entry=ttu" target='_blank' rel="noopener noreferrer">
                            <img src={kochi} alt="kochi Location" />
                        </a>
                    </div>
                </div>
                <div className='hidden md:flex lg:mx-60 mx-40 flex-row  mb-14 gap-5'>
                    {/* bangalore location */}
                    <div className='mx-5'>
                        <a href="https://www.google.com/maps/place/Trueway+international/@12.9772634,77.5763505,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae195748ea8e0f:0x4bea4f115b98dc9b!8m2!3d12.9772634!4d77.5763505!16s%2Fg%2F11p5hvkrgk?entry=ttu" target='_blank' rel="noopener noreferrer">
                            <img src={bangalore} alt="bangalore Location" />
                        </a>
                    </div>
                    {/* chennai location */}
                    <div className='mx-5'>
                        <a href="https://www.google.com/maps/place/Adsomia+India+Pvt+ltd/@13.0613,80.2611,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52671d995dccb1:0x3e422a5d1d2dac8a!8m2!3d13.0613!4d80.2611!16s%2Fg%2F11scpvln6y?entry=ttu" target='_blank' rel="noopener noreferrer">
                            <img src={chennai} alt="chennai Location" />
                        </a>
                    </div>
                </div>
                
                {/* responsive cards */}
                <BranchesMob/>
            </div>
        </div>
    </>
  )
}

export default Branches
import React from 'react'
import avatar_3 from '../../Assets/certificate attestation/avatar_3.webp'
import { BiSolidChevronRightCircle } from 'react-icons/bi'


function KnowProcess() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
            <img className='hidden md:flex h-full lg:ml-6 py-4 md:-mt-14 lg:-mt-1 md:w-[26%] lg:w-[30%]'  src={avatar_3} alt="avatar_3" />
            <div className='md:flex md:flex-col md:pl-3'>
                <div className='flex md:flex-col'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]'src={avatar_3} alt="Avatar_3 "/>
                <h4 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'> Know Our Process </h4>
                </div>
                <ul className="list-none text-green-500 font-semibold text-lg md:text-xl py-5">
                <BiSolidChevronRightCircle />
                <li className="cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4">
                Submit the required documents via mail/ courier or by personally visit our office.
                </li>
                <BiSolidChevronRightCircle />
                <li className="cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4">
                Our expert document procurement team will prepare an application packet and will take it through institutions or Universities.
                </li>
                <BiSolidChevronRightCircle />
                <li className="cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4">
                Make the payment at the counter or online or by bank transfer as soon as possible.
                </li>
                <BiSolidChevronRightCircle />
                <li className="cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4">
                Finally the sealed envelope of the Verification Report will be sent to the WES Center.
                </li>
              </ul>
            </div>
        </div>
        <div className='max-w-2xl mx-auto'>
            <p className="text-md md:text-lg text-gray-500 font-poppins lg:p-0 px-4">
            Feel free to contact us or give us a call to learn more about our process so that we can guide you through the process and the documents required.
            <br/>
            WES verification for the migration to Canada will be easy and smooth with the aid of Trueway. Our expert team will assist you from the initial stage until you board for Canada. You can stay worry-free after you hand over the documents to us. Without giving you much pressure, and within a minimum of days, your process will be completed.
            </p>
            </div>
        </div>
    </>
  )
}

export default KnowProcess
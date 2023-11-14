import React from 'react'

import {BiSolidChevronRightCircle} from 'react-icons/bi'


function SiginificanceOfGoodstandig() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center mt-10 '>
            <div className='flex mx-4  lg:px-16 px-3'>
                <h2 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-normal '> Significance of having <br/><b className='text-green-500'> Good standing and <br/> Verification </b> from council</h2>
            </div>
            <div className='lg:w-full ml-3 lg:pl-[70px] px-4 '>
                <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0  max-w-4xl'>
                    In India, the Apostille practice has lately been privatised by the national government. The Ministry of External Affairs (MEA) is the central organisation in charge of document apostille. Since January 1st, 2019, the MEA has localised the apostille procedure for Branch Secretariats and RPOs in 15 locations. Ahmedabad, Bengaluru, Bhopal, Chennai, Chandigarh, Cochin, New Delhi, Guwahati, Hyderabad, Kolkata, Lucknow, Mumbai, Panaji, Raipur, and Thiruvananthapuram are among the places where the company operates. In general, it starts with the municipal notary where the document was issued, then the state verification, and finally the MEA apostille sticker.
                </p>
                    <ul className='list-none text-green-500 font-semibold text-lg md:text-xl my-5 font-HeadingFont'>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> The current status of registration and licence</li> 
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Identifying details (full name, GMC number)</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Registration details (restricted, suspended, or revoked)</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Registration History</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Relevant details about your fitness practice</li>
                    </ul>
            </div>
        </div>
    </>
  )
}

export default SiginificanceOfGoodstandig
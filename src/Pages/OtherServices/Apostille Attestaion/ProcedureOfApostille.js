import React from 'react'

import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function ProcedureOfApostille() {

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center mt-10 '>
            <div className='flex mx-4  lg:px-16 px-3'>
                <img className='md:hidden grid  w-[100px] ' src={Avatar_3} alt="Avatar_3" />
                <h3 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-normal  '> The procedure for attesting <br/><b className='text-green-500'> Apostille documents </b> is as follows:</h3>
            </div>
            <div className='lg:w-full ml-3 lg:pl-20 px-4 '>
                <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0  max-w-4xl'>
                    In India, the Apostille practice has lately been privatised by the national government. The Ministry of External Affairs (MEA) is the central organisation in charge of document apostille. Since January 1st, 2019, the MEA has localised the apostille procedure for Branch Secretariats and RPOs in 15 locations. Ahmedabad, Bengaluru, Bhopal, Chennai, Chandigarh, Cochin, New Delhi, Guwahati, Hyderabad, Kolkata, Lucknow, Mumbai, Panaji, Raipur, and Thiruvananthapuram are among the places where the company operates. In general, it starts with the municipal notary where the document was issued, then the state verification, and finally the MEA apostille sticker.
                </p>
            </div>

            {/* middle content */}
            <div className='flex '>
                <div className='hidden md:flex h-full lg:pl-20 lg:my-auto pt-10'>
                    <img src={Avatar_3} alt="avatar_3" />
                </div>
                <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 py-5'>
                <p className='md:text-2xl text-xl font-HeadingFont  font-semibold py-3'>The three main types of Apostilles are listed below: </p>
                    <ul className='list-none text-green-500 font-semibold text-lg md:text-xl my-5  ml-3 font-HeadingFont'>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Educational certificate Apostille.</li> 
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Non-educational certificate Apostille.</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Commercial certificate Apostille.</li>
                    </ul>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    In India, the MEA department is in charge of giving the Apostille stamp, which validates the document and is attached to the reverse. Extra confirmation may only be required in particular instances if a document has acquired an Apostille. In the current global atmosphere, any outsider should obtain an apostille before travelling to any country that is a signatory to the Hague Convention.
                    <br/>
                    SDM and Apostille are the two mandatory steps required for this approach. Immigrants can meet the personal and professional needs of the target country by following this method. The fundamental purpose of apostille verification is to preserve the original certificate from illegal endorsements. The attestation approach is used by countries that are not Hague Show members.
                    </p>
                </div>
            </div>
            
            {/* last content */}
            <div className='lg:w-full ml-3 lg:pl-20 px-4 '>
                <p className='md:text-2xl text-xl font-HeadingFont  font-semibold py-3'>Some of the common processes required for an Apostille:
                </p>
                <ul className='inline-flex list-none text-green-500 font-semibold text-lg md:text-xl lg:px-xl mt-3 font-HeadingFont'>
                    <BiSolidChevronRightCircle />
                    <li className='cursor-pointer mt-[-20px] font-HeadingFont md:ml-3 md:mr-20'> SDM </li>
                    <BiSolidChevronRightCircle />
                    <li className='cursor-pointer mt-[-20px] font-HeadingFont md:ml-3 md:mr-20'> MEA </li>
                    <BiSolidChevronRightCircle />
                    <li className='cursor-pointer mt-[-20px] font-HeadingFont md:ml-3 md:mr-10'> Apostille </li>
                </ul>
            </div>
        </div> 
    </>
  )
}

export default ProcedureOfApostille
import React from 'react'

import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'

function ContactforDataflow() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center my-10'>
            <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5'>
                <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                    Contact us to get your Dataflow verification done
                </h6>
                <div className='flex items-center my-3 mx-auto'>
                    <div className='bg-white rounded-full mx-5 p-3'>
                         <a href='tel:+918327626262' target='_blank' rel="noopener noreferrer">
                            <PiPhoneCallFill className='text-green-500 text-5xl w-fit' />
                         </a>
                    </div>
                    <div className='bg-white rounded-full mx-5 p-3'>
                         <a href='https://wa.link/c3ukjh' target='_blank' rel="noopener noreferrer">
                            <IoLogoWhatsapp className='text-green-500 text-5xl w-fit' />
                         </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactforDataflow
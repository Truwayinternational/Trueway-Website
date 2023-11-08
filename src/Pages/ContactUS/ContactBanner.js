import React from 'react'
import contactBanner from '../../Assets/contactUs/Contact Us.png'
import contactMobBanner from '../../Assets/mobile banners/Mob Contact Us.png'

function ContactBanner() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={contactBanner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={contactMobBanner} alt="dataFlow Mobile banner" />
            </div>
        </div>
    </>
  )
}

export default ContactBanner
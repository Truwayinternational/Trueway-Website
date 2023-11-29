import React from 'react';

// services cards import
import WhyTruewaycards from './WhyTruewaycards'

function WhyisTrueway() {
  return (
    <>
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="grid max-w-[1240px] m-auto mt-20 ">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4 md:px-14'>
                    <h5 className='text-3xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-3'> Why Is <b className='text-green-500'>Trueway Better</b> In Attestation Services? </h5>
                    <p className='font-poppins my-5 text-center px-5 md:px-10  font-extralight text-gray-700'>
                    <b >Trueway International </b> is the best of the best in embassy attestation services for migrating people. What makes us No.1 from other certificate attestation consultancies is the fact that there is no inference or third party between our customers and us. Our services are trustworthy, fast, quick, and hassle-free.
                    </p>
                </div>
            </div>
        </div>

      <WhyTruewaycards />
    </>
  )
}

export default WhyisTrueway;
import React from 'react'

import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'
import ProcedureCard from './ProcedureCard'


function ProcedureForMofa() {
  return (
    <div>
        <div className='max-w-[1240px] mx-auto place-content-center my-10 '>
            <div className='flex mx-4  lg:px-16 px-3'>
                <img className='md:hidden grid  w-[100px] ' src={Avatar_3} alt="Avatar_3" />
                <h4 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '> The Procedure for <br/><b className='text-green-500'> MOFA Attestation </b></h4>
            </div>
            <div className='lg:w-full ml-3 lg:md-12 lg:px-20 px-4 '>
                <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0  max-w-2xl'>
                MOFA attestation is done to migrate abroad for any purpose. Commonly, MOFA attestation is done for educational documents, and for other documents, such as commercial and non-educational ones, MOFA is not applicable.
                 <br />
                 <br />
                <b>The main procedures for MOFA attestation for educational documents are:</b>
                </p>
                <h4 className='md:text-2xl text-xl  font-bold'>SDM/HRD + MEA + (Notary) + UAE Embassy Attestation + MOFA </h4>
            </div>
            <ProcedureCard/>
        </div> 
    </div>
  )
}

export default ProcedureForMofa
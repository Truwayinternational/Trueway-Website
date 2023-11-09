import React from 'react'

import Procedure_img from '../../Assets/Procedure_4.png'
import Procedure_sm from '../../Assets/prosedures 2.png'

function Procedure() {
  return (
    <div>
        <div className='w-full h-full flex flex-col justify-between bg-zinc-100'>
            <div className="grid max-w-[1240px] my-10 m-auto">
                <div className='flex flex-col justify-center lg:items-center w-full px-2 py-4'>
                    <h2 className='text-4xl md:text-5xl tracking-wide font-extrabold text-center font-HeadingFont'> Our<span className='text-green-500'>Procedure </span> </h2>
                    <p className='font-poppins my-5 text-center px-3 lg:px-10 md:px-20 font-extralight text-gray-800'>
                    Behind any migration process, there are many processes and paperwork needed. If you are doing this, then you have to spend many days exclusively on it. But if you hand over the work to <b> Trueway </b>, then you can rest with the assurance that your process will be done smoothly and quickly in a trustworthy way. 
                    </p>
                    <img className=' hidden md:flex px-10 py-6' src={Procedure_img} alt="procedure " />
                    <br />
                    <img className='md:hidden px-10 py-6' src={Procedure_sm} alt="procedureContent" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Procedure;
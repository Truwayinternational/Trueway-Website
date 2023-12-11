import React from 'react'
import DifferentCountriesWeb from './DifferentCountriesWeb'
import DifferentCountriesMob from './DifferentCountriesMob'

function DifferentCountries() {
  return (
    <>
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="grid max-w-[1240px] m-auto mt-10 ">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h3 className='text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-3 text-green-500'> Prometric Exam coaching <br/> <p className='text-black'> for different countries </p>
                    </h3>
                </div>

                {/* different countries in  large screen */}
                <DifferentCountriesWeb/>
            </div>
        </div>

        {/* different countries in  mobile screen */}
        <DifferentCountriesMob/>
    </>
  )
}

export default DifferentCountries
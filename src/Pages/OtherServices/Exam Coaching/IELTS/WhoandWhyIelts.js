import React from 'react'


// images added here
import Doctors from '../../../../Assets/examCoaching/Attendcoaching/doctors.png'
import vets from '../../../../Assets/examCoaching/Attendcoaching/vets.png'
import Radiographers from '../../../../Assets/examCoaching/Attendcoaching/radiographers.png'
import Nurses from '../../../../Assets/examCoaching/Attendcoaching/nurses.png'
import occupational from '../../../../Assets/examCoaching/Attendcoaching/occupational.png'
import optometrists from '../../../../Assets/examCoaching/Attendcoaching/optometrists.png'
import dentists from '../../../../Assets/examCoaching/Attendcoaching/dentists.png'
import dietitians from '../../../../Assets/examCoaching/Attendcoaching/dietitians.png'
import physiotherapists from '../../../../Assets/examCoaching/Attendcoaching/physiotherapists.png'
import pharmacists from '../../../../Assets/examCoaching/Attendcoaching/pharmacists.png'
import podiatrists from '../../../../Assets/examCoaching/Attendcoaching/podiatrists.png'


import WhoandWhyIeltsMob from './WhoandWhyIeltsMob'


const WhoandWhyIelts = () => {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Who and Why should <br/><b className='text-green-500'> attend IELTS Coaching? </b>
                </h3>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                IELTS is not only for medical professionals like OET. Those who aspire to a career or higher education abroad can study IELTS.
                </p>
            </div>

            <div className='hidden lg:grid  max-w-2xl grid-cols-5 place-content-center mx-auto  my-10 gap-6 '>
                {/* Doctors/Consultants  */}
                <div>
                    <img className="cursor-pointer"  src={Doctors} alt="Doctors/Consultants"/>
                </div>
                    {/* Nurses */}
                <div>
                    <img className="cursor-pointer" src={Nurses} alt="Nurses"/>
                </div>
                {/* vets */}
                <div>
                    <img className="cursor-pointer" src={vets} alt="vets"/>
                </div>
                    {/* Dentists */}
                <div>
                    <img className="cursor-pointer" src={dentists} alt="Dentists"/>
                </div>
                {/* Physiotherapists */}
                <div className="-ml-6 w-[200px]">
                    <img className="cursor-pointer"  src={physiotherapists} alt="Physiotherapists"/>
                </div>
            </div>

            <div className='hidden lg:grid  max-w-4xl grid-cols-6 place-content-center mx-auto my-10 lg:gap-6 '>
                {/* Optometrists  */}
                <div>
                    <img className="cursor-pointer" src={optometrists} alt="Optometrists"/>
                </div>
                    {/* Pharmacists */}
                <div>
                    <img className="cursor-pointer" src={pharmacists} alt="Pharmacists"/>
                </div>
                {/* Radiographers */}
                <div className="-ml-2 w-[200px]">
                    <img className="cursor-pointer" src={Radiographers} alt="radiographers"/>
                </div>
                    {/* Podiatrists */}
                <div>
                    <img className="cursor-pointer" src={podiatrists} alt="Podiatrists" />
                </div>
                {/* Occupational Therapists */}
                <div className='-ml-2 w-[200px]'>
                    <img className="cursor-pointer" src={occupational} alt="Occupational Therapists" />
                </div>
                {/* Dietitians */}
                <div>
                    <img className="cursor-pointer" src={dietitians} alt="Dietitians" />
                </div>
            </div>

            {/* mobile cards slider added here */}
            <WhoandWhyIeltsMob/>
      </div>
    </>
  )
}

export default WhoandWhyIelts
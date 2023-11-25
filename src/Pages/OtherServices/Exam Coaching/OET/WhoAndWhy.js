import React from 'react'


// images added here
import Doctors from '../../../../Assets/examCoaching/Attendcoaching/doctors.webp'
import Nurses from '../../../../Assets/examCoaching/Attendcoaching/nurses.webp'
import occupational from '../../../../Assets/examCoaching/Attendcoaching/occupational.webp'
import optometrists from '../../../../Assets/examCoaching/Attendcoaching/optometrists.webp'
import dentists from '../../../../Assets/examCoaching/Attendcoaching/dentists.webp'
import dietitians from '../../../../Assets/examCoaching/Attendcoaching/dietitians.webp'
import physiotherapists from '../../../../Assets/examCoaching/Attendcoaching/physiotherapists.webp'
import pharmacists from '../../../../Assets/examCoaching/Attendcoaching/pharmacists.webp'
import podiatrists from '../../../../Assets/examCoaching/Attendcoaching/podiatrists.webp'


import WhoAndWhyCardsMob from './WhoAndWhyCardsMob'


function WhoAndWhy() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Who and Why should <br/><b className='text-green-500'> attend OET Coaching? </b>
                </h3>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                Students who want to earn the best OET grade possible should enrol in our online course. You'll be enrolled in an online course with other speakers of your native tongue. No matter where in the world they are located, the syllabus is perfect for anyone who needs specialised language instruction. Ideal for:
                </p>
            </div>

            <div className='hidden md:grid  max-w-2xl grid-cols-4 place-content-center mx-auto  my-10 gap-6 '>
                {/* Doctors/Consultants  */}
                <div>
                    <img className="cursor-pointer"  src={Doctors} alt="Doctors/Consultants"/>
                </div>
                    {/* Nurses */}
                <div>
                    <img className="cursor-pointer" src={Nurses} alt="Nurses"/>
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

            <div className='hidden md:grid  max-w-4xl grid-cols-5 place-content-center mx-auto md:ml-4  my-10 gap-6'>
                {/* Optometrists  */}
                <div>
                    <img className="cursor-pointer" src={optometrists} alt="Optometrists"/>
                </div>
                    {/* Pharmacists */}
                <div>
                    <img className="cursor-pointer" src={pharmacists} alt="Pharmacists"/>
                </div>
                    {/* Podiatrists */}
                <div>
                    <img className="cursor-pointer" src={podiatrists} alt="Podiatrists" />
                </div>
                {/* Occupational Therapists */}
                <div>
                    <img className="cursor-pointer" src={occupational} alt="Occupational Therapists" />
                </div>
                {/* Dietitians */}
                <div>
                    <img className="cursor-pointer" src={dietitians} alt="Dietitians" />
                </div>
            </div>

            {/* mobile cards slider added here */}
            <WhoAndWhyCardsMob/>
      </div>
    </>
  )
}

export default WhoAndWhy
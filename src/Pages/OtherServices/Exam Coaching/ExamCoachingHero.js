import React, {useState} from 'react'
import examCoachingBanner from '../../../Assets/examCoaching/Exam  Coaching.webp'
import banner_mob from '../../../Assets/mobile banners/Mob Exam  Coaching.webp';

import HeroSidebar from '../HeroSidebar';

function ExamCoachingHero() {

    const [readMore, setReadMore] = useState(false);

  const extraContent = <div>
          <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins pr-3 pt-2'>
          The greatest syllabus is provided by Trueway International to ensure your success. Over 1500 questions are available for practice sessions. Our coaching is mostly exam-focused, and we are committed to your success. With our 100% success guarantee, we can confidently offer you the support and resources you need to ace your tests.
          </p>
        </div>

const linkName = readMore ? '' : 'Read More...'


  return (
    <>
        <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={examCoachingBanner} alt="page_banner" />
            </div>

            {/* responsive banner of Certificate attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Best <br /><b className='text-green-500'>Exam Coaching Centre</b> in Kerala</h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-5 px-4 lg:p-0'>
              For overseas migrations, it is one of the vital steps you must take to pass some exams. OET, IELTS, and Prometric are mandatory qualifications in major English-speaking countries for healthcare professionals. If you're eagerly searching for the best coaching in Kerala for these exams, Trueway can provide you with the best and most promising coaching in the region. Our highly skilled faculty and years of expertise make us well-suited to mentor you and provide excellent coaching and up-to-date study materials. Our coaching program focuses on medical English instruction for physicians, nurses, pharmacists, dentists, veterinarians, dietitians, and other healthcare professionals.
              </p>
              {/* readMore add in paragraph */}
              <div className='md:hidden flex'>
                <p  onClick={()=> {setReadMore (!readMore)}}>
                  <h2 className='text-green-500 pl-4 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                </p>
                { readMore && extraContent }
              </div>
              <p className='hidden md:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
              The greatest syllabus is provided by Trueway International to ensure your success. Over 1500 questions are available for practice sessions. Our coaching is mostly exam-focused, and we are committed to your success. With our 100% success guarantee, we can confidently offer you the support and resources you need to ace your tests.
              </p>
            </div>
          </div>

          {/* side bar navigation component*/}
          <div className='hidden lg:grid lg:w-1/2'>
            <div className='flex flex-col justify-center items-center'>
              <HeroSidebar/>
            </div>
          </div>
      </div>
    </>
  )
}

export default ExamCoachingHero
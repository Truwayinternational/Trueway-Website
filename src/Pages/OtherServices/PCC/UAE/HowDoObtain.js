import React, {useState} from 'react'

function HowDoObtain() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-start text-gray-500 font-poppins mb-10 pr-3 pt-2 '>
            To obtain police clearance in the UAE, the relevant documents are   A valid Emirates ID card, a letter from the recipient stating that they have no plans to commit any crimes in the near future, a duplicate of the candidate's identification, plus a photo in identification size.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...'

  return (
    <>
         <div className='max-w-[1240px] mx-auto place-content-center pt-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h2 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>How do I obtain a<br/><b className='text-green-500'> Good Conduct <br/> Certificate in the UAE? </b></h2>
            </div>
            <div className='flex'>
                <div className='lg:w-5/6  ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <p>The official website of the UAE's Ministry of Interior (MOI) is where you may obtain a police clearance certificate. Basically, you can apply for it through the MOI app, which is available to users of Android and iPhone.  On the other hand, you can physically obtain the testimony from the MOI's administration habitats. As a result, these areas of specialisation span all emirates, and the authoritative website allows you to locate a centre near your home.
                        </p>
                        {/* readMore add in paragraph */}
                        <div className='md:hidden flex'>
                            <p  onClick={()=> {setReadMore (!readMore)}}>
                            <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                            </p>
                            { readMore && extraContent }
                        </div>
                        <p className='hidden md:flex text-md lg:text-lg md:text-xl text-start text-gray-500 font-poppins mb-10  pr-3 lg:p-0 '>
                        To obtain police clearance in the UAE, the relevant documents are   A valid Emirates ID card, a letter from the recipient stating that they have no plans to commit any crimes in the near future, a duplicate of the candidate's identification, plus a photo in identification size.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HowDoObtain
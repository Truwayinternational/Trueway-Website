import React, {useState} from 'react'
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'


function ProcedureOfCA() {

    const [readMore, setReadMore] = useState(false)

    const extraContent =<div>
          <p className='lg:hidden flex text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
          For educational documents like degrees and certificates, the process starts with notarization, followed by checks by departments and authorities in Mumbai and Delhi. Then, the embassy verifies them. For non-educational documents like birth, marriage, and employment certificates, the steps are similar, but embassy verification is replaced by consulate verification. For commercial documents, like certificates of origin or incorporation, it involves verification by the Chamber of Commerce, Ministry of External Affairs, and embassy.
          </p>
        </div>

    const linkName = !readMore && 'Read More...'

  return (
    <div>
      <div className='h-full py-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3" />
            <h3 className='md:text-5xl lg:px-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '>Procedures of<br/><p className='text-green-500'>Certificate Attestation ?</p></h3>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0'>
            Getting your certificates attested is a must for getting a visa. Whether you're going abroad to work or study, this process is essential. In India, the attestation procedure is a series of steps. The most crucial one is the Ministry of Foreign Affairs attestation, which comes after getting attestations from all departments. This step holds extra significance. India offers attestation services of three types:
            <ol className='list-decimal text-green-500 font-semibold text-lg md:text-xl lg:px-10 pl-6'>
                    <li className='cursor-pointer'>Educational certificates</li> 
                    <li className='cursor-pointer'> Non-educational certificates </li> 
                    <li className='cursor-pointer'>Commercial certificates </li> 
            </ol>
            Certificate attestation requires the original certificates and passport copies. These documents are verified by relevant authorities based on the type of attestation needed. Certificate attestation is a way to prove that educational, non-educational, and commercial documents are genuine. It's crucial for people planning to work or study abroad.
            </p>
            {/* readMore add in paragraph */}
            <div className='lg:hidden flex'>
              <p  onClick={()=> {setReadMore (!readMore)}}>
                <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
              </p>
              { readMore && extraContent }
            </div>
            <p className='hidden lg:flex text-md  lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3 lg:p-0'>
            For educational documents like degrees and certificates, the process starts with notarization, followed by checks by departments and authorities in Mumbai and Delhi. Then, the embassy verifies them. For non-educational documents like birth, marriage, and employment certificates, the steps are similar, but embassy verification is replaced by consulate verification. For commercial documents, like certificates of origin or incorporation, it involves verification by the Chamber of Commerce, Ministry of External Affairs, and embassy.
            </p>
          </div>    
        </div>     
      </div>
  </div>
  )
}

export default ProcedureOfCA
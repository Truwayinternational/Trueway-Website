import React from 'react'

import OurTeamMobSlider1 from './OurTeamMobSlider1'
import OurTeamMobSlider2 from './OurTeamMobSlider2'

// our members images
import HassanSir from '../../Assets/AboutUs/Hassan Rawther.webp'
import vishnuSir from '../../Assets/AboutUs/Vishnu s kumar.webp'
import Lazitha from '../../Assets/AboutUs/Lezitha M S.webp'
import Vishnu from '../../Assets/AboutUs/Vishnu V S.webp'
import Anusha from '../../Assets/AboutUs/Anusha.webp'
import Kiran from '../../Assets/AboutUs/Kiran.webp'
import Archana from '../../Assets/AboutUs/Archana S S.webp'
import veena from '../../Assets/AboutUs/Veena.webp'
import karthika from '../../Assets/AboutUs/Karthika.webp'
import rineesha from '../../Assets/AboutUs/Rineesha.webp'
import Mary from '../../Assets/AboutUs/Mary.webp'
import athira from '../../Assets/AboutUs/Athira.webp'
import SAJINI from '../../Assets/AboutUs/Sajini.webp'
import revatni from '../../Assets/AboutUs/Ravathy.webp'
import shimna from '../../Assets/AboutUs/Shimna.webp'
import sony from '../../Assets/AboutUs/Sony.webp'
import ramya from '../../Assets/AboutUs/Ramya.webp'
import febin from '../../Assets/AboutUs/Febin.webp'
import Rijil from '../../Assets/AboutUs/Rijil.webp'
import karthikeyan from '../../Assets/AboutUs/Karthikeyan.webp'
import saheena from '../../Assets/AboutUs/Shaheeena.webp'
import jibin  from '../../Assets/AboutUs/Jibin.webp'

function OurTeam() {
  return (
    <>
        <div className='w-full my-20'>
            <div className='max-w-[1240px] mx-auto place-content-center'>
                <div className='text-center'>
                    <h5 className='text-5xl font-bold font-HeadingFont px-5'>Meet <b className='text-green-500'> Our Team</b></h5>
                </div>
                <div className='grid justify-center mx-auto px-6 py-3'>
                    <img className='w-[350px]' src={HassanSir} alt="Mdsir " />
                    <div className='flex flex-col justify-center text-center'>
                        <h6 className='text-2xl md:text-4xl font-bold font-HeadingFont text-green-500 py-2'>
                            Hassan Rawther
                        </h6>
                        <p className='text-gray-500 md:text-2xl text-xl font-poppins'>
                        Founder & Managing Director
                        </p>
                    </div>
                </div>

                {/* our team  web size (hidden in sm & md screen) other members  top positions*/}

                <div className='hidden md:grid grid-cols-4 items-center mx-auto px-4 my-10 gap-3'>
                    {/* vishnu sir  */}
                    <div>
                        <img className='w-[300px]' src={vishnuSir} alt="team member " />
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-2xl text-xl  font-bold font-HeadingFont text-green-500 py-2'>
                                Vishnu S Kumar
                            </h6>
                            <p className='text-gray-500 lg:text-xl text-md font-poppins'>
                                Managing Director
                            </p>
                        </div>
                    </div>
                    {/* Lazitha mam */}
                    <div>
                        <img className='w-[300px]' src={Lazitha} alt="team member " />
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-2xl text-xl font-bold font-HeadingFont text-green-500 py-2'>
                                Lezitha M S
                            </h6>
                            <p className='text-gray-500 lg:text-xl text-md font-poppins'>
                                CEO
                            </p>
                        </div>
                    </div>
                    {/* vishnu vs */}
                    <div>
                        <img className='w-[300px]' src={Vishnu} alt="team member " />
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-2xl text-xl font-bold font-HeadingFont text-green-500 py-2'>
                                Vishnu V S
                            </h6>
                            <p className='text-gray-500 lg:text-xl text-md font-poppins'>
                                Managing Partner
                            </p>
                        </div>
                    </div>
                    {/* Anusha hr */}
                    <div>
                        <img className='w-[300px]' src={Anusha} alt="team member " />
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-2xl text-xl font-bold font-HeadingFont text-green-500 py-2'>
                                Anusha Sarath
                            </h6>
                            <p className='text-gray-500 text-md lg:text-xl font-poppins'>
                                HR Manager
                            </p>
                        </div>
                    </div>
                </div>

                {/* our other positions members  */}

                <div className='hidden md:grid grid-cols-5 items-center mx-auto px-4 my-10 gap-2'>
                    {/* Kiran G S  */}
                    <div>
                        <img className='w-[250px]' src={Kiran} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-2'>
                                Kiran G S
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                                Finance Manager
                            </p>
                        </div>
                    </div>
                    {/* Archana S S */}
                    <div>
                        <img className='w-[250px]' src={Archana} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md font-bold font-HeadingFont text-green-500 pt-2'>
                                Archana S S
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                                General Manager
                            </p>
                        </div>
                    </div>
                    {/* Veena V H */}
                    <div>
                        <img className='w-[250px]' src={veena} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md font-bold font-HeadingFont text-green-500 pt-2'>
                                Veena V H
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                                Senior Manager
                            </p>
                        </div>
                    </div>
                    {/* Karthika Krishnan B */}
                    <div>
                        <img className='w-[250px]' src={karthika} alt="team member "/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md font-bold font-HeadingFont text-green-500 pt-2'>
                                Karthika Krishnan
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm  font-poppins'>
                                Branch Manager
                            </p>
                        </div>
                    </div>
                    {/* Rineesha R */}
                    <div>
                        <img className='w-[250px]' src={rineesha} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md font-bold font-HeadingFont text-green-500 pt-2'>
                                Rineesha R
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm  font-poppins'>
                                Senior Document Analyst
                            </p>
                        </div>
                    </div>
                    {/* Mary Jemy */}
                    <div>
                        <img className='w-[250px]' src={Mary} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  text-md font-bold font-HeadingFont text-green-500 pt-2'>
                                Mary Jemy
                            </h6>
                            <p className='text-gray-500 lg:lg:text-lg text-sm  font-poppins'>
                                Senior CRM
                            </p>
                        </div>
                    </div>
                    {/* Athira C */}
                    <div>
                        <img className='w-[250px]' src={athira} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-2'>
                                Athira C
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Document Analyst
                            </p>
                        </div>
                    </div>
                    {/* Sajini Jayan */}
                    <div>
                        <img className='w-[250px]' src={SAJINI} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-2'>
                            Sajini Jayan
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Document Analyst
                            </p>
                        </div>
                    </div>
                    {/* Revathy Krishnan P */}
                    <div>
                        <img className='w-[250px] mt-5' src={revatni} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                            Revathy Krishnan
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Document Control Manager
                            </p>
                        </div>
                    </div>
                    {/* Shimna Hameed */}
                    <div>
                        <img className='w-[250px] mt-5' src={shimna} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                            Shimna Hameed
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Customer Relation Manager
                            </p>
                        </div>
                    </div>
                    {/* Sony Joseph */}
                    <div>
                        <img className='w-[250px] mt-5' src={sony} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                            Sony Joseph
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Customer Relation Manager
                            </p>
                        </div>
                    </div>
                    {/* Ramya R */}
                    <div>
                        <img className='w-[250px] mt-5' src={ramya} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                            Ramya R
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Customer Relation Manager
                            </p>
                        </div>
                    </div>
                    {/* Febin M P */}
                    <div>
                        <img className='w-[250px] mt-5' src={febin} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                            Febin M P
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Background Verification Officer
                            </p>
                        </div>
                    </div>
                    {/* Rijil C */}
                    <div>
                        <img className='w-[250px] mt-5' src={Rijil} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                            Rijil C
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Document Verification Officer
                            </p>
                        </div>
                    </div>
                    {/* Karthikeyan */}
                    <div>
                        <img className='w-[250px] mt-5' src={karthikeyan} alt="team member"/>
                        <div className='flex flex-col justify-center text-center'>
                            <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                            Karthikeyan
                            </h6>
                            <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                            Document Verification Officer
                            </p>
                        </div>
                    </div>
                </div>

                {/* last 2 member */}
                <div className='hidden md:flex justify-center items-center mx-auto lg:px-4 px-44 my-10 gap-2 mt-5'>
                    {/* Saheena A S */}
                        <div>
                            <img className='w-[160px] lg:w-[250px]' src={saheena} alt="team member"/>
                            <div className='flex flex-col justify-center text-center'>
                                <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                                Saheena A S
                                </h6>
                                <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                                Office Assistant
                                </p>
                            </div>
                        </div>
                    {/* Jibin George */}
                        <div>
                            <img className='w-[160px] lg:w-[250px]' src={jibin} alt="team member"/>
                            <div className='flex flex-col justify-center text-center'>
                                <h6 className='lg:text-[22px] text-md  font-bold font-HeadingFont text-green-500 pt-3'>
                                Jibin George
                                </h6>
                                <p className='text-gray-500 lg:text-lg text-sm font-poppins'>
                                Office Assistant
                                </p>
                            </div>
                        </div>
                </div>


                <OurTeamMobSlider1/>
                <OurTeamMobSlider2/>
            </div>
        </div>
    </>
  )
}

export default OurTeam
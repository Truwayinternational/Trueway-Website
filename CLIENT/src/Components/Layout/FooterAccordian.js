import React, {useState} from 'react'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

function FooterAccordian(props) {

    const [item, setItem] = useState(props.data)

    const handleToggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem ({...item, active : newActive})
    }

    return (
        <>
            <div className="font-poppins font-normal text-[14px] leading-[24px] text-white hover:text-green-950 cursor-pointer p-2">
                <div className={`bg-green-600 p-3 w-[230px] duration-300 group ${item.active === 1 ? 'is-active bg-green-600 rounded-md': ''}`}>
                    <div className='flex items-center '>
                        <div className='w-full duration-500 group-[.is-active]:font-bold text-[14px]'>
                            {item.place}
                        </div>
                        <div className='text-lg duration-500 rotate-90 group-[.is-active]:rotate-[270deg] cursor-pointer' onClick={handleToggleActive}>
                        <IoIosArrowDroprightCircle/>
                        </div>
                        </div>
                        <div className='overflow-hidden max-h-0 duration-300 group-[.is-active]:max-h-[100px] cursor-pointer text-sm'>
                            {item.location}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default FooterAccordian
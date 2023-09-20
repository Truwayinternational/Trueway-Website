import React from 'react'
import { Collapse } from 'react-collapse'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function FaqAccordion({open, toggle, question, answer}) {
  return (
    <div className='pt-[10px]'>
        <div className='bg-zinc-100 flex justify-center items-center py-[18px] px-[30px] cursor-pointer rounded-xl' 
            onClick={toggle}>
            <h6 className='text-[18px] font-semibold me-auto'>{question}</h6>
            <div className='text-[25px] font-bold ' >
                {open ? <AiOutlineMinus className='ms-auto'/> : <AiOutlinePlus  className='ms-auto'/>}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className='bg-zinc-100 px-[30px] pb-[18px] rounded-b-xl text-gray-500 text-md text-justify'>
                {answer}
            </div>
        </Collapse>
    </div>
  )
}

export default FaqAccordion
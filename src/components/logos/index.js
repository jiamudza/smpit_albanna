import React from 'react'

import smpalbanna from "../../assets/logo/smpalbanna.png"
import jsit from "../../assets/logo/jsit.png"
import twh from "../../assets/logo/twh.png"
import yayasan from "../../assets/logo/yayasan.png"
import qcare from "../../assets/logo/qcare.png"
import spmb from "../../assets/logo/spmb2026.png"

const Logo = () => {
  return (
    <div className=''>
        <div className='relative bg-white flex flex-wrap justify-evenly items-center px-5 py-2 gap-2 rounded-xl shadow-xl border-b-3 border-purple-800'>
            <img src={spmb} alt="ppdb" className='w-10 md:w-14 lg:w-28 hover:relative hover:scale-150 ease-in-out duration-200 cursor-pointer'/>
            <img src={twh} alt="twh" className='w-7 md:w-10 lg:w-20 hover:relative hover:scale-150 ease-in-out duration-200 cursor-pointer'/>
            <img src={jsit} alt="jsit" className='w-7 md:w-10 lg:w-20 hover:relative hover:scale-150 ease-in-out duration-200 cursor-pointer'/>
            <img src={yayasan} alt='yayasan' className='w-7 md:w-10 lg:w-20 hover:relative hover:scale-150 ease-in-out duration-200 cursor-pointer'/>
            <img src={smpalbanna} alt='smpalbanna' className='w-10 md:w-14 lg:w-28 hover:relative hover:scale-150 ease-in-out duration-200 cursor-pointer'/>
            <img src={qcare} alt='qcare' className='w-12 md:w-16 lg:w-32 mt-3 hover:relative hover:scale-150 ease-in-out duration-200 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Logo
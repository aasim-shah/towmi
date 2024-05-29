import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BusinessSection = () => {
  return (
    <nav className=' sm:px-20 px-4 pt-12  text-white flex flex-col  sm:flex-row justify-between bgClr'>
        <div className="w-[14rem] hidden sm:flex mt-auto  h-[14rem]">
          <Image src={"/car-left-side.svg"} className='w-full h-full' alt='asset-image' width={400} height={400} />
        </div>
        <div className="flex flex-col w-11/12  mx-auto sm:w-5/12 mb-2  justify-evenly items-center">
            <p><span className='text-medium sm:text-2xl font-semibold '> 🚚 Drive Your Business Forward</span></p>
            <p className="text-sm text-center px-3 sm:px-12 mt-12">Register Your Business Fleet with Towmi and Transform Your Vehicles into Thriving Enterprises!</p>
            <Link href={"/"}  className='py-2 px-3  w-40 text-center mt-10 rounded-lg border border-gray-300 text-white' > Business Page </Link>

        </div>

        <div className="sm:w-[14rem] w-[8rem] mx-auto  relative  h-[17rem] sm:h-[20rem]">
          <Image src={"/car-right-side.svg"} className='w-full h-full absolute  top-[2.8rem] sm:top-1' alt='asset-image' width={400} height={400} />
        </div>
       
    </nav>
  )
}

export default BusinessSection
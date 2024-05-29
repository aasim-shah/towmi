"use client"
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className=' pt-12  w-full '>

      <div className="w-9/12 mx-auto  justify-between  flex flex-col sm:flex-row ">
        <div className="flex w-11/12  sm:w-7/12 flex-col h-[40vh] sm:h-[60vh] justify-between">
          <p className="text-white relative text-[18px] sm:text-[45px] font-[500]">Meet Towmi – Your All-in-One Emergency Companion App in Nigeria!
            <Image className='absolute hidden sm:block bottom-0 left-[-1rem]' alt='asset-image' src={"/circle.svg"} width={210} height={40} />
          </p>


          <p className="text-white text-sm text-center sm:text-lg ">Towmi: Nigeria &rsquo; s emergency companion. Swift access to essential services, ensuring peace of mind in any situation – your safety, our priority!</p>

          <div className="flex w-full  sm:w-7/12   pb-3 justify-between flex-row">
            <a href="/downlaod" className=''>
              <Image className='w-full h-full' src={"/Ios.svg"} alt='asset-image' width={500} height={400} />
            </a>
            <a href="/downlaod" className=''>
              <Image className='w-full h-full' src={"/Android.svg"} alt='asset-image' width={500} height={400} />
            </a>

          </div>

        </div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          transition={{
            type : "spring",
            stiffness : 70,
            duration : 0.3
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-[17rem] sm:w-[20rem] mt-12 relative sm:mt-0 h-[30rem]" >

          <Image className='w-full h-full  absolute top-5 sm:top-0' src={"/Hero_image.svg"} alt='asset-image' width={500} height={400} />
        </motion.div>
      </div>

    </div>
  )
}

export default HeroSection
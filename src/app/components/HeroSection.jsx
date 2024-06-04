"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown';

import CustomModal from './ComingSoonModel'
import CountdownTimer from './CountDownTimer';

const HeroSection = () => {
  const targetDate = new Date("9/8/2024");


  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=' pt-12  w-full '>

      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className="w-9/12 mx-auto  justify-between  flex flex-col sm:flex-row ">
        <div className="flex w-11/12  sm:w-7/12  md:max-w-[70rem]   pb-10 flex-col   justify-between">
          <p className="text-white relative text-[18px] sm:text-[45px] font-[500]">Meet Towmi – Your All-in-One Emergency Companion App in Nigeria!
            <Image className='absolute hidden sm:block bottom-0 left-[-1rem]' alt='asset-image' src={"/circle.svg"} width={210} height={40} />
          </p>


          <p className="text-white   responsive_text  ">Towmi: Nigeria &rsquo; s emergency companion. Swift access to essential services, ensuring peace of mind in any situation – your safety, our priority!</p>
          <div className="flex flex-col text-white ">
            <p className="text-lg">We are almost ready ...</p>
            <p className="text-2xl font-semibold ">Launching IN</p>
          </div>

          <div className="flex w-full  sm:w-7/12   pb-3 justify-between flex-row">
            {/* <button onClick={handleOpenModal} className='border border-gray-300  hover:bg-white hover:text-cyan-800 font-semibold text-white  px-4 py-2 rounded-md '> */}
              {/* <Image className='w-full h-full' src={"/Ios.svg"} alt='asset-image' width={500} height={400} /> */}
              {/* comming */}
            {/* </button> */}
{/* 
            <button onClick={handleOpenModal} className='border border-gray-300  hover:bg-white hover:text-cyan-800 font-semibold text-white  px-4 py-2 rounded-md '>

              coming
            </button> */}
                  <CountdownTimer date={targetDate} className='text-white ' />


          </div>

        </div>
        <motion.div
          initial={{ x: 16, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            duration: 0.3
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-[17rem] sm:w-[20rem] mt-8 relative  h-[30rem]" >

          <Image className='w-full h-full  absolute top-5 sm:top-0' src={"/Hero_image.svg"} alt='asset-image' width={500} height={400} />
        </motion.div>
      </div>

    </div>
  )
}

export default HeroSection
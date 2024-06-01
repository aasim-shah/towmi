"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import CustomModal from '../ComingSoonModel'

const HeroSection = () => {

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
        <div className="flex w-11/12  sm:w-7/12  md:max-w-[50rem]   pb-10 flex-col   justify-between">
          <p className="text-white relative text-[18px] sm:text-[45px] font-[500]">Calling All Drivers! Drive with Towmi – Your Ultimate On-Demand Platform!!
          </p>


          <p className="text-white text-sm text-center sm:text-lg my-12 ">Drivers, meet Towmi – your on-demand driving companion! Experience seamless assistance at your fingertips. Drive smart with Towmi!</p>

          <div className="flex w-full  sm:w-7/12   pb-3 justify-between flex-row">
            <button onClick={handleOpenModal} className=''>
              <Image className='w-full h-full' src={"/Ios.svg"} alt='asset-image' width={500} height={400} />
            </button>

            <button onClick={handleOpenModal} className=''>
              <Image className='w-full h-full' src={"/Android.svg"} alt='asset-image' width={500} height={400} />
            </button>

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
          className="w-[17rem] sm:w-[20rem] mt-12 relative sm:mt-0 h-[30rem]" >

          <Image className='w-full h-full  absolute top-5 sm:top-0' src={"/driver/driver_side_hero.svg"} alt='asset-image' width={500} height={400} />
        </motion.div>
      </div>

    </div>
  )
}

export default HeroSection
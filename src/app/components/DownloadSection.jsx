"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, transform, useScroll } from "framer-motion"
import CustomModal from './ComingSoonModel'

const DownloadSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className='  bgClr pt-10   w-full '>

      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className="w-11/12 sm:w-9/12  mx-auto  justify-between  flex flex-col sm:flex-row ">
        <div className="flex  sm:w-7/12 flex-col  justify-evenly">


          <p className="text-white text-center text-lg leading-[2.5rem] sm:text-[28px] sm:font-[600] ">Ready to redefine your emergency assistance experience?</p>
          <p className="text-white mt-4 text-center text-sm sm:text-lg ">Download Towmi now and drive with confidence on Nigeria &rsquo;s roads! 🌐🚦</p>

          <div className="flex w-11/12 mx-auto  sm:w-7/12  mt-10 sm:mt-0 justify-between flex-row">
            <button onClick={handleOpenModal} className=''>
              <Image className='w-full h-full' src={"/Ios.svg"} alt='asset-image' width={500} height={400} />
            </button>
            <button onClick={handleOpenModal} className=''>
              <Image className='w-full h-full' src={"/Android.svg"} alt='asset-image' width={500} height={400} />
            </button>

          </div>

        </div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="w-[20rem] mt-12  relative flex items-end justify-end mb-0 pb-0 h-[13rem] sm:h-[20rem]" >
          <Image className='w-full h-full absolute top-1 sm:top-4' src={"/download_app.svg"} alt='asset-image' width={500} height={400} />
        </motion.div>
      </div>

    </div>
  )
}

export default DownloadSection

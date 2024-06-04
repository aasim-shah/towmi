"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion, transform, useScroll } from "framer-motion"

const BecomeDriver = () => {
  return (
    <div className='  pt-12   text-white  bgClr'>
      <div className="max-w-[1280px] mx-auto   flex flex-col-reverse  items-center sm:flex-row justify-center ">

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-[17rem] sm:w-[24rem] relative  sm:flex mt-auto  h-[20rem]">
        <Image src={"/become_driver.svg"} className='w-full h-full absolute bottom-[-2.2rem] md:bottom-0' alt='asset-image' width={400} height={400} />
      </motion.div>
      <div className="flex flex-col w-11/12  mx-auto sm:w-4/12 mb-2  justify-evenly ">
        <p><span className='text-medium sm:text-2xl font-semibold '> 🚚  Ready to Become Driver</span></p>
        <p className='text-medium sm:text-lg mt-10 font-medium '>  Download Towmi Driver App</p>
        <p className="text-sm  mt-12">Drive with Towmi and seize the opportunity to transform your truck or ambulance into a thriving business! </p>
        <Link href={"/driver"} className='py-2 px-3 mb-5 w-40 text-center hover:bg-white hover:text-cyan-800 mt-10 rounded-lg border border-gray-300 text-white' >  Driver Page </Link>

      </div>
      </div>


    </div>
  )
}

export default BecomeDriver
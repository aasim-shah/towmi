"use client"
import Image from 'next/image'
import React from 'react'

import { motion, transform, useScroll } from "framer-motion"

const CoverageSection = () => {
    return (
        <div className=' mt-32 mb-6  max-w-[1280px] mx-auto   '>

            <div className="w-11/12 mx-auto  justify-between  flex flex-col sm:flex-row ">
                <div className="flex w-full sm:w-6/12 flex-col  justify-center ">
                    <div className="flex flex-row items-end ">
                        <span className='responsive_title font-semibold '> 🗺️ Nationwide Coverage</span>
                        <div className="w-[2rem] h-[2rem]">
                            <Image className='w-full h-full' src={"/drops.svg"} alt='asset-image' width={50} height={50} />
                        </div>
                    </div>

                    <p className="responsive_text mt-12    ">
                        Towmi &rsquo; s extensive network spans across Nigeria, ensuring comprehensive coverage wherever you are. Drive confidently, knowing help is just a tap away.
                    </p>


                    <p className="responsive_text mt-12    ">
                        <span className='font-semibold'>   1. Nationwide Coverage : </span>
                        Towmi  &rsquo; s broad network ensures instant assistance across Nigeria, from cityscapes to remote areas. Drive confidently with help at your fingertips.
                    </p>


                    <p className="responsive_text mt-12    ">
                        <span className='font-semibold'>  2. 24/7 Assurance:  </span>  Towmi provides constant support, offering peace of mind around the clock. Drive confidently, knowing help is just a tap away anytime, day or night.

                    </p>

                    <p className="responsive_text mt-12    ">
                        <span className='font-semibold'>  3. On-Road Peace: </span> With Towmi &rsquo; s widespread coverage and unwavering support, experience tranquility on every journey, knowing assistance is there whenever needed.

                    </p>

                </div>




                <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}            
                    className="w-[20rem] md:w-[25vw] md:h-[65vh] h-[30rem] relative mt-24 sm:mt-0" >


                    <Image className='w-full h-full absolute' alt='asset-image' src={"/rings.svg"} width={500} height={400} />
                    <Image className='w-full absolute h-full' alt='asset-image' src={"/coverage.svg"} width={500} height={400} />
                </motion.div>
            </div>

        </div>)
}

export default CoverageSection
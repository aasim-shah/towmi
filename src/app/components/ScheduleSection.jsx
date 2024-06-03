"use client"
import Image from 'next/image'
import React from 'react'

import { motion, transform, useScroll } from "framer-motion"

const ScheduleSection = () => {

    return (
        <div className=' pt-12  w-full '>

            <div className="w-9/12 mx-auto  justify-between  flex flex-col-reverse sm:flex-row ">
                <motion.div
                    initial={{ x: -14 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        duration: 0.3

                    }}
                    whileInView={{ x: 0 }}
                    className="w-[20rem]   md:w-[25vw]  md:h-[65vh] h-[30rem] mt-5 sm:mt-0 relative"
                >

                    <Image className='w-full h-full absolute' src={"/rings.svg"} alt='asset-image' width={500} height={400} />
                    <Image className='w-full absolute h-full' src={"/rings-img.svg"} alt='asset-image' width={500} height={400} />
                </motion.div>
                <div className="flex  w-full sm:w-6/12 flex-col justify-center  ">
                    <div className="flex flex-row items-end ">
                        <span className=' responsive_title font-semibold '> 📅 Flexible Scheduling</span>
                        <div className="w-[2rem] h-[2rem]">
                            <Image className='w-full h-full' src={"/drops.svg"} width={50} height={50} />
                        </div>
                    </div>

                    <p className=" mt-12 responsive_text font-medium">
                        Plan ahead with Towmi! Reserve ambulances, tow trucks, or trucks for a later time, tailored to your convenience – all from the convenience of your mobile device.
                    </p>


                    <p className=" mt-12 responsive_text  font-medium">
                        <span className='font-semibold'>   1. Ambulance Reservations: </span> Plan ahead with Towmi! Easily reserve ambulances for future needs, ensuring swift medical assistance with just a few taps – your safety, our priority.                    </p>


                    <p className=" mt-12 responsive_text  font-medium">
                        <span className='font-semibold'>  2. Tow Truck On-Demand:  </span> Swiftly book tow trucks on the go or schedule for later, providing reliable roadside assistance wherever and whenever you need it.  Towmi &rsquo; s got your back!

                    </p>

                    <p className=" mt-12 responsive_text  font-medium">
                        <span className='font-semibold'> 3. Effortless Truck Bookings: </span> Move heavy loads effortlessly with  Towmi &rsquo; s seamless truck bookings. Whether on-demand or scheduled for later, logistics becomes a breeze at your fingertips.

                    </p>

                </div>
            </div>

        </div>)
}

export default ScheduleSection
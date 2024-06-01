"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion, transform, useScroll } from "framer-motion"

const FeaturesSection = () => {
    return (
        <div className=' my-12  w-full '>



            <div className="flex my-12 justify-center items-center w-10/12  sm:w-4/12 mx-auto flex-col">
                <div className="flex flex-row relative items-end justify-center">
                    <div className="w-[2rem] h-[2rem]  absolute left-[-1.3rem] top-[-1.4rem] transform scale-x-[-1]">
                        <Image className='w-full h-full' src={"/drops.svg"} alt='asset-image' width={50} height={50} />
                    </div>
                    <span className='text-2xl font-semibold '> 📲 User-Friendly App</span>

                </div>
                <p className="text-sm font-light text-center mt-5">
                    Towmi &rsquo; s intuitive mobile app ensures effortless navigation. Booking ambulances, tow trucks, and trucks is just a tap away, providing a seamless and stress-free experience.
                </p>
            </div>


            <div className="w-11/12 mx-auto items-center   justify-evenly flex flex-col sm:flex-row ">





                <div className="flex  flex-col items-center sm:h-[70vh]  justify-between">
                    <div className="flex flex-col w-10/12  md:w-6/12 sm:ml-auto">
                        <span className='text-sm sm:text-lg font-semibold  sm:text-end'> Current Booking</span>
                        <p className="text-sm font-light   sm:text-end mt-5">
                            Show a list of active booking on home
                            screen make it easy for user to see current
                            and upcoming booking
                        </p>
                    </div>



                    <div className="flex flex-col mt-5 w-10/12 md:w-6/12 sm:ml-auto ">
                        <span className='text-sm sm:text-lg font-semibold  sm:text-end'> Car towing Booking</span>
                        <p className="text-sm font-light mt-5 sm:text-end">
                            Swiftly book tow trucks on the go or schedule for later, providing reliable roadside assistance wherever and whenever you need it.  Towmi &rsquo; s got your back!
                        </p>
                    </div>


                </div>



                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        duration: 0.3
                    }}
                    whileInView={{ x: 0, opacity: 1 }}

                    className="w-[23rem] md:w-[60rem] md:h-[97vh] my-3  h-[30rem]  " >
                    <Image className='w-full  h-full' src={"/user_friendly_app.svg"} alt='asset-image' width={1400} height={1400} />
                </motion.div>





                <div className="flex  flex-col sm:h-[70vh] items-center justify-between">
                    <div className="flex flex-col w-10/12 md:w-6/12">
                        <span className='text-sm sm:text-lg font-semibold  '> Current Booking</span>
                        <p className="text-sm font-light   mt-5">
                            Show a list of active booking on home
                            screen make it easy for user to see current
                            and upcoming booking
                        </p>
                    </div>



                    <div className="flex flex-col  mt-5  w-10/12 md:w-6/12">
                        <span className='text-sm sm:text-lg font-semibold  '> Car towing Booking</span>
                        <p className="text-sm font-light   mt-5">
                            Swiftly book tow trucks on the go or schedule for later, providing reliable roadside assistance wherever and whenever you need it. Towmi&rsquo;s got your back!
                        </p>
                    </div>


                </div>




            </div>

        </div>)
}

export default FeaturesSection
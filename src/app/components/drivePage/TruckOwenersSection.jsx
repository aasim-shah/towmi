"use client"
import Image from 'next/image'
import React from 'react'

import { motion, transform, useScroll } from "framer-motion"

const TruckOweners = () => {

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
                    <Image className='w-full absolute h-full' src={"/driver/truck_owner.svg"} alt='asset-image' width={500} height={400} />
                </motion.div>
                <div className="flex  w-full sm:w-6/12 flex-col justify-center  ">
                    <div className="flex flex-row items-end ">
                        <span className=' text-lg sm:text-2xl font-semibold '> 🚚 Truck Owners & Operators Wanted</span>
                        <div className="w-[2rem] h-[2rem]">
                            <Image className='w-full h-full' src={"/drops.svg"} width={50} height={50} />
                        </div>
                    </div>

                    <p className="text-sm mt-12 font-medium">
                    Own a truck? Join Towmi and turn your wheels into opportunities! Connect with users in need of transport services for heavy loads. Be your own boss, set your own schedule, and earn on your terms.                    </p>
                 
                 <p className="text-sm mt-8 font-medium">
                        <span className='font-semibold'>   1. </span> Transform Your Truck into Opportunities: Own a truck? Join Towmi and connect with users seeking transport services for heavy loads. Turn your wheels into a lucrative opportunity.                </p>


                    <p className="text-sm mt-8 font-medium">
                        <span className='font-semibold'>  2. Be Your Own Boss, </span> Set Your Schedule: With Towmi, you are in control. Be your own boss, set your schedule, and enjoy the flexibility of earning on your terms while providing essential transport services.

                    </p>

                    <p className="text-sm mt-8 font-medium">
                        <span className='font-semibold'> 3.Earn on Your Own Terms: </span> Join Towmi to turn your truck into a source of income. Enjoy the freedom to earn on your own terms, ensuring a rewarding experience as you fulfill the transport needs of our users.

                    </p>

                </div>
            </div>

        </div>)
}

export default TruckOweners
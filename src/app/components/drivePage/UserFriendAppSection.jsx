"use client"
import Image from 'next/image'
import React from 'react'

import { motion, transform, useScroll } from "framer-motion"

const UserFriendlyApp = () => {

    return (
        <div className=' pt-12 my-12  w-full '>

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
                    <Image className='w-full absolute h-full' src={"/driver/driver_userfriendly_app.svg"} alt='asset-image' width={500} height={400} />
                </motion.div>
                <div className="flex  w-full sm:w-6/12 flex-col justify-center  ">
                    <div className="flex flex-row items-end ">
                        <span className=' responsive_title font-semibold '> 📲 User-Friendly App</span>
                        <div className="w-[2rem] h-[2rem]">
                            <Image className='w-full h-full' src={"/drops.svg"} width={50} height={50} />
                        </div>
                    </div>

                    <p className="responsive_text mt-12 font-medium">
                        Our easy-to-use app streamlines the booking process, making it simple for drivers to connect with users in need.
                    </p>

                    <p className="responsive_text mt-8 font-medium">
                        <span className='font-semibold'>   1.
                            Seamless Booking Experience: </span> Towmi&rsquo;s user-friendly app simplifies the booking process, ensuring a seamless and hassle-free experience for drivers. Connect effortlessly with users in need with just a few taps.
                    </p>


                    <p className="responsive_text mt-8 font-medium">
                        <span className='font-semibold'>  2.Efficient Connection for Drivers: </span> Experience efficiency in connecting with users through Towmi &rsquo; s easy-to-use app. Streamlined and intuitive, it facilitates quick and straightforward interactions, making driving engagements straightforward.

                    </p>

                    <p className="responsive_text mt-8 font-medium">
                        <span className='font-semibold'> 3. Simplified Driver-User Connection: </span> Towmi &rsquo; s app is designed with simplicity in mind, ensuring an easy and straightforward booking process. Drivers can effortlessly connect with users in need, making the entire experience smooth and user-friendly.

                    </p>

                </div>
            </div>

        </div>)
}

export default UserFriendlyApp
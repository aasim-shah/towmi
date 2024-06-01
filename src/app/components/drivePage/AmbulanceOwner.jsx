"use client"
import Image from 'next/image'
import React from 'react'

import { motion, transform, useScroll } from "framer-motion"

const AmbulanceOwner = () => {
    return (
        <div className=' mt-32 mb-12  w-full '>

            <div className="w-9/12 mx-auto  justify-between  flex flex-col sm:flex-row ">
                <div className="flex w-full sm:w-6/12 flex-col  justify-center ">
                    <div className="flex flex-row  relative items-end ">
                        <div className="w-[2rem] h-[2rem]  absolute left-[-1.3rem] top-[-1.4rem] transform scale-x-[-1]">
                        <Image className='w-full h-full' src={"./drops.svg"} alt='asset-image' width={50} height={50} />
                    </div>
                        <span className='text-lg sm:text-2xl  font-semibold '> 🚑 Ambulance Owners & Operators Needed:</span>
                    </div>

                    <p className="text-sm mt-12 font-medium">
                    If you own an ambulance and have the skills to provide emergency medical assistance, Towmi is the platform for you. Partner with us to serve your community and earn on a flexible schedule.
                    </p>


                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>   1.Emergency Medical Assistance Provider: </span> If you own an ambulance and possess emergency medical skills, Towmi welcomes you! Partner with us to provide crucial assistance, serving your community during critical times.
                    </p>


                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>  2. Flexible Schedule, Essential Service: </span> Join Towmi to offer emergency medical services on a schedule that suits you. Be a vital part of your community &rsquo; s well-being while enjoying the flexibility to earn on your terms.

                    </p>

                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>  3. Community-Centric Partnership: </span> Partner with Towmi to contribute to the well-being of your community. Utilize your ambulance and skills to provide essential emergency services, earning rewards while making a positive impact.

                    </p>

                </div>




                <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}            
                    className="w-[20rem] md:w-[25vw] md:h-[65vh] h-[30rem] relative mt-24 sm:mt-0" >


                    <Image className='w-full h-full absolute' alt='asset-image' src={"/rings.svg"} width={500} height={400} />
                    <Image className='w-full absolute h-full' alt='asset-image' src={"/driver/truck_owner.svg"} width={500} height={400} />
                </motion.div>
            </div>

        </div>)
}

export default AmbulanceOwner
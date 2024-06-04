"use client"
import Image from 'next/image'
import React from 'react'

import { motion, transform, useScroll } from "framer-motion"

const DriverCardsSection = () => {
    return (
        <div className='max-w-[1280px] mx-auto    my-12'>
            <div className="w-10/12 gap-3 mx-auto flex flex-col sm:flex-row">
                <div className="bgClr w-full rounded-[1.3rem] p-8">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="w-[4rem] mx-auto h-[4rem]" >
                        <Image className='w-full h-full' src={"/driver/first.svg"} alt='asset-image' width={500} height={400} />
                    </motion.div>
                    <p className="text-center text-gray-200 my-5 font-semibold">Nationwide Reach</p>
                    <p className="text-center text-gray-100 px-3 font-light">
                    Towmi operates across Nigeria, providing a vast network of opportunities for independent truck and ambulance owners.
                    </p>
                </div>
                <div className="bgClr w-full rounded-[1.3rem] p-8">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="w-[4rem] mx-auto h-[4rem]" >
                        <Image className='w-full h-full' src={"/driver/second.svg"} alt='asset-image' width={500} height={400} />
                    </motion.div>
                    <p className="text-center text-gray-200 my-5 font-semibold">Flexible Earnings</p>
                    <p className="text-center text-gray-100 px-3 font-light">
                    Set your own schedule and earn based on your availability. Towmi offers flexibility to fit your business needs.
                    </p>
                </div>
                <div className="bgClr w-full rounded-[1.3rem] p-8">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="w-[4rem] mx-auto h-[4rem]" >
                        <Image className='w-full h-full' src={"/driver/vector.svg"} alt='asset-image' width={500} height={400} />
                    </motion.div>
                    <p className="text-center text-gray-200 my-5 font-semibold">Expand Your Reach</p>
                    <p className="text-center text-gray-100 px-3 font-light">
                    Connect with a diverse range of users seeking transport or emergency medical services in real-time.                    </p>
                </div>
               
            </div>
        </div>
    )
}

export default DriverCardsSection
"use client"
import Image from 'next/image'
import React from 'react'

import { motion, transform, useScroll } from "framer-motion"

const HeroCards = () => {
    return (
        <div className='w-full  my-12'>
            <div className="w-10/12 gap-3 mx-auto flex flex-col sm:flex-row">
                <div className="bgClr w-full rounded-[1.3rem] p-5">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="w-[10rem] mx-auto h-[10rem]" >
                        <Image className='w-full h-full' src={"/Ambulance.svg"} alt='asset-image' width={500} height={400} />
                    </motion.div>
                    <p className="text-center text-gray-200 font-semibold">Book Ambulance</p>
                    <p className="text-center text-gray-100 px-3 font-light">Towmi: Instantly connect to nearby ambulances for critical medical assistance, ensuring prompt response in emergencies.</p>
                </div>
                <div className="bgClr w-full rounded-[1.3rem] p-5">
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="w-[10rem] mx-auto h-[10rem]" >
                        <Image className='w-full h-full' src={"/pngwing 1.svg"} alt='asset-image' width={500} height={400} />
                    </motion.div>
                    <p className="text-center text-gray-200 font-semibold">Book Tow Trucks</p>
                    <p className="text-center text-gray-100 px-3 font-light">Towmi: Instant tow truck bookings for breakdowns or accidents, your reliable roadside assistance on the go!</p>
                </div>
                <div className="bgClr w-full rounded-[1.3rem] p-5">
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="w-[10rem] mx-auto h-[10rem]" >
                        <Image className='w-full h-full' src={"/truck.svg"} alt='asset-image' width={500} height={400} />
                    </motion.div>
                    <p className="text-center text-gray-200 font-semibold">Book  Trucks</p>
                    <p className="text-center text-gray-100 px-3 font-light">Towmi: Effortless truck bookings for seamless logistics—whether on-demand or scheduled, we have got your heavy loads covered!</p>
                </div>
            </div>
        </div>
    )
}

export default HeroCards
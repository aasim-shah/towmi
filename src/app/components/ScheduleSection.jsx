import Image from 'next/image'
import React from 'react'

const ScheduleSection = () => {
    return (
        <div className=' pt-12  w-full '>

            <div className="w-9/12 mx-auto  justify-between  flex flex-col sm:flex-row ">
                <div className="w-[20rem] h-[30rem] relative" >
                    <div className="w-[28rem] h-[38rem]  top-[-5rem] left-[-4rem] absolute " >
                        <Image className='w-full h-full ' src={"/rings.svg"} width={500} height={400} />
                    </div>
                    <Image className='w-full h-full absolute' src={"/rings.svg"} width={500} height={400} />
                    <Image className='w-full absolute h-full' src={"/rings-img.svg"} width={500} height={400} />
                </div>
                <div className="flex  w-full sm:w-6/12 flex-col h-[60vh]  ">
                    <div className="flex flex-row items-end ">
                        <span className='text-2xl font-semibold '> 📅 Flexible Scheduling</span>
                        <div className="w-[2rem] h-[2rem]">
                            <Image className='w-full h-full' src={"/drops.svg"} width={50} height={50} />
                        </div>
                    </div>

                    <p className="text-sm mt-12 font-medium">
                        Plan ahead with Towmi! Reserve ambulances, tow trucks, or trucks for a later time, tailored to your convenience – all from the convenience of your mobile device.
                    </p>


                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>   1. Ambulance Reservations: </span> Plan ahead with Towmi! Easily reserve ambulances for future needs, ensuring swift medical assistance with just a few taps – your safety, our priority.                    </p>


                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>  2. Tow Truck On-Demand:  </span> Swiftly book tow trucks on the go or schedule for later, providing reliable roadside assistance wherever and whenever you need it. Towmi's got your back!

                    </p>

                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'> 3. Effortless Truck Bookings: </span> Move heavy loads effortlessly with Towmi's seamless truck bookings. Whether on-demand or scheduled for later, logistics becomes a breeze at your fingertips.

                    </p>

                </div>
            </div>

        </div>)
}

export default ScheduleSection
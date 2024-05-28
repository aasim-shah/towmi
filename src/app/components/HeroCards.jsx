import Image from 'next/image'
import React from 'react'

const HeroCards = () => {
    return (
        <div className='w-full  my-12'>
            <div className="w-10/12 gap-3 mx-auto flex flex-col sm:flex-row">
                <div className="bgClr w-full rounded-[1.3rem] p-5">
                    <div className="w-[10rem] mx-auto h-[10rem]" >
                        <Image className='w-full h-full' src={"/Ambulance.svg"} alt='asset-image' width={500} height={400} />
                    </div>
                    <p className="text-center text-gray-200 font-semibold">Book Ambulance</p>
                    <p className="text-center text-gray-100 px-3 font-light">Towmi: Instantly connect to nearby ambulances for critical medical assistance, ensuring prompt response in emergencies.</p>
                </div>
                <div className="bgClr w-full rounded-[1.3rem] p-5">
                    <div className="w-[10rem] mx-auto h-[10rem]" >
                        <Image className='w-full h-full' src={"/pngwing 1.svg"} alt='asset-image' width={500} height={400} />
                    </div>
                    <p className="text-center text-gray-200 font-semibold">Book Tow Trucks</p>
                    <p className="text-center text-gray-100 px-3 font-light">Towmi: Instant tow truck bookings for breakdowns or accidents, your reliable roadside assistance on the go!</p>
                </div>
                <div className="bgClr w-full rounded-[1.3rem] p-5">
                    <div className="w-[10rem] mx-auto h-[10rem]" >
                        <Image className='w-full h-full' src={"/truck.svg"} alt='asset-image' width={500} height={400} />
                    </div>
                    <p className="text-center text-gray-200 font-semibold">Book  Trucks</p>
                    <p className="text-center text-gray-100 px-3 font-light">Towmi: Effortless truck bookings for seamless logistics—whether on-demand or scheduled, we've got your heavy loads covered!</p>
                </div>
            </div>
        </div>
    )
}

export default HeroCards
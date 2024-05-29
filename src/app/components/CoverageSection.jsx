import Image from 'next/image'
import React from 'react'

const CoverageSection = () => {
    return (
        <div className=' mt-32  w-full '>

            <div className="w-9/12 mx-auto  justify-between  flex flex-col sm:flex-row ">
                <div className="flex w-full sm:w-6/12 flex-col h-[60vh]  ">
                    <div className="flex flex-row items-end ">
                        <span className='text-2xl font-semibold '> 🗺️ Nationwide Coverage</span>
                        <div className="w-[2rem] h-[2rem]">
                            <Image className='w-full h-full' src={"/drops.svg"} alt='asset-image' width={50} height={50} />
                        </div>
                    </div>

                    <p className="text-sm mt-12 font-medium">
                        Towmi &rsquo; s extensive network spans across Nigeria, ensuring comprehensive coverage wherever you are. Drive confidently, knowing help is just a tap away.
                    </p>


                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>   1. Nationwide Coverage : </span>
                        Towmi  &rsquo; s broad network ensures instant assistance across Nigeria, from cityscapes to remote areas. Drive confidently with help at your fingertips.
                    </p>


                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>  2. 24/7 Assurance:  </span>  Towmi provides constant support, offering peace of mind around the clock. Drive confidently, knowing help is just a tap away anytime, day or night.

                    </p>

                    <p className="text-sm mt-12 font-medium">
                        <span className='font-semibold'>  3. On-Road Peace: </span> With Towmi &rsquo; s widespread coverage and unwavering support, experience tranquility on every journey, knowing assistance is there whenever needed.

                    </p>

                </div>




                <div className="w-[20rem] h-[30rem] relative mt-24 sm:mt-0" >
                    <div className="w-[28rem] h-[38rem]  top-[-5rem] left-[-4rem] absolute " >
                        <Image className='w-full h-full ' alt='asset-image' src={"/rings.svg"} width={500} height={400} />
                    </div>
                    <Image className='w-full h-full absolute' alt='asset-image' src={"/rings.svg"} width={500} height={400} />
                    <Image className='w-full absolute h-full' alt='asset-image' src={"/coverage.svg"} width={500} height={400} />
                </div>
            </div>

        </div>)
}

export default CoverageSection
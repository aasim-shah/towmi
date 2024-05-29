import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className=' pt-12  w-full '>

      <div className="w-9/12 mx-auto  justify-between  flex flex-col sm:flex-row ">
        <div className="flex w-11/12  sm:w-7/12 flex-col h-[60vh] justify-between">
          <p className="text-white relative text-[18px] sm:text-[45px] font-[500]">Meet Towmi – Your All-in-One Emergency Companion App in Nigeria!
            <Image className='absolute hidden sm:block bottom-0 left-[-1rem]' alt='asset-image' src={"/circle.svg"} width={210} height={40} />
          </p>


          <p className="text-white text-lg ">Towmi: Nigeria &rsquo; s emergency companion. Swift access to essential services, ensuring peace of mind in any situation – your safety, our priority!</p>

          <div className="flex w-full  sm:w-7/12   pb-3 justify-between flex-row">
            <a href="/downlaod" className=''>
              <Image className='w-full h-full' src={"/Ios.svg"} alt='asset-image' width={500} height={400} />
            </a>
            <a href="/downlaod" className=''>
              <Image className='w-full h-full' src={"/Android.svg"} alt='asset-image' width={500} height={400} />
            </a>

          </div>

        </div>
        <div className="w-[17rem] sm:w-[20rem] mt-12 sm:mt-0 h-[30rem]" >
          <Image className='w-full h-full' src={"/Hero_image.svg"} alt='asset-image' width={500} height={400} />
        </div>
      </div>

    </div>
  )
}

export default HeroSection
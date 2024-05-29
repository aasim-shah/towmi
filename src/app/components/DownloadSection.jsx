import Image from 'next/image'
import React from 'react'

const DownloadSection
 = () => {
  return (
    <div className='  bgClr   w-full '>

      <div className="w-11/12 sm:w-9/12  mx-auto  justify-between  flex flex-row ">
        <div className="flex  sm:w-7/12 flex-col  justify-evenly">
         

          <p className="text-gray-300 text-sm sm:text-lg ">Ready to redefine your emergency assistance experience?</p>
          <p className="text-gray-300 text-xs sm:text-sm ">Download Towmi now and drive with confidence on Nigeria &rsquo; s roads! 🌐🚦</p>

          <div className="flex w-9/12  sm:w-7/12  justify-between flex-row">
            <a href="/downlaod" className=''>
              <Image className='w-full h-full' src={"/Ios.svg"} alt='asset-image' width={500} height={400} />
            </a>
            <a href="/downlaod" className=''>
              <Image className='w-full h-full' src={"/Android.svg"} alt='asset-image' width={500} height={400} />
            </a>

          </div>

        </div>
        <div className="w-[20rem] mt-12  relative flex items-end justify-end mb-0 pb-0 h-[13rem] sm:h-[20rem]" >
          <Image className='w-full h-full absolute top-4' src={"/download_app.svg"} alt='asset-image' width={500} height={400} />
        </div>
      </div>

    </div>
  )
}

export default DownloadSection

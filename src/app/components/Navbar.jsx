import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' px-20 py-5 text-white flex flex-row justify-between items-center'>
        <div className="logo">
          <Image src={"/logo.svg"} alt='asset-image' width={80} height={30} />
        </div>
        <div className=" hidden sm:flex flex-row gap-3">
            <Link href="/">Home</Link>
            <Link href="/">Our Services</Link>
            <Link href="/">Scheduling</Link>
            <Link href="/">Download App</Link>
        </div>
        <a href="/downlaod" className='bg-white py-2 px-3 font-medium rounded-md text-center text-black'>Download App</a>
    </nav>
  )
}

export default Navbar
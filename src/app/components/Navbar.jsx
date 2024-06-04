"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomModal from './ComingSoonModel'

const Navbar = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className='px-5 sm:px-20 py-5 text-white  max-w-[1280px] mx-auto   flex flex-row justify-between items-center'>
            <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />

        <Link href={"/"} className="logo">
          <Image src={"/logo.svg"} alt='asset-image' width={80} height={30} />
        </Link>
        {/* <div className=" hidden sm:flex flex-row gap-3">
            <Link href="/">Home</Link>
            <Link href="/">Our Services</Link>
            <Link href="/">Scheduling</Link>
            <Link href="/">Download App</Link>
        </div> */}
        <button onClick={handleOpenModal} className='bg-white py-2 px-3 font-medium rounded-md hover:bg-[#042E59] hover:border hover:text-white text-center text-black'>Download App</button>
    </nav>
  )
}

export default Navbar
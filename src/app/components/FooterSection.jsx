import Image from 'next/image'
import React from 'react'

const FooterSection = () => {
    return (
        <div className="flex mt-12 pb-5 sm:w-10/12 mx-auto justify-evenly flex-row">
            <div className="flex flex-col w-3/12">
                <div className="logo">
                    <Image src={"/logo_blac.svg"} width={80} alt='asset-image' height={30} />
                </div>
                <p className="text-sm font-medium mt-5">
                    Lorem ipsum dolor sit amet consectetur. Eget eget porta est tellus aliquet nulla. Ultrices quis.
                </p>
                <div className="flex flex-row gap-4 mt-5">
                    <div className="w-8 h-8">
                    <Image src={"/fb.svg"} width={80} alt='asset-image' height={30} />
                    </div>
                    <div className="w-8 h-8">
                    <Image src={"/x.svg"} width={80} alt='asset-image' height={30} />
                    </div>
                    <div className="w-8 h-8">
                    <Image src={"/insta.svg"} width={80} alt='asset-image' height={30} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 w-3/12">
                <p className="font-bold mb-5">Company</p>
                <p className="text-sm font-medium">Partner With Us  </p>
                <p className="text-sm font-medium">FAQs  </p>
                <p className="text-sm font-medium">Privacy Policy  </p>
            </div>
            <div className="flex flex-col gap-3 w-3/12">
                <p className="font-bold mb-5">Contact Us</p>
                <p className="text-sm font-medium">21 St Omers Road, Hitchin  </p>
                <p className="text-sm font-medium">+44 7700 900984  </p>
                <p className="text-sm font-medium">info@towmi.com  </p>
            </div>
        </div>
    )
}

export default FooterSection
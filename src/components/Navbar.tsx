import React from 'react'
import Link from "next/link"
import Image from "next/image"


export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5] ring-gray-300 px-2 ">
            <Image src="/search.png" alt="" width={14} height={14} />
            <input type="text" placeholder="search..." className='w-[200px] p-2 bg-transparent outline-none' />
        </div>
        {/* ICONS AND USER */}
        <div className="flex items-center align-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={20} />
                {/* <span className="text-xs leading-3 font-medium text-red-500">2</span>  */}
                <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-ful bg-yellow-500 text-white text-center rounded-full text-xs'>1</div>
            </div>
            <div className="flex flex-col">
                <span className='text-xs leading-3 font-medium'>Ethem Kanidagli</span>
                <span className="text-[10px] text-grey-500 text-right ">Admin</span>
            </div>
            <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
        </div>
    </div>
  )
}

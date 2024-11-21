import React from 'react'
import Image from 'next/image'


export default function TableSearch() {
  return (
    <div className='flex w-full md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 mt-2 px-2' >
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Search..." className='w-[200px] p-2 bg-transparent outline-none' />
    </div>
  )
}

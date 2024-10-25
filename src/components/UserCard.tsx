import React from 'react'
import Image from 'next/image'
export default function UserCard({type}: {type: string}) {
  return (
    <div className="bg-white rounded-2xl odd:bg-ethemPurpleLight even:bg-ethemGreen even:opacity-[0.6] drop-shadow-md p-4 flex-1 min-w-[130px]" /*max-w-[103px]"*/>
        <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600" >2024/25</span>
            <Image src="/more.png" alt="" width={20} height={20}></Image>
        </div>
        <h1 className="text-2xl font-semibold my-4">1,342</h1>
        <h1 className="capitalize text-sm font-medium text-gray-600" >{type}</h1>
    </div>
  )
}




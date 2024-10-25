'use client'
import React from 'react'
import Image from 'next/image'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
    hidden: true,
  },
  {
    name: 'Boys',
    count: 55,

    fill: 'lightblue',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#FDE68A',
  }
];





export default function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 drop-shadow-md" >
        {/* Title */}
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Students</h1>
            <Image className='rounded-full' src="/moreDark.png" alt="" width={20} height={15} />
        </div>
        {/* CHart */}
        <div className=" relative w-full h-[75%]">
              <ResponsiveContainer >
              <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={15} data={data}>
                <RadialBar
           
                  
                  background
            
                  dataKey="count"
                />
                <Legend iconSize={7} layout="horizontal" verticalAlign="top"  />
              </RadialBarChart>
            </ResponsiveContainer>
            <Image  src='/maleFemale.png' alt="" height={50} width={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 " />
        </div>
        {/* Bottom */}
        <div className="flex justify-center gap-16">
            <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 bg-ethemSky rounded-full"></div>
                <h1 className='font-bold'>1,540</h1>
                <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 bg-yellow-200 rounded-full"></div>
                <h1 className='font-bold'>460</h1>
                <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
            </div>
        </div>
    </div>
  )
}

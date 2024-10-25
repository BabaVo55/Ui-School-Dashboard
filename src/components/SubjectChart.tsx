'use client'
import React, { PureComponent } from 'react';
import Image from 'next/image'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Turkish',
    A: 100,
    B: 140,
    fullMark: 150,
  },
  {
    subject: 'Coding',
    A: 140,
    B: 15,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 140,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 85,
    B: 120,
    fullMark: 150,
  },
  {
    subject: 'Maths',
    A: 120,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Arabic',
    A: 20,
    B: 130,
    fullMark: 150,
  },
];

export default function SubjectChart() {

  return (
    <div className='bg-white rounded-lg p-4 h-full drop-shadow-md'>
        <div className=" flex items-center justify-between">
          <h1 className='text-lg font-semibold'>Study Chart</h1>
          <Image src='/moreDark.png' alt='' height={20} width={20} />
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={60} domain={[0, 150]} />
              <Radar name="Ethem" dataKey="A" stroke="blue" fill="blue" fillOpacity={0.4} />
              <Radar name="Zeynep" dataKey="B" stroke="green" fill="green" fillOpacity={0.4} />
            </RadarChart>
        </ResponsiveContainer> 
    </div>
  )
} 
'use client'
import Image from 'next/image';
import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const data =
  [
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      time: "12:00 PM - 2:00 PM",
      description: 'Lorem ipsum dolor'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      time: "12:00 PM - 2:00 PM",
      description: 'Lorem ipsum dolor'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      time: "12:00 PM - 2:00 PM",
      description: 'Lorem ipsum dolor'
    },
  ]


export default function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md drop-shadow-md '>
         <Calendar  onChange={onChange} value={value} />
         <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <Image src="/moreDark.png" alt='' width={20} height={20} />
         </div>
         <div className='flex flex-col gap-4'>
          {data.map((event, index) => (
              <div className='p-5 rounded-md border border-gray-200 border-t-4 odd:border-t-ethemSky even:border-t-ethemPurple' key={event.id}>
                <div className="flex items-center justify-between">
                  <h1 className='font-semibold text-gray-600 '>{event.title}</h1>
                  <span className='text-gray-300 text-xs'>{event.time}</span>
                </div>
                <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
              </div>
          ))}
         </div>
    </div>
  )
}

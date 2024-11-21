import React from 'react'
import BigCalendar from '@/components/BigCalender'
import Announcements from '@/components/Announcements'

export default function TeacherPage() {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row" >
    {/* Left */}
    <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className='text-xl font-semibold'>Schedule</h1>
        <BigCalendar />
      </div>
    </div>
    {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <Announcements />
    </div>
  </div>
  )
}

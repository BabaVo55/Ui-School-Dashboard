import React from 'react'
import UserCard from '../../../components/UserCard'
import CountChart from '../../../components/CountChart'
import SubjectChart from '@/components/SubjectChart'
import FinanceChart from '@/components/FinanceChart'
import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row" >
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8" >
      {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
          {/*Middle CHart  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* CountChart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <SubjectChart />
          </div>
        </div>
        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}
import Image from 'next/image'
import React from 'react'

export default function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
        {/* Left */}
        <div className="w-full xl:w-2/3">
            {/* TOp */}
            <div className="flex flex-col lg:flex-row gap-4 md:flex-row md:flex-wrap ">
                {/* USER INFO CARD */}
                <div className="bg-ethemSky py-6 px-6 rounded-md flex-1 flex gap-4 ">
                    <div className="w-1/3">
                        <Image 
                            src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"                            alt="" 
                            width={144} 
                            height={144} 
                            className="w-36 h-36 rounded-full object-cover" />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                        <h1 className="text-xl font-semibold">Ethem Kanidagli</h1>
                        <p className='text-sm text-gray-500'>A little description about the user</p>
                        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className='w-full md:w-1/3 md:mr-6 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/blood.png" alt="" width={14} height={14} />
                                <span className="">A+</span>
                            </div>
                            <div className='w-full md:w-1/3 md:mr-6 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/date.png" alt="" width={14} height={14} />
                                <span className="">November 2024</span>
                            </div>
                            <div className='w-full md:w-1/3 md:mr-6 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/mail.png" alt="" width={14} height={14} />
                                <span className="">kanidagli.com</span>
                            </div>
                            <div className='w-full md:w-1/3 md:mr-6 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/phone.png" alt="" width={14} height={14} />
                                <span className="">075********</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* SMALL CARDS */}
                <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                    {/* Cards */}
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full h-30 md:w-[45%] lg:w-[45%] xl:w-full '>
                        <Image src="/singleAttendance.png" width={24} height={24} className='w-6 h-6' alt=""  />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>79%</h1>
                            <span className='text-sm text-gray-400'>Attendance</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full h-30 md:w-[45%] lg:w-[45%] xl:w-full '>
                        <Image src="/singleBranch.png" width={24} height={24} className='w-6 h-6' alt=""  />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>22</h1>
                            <span className='text-sm text-gray-400'>Branches</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full h-30 md:w-[45%] lg:w-[45%] xl:w-full '>
                        <Image src="/singleLesson.png" width={24} height={24} className='w-6 h-6' alt=""  />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>3</h1>
                            <span className='text-sm text-gray-400'>Lesson</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full h-30 md:w-[45%] lg:w-[45%] xl:w-full  '>
                        <Image src="/singleClass.png" width={24} height={24} className='w-6 h-6' alt=""  />
                        <div className=''>
                            <h1 className='text-xl font-semibold'>8</h1>
                            <span className='text-sm text-gray-400'>Classes</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="">Schedule</div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-1/3">r</div>
    </div>
  )
}

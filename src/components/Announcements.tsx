import React from 'react'

const data = [
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      time: "12:00 PM - 2:00 PM",
      description: 'Lorem ipsum dolor',
      color: 'ethemBlue',
    },
    {
      id: 2, 
      title: 'Lorem ipsum dolor',
      time: "12:00 PM - 2:00 PM",
      description: 'Lorem ipsum dolor',
      color: 'ethemGreenLight',
    },
    {
      id: 3, 
      title: 'Lorem ipsum dolor',
      time: "12:00 PM - 2:00 PM",
      description: 'Lorem ipsum dolor',
      color: 'ethemPurpleLight',
    },
  ];

export default function Announcements() {
  return (
    <div className='bg-white rounded-md p-4 drop-shadow-md'>
        <div className="flex items-center justify-between">    
            <h1 className='text-xl font-semibold my-4'>Announcements</h1>
            <span className='text-xs text-gray-400'>View all</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className='bg-ethemGreenLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-medium'>Here is some text for reference</h2>
              <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1 mt-1'>2025-01-01</span>
            </div>
            <p className="text-sm text-grey-400">Okay let write some random message here to help visualize</p>
          </div>
          <div className='bg-ethemPurpleLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-medium'>Here is some text for reference</h2>
              <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1 mt-1'>2025-01-01</span>
            </div>
            <p className="text-sm text-grey-400">Okay let write some random message here to help vizualise </p>
          </div>
          <div className='bg-ethemYellowLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-medium'>Here is some text for reference</h2>
              <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1 mt-1'>2025-01-01</span>
            </div>
            <p className="text-sm text-grey-400">Okay let write some random message here to help vizualise </p>
          </div>
          {/* Mapping through  */}
            {/* {
                data.map(item => (
                    <div className='border border-gray-200 rounded-md p-4' style={{backgroundColor: item.color}} key={item.id}>
                        <div className="flex items-center justify-between">
                            <h2 className='font-medium text-gray-700'>{item.title}</h2>
                            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>{item.time}</span>
                        </div>
                        <span className="text-sm text-gray-400 ">{item.description}</span>
                    </div>
                ))
            } */}
        </div>
    </div>
  )
}
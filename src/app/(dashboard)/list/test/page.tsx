import React from 'react'
import FormModal2 from '@/components/FormModal2'
export default function page() {
  return (
    <div className='flex justify-center items-center h-full'>
        <FormModal2 table="parent" type={'create'} blah='hllo'/>
        <FormModal2 table="parent" type={'create'} blah='hllo'/>
        <FormModal2 table="parent" type={'create'} rah='ho' delta='h-6 w-36 bg-red-600'/>
    </div>
  )
}

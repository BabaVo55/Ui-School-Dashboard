import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import {parentsData, role} from '@/lib/data';
import FormModal from '@/components/FormModal'
import { Forum } from 'next/font/google'

type Parent = {
  id:number;
  name:string;
  email?:string;
  students:string[];
  phone:string;
  address:number;
}

const columns = [
  {
    header:"Info",
    accessor:"info"
  },
  {
    header: "Student Names", 
    accessor: "students", 
    className:"hidden md:table-cell"
  },
  {
    header: "Phone", 
    accessor: "phone", 
    className:"hidden md:table-cell"
  },
  {
    header: "Address", 
    accessor: "address", 
    className:"hidden md:table-cell"
  },
  {
    header: "Actions", 
    accessor: "action", 
    className:"hidden md:table-cell"
  },
]



export default function ParentListPage() {

  const renderRow = (item: Parent) => (
    
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm odd:hover:bg-ethemSkyLight'>
      <td className='flex items-center gap-4 p-4'>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell" >{item.students.join(',')}</td>
      <td className="hidden md:table-cell" >{item.phone}</td>
      <td className="hidden md:table-cell" >{item.address}</td>
      <td className=''>
        <div className="flex items-center gap-2">
          {/* <Link href={`/liar/teacher/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemSky" >
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link> */}
          {role === 'admin' &&(
            <>
            <FormModal table='parent' type='update' data={item} />
             {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemPurpleLight" >
                 <Image src="/delete.png" alt="" width={16} height={16} />
             </button> */}
            <FormModal table='parent' type='delete' />
            </>
        )}
        </div>
      </td>
    </tr>
  )
  

  return (
    <div className='bg-white p4 rounded-md flex-1 border-4 m-4 mt-0'>
      {/* Top section */}
      <div className="flex items-center justify-between p-2">
        <h1 className="hidden  md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto" >
          <TableSearch />
          <div className="flex items-center gap-4 mt-2 mr-2">
            <button className="button1 w-8  flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="button1 w-8 flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            {/* <button className="button1 w-8 flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button> */}
            <FormModal type='create' table='parent' classOn={true} />
          </div>
        </div>
      </div>
      {/* List section */}
      <Table columns={columns} row={renderRow} data={parentsData}/>
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

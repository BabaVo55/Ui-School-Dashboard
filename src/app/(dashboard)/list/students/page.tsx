import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import {role, studentsData} from '@/lib/data';

type Student = {
  id:number;
  studentId:string;
  name:string;
  email?:string;
  photo:string;
  phone?:string;
  grade:number;
  classes:string;
  address:string;
}

const columns = [
  {
    header:"Info",
    accessor:"info"
  },
  {
    header: "Student ID", 
    accessor: "studentId", 
    className:"hidden md:table-cell"
  },
  {
    header: "Grade", 
    accessor: "grade", 
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



export default function StudentListPage() {

  const renderRow = (item: Student) => (
    
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm odd:hover:bg-ethemSkyLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image 
          src={item.photo} 
          alt=""  
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"  />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell" >{item.studentId}</td>
      <td className="hidden md:table-cell" >{item.grade}</td>
      <td className="hidden md:table-cell" >{item.phone}</td>
      <td className="hidden md:table-cell" >{item.address}</td>
      <td className=''>
        <div className="flex items-center gap-2">
          <Link href={`/liar/teacher/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemSky" >
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === 'admin' &&(
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemPurpleLight" >
                <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
        )}
        </div>
      </td>
    </tr>
  )
  

  return (
    <div className='bg-white p4 rounded-md flex-1 border-4 m-4 mt-0'>
      {/* Top section */}
      <div className="flex items-center justify-between p-2">
        <h1 className="hidden  md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto" >
          <TableSearch />
          <div className="flex items-center gap-4 mt-2 mr-2">
            <button className="button1 w-8  flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="button2 w-8 flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="button3 w-8 flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List section */}
      <Table columns={columns} row={renderRow} data={studentsData}/>
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

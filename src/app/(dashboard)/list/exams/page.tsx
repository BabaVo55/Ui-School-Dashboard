import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import {examsData, role} from '@/lib/data';
import FormModal from '@/components/FormModal'

type Exam = {
  id:number
  subject:string;  
  class:string;
  teacher:string;
  date:number;
}

const columns = [
  {
    header:"Subject",
    accessor:"subject"
  },
  {
    header: "Class", 
    accessor: "class", 
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },
  {
    header: "Date",
    accessor: "date",
    // className: "hidden md:table-cell"
  },

  {
    header: "Actions", 
    accessor: "action", 
  },
]



export default function ExamsListPage() {

  const renderRow = (item: Exam) => (
    
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm odd:hover:bg-ethemSkyLight'>
      <td className='flex items-center gap-4 p-4'>{item.subject}</td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td>{item.date}</td>

      <td className=''>
        <div className="flex items-center gap-2">
          {/* <Link href={`/liar/teacher/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemSky" >
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link> */}
          {role === 'admin' &&(
            <>
            <FormModal table='exam' type="update" />
            {/* // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemPurpleLight" >
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button> */}
            <FormModal table="exam" type='delete' classOn={false}/>
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
        <h1 className="hidden  md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto" >
          <TableSearch />
          <div className="flex items-center gap-4 mt-2 mr-2">
            <button className="button1 w-8  flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="button1 w-8 flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="button1 w-8 flex items-center justify-center rounded-full bg-yellow-400" >
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List section */}
      <Table columns={columns} row={renderRow} data={examsData}/>
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TableSearch from '@/components/TableSearch'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import {classesData, role} from '@/lib/data';
import FormModal from '@/components/FormModal'

type Classes = {
  id:number
  name:string;
  capacity: number;
  grade:number;
  supervisor:string;
}

const columns = [
  {
    header:"Class Name",
    accessor:"name"
  },
  {
    header: "Capacity Names", 
    accessor: "capacity", 
    className: "hidden md:table-cell"

  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell"
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions", 
    accessor: "action", 
    className:"hidden md:table-cell"
  },
]



export default function ClassesListPage() {

  const renderRow = (item: Classes) => (
    
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm odd:hover:bg-ethemSkyLight'>
      <td className='flex items-center gap-4 p-4'>{item.name}</td>
      <td className='hidden md:table-cell'>{item.capacity}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.supervisor}</td>

      <td className=''>
        <div className="flex items-center gap-2">
          {/* <Link href={`/liar/teacher/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemSky" >
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link> */}
          {role === 'admin' &&(
            <>
              <FormModal table='subject' type='update' classOn={false} data={item}/>
               {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-ethemPurpleLight" >
                 <Image src="/delete.png" alt="" width={16} height={16} />
               </button> */}
              <FormModal table='classes' type='delete' classOn={false} data={item.id} />
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
        <h1 className="hidden  md:block text-lg font-semibold">All Classes</h1>
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
      <Table columns={columns} row={renderRow} data={classesData}/>
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

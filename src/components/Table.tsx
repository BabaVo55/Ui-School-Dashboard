import React from 'react'

export default function Table({
    columns, row, data
}: {
    columns:{header:string; accessor:string; className?:string}[];
    row: (item:any) => React.ReactNode;
    data: any[];
}){
  return (
    <table className="w-full mt-4">
        <thead>
            <tr className="text-left text-gray-500 text-xm">
                {columns.map(col =>(
                    <th key={col.accessor} className={col.className}>{col.header}</th>
                ) )}
            </tr>
        </thead>
        <tbody>
            {data.map((item) => row(item))}
        </tbody>
    </table>
  )
}

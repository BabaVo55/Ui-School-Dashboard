import React from 'react'
// let temp: Array<ListNode | null> = [];
export default function FormModal2({table,type,data,id, blah, rah, delta}: 
    {
        table: 
        'teacher' 
        | 'student' 
        | 'parent' 
        | 'subject' 
        | 'class' 
        | 'lesson' 
        | 'exam' 
        | 'assignment'
        | 'result'
        | 'attendance'
        | 'event'
        | 'announcement';
        type: "create" | 'edit' | 'delete';
        data?: any;
        id?: number;
        blah: string;
        rah: string;
    }
) {

    const design = type === 'create' ? 'tester' : 'h-7'
    const writing = table === 'student' ? 'I am a young Buck' :  'Adults talking, hush¬¬'
  return (
    <div className='flex flex-col items-center justify-center gap-8 h-full w-full '>
        <button className={`${design}`} >press that shit but first hover it</button>
        <h1>{writing}</h1>
        <p>{blah}</p>
        <button className={delta} >{rah}</button>
    </div>
  )
}

import React from 'react'
// let temp: Array<ListNode | null> = [];
export default function FormModal2({table,type,data,id}: 
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
    }
) {

    const design = type === 'create' ? 'button1' : 'h-7'
  return (
    <div>
        <button className={design}></button>
    </div>
  )
}

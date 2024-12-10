"use client";

import Image from 'next/image';
import React from 'react'

export default function FormModal({table, type,data,id}: {
    table:
        | "teacher" 
        | "student" 
        | "parent" 
        | "subject" 
        | "class" 
        | "lesson" 
        | "exam" 
        | "assignment" 
        | "result" 
        | "attendance" 
        | "event" 
        | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number; 
})  {

  const size = type === "create" ? 'w-8 h-8' : 'w-7 h-7';
  const bgColor = type === "create" ? 'bg-ethemYellow' : type=== 'update' ? 'bg-ethemSky' : 'bg-ethemPurple';
  return (
    <>
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={} >
            <Image src="" alt="" width={} height={} />
        </button>
    </>
  )
}

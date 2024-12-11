"use client";

import Image from 'next/image';
import React from 'react'

export default function FormModal({table, type, data, id, classOn}: {
    table:
        | "teacher" 
        | "student" 
        | "parent" 
        | "subject" 
        | "classes" 
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
    classOn?: boolean;
})  {

  const size = type === "create" ? 'w-8' : 'w-7';
  const bgColor = 
    type === "create" 
    ? 'bg-yellow-400' 
    : type === 'update' 
    ? 'bg-ethemSky' 
    : 'bg-ethemPurple';

  const activate = classOn ? 'button1' : 'h-7'
  return (
    <>
        <button className={`${size} ${activate} ${bgColor} flex items-center justify-center rounded-full `} >
            <Image src={`/${type}.png`} alt="" width={16} height={16} />
        </button>
    </>
  )
}

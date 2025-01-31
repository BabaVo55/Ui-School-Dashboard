'use client'

import { z } from "zod";

const schema = z.object({
    username: z.string().min(3, { message: 'Username bust be minimum 3 chars' }),
    age: z.number().min(10),
  });
  

export default function TeacherForm({
    type, data
}:{
    type:"create" | "update";
    data?:any
}) {
  return (
    <form className="">input</form>
  )
}

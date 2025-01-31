'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
    username: z.string().min(3, { message: 'Username bust be minimum 3 chars' })
    .max(20, {message: "User can be max 20 chars long"}),
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(8, {message: "Password must be 8 chars min"}),
    firstName: z.string().min(1, {message: 'Your name is much too short'}),
    lastName: z.string().min(1, {message: 'Your name is much too short'}),
    phone: z.string().min(1, {message: 'Your name is much too short'}),
    address: z.string().min(1, {message: 'Your name is much too short'}),
    bloodType: z.string().min(1, { message: "Enter your blood type"}),
    birthday: z.date({message: 'birthday is required'}),
    sex: z.enum(['male','female'], {message: "Sex is a must"}),
    img: z.instanceof(File, {message: "image is required"}),
  });
  
type Inputs = z.infer<typeof schema>

export default function TeacherForm({
    type, data
}:{
    type:"create" | "update";
    data?:any
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data=>{
        console.log(data)
    })

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">
                Create a new Teacher
            </h1>
            <span className="text-xs text-gray-400 font-medium">
                Authentication Info
            </span>
            <InputField 
                label="Username" 
                name="username"
                defaultValue={data?.username} 
                register={register} 
                error={errors.username}
            />
            <InputField 
                label="Email" 
                name="email"
                defaultValue={data?.email} 
                register={register} 
                error={errors.email}
            />
            <InputField 
                label="Password" 
                name="password"
                type='password'
                defaultValue={data?.password} 
                register={register} 
                error={errors.password}
            />
            <span className="text-xs text-gray-400 font-medium">
                Personal Info
            </span>
            <InputField 
                label="Last Name" 
                name="lastName"
                defaultValue={data?.lastNme} 
                register={register} 
                error={errors.lastName}
            />
            <InputField 
                label="Phone" 
                name="phone"
                type='phone'
                defaultValue={data?.phone} 
                register={register} 
                error={errors.phone}
            />
            <InputField 
                label="Address" 
                name="address"
                type='address'
                defaultValue={data?.address} 
                register={register} 
                error={errors.address}
            />
            <InputField 
                label="Blood Type" 
                name="bloodType"
                type='bloodType'
                defaultValue={data?.bloodType} 
                register={register} 
                error={errors.bloodType}
            />

            <button className="bg-blue-400 text-white m-4 p-2 rounded-xl" >
                {type === 'create' ? 'Submit' : "Update"}
            </button>
        </form>
  )
}

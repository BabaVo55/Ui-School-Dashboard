'use client'

import Image from "next/image";
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

export default function StudentForm({
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
                Create a new Student
            </h1>
            <span className="text-xs text-gray-400 font-medium">
                Authentication Info
            </span>
            <div className="flex flex-wrap justify-between gap-4">
                
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
            </div>
            <span className="text-xs text-gray-400 font-medium">
                Personal Info
            </span>
            <div className="flex flex-wrap justify-between gap-4">

            <InputField 
                label="First Name" 
                name="firstName"
                defaultValue={data?.firstName} 
                register={register} 
                error={errors.firstName}
                />
            <InputField 
                label="Last Name" 
                name="lastName"
                defaultValue={data?.lastName} 
                register={register} 
                error={errors.lastName}
                />
            <InputField 
                label="Phone" 
                name="phone"
                defaultValue={data?.phone} 
                register={register} 
                error={errors.phone}
                />
            <InputField 
                label="Address" 
                name="address"
                defaultValue={data?.address} 
                register={register} 
                error={errors.address}
                />
            <InputField 
                label="Blood Type" 
                name="bloodType"
                defaultValue={data?.bloodType} 
                register={register} 
                error={errors.bloodType}
                />
            <InputField 
                label="Birthday" 
                name="birthday"
                defaultValue={data?.birthday} 
                register={register} 
                error={errors.birthday}
                type='date'
                
                />
            <div className="flex flex-col gap-2 w-full  md:w-1/4">
                <label className="text-xs text-gray-500">
                    Sex
                </label>
                <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("sex")} defaultValue={data?.sex}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.sex?.message && (
                    <p className="text-xs text-red-600">
                        {errors.sex.message.toString()}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-2 w-full  md:w-1/4 justify-center">
                <label className="text-xs text-gray-500 flex items-center gap-3 cursor-pointer" htmlFor="img">
                    <Image src="/upload.png" width={28} height={28} alt=""></Image>
                    <span className="">Upload a Photo</span>
                </label>
                <input type="file" id="img"{...register("img")} className="hidden" />
                {errors.img?.message && (
                    <p className="text-xs text-red-600">
                        {errors.img.message.toString()}
                    </p>
                )}
            </div>
            </div>

            <button className="bg-blue-400 text-white m-4 p-2 rounded-xl" >
                {type === 'create' ? 'Submit' : "Update"}
            </button>
        </form>
  )
}
 //done 1 step left
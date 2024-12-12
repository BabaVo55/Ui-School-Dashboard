import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { role } from '@/lib/data';
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
export default function LoginPage() {
  return (
    <div className='flex flex-row'>
      {/* left */}
      <div className="h-full w-1/6 bg-white drop-shadow pl-4 overflow-scroll">
      <Image src='/Small-logo-no-bg.png' alt='' width={60} height={60} className='mt-4'/>
      <div className='mt-4 text-sm'>
      {
        menuItems.map((i) => (
          <span>
            {i.items.map((item) => {
              return (
                <div className='p-4 '>
                  <Link href={item.href} className='flex flex-row gap-3'>
                    <Image src={item.icon} height={20} width={20} alt='' />
                    <span className=''>{item.label}</span>
                  </Link>
                </div>
              )})
            }
          </span>
        ))
      }
    </div>
      </div>
      {/* right */}
      <div className="h-full w-5/6 bg-gray-300">

      </div>
    </div>
  )
}
// {menuItems.map((i) => (
//   <div  className='flex flex-col gap-2' key={i.title}>
//     <span className='hidden lg:block text-gray-400 font-light my-4'>{i.title}</span>
//     {i.items.map((item) => {
//       if (item.visible.includes(role)){
//         return (
//           <Link  href={item.href} key={item.label} className="flex item-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-ethemSkyLight" >
//           <Image src={item.icon} alt="" width={20} height={20} />
//           <span className='hidden lg:block'>{item.label}</span>
//         </Link>
//         )
//       }
//     })}
//   </div>
// ))}
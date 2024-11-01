"use client";
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
 
  BreadcrumbList,
  BreadcrumbPage,
  
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { useTheme } from '@/components/Features/reducers/useTheme'

const Breadcrum = ({title}) => {
    const [lightTheme]=useTheme()
    title= String(title);
    const tilteShort = title.length > 80 ? `${title.substring(0, 80)}...`:title; 
  return (
    
<div className='flex flex-row my-5'>
    <ul className='flex flex-row'>
        <li>
        <Link href={"/"} className={`${lightTheme?"text-[color:var(--grey-003)] hover:text-[color:var(--grey-002)]":"text-[color:var(--grey-005)] hover:text-[color:var(--grey-006)]"} mx-2`}>Home</Link>
    </li>
    <li  className={`${lightTheme?"text-[color:var(--grey-0010]":"text-[color:var(--grey-007]"} mx-2`}>/</li>
    <li className={`${lightTheme?"text-[color:var(--grey-002)]":"text-[color:var(--grey-006)]"} mx-2`}>
       {tilteShort}
    </li>
    </ul>
</div>

  )
}

export default Breadcrum
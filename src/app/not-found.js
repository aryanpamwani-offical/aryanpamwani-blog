// Suggested code may be subject to a license. Learn more: ~LicenseLog:1385556750.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:206066924.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3017585626.
"use client";
import React from 'react'
import { useSelector } from 'react-redux'
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
 export default function  NotFound(){
const  lightTheme=useSelector((state)=>state.themeKey);
  return (
    <>
    <div className={`flex flex-col w-full m-auto items-center justify-center ${lightTheme ? "bg-[color:var(--grey-007)]" : "bg-[color:var(--grey-001)]"}`}>
      <div className="flex flex-col items-center justify-center h-screen text-center font-sans">
        <div className="inline-block  mb-4">
          <h1 className="next-error-h1 inline-block mr-4 pr-4 border-r border-gray-300 font-medium text-2xl align-top leading-[49px]"
          style={{ borderRight: '1px solid rgba(0, 0, 0, 0.3)' }}>
            404
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal leading-[49px]">
              Page not found.
            </h2>
          </div>
        </div>
    <Link  href={"/"} className={`opens-sans ${buttonVariants({ variant:lightTheme? "default_borderless":"dark_borderless" })}`}>Go Back
          
          </Link>
      </div>
    
    </div>
    </>
  )
}


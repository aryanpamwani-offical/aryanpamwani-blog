'use client'
import { useTheme } from '@/components/Features/reducers/useTheme';
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
const Hero = ({firstText,lastText,isHero}) => {
  const [lightTheme] = useTheme();
  return (
    <section className='flex flex-col m-auto w-full my-10 '>
        <div className="flex flex-col m-auto justify-center items-center ">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl justify-center ml-5 items-center text-center flex opens-sans font-bold tracking-tight ">{firstText} </h1>
            <div className="lg:text-7xl md:text-6xl sm:text-5xl text-5xl justify-center items-center text-center flex opens-sans font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 p-2 m-2">
   {lastText}
</div>

        <div className=" mt-5">
         {isHero?  <Link href={"https://aryanpamwani.in/contact"} className={`${buttonVariants({ variant:lightTheme?'default_borderless':'dark_borderless'})} inter w-11/12 transition-theme px-8 py-4`} >Hire Me</Link>:<></>}
        </div>
        </div>
    </section>
  )
}

export default Hero
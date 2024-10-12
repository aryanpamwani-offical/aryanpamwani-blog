'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useSelector } from 'react-redux';
const Hero = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <section className='flex flex-col m-auto w-full mb-20 '>
        <div className="flex flex-col m-auto justify-center items-center ">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl justify-center ml-5 items-center text-center flex inter font-bold tracking-tight ">Ignite Your </h1>
            <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-5xl justify-center items-center text-center flex inter font-bold  tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600">Journey</h1>
        <div className=" mt-5">
           <Button variant={lightTheme?'default_borderless':'dark_borderless'} className="inter w-11/12">Get Started</Button>
        </div>
        </div>
    </section>
  )
}

export default Hero
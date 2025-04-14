'use client';
import React, { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { navItems } from './NavData';
import Image from 'next/image';
import { useTheme } from '@/components/Features/reducers/useTheme';
import { MdOutlineClose } from "react-icons/md";
import { cloudinaryImageLoader } from '@/lib/cloudinaryImageOptimize';


const NavResp = () => {
  const [status, setStatus] = useState(false);
  const [lightTheme] = useTheme();
  const items = navItems.length;

  return (
    <>
      <nav className={`transition-all duration-1000 ease-in-out fixed w-full border-b transition-theme ${lightTheme ? "border-[color:var(--grey-006)]" : "border-[color:var(--grey-004)]"} z-50 ${status ? ' lg:hidden md:flex sm:flex flex flex-col flex-wrap bg-inherit' : 'h-24 lg:hidden md:flex sm:flex flex flex-row flex-wrap bg-inherit'}`}>
        <div className="flex justify-evenly items-start   p-5 h-24 w-full">
          <Link href={"/"}>
            <Image 
           
              src="/logo.jpg" 
              width={80} 
              height={80} 
              className='w-auto h-20 rounded-full -mt-4' 
              alt='logo' 
              priority={true} 
            />
          </Link>
          <div className="flex justify-end w-2/3 p-5" onClick={() => setStatus(!status)}>
          {!status ? 
            <Image 
            loader={cloudinaryImageLoader}
              src="v1724922497/menu_crwwxl.png" 
              width={56} 
              height={56} 
              className={`${lightTheme ? 'w-auto h-8' : 'w-auto h-8 icon-dark'} my-auto pl-6 ml-5`} 
              priority={true} 
              alt='menu' 
            />
          : 
            <MdOutlineClose 
              className={`${lightTheme ? 'w-auto h-8 text-[var(--grey-001)]' : 'w-auto h-8 icon-dark'} my-auto pl-6 ml-5 text-4xl text-[var(--grey-001)]`} 
              priority={true} 
              alt='menu' 
            />
          }
        </div>

        </div>
       
        <ul className={`flex flex-col space-grotesk transition-all ease-in-out ${status ? 'opacity-100 translate-y-0 duration-1000' : 'opacity-0 -translate-y-10 duration-500 nav-disabled'}  justify-center  w-full`}>
          {navItems?.slice(items - 3, items - 1).map((item, key) => (
            <li className="flex flex-col duration-1000 transition nav-animate-open ease-in-out content-center m-auto my-5 hover:font-bold font-medium" key={key}>
              <Link href={item.location} onClick={() => setStatus(false)} className='duration-1000 transition nav-animate-open ease-in-out opens-sans rounded-md relative inter underline-effect'>
                {item.name}
              </Link>
            </li>
          ))}
          {navItems?.slice(items - 1, items).map((item, key) => (
            <Link href={item.location} key={key} className={`${buttonVariants({ variant: lightTheme ? "default_border" : "dark_border" })} flex flex-col content-center m-auto my-5 inter`} onClick={() => setStatus(false)}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavResp;

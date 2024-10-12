'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { navItems } from './NavData';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const NavResp = () => {
  const [status, setStatus] = useState(false);
  const lightTheme = useSelector((state) => state.themeKey);
 
  let items=navItems.length;
  return (
    <>
      <nav className={`transition-all duration-1000 ease-in-out fixed w-full border-b ${lightTheme?"border-[color:var(--grey-006)]":"border-[color:var(--grey-004)]"} z-50 ${status ? 'h-screen lg:hidden md:flex sm:flex flex flex-row flex-wrap bg-inherit' : 'h-24 lg:hidden md:flex sm:flex flex flex-row flex-wrap bg-inherit'}`}>
        <div className="flex justify-start w-1/3 m-auto p-5 h-24">
        <Link href={"/"}><Image src="https://res.cloudinary.com/dttek3gqg/image/upload/v1724921045/navlogo_a1hivv.webp" width={80} height={80} className='w-20 pl-6 ml-10' alt='logo' priority={true} /></Link>
        </div>
        <div className="flex justify-end w-2/3 p-5" onClick={() => setStatus(!status)}>
          <Image src={"https://res.cloudinary.com/dttek3gqg/image/upload/v1724922497/menu_crwwxl.png"} width={56} height={56} className={`${lightTheme ? 'w-14' : 'w-14 icon-dark'} my-auto pl-6 ml-5`} priority={true} alt='menu' />
        </div>

        <ul className={`flex flex-col space-grotesk transition-all ease-in-out ${status ? 'opacity-100 translate-y-0 duration-1000' : 'opacity-0 -translate-y-10 duration-500'} content-center items-center justify-center m-auto w-full`}>
          {navItems?.slice(items-6,items-1).map((items, key) => (
            <li className="flex flex-col duration-1000 transition nav-animate-open ease-in-out content-center m-auto my-5 hover:font-bold font-medium" key={key}>
              <Link href={items.location} onClick={() => setStatus(false)} className='duration-1000 transition nav-animate-open ease-in-out opens-sans rounded-md relative inter underline-effect'>
                {items.name}
              </Link>
            </li>
          ))}
          {navItems?.slice(items-1,items).map((items, key) => (
            <Link href={items.location} key={key} className="flex flex-col content-center m-auto my-5" onClick={() => setStatus(false)}>
              <Button variant={lightTheme ? 'default' : 'dark'} className="inter">{items.name}</Button>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavResp;

'use client';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navItems } from './NavData';
import { useTheme } from '@/components/Features/reducers/useTheme';

const NavPc = () => {
  const [lightTheme] = useTheme();
  const items = navItems.length;

  return (
    <>
      <nav className={lightTheme ? "navbar nav-light transition-theme" : "navbar nav-dark transition-theme"}>
        <div className="flex content-center justify-start w-1/3 p-5">
          <Link href={"/"}>
            <Image 
              src="https://res.cloudinary.com/dttek3gqg/image/upload/v1724921045/navlogo_a1hivv.webp" 
              width={90} 
              height={90} 
              className='w-auto h-20 pl-6 ml-10' 
              alt='logo' 
              priority={true} 
            />
          </Link>
        </div>
        <div className="flex lg:flex md:flex sm:flex content-center justify-end w-2/3 my-auto">
          <ul className="flex flex-row space-grotesk content-center mr-5 pr-14">
            {navItems?.slice(items - 3, items - 1).map((item, key) => (
              <li key={key} className=''>
                <Link href={item.location} className='flex font-medium mt-2 mr-5 px-1.5 py-1 opens-sans relative inter underline-effect' >
                  {item.name}
                </Link>
              </li>
            ))}
            {navItems?.slice(items - 1, items).map((item, key) => (
              <Link href={item.location} key={key} className={`${buttonVariants({ variant: lightTheme ? "default_border" : "dark_border" })} inter transition-theme`}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavPc;

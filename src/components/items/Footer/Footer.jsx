"use client";

import { useTheme } from '@/components/Features/reducers/useTheme';
import { cloudinaryImageLoader } from '@/lib/cloudinaryImageOptimize';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const [lightTheme] = useTheme();
 
  return (
    <footer className={lightTheme ? 'footer footer-light transition-theme' : 'footer footer-dark transition-theme'}>
      <Image 
         loader={cloudinaryImageLoader}
        src={'v1744781034/logo_zk1qty.webp'} 
        width={220} 
        height={220} 
        alt='logo' 
        priority={true} 
        className='w-24 h-24 rounded-full mt-10'
        
      />
      <div className="flex flex-row justify-between my-10">
        <Link href={"https://github.com/aryanpamwani-offical"}>
          <Image 
           loader={cloudinaryImageLoader}
            src={'v1724922910/github_daezwy.png'} 
            width={40} 
            height={40} 
            className={lightTheme ? 'mx-2 transition-theme' : 'mx-2 icon-dark transition-theme'} 
            alt='social' 
            loading='lazy' 
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/aryanpamwani"}>
          <Image 
           loader={cloudinaryImageLoader}
            src={'v1724922969/linkedin_fjw1l4.webp'} 
            width={40} 
            height={40} 
            className={lightTheme ? 'mx-2 transition-theme' : 'mx-2 icon-dark transition-theme'} 
            alt='social' 
            loading='lazy' 
          />
        </Link>
        <Link href={"https://twitter.com/aryanpamwanii"}>
          <Image 
            loader={cloudinaryImageLoader}
            src={'v1724922997/twitterx_qd3jp1.png'} 
            width={40} 
            height={40} 
            className={lightTheme ? 'mx-2 transition-theme' : 'mx-2 icon-dark transition-theme'} 
            alt='social' 
            loading='lazy' 
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

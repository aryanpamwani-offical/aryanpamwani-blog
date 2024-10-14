"use client";
import React from 'react'

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { buttonVariants } from '@/components/ui/button';

const BlogItems = ({imgUrl,title,desc,category,postId,date}) => {
  const dateFormat=new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
  
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
   
    
    <div className={lightTheme?"blogpost footer-light ":"blogpost blogpost-dark"}>
      <img className="lg:h-48 md:h-36 w-full object-cover object-center"  src={imgUrl} alt="blog"/>
      <div className="p-6">
        <h2 className={lightTheme?"blogpost-category blogpost-category-light":"blogpost-category blogpost-category-dark"}>{category}</h2>
        <h1 className="title-font text-lg font-medium text-[color:var(--grey-002) mb-3 opens-sans">{title}</h1>
        <h2 className={lightTheme?"blogpost-category blogpost-category-light":"blogpost-category blogpost-category-dark"}>{dateFormat}</h2>
        <p className="leading-relaxed mb-3 text-[color:var(--grey-004)] inter">{desc}</p>
        <div className="flex items-center flex-wrap ">
        <Link href={`/blog/${postId}`} className={`opens-sans ${buttonVariants({ variant:lightTheme? "default_borderless":"dark" })}`}>Read More
        </Link>
          {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span> */}
        </div>
      </div>
    </div>
 
      
  )
}

export default BlogItems
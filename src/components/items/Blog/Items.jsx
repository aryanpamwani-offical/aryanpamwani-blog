"use client";
import React from 'react'

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { buttonVariants } from '@/components/ui/button';
import { dateFormat } from '@/components/dateFormat';

const BlogItems = ({imgUrl,title,desc,category,postId,date}) => {
  
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
   
    
    <div className={lightTheme?"blogpost footer-light ":"blogpost blogpost-dark"}>
      <img className="lg:h-48 md:h-36 w-full object-cover object-center"  src={imgUrl} alt="blog"/>
      <div className="p-6">
        <h2 className={lightTheme?"blogpost-category blogpost-category-light":"blogpost-category blogpost-category-dark"}>{category}</h2>
        <h1 className="title-font text-lg font-medium text-[color:var(--grey-002) mb-3 opens-sans">{title}</h1>
        <h2 className={lightTheme?"blogpost-category blogpost-category-light":"blogpost-category blogpost-category-dark"}>{dateFormat(date)}</h2>
        <div className="leading-relaxed mb-3 text-[color:var(--grey-004)] inter "  dangerouslySetInnerHTML={{ __html: desc }}/>
        
        <div className="flex items-center flex-wrap ">
        <Link href={`/blog/${postId}`} className={`opens-sans ${buttonVariants({ variant:lightTheme? "default_borderless":"dark" })}`}>Read More
        </Link>
         
        </div>
      </div>
    </div>
 
      
  )
}

export default BlogItems
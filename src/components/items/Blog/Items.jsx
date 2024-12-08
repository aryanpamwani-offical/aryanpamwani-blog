"use client";
import React, { } from 'react'

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { dateFormat } from '@/lib/dateFormat';
import { useTheme } from '@/components/Features/reducers/useTheme';

const BlogItems = ({imgUrl,title,desc,category,postId,date,slug,checkBlogPage}) => {
// Convert desc to a string first
const [lightTheme] =useTheme();
const description = String(desc);
const shortDesc = description.length > 100 ? `${description.substring(0, 100)}...`:description; 
  return (
   
    
    <div className= {`${lightTheme?`${checkBlogPage?`blog-blogpost`:`blogpost`} footer-light transition-theme`:`${checkBlogPage?`blog-blogpost`:`blogpost`} blogpost-dark transition-theme`} `} >
      <img className= {`${checkBlogPage?" w-fit h-60":"lg:h-48 md:h-36 w-full object-cover object-center"}`}  src={imgUrl} alt="blog"/>
      <div className="p-6">
        <h2 className={`${lightTheme?"blogpost-category blogpost-category-light ":"blogpost-category blogpost-category-dark"}`}>{category}</h2>
        <h1 className="title-font text-lg font-medium text-[color:var(--grey-002) mb-3 opens-sans">{title}</h1>
        <h2 className={`${lightTheme?"blogpost-category blogpost-category-light":"blogpost-category blogpost-category-dark"}`}>{dateFormat(date)}</h2>
     
        <p className=" text-sm font-normal text-[color:var(--grey-003) my-4 opens-sans">{shortDesc}</p>
        {/* <div className="leading-relaxed mb-3 text-[color:var(--grey-004)] inter "  dangerouslySetInnerHTML={{ __html: desc }}/> */}
        
        <div className="flex items-center flex-wrap ">
        <Link href={`/blog/${slug}`} className={`opens-sans transition-theme ${buttonVariants({ variant:lightTheme? "default_borderless":"dark" })}`}>Read More
        </Link>
         
        </div>
      </div>
    </div>
 
      
  )
}

export default BlogItems
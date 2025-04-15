"use client";
import React, { } from 'react'

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { buttonVariants } from '@/components/ui/button';
import { dateFormat } from '@/lib/dateFormat';
import { useTheme } from '@/components/Features/reducers/useTheme';
import Image from 'next/image';

const BlogItems = ({imgUrl,title,desc,category,date,slug,checkBlogPage}) => {
// Convert desc to a string first
const [lightTheme] =useTheme();
const description = String(desc);
const shortDesc = description.length > 100 ? `${description.substring(0, 100)}...`:description; 
  return (
   
    
    <div className= {`${lightTheme?`${checkBlogPage?`blog-blogpost `:`blogpost`} footer-light transition-theme`:`${checkBlogPage?`blog-blogpost`:`blogpost`} blogpost-dark transition-theme`} `} >
  <div className= {`${lightTheme?`${checkBlogPage?`flex flex-col h-auto   aspect-video max-w-fit  md:w-2/4 lg:w-2/4 sm:w-full w-full `:`blogpost`}  transition-theme`:`${checkBlogPage?`flex flex-col h-auto   aspect-video max-w-fit  md:w-2/4 lg:w-2/4 sm:w-full w-full`:`blogpost`} blogpost-dark transition-theme`} `}>
  <CldImage
   width={200}
   height={200}
   className={`${checkBlogPage?" w-auto h-full":"lg:h-auto md:h-auto w-full object-cover object-center"}`}   
   src={imgUrl}
    alt="blog"
    unoptimized="true"
    />
  </div>
    
      <div className="p-6">
        <h1 className="title-font text-lg font-medium text-[color:var(--grey-002) mb-3 opens-sans">{title}</h1>
        <h2 className={`${lightTheme?"blogpost-category blogpost-category-light ":"blogpost-category blogpost-category-dark"}`}>{category}</h2>
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
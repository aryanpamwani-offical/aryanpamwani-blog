
import Breadcrum from '@/components/items/Breadcrum/Breadcrum';

import SearchBar from '@/components/items/Search/Search';
import React from 'react'

import Hero from '@/components/items/HeroSection/Hero';
import {  postData, searchData } from '@/lib/apiCalls';
import BlogSection from '@/components/items/BlogSection/BlogSection';

const Page = async({searchParams}) => {
    const search = searchParams?.search ?? ''; // Safely extract search parameter

     
     const Postdata = await postData();
     const searchResults = search ? await searchData(search) : [];
   
  return (
   <div  className='flex flex-col  '>
     
     <Hero
     lastText={"Blog"}
     isHero={false}
     />
    <div className='flex flex-col justify-center w-full max-w-[786px]'>
    
    
     <Breadcrum title={"Blog"} />
    </div>
    <SearchBar initialSearchResults={searchResults}/>
    <BlogSection
    initialPosts={Postdata}
    checkBlogPage={true}
    />
    </div>
  )
}

export default Page

import Breadcrum from '@/components/items/Breadcrum/Breadcrum';
import CategoryClient from '@/components/items/Category/Category';
import SearchBar from '@/components/items/Search/Search';
import React from 'react'

import Hero from '@/components/items/HeroSection/Hero';
import { categoryData, postData, searchData } from '@/lib/apiCalls';

const page = async({searchParams}) => {
    const search = searchParams?.search ?? ''; // Safely extract search parameter
    const Categorydata = await categoryData();
     
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
     <CategoryClient
     categoryData={Categorydata} 
     postData={Postdata} 
     checkBlogPage={true}
     />

    </div>
  )
}

export default page
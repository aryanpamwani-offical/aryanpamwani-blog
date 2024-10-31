

import Spinner from '@/components/items/Spinner/Spinner';
import axios from 'axios';
// import { useParams } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from 'react'
import Post from '@/components/items/getPost/Post';
import { dateFormat } from '@/components/dateFormat';


export const generateMetadata=async({ params})=> {
  const {slug}=params;
  
  const getPost=await fetchPost(slug);
  const title=await getPost.name;
  const keyword=await getPost.keyword;
  const desc=await getPost.shortDesc;
  return {
    title: `${title} | Aryan Pamwani's Blog`,
    description: `${desc}`,
    keyword: `${keyword}`,
    openGraph: {
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      type: "website",
      locale: "en_US",
      url: `https://blog.aryanpamwani.me/blog/${params.slug}`,
      siteName: "Aryan Pamwani's Blog`",
    },
  };
}

const  fetchPost=async(slug)=>  {
  const data=slug;
    try {
      let response = await  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showsingle/${data}`);
      response=await response.json()
      return response.data.selectedPost
      
    }catch (error) {
    console.log(error);
  
  }
  }

const Page = async({params}) => {
  const {slug}=params;
 
  const getPost=await fetchPost(slug);
//  const name=await getPost.name;
//  console.log(name)
 

return (
  <>

  {getPost?
    
    <div className='flex flex-col w-full max-w-[786px]  '>
      
        {

getPost && Object.keys(getPost).length >0  && 

<Post
title={getPost.name}
date={getPost.Date}
categoryName={getPost.categoryName}
body={getPost.content}
imgUrl={getPost.imgUrl}
/>

}
      </div>
      
    : 
      <Spinner />
    }
  </>
);
  
}

export default Page
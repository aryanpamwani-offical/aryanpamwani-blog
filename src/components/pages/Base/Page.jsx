"use client";
import React,{useEffect, useState} from 'react'
import Hero from "@/components/items/HeroSection/Hero";
import SearchBar from "@/components/items/Search/Search";
import BlogSection from '@/components/items/BlogSection/BlogSection'

import axios from 'axios';
import Breadcrum from '@/components/items/Breadcrum/Breadcrum';

const BasePage = ({ searchParams,checkBlogPage }) => {
    const search = searchParams?.search ?? '';
    const [Post, setPost] = useState()
    const [Search, setSearch] = useState();
    const fetchPost = async () => {
        try {
           await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`).then((res)=>{

              setPost(res.data?.allCategories);  // Assuming allCategories is the array of posts
          }).catch((error)=>{
            console.log(error)
          })
        } catch (error) {
          console.log(error);
           // Return an empty array if there is an error
        }
      };
     
    useEffect(() => {
      fetchPost();
       
    }, [])
  // console.log(Search)
  return (
    <>
    {
        checkBlogPage? <Hero
     
      
        lastText={"Blog"}
        isHero={false}
        
        />: <Hero
     
        firstText={"Modern Dev"}
        lastText={"Notes"}
        isHero={true}
        
        />
    }
    
      {
        checkBlogPage?   <div className='flex flex-col justify-center w-full max-w-[786px]'>
    
    
        <Breadcrum title={"Blog"} />
       </div>:<></>
      }
     
      <SearchBar searchParams={search} />
      <BlogSection initialPosts={Post} checkBlogPage={checkBlogPage} />
    </>
  )
}

export default BasePage
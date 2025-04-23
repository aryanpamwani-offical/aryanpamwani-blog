"use client";
import React, { useEffect, useState } from 'react'
import Hero from "@/components/items/HeroSection/Hero";
import SearchBar from "@/components/items/Search/Search";
import BlogSection from '@/components/items/BlogSection/BlogSection'
import axios from 'axios';
import Breadcrum from '@/components/items/Breadcrum/Breadcrum';
import Pagination from '@/components/items/Pagination/Pagination';

const BasePage = ({ searchParams, checkBlogPage }) => {
    const search = searchParams?.search ?? '';
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPost = async (page = 1) => {
        try {
            setLoading(true);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall?page=${page}`);
            
            // Extract the nested data
            const posts = response.data?.data?.data || [];
            const pagination = response.data?.data?.pagination || {};
            
            // console.log('Extracted posts:', posts);
            // console.log('Pagination:', pagination);

            setPosts(posts);
            setTotalPages(pagination.totalPages || 1);
            setCurrentPage(pagination.currentPage || 1);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setPosts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPost(currentPage);
    }, [currentPage]);
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
        checkBlogPage?   
    
    
        <Breadcrum noOfItems={1} Items={["Blog"]} />
:<></>
      }
     
      <SearchBar searchParams={search} />
      <BlogSection initialPosts={posts} checkBlogPage={checkBlogPage} />

            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
       
    </>
  )
}

export default BasePage

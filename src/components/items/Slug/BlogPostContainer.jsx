"use client";
import React, { useEffect, useState } from 'react';
import Post from '@/components/items/Slug/Post';
import Spinner from '@/components/items/Spinner/Spinner';
import axios from 'axios';
import Upmove from './upmove';

const BlogPostContainer = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showsingle/${slug}`);
        setPost(response.data.data); // Access the data property from response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchPost();
    // mermaid.initialize({ startOnLoad: true });
  }, [slug]); // Add slug as dependency

  if (loading) {
    return (
      <div className="flex flex-col w-full mb-10 justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex flex-col w-full mb-10 justify-center items-center">
        <h2>Post not found</h2>
      </div>
    );
  }

  return (
    <div className='relative' >
    <div className='flex flex-col w-full max-w-[786px] mb-10 '>
      <Post
        title={post.name}
        date={post.Date}
        categoryName={post.categoryName}
        body={post.content}
        imgUrl={post.imgUrl}
      />

    
    
    </div>
    {/* <Upmove/> */}
    </div>
  );
};

export default BlogPostContainer;
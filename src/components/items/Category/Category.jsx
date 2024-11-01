'use client';

import React, { useState, useEffect } from 'react';
import BlogPost from '../Blog/BlogPost';
import Spinner from '../Spinner/Spinner';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { useTheme } from '@/components/Features/reducers/useTheme';
import PrevSlide from './Slides/prevSlide';
import NextSlide from './Slides/nextSlide';

const CategoryClient = ({ categoryData = [], postData = [] }) => {
  const [lightTheme] = useTheme()
  const [current, setCurrent] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState(postData.length > 0 ? postData : []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (postData.length > 0) {
      setFilteredPosts(postData);
    }
  }, [postData]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 3 >= categoryData.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 3 < 0 ? categoryData.length - 3 : prev - 3));
  };

  const handlePost = (id) => {
    setLoading(true);
    if (id === 'all') {
      setFilteredPosts(postData);
    } else {
      const filtered = postData.filter((post) => post.category.includes(id));
      setFilteredPosts(filtered.length > 0 ? filtered : []);
    }
    setLoading(false);
  };

  return (
    <>
    {/* Caurosel Starts */}
      <div className="flex w-11/12 items-center justify-center mb-10">
        {categoryData.length > 0 && (
          <>
            <PrevSlide prevSlide={prevSlide}/>

            <div className="items-center mx-auto flex flex-row w-full mt-10">
              <ul className="lg:flex md:flex sm:flex hidden flex-row mb-10 justify-evenly w-full">
              {current === 0 && (
             <li onClick={()=>handlePost("all")} className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">All</li>
           )}
                {categoryData.slice(current, current + 3).map((item) => (
                  <div key={item._id} onClick={() => handlePost(item._id)}>
                    <li className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">{item.name}</li>
                  </div>
                ))}
              </ul>
            </div>


           <NextSlide nextSlide={nextSlide}/>

          </>
        )}
      </div>
      
       {/* Caurosel Ends */}


      {loading ? (
        <Spinner />
      ) :  (
        filteredPosts.length>0?
        <BlogPost posts={filteredPosts} />:<div className="w-full text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">No Posts Found</h2>
        <Button variant={lightTheme ? 'default' : 'dark'} className="inter" onClick={() => handlePost("all")}>Back</Button>
      </div>
       
        
      )}
    </>
  );
};

export default CategoryClient;

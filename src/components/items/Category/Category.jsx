'use client';

import React from 'react';
import BlogPost from '../Blog/BlogPost';
import Spinner from '../Spinner/Spinner';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/Features/reducers/useTheme';

import Slide from './Slides/Slide';
import { useCategoryClient } from './useCategoryClient';

const CategoryClient = ({ categoryData = [], postData = [], checkBlogPage }) => {
  const [lightTheme] = useTheme();
  const { current, filteredPosts, loading, nextSlide, prevSlide, handlePost } = useCategoryClient(postData, categoryData);

  return (
    <>
      {/* Carousel Starts */}
      <div className="flex w-11/12 items-center justify-center mb-10">
        {categoryData.length > 0 && (
          <>
            <Slide prevSlide={prevSlide} checkPrev={true} updateCategoryClient={() => handlePost('all')} />

            <div className="items-center mx-auto flex flex-row w-full mt-10">
              <ul className="lg:flex md:flex sm:flex flex flex-row mb-10 justify-evenly w-full">
                {current === 0 && (
                  <div onClick={() => handlePost('all')}>
                    <li className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">All</li>
                  </div>
                )}
                {categoryData.slice(current, current + 3).map((item) => (
                  <div key={item._id} onClick={() => handlePost(item._id)}>
                    <li className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">{item.name}</li>
                  </div>
                ))}
              </ul>
            </div>

            <Slide nextSlide={nextSlide} checkPrev={false} updateCategoryClient={() => handlePost('next')} />
          </>
        )}
      </div>
      {/* Carousel Ends */}

      {loading ? (
        <Spinner />
      ) : filteredPosts.length > 0 ? (
        <BlogPost posts={filteredPosts} checkBlogPage={checkBlogPage} />
      ) : (
        <div className="w-full text-center py-10">
          <h2 className="text-2xl font-semibold mb-4">No Posts Found</h2>
          <Button variant={lightTheme ? 'default' : 'dark'} className="inter" onClick={() => handlePost('all')}>Back</Button>
        </div>
      )}
    </>
  );
};

export default CategoryClient;

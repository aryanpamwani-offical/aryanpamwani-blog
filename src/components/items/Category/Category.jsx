'use client'


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '@/components/Features/reducers/api/category';
import { fetchPost } from '@/components/Features/reducers/api/post';
import BlogPost from '../Blog/BlogPost';
import Spinner from '../Spinner/Spinner';
import { Button } from '@/components/ui/button';


const Category = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const [current, setCurrent] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryData = useSelector((state) => state.fetchCategory);
  const postData = useSelector((state) => state.fetchPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (!postData.isLoading && postData.data) {
      setFilteredPosts(postData.data.allCategories);
      setLoading(false);
    }
  }, [postData]);

  const projectData = categoryData.data?.allCategories;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 3 >= projectData.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 3 < 0 ? projectData.length - 3 : prev - 3));
  };

  const handlePost = (id) => {
    setLoading(true);
    if (id === 'all') {
      setFilteredPosts(postData.data.allCategories);
    } else {
      const filtered = postData.data.allCategories.filter((post) => post.category.includes(id));
      setFilteredPosts(filtered.length > 0 ? filtered : []);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex w-11/12 items-center justify-center">
        <div
          className={lightTheme ? "left-arrow bg-[color:var(--grey-006)] hover:bg-[color:var(--grey-004)] hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden" : "left-arrow bg-[color:var(--grey-002)] hover:bg-[color:var(--grey-003)] hover:text-[color:var(--grey-07)] p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden"}
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="items-center mx-auto flex flex-row w-full mt-10">
          <ul className="lg:flex md:flex sm:flex hidden flex-row mb-10 justify-evenly w-full">
            {categoryData.isLoading ? (
              <li className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center hidden"></li>
            ) : (
              <>
                <li onClick={() => handlePost('all')} className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">All</li>
                {categoryData.data?.allCategories?.slice(current, current + 3).map((item) => (
                  <div key={item._id} onClick={() => handlePost(item._id)}>
                    <li className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">{item.name}</li>
                  </div>
                ))}
              </>
            )}
          </ul>
        </div>
        <div
          className={lightTheme ? "right-arrow bg-[color:var(--grey-006)] hover:bg-[color:var(--grey-004)] hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden" : "right-arrow bg-[color:var(--grey-002)] hover:bg-[color:var(--grey-003)] hover:text-[color:var(--grey-07)] p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden"}
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : filteredPosts.length > 0 ? (
        <BlogPost posts={filteredPosts} />
      ) : (
        <div className="w-full text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">No Posts Found</h2>
        <Button variant={lightTheme?'default':'dark'} className="inter" onClick={()=>handlePost("all")}>Back</Button>
      </div>
      )}
    </>
  );
};

export default Category;

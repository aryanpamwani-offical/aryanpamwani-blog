'use client'

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '@/components/items/Spinner/Spinner';
import BlogItems from '../Blog/Items';

const Category = () => {
  const [current, setCurrent] = useState(0);
  const [projectData, setProjectData] = useState([]);
  const [Item, setItem] = useState([])
  const [loading, setloading] = useState(false)
  const lightTheme = useSelector((state) => state.themeKey); 
 
  useEffect(() => {
    fetchCategory()
    handlePost()
}, []);


// Fetch Category 
  const fetchCategory=async()=>{
  const response=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showall`)
  const allPosts = await response.data.allCategories;
  if (!allPosts) {
    console.log("No Category Found");
    return;
  }
  else{
    if (allPosts.length > 0) {
      setProjectData(allPosts);
      // console.log(allPosts);
      } else {
      console.log("No Category Found");

  }
  }
  }

// Next Slide Function
 function nextSlide() {
    setCurrent((prev) => (prev + 3 >= projectData.length ? 0 : prev + 3));
    
  }

// Previous Slide Function
function prevSlide() {
    setCurrent((prev) => (prev - 3 < 0 ? projectData.length - 3 : prev - 3));
  }


// Blogpost Function
const handlePost = async (id) => {
    // console.log(id);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall/`);
      const allPosts = await response.data.allCategories; // Assuming the posts are in response.data.allPosts
  
      // Log the response to verify the structure
      // console.log('API Response:', response.data);
  
      // Filter posts by category ID
      const filteredPosts = allPosts.filter(post => {
       
        // console.log(post.category); 
        return post.category.includes(id); 
      });
      // Log the filtered posts to verify the filtering logic
      // console.log('Filtered Posts:', filteredPosts);
  
      if (filteredPosts.length > 0) {
        setItem(filteredPosts)
        setloading(true);
      } else {
        setItem(allPosts) 
        setloading(true);
        // Checking for date
        // console.log(allPosts.Date);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    {/* Category Starts Here */}
      <div className="flex w-11/12 items-center justify-center">
        <div className={lightTheme ? "left-arrow bg-[color:var(--grey-006)] hover:bg-[color:var(--grey-004)] hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden" : "left-arrow bg-[color:var(--grey-002)] hover:bg-[color:var(--grey-003)] hover:text-[color:var(--grey-07)] p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden"} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="items-center mx-auto flex flex-row w-full mt-10">
          <ul className="lg:flex md:flex sm:flex hidden flex-row mb-10 justify-evenly w-full">
          { loading?(<>
          
            {current === 0 && (
             <li onClick={()=>handlePost()} className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">All</li>
           )}
            {
              projectData.slice(current, current + 3).map((item)  =>  {
               
           return       <div  key={item._id} onClick={()=>{
                  handlePost(item._id)}
                  
                  }>
                <li   className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">{item.name}</li>
               </div> 
                
              }
               )
            }
          
          </>):(<>
          
            <li className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center hidden"></li>
          
          </>)}
           

          </ul>
          <ul className={`lg:hidden md:hidden flex sm:hidden flex-row mb-10 w-full overflow-x-scroll overflow-y-hidden flex-nowrap border-b py-2 scroll ${lightTheme ? "border-[color:var(--grey-006)]" : "border-[color:var(--grey-004)]"}`}>
            
          {current === 0 && (
              <li className="relative inter underline-effect cursor-pointer mr-16 text-center justify-center my-auto items-center">All</li>
            )}
            
            {
              projectData.map((item) => {
               return <div  key={item._id} onClick={()=>{
                  handlePost(item._id)}
                  
                  }>
                <li  className="relative inter underline-effect cursor-pointer mr-16 text-center justify-center my-auto items-center">{item.name}</li>
             </div> })
            }
          </ul>
        </div>
        <div className={lightTheme ? "right-arrow bg-[color:var(--grey-006)] hover:bg-[color:var(--grey-004)] hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden" : "right-arrow bg-[color:var(--grey-002)] hover:bg-[color:var(--grey-003)] hover:text-[color:var(--grey-07)] p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden"} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>

{/* Category Ends Here */}

{/* Blogpost Starts Here */}

{loading ? (


<>
  <section className="container px-5 py-24 mx-auto body-font">
    <div className="flex flex-wrap -m-4">
      {

        Item.map(item => {
          return <div className="p-4 md:w-1/3" key={item._id}>
         <BlogItems 
         title={item.name}
         desc={item.content}
         imgUrl={item.imgUrl}
         category={item.categoryName}
         postId={item._id}
         date={item.Date}
         
         />
        </div>
         
        })
      }

    </div>

  </section>


</>
) : <Spinner />
}
{/* Blogpost Ends Here */}

    </>
  );
}

export default Category;

'use client'

import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const FilterBtn = () => {
  const [current, setCurrent] = useState(0);
  const [projectData, setProjectData] = useState([]);
  const lightTheme = useSelector((state) => state.themeKey);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showall`)
      .then(data => {
        setProjectData(data.data.allCategories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function nextSlide() {
    setCurrent((prev) => (prev + 3 >= projectData.length ? 0 : prev + 3));
    
  }

  function prevSlide() {
    setCurrent((prev) => (prev - 3 < 0 ? projectData.length - 3 : prev - 3));
  }

  return (
    <>
      <div className="flex w-11/12 items-center justify-center">
        <div className={lightTheme ? "left-arrow bg-[color:var(--grey-006)] hover:bg-[color:var(--grey-004)] hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden" : "left-arrow bg-[color:var(--grey-002)] hover:bg-[color:var(--grey-003)] hover:text-[color:var(--grey-07)] p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden"} onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="items-center mx-auto flex flex-row w-full mt-10">
          <ul className="lg:flex md:flex sm:flex hidden flex-row mb-10 justify-evenly w-full">
          
            {current === 0 && (
             <li className="relative inter underline-effect cursor-pointer text-center justify-center my-auto items-center">All</li>
           )}
            {
              projectData.slice(current, current + 3).map((item) => (<>
             
                <li  key={item._id} className="relative inter underline-effect  cursor-pointer text-center justify-center my-auto items-center">{item.name}</li>
                </>   ))
            }
          </ul>
          <ul className={`lg:hidden md:hidden flex sm:hidden flex-row mb-10  w-full overflow-x-scroll overflow-y-hidden flex-nowrap border-b py-2 scroll ${lightTheme ? "border-[color:var(--grey-006)]" : "border-[color:var(--grey-004)]"}`}>
            
          {current === 0 && (
              <li className="relative inter underline-effect cursor-pointer  mr-16 text-center justify-center my-auto items-center">All</li>
            )}
            
            {
              projectData.map((item) => (
                <li key={item._id} className="relative inter underline-effect cursor-pointer mr-16 text-center justify-center my-auto items-center">{item.name}</li>
              ))
            }
          </ul>
        </div>
        <div className={lightTheme ? "right-arrow bg-[color:var(--grey-006)] hover:bg-[color:var(--grey-004)] hover:text-white p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden" : "right-arrow bg-[color:var(--grey-002)] hover:bg-[color:var(--grey-003)] hover:text-[color:var(--grey-07)] p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden"} onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default FilterBtn;

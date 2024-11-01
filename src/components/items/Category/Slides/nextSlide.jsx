import React from 'react';
import { useTheme } from '@/components/Features/reducers/useTheme';

const NextSlide = ({ nextSlide }) => {
  const [lightTheme] = useTheme();

  return (
    <div className={`${lightTheme ? "right-arrow bg-gray-200 hover:bg-gray-400 hover:text-white" : "right-arrow bg-gray-700 hover:bg-gray-600 hover:text-gray-300"} p-2 rounded-lg cursor-pointer lg:flex md:flex sm:flex hidden transition-theme`}
      onClick={nextSlide}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};

export default NextSlide;

import React, { useEffect } from 'react';
import { useTheme } from '@/components/Features/reducers/useTheme';

const Slide = ({ nextSlide, checkPrev, prevSlide, updateCategoryClient }) => {
  const [lightTheme] = useTheme();

  useEffect(() => {
    // Only call updateCategoryClient if necessary, and ensure it's done after rendering
  }, []);

  const handleClick = () => {
    if (checkPrev) {
      prevSlide();
    } else {
      nextSlide();
    }
    // Ensure any state updates needed for CategoryClient are done here
    updateCategoryClient();
  };

  return (
    <div className={`${lightTheme ? "arrow-light" : "arrow-dark"}`} onClick={handleClick}>
      {
        checkPrev ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      }
    </div>
  );
};

export default Slide;

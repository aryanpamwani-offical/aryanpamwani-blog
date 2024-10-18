'use client';
import { useTheme } from '@/components/Features/reducers/useTheme';
import Image from 'next/image';
import React from 'react';

const ThemeChooser = () => {
  const [lightTheme, toggleTheme] = useTheme();

  console.log('Current theme:', lightTheme); // Log the theme state

  return (
    <div onClick={toggleTheme} className={lightTheme ? "theme-btn dark-btn" : "theme-btn light-btn"}>
      {lightTheme ? (
        <Image src="https://res.cloudinary.com/dttek3gqg/image/upload/v1725012231/brightness_eru1xy.png" width={32} height={32} className="icon-dark" alt="dark" />
      ) : (
        <Image src="https://res.cloudinary.com/dttek3gqg/image/upload/v1725012256/moon_zneurl.png" width={32} height={32} alt="light" />
      )}
    </div>
  );
};

export default ThemeChooser;

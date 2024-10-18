"use client";

import { useTheme } from '@/components/Features/reducers/useTheme';
import React from 'react'
import { useSelector } from 'react-redux';

const ThemeMaker = ({children}) => {
  const [lightTheme] =useTheme();
  return (
    <div className={lightTheme?"bg-[var(--grey-007)] text-[var(--grey-001)] relative h-screen":"bg-[var(--grey-001)] text-[var(--grey-007)] relative h-[100vh"}>

        {children}
    </div>
  )
}

export default ThemeMaker
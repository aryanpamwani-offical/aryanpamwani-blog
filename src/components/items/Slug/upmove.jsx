"use client"
import React from 'react'
import { useTheme } from '@/components/Features/reducers/useTheme';
import Link from 'next/link';

import { ChevronUp } from 'lucide-react';

const Upmove = () => {
     const [lightTheme] = useTheme();
  return (
    <>
  <Link href={"#upmove"} className={lightTheme ? "upmove-btn dark-btn" : "upmove-btn light-btn"}>
        {lightTheme ? (
          <ChevronUp
          
          
           className=""
            alt="dark"
            />
        ) : (
          <ChevronUp
  
          
           height={32} alt="light"
            />
        )}
      </Link>
    </>
  )
}

export default Upmove
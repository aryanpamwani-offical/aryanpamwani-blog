'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useSelector } from 'react-redux';
import { Input } from '@/components/ui/input';

import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
    const lightTheme = useSelector((state) => state.themeKey);
  return (
    <>
      <div className="flex w-full justify-center  items-center space-x-2 ">
      <Input type="search" placeholder="Search" className='border-[color:var(--grey-004)] w-2/3' />
      <Button type="submit" variant={lightTheme?'default':'dark'}><BsSearch  className=''/> </Button>
    </div>

    </>
  )
}

export default SearchBar
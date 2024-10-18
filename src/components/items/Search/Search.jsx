'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Input } from '@/components/ui/input';
import { BsSearch } from "react-icons/bs";
import { useDebounce } from 'use-debounce';

const SearchBar = () => {
  const router = useRouter();
  const lightTheme = useSelector((state) => state.themeKey);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 500);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === '/') {
        e.preventDefault(); // Prevent the default "/" character from appearing in the input
        inputRef.current.focus();
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    router.push(`/?search=${debouncedQuery}`);
  };

  return (
    <>
      <div className="flex w-full justify-center items-center space-x-2">
        <Input
          type="search"
          value={query}
          placeholder="Search"
          className='border-[color:var(--grey-004)] w-2/3'
          onChange={handleChange}
          ref={inputRef}
        />
        <Button type="submit" variant={lightTheme ? 'default' : 'dark'} onClick={handleSearchClick}>
          <BsSearch className='' />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;

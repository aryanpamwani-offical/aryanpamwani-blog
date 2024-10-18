'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Input } from '@/components/ui/input';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';

const SearchBar = ({ initialSearchResults }) => {
  const router = useRouter();
  const lightTheme = useSelector((state) => state.themeKey);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 500);
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === '/') {
        e.preventDefault(); // Prevent the default "/" character from appearing in the input
        inputRef.current.focus();
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    handleSearchClick()
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      handleSearchClick()
    };
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (debouncedQuery=="") {
      router.push(`/?search=${debouncedQuery}`);
    }
    else{
  
      const url = `/?search=${debouncedQuery}`;
      router.push(url);
      window.location.href = url;
    }
  };
console.log(searchResults);
  return (
    <>
      <div className="flex w-full justify-center items-center space-x-2 relative">
        <div className="relative w-2/3">
          
          <Input
            type="search"
            value={query}
            placeholder="Search"
            className={`border-[color:var(--grey-004)] w-full pl-10 ${isFocused ? 'input-focused' : ''}`}
            onChange={handleChange}
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!isFocused &&  <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-[color:var(--grey-003)] border-[2px] border-[color:var(--grey-003)] flex justify-center items-center m-auto rounded-lg w-6">/</span>}
        </div>
        <Button type="submit" variant={lightTheme ? 'default' : 'dark'} onClick={handleSearchClick}>
          Search
        </Button>
        </div>

{searchResults?.data?.length > 0 && (
   <div className="flex w-full justify-center items-center space-x-2 relative">
        <div className="relative w-[73%]">
    <h2 className="text-xl font-semibold mb-2 text-[var(--grey-002)]">Search Results: -</h2>
    <div className="grid grid-cols-1  gap-4 w-full justify-center m-auto text-center">
      {searchResults?.data?.map(post => {
      return  <Link key={post._id} href={`/blog/${post._id}`} className="text-[color:var(--grey-003)] block p-4  mt-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
          
            <h3 className="text-lg font-bold">{post.name}</h3>
           
        
        </Link>
 } )}
    </div>
    
  </div>
  </div>
      )}
    </>
  );
};

export default SearchBar;

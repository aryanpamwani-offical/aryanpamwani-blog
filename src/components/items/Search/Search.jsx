'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { BsSearch } from "react-icons/bs";
import { useTheme } from '@/components/Features/reducers/useTheme';
import axios from 'axios';

const SearchBar = () => {
  const router = useRouter();
  const [lightTheme] = useTheme();
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 500);
  const [searchResults, setSearchResults] = useState();
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchClick = useCallback(async () => {
    if (!query.trim()) return; // Don't search if query is empty
    
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/?search=${query}`);
      setSearchResults(response?.data);

      if (debouncedQuery) {
        const url = `/?search=${debouncedQuery}`;
        router.push(url);
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  }, [query, debouncedQuery, router]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === '/') {
        e.preventDefault();
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

  return (
    <>
      <div className="flex w-full justify-center items-center space-x-2 relative mt-20">
        <div className="relative w-2/3">
          <BsSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2  ${lightTheme ? "text-[color:var(--grey-004)] " : "text-[color:var(--grey-006)] "} `} />
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
          {!isFocused && <span className={`absolute right-10 top-1/2 transform -translate-y-1/2 text-[color:var(--grey-004)] border-[color:var(--grey-003)] ${lightTheme ? "text-[color:var(--grey-004)] border-[color:var(--grey-003)]" : "text-[color:var(--grey-006)] border-[color:var(--grey-006)]"}    border-[2px]  flex justify-center items-center m-auto rounded-lg w-6`}>/</span>}
        </div>
        <Button type="submit" variant={lightTheme ? 'default' : 'dark'} onClick={handleSearchClick}>
          Search
        </Button>
      </div>

      {searchResults?.data?.length > 0 && (
        <div className="flex w-full justify-center items-center space-x-2 relative">
          <div className="relative w-[73%]">
            <h2 className={`text-xl font-semibold mb-2 ${lightTheme ? "text-[var(--grey-002)]" : "text-[var(--grey-004)]"}`}>Search Results: -</h2>
            <div className="grid grid-cols-1  gap-4 w-full justify-center m-auto text-center">
              {searchResults?.data?.map(post => {
                return <Link key={post.slug} href={`/blog/${post.slug}`} className={` ${lightTheme ? "text-[var(--grey-003)] shadow-[color:var(--grey-006)] shadow-md rounded-lg" : "text-[var(--grey-006)] shadow-[var(--grey-002)] shadow-md  rounded-lg "}    flex justify-center p-4  mt-2    `}>
                  <h3 className="text-lg font-bold">{post.name}</h3>
                </Link>
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;

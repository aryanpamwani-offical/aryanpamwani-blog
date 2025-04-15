"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setTheme } from './themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeSlice);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      const parsedTheme = storedTheme === 'true';
      if (parsedTheme !== lightTheme) {
        dispatch(setTheme(parsedTheme));
      }
    }
  }, [dispatch, lightTheme]); // Added lightTheme to dependency array

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return [lightTheme, handleToggleTheme];
};

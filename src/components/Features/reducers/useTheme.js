"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setTheme } from './themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeSlice);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    // Set default theme to true (light mode) if no theme is stored
    const initialTheme = storedTheme !== null ? storedTheme === 'true' : true;
    dispatch(setTheme(initialTheme));
  }, []); // Run only on mount

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', lightTheme.toString());
  }, [lightTheme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return [lightTheme, handleToggleTheme];
};

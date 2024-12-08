"use client";
import { useState, useEffect } from 'react';

export const useCategoryClient = (postData, categoryData) => {
  const [current, setCurrent] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState(postData.length > 0 ? postData : []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (postData.length > 0) {
      setFilteredPosts(postData);
    }
  }, [postData]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 3 >= categoryData.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 3 < 0 ? categoryData.length - 3 : prev - 3));
  };

  const updateCategoryClient = async (id) => {
    setLoading(true);
    if (id === 'all') {
      setFilteredPosts(postData);
    } else {
      const filtered = postData.filter((post) => post.category.includes(id));
      setFilteredPosts(filtered.length > 0 ? filtered : []);
    }
    setLoading(false);
  };

  const handlePost = async (id) => {
    await updateCategoryClient(id);
  };

  return {
    current,
    filteredPosts,
    loading,
    nextSlide,
    prevSlide,
    handlePost,
  };
};


import axios from "axios";

export const fetchPost = async ({sitemap}) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`,sitemap);
      // Return the entire response data structure
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return { data: { data: [] } }; // Return properly structured empty data
    }
};

export const categoryData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showall`);
      return response.data.allCategories;
    } catch (error) {
      console.error('Error fetching category data:', error);
      return [];
    }
};

export const searchData = async (search) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/?search=${search}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching search data:', error);
      return [];
    }
};

export const postData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
      return response.data.allCategories;
    } catch (error) {
      console.error('Error fetching post data:', error);
      return [];
    }
};
export const fetchPostsForSitemap = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
    const posts = await response.json();
    
    return posts.data?.data?.map(post => ({
      loc: `/blog/${post.slug}`, 
      changefreq: 'weekly', 
      priority: 0.8
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};
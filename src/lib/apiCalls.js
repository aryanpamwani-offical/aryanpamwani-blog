import axios from "axios";

export const fetchPost = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
      return response.data?.allCategories;  // Assuming allCategories is the array of posts
    } catch (error) {
      console.log(error);
      return [];  // Return an empty array if there is an error
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
  
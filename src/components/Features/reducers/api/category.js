const { createAsyncThunk } = require("@reduxjs/toolkit");

import axios from 'axios';


// Define the fetchCategory async thunk using Axios
export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showall`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch categories: ' + error.message);
  }
});
// export const fetchCategorySingle=createAsyncThunk("fetchCategorySingle",async(slug)=>{
//     const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showasingle/${slug}`)
//     const data=await response.json();
//     return data;
// })
// export const createCategory=createAsyncThunk("createCategory",async(values)=>{
//     const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/create`,values)
//     const data=await response.json();
//     return data;
// })
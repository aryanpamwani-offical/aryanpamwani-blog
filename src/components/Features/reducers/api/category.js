const { createAsyncThunk } = require("@reduxjs/toolkit");

 export const fetchCategory=createAsyncThunk("fetchCategory",async()=>{
    const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showall`)
    const data=await response.json();
    return data;
})
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
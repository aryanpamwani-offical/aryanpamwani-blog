const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchPost=createAsyncThunk("fetchPost",async()=>{
    const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`)
    const data=await response.json();
    return data;
})
// Define the createPost async thunk
export const createPost = createAsyncThunk("post/createPost", async (data) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.success) {
        throw new Error('Failed to create post');
    }
    const result = await response.json();
    return result;
});
export const fetchPostSingle=createAsyncThunk("fetchPostSingle",async(slug)=>{
    const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showasingle/${slug}`)
    const data=await response.json();
    return data;
})
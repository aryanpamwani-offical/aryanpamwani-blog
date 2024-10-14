import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { fetchPost } from "./api/post";


// Define the createPost async thunk
export let createPost = createAsyncThunk("post/createPost", async (data) => {
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

export  const fetchPostSlice=createSlice({
    name:"postSlice",
    initialState:{
        loading:false,
        error:false,
        data:false,
    },
    extraReducers:(builder)=>{

        // Fetch Post

        builder.addCase(fetchPost.pending,(state)=>{
            state.loading=true;
            state.error=false;
            state.data=false;
        })
        builder.addCase(fetchPost.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=false;
            state.data=action.payload;
            
        })
        builder.addCase(fetchPost.rejected,(state)=>{
            state.loading=false;
            state.error=true;
            state.data=false;
        })


        // Create Post

        builder.addCase(createPost.pending,(state)=>{
            state.loading=true;
            state.error=false;
            state.data=false;
        })
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=false;
            state.data=action.payload;
            
        })
        builder.addCase(createPost.rejected,(state)=>{
            state.loading=false;
            state.error=true;
            state.data=false;
        })

    }
    
    
    

})

export default fetchPostSlice.reducer;
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { fetchPost,createPost,fetchPostSingle } from "./api/post";



export  const fetchpostSliceReduc=createSlice({
    name:"postSlice",
    initialState:{
        loading:false,
        error:false,
        data:[],
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
 
        // Fetch Single Post

        builder.addCase(fetchPostSingle.pending,(state)=>{
            state.loading=true;
            state.error=false;
            state.data=false;
        })
        builder.addCase(fetchPostSingle.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=false;
            state.data=action.payload;
            
        })
        builder.addCase(fetchPostSingle.rejected,(state)=>{
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

export default postSlice.reducer;
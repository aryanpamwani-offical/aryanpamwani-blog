import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCategory } from "../api/category";



export  const fetchcategorySlice=createSlice({
    name:"categorySlice",
    initialState:{
        loading:false,
        error:false,
        data:[],
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending,(state)=>{
            state.loading=true;
            state.error=false;
            state.data=false;
        })
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=false;
            state.data=action.payload;
            
        })
        builder.addCase(fetchCategory.rejected,(state)=>{
            state.loading=false;
            state.error=true;
            state.data=false;
        })
    }
    
    
    

})

export default fetchcategorySlice.reducer;
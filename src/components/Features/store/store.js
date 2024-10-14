import {configureStore} from "@reduxjs/toolkit";
import themeSliceReducer from '../reducers/themeSlice'
import fetchcategorySliceReducer from "../reducers/category/fetchcategorySlice";
import fetchpostSliceReducer from "../reducers/fetchpostSlice";

export const store=configureStore({
    reducer:{
        themeKey:themeSliceReducer,
        fetchCategory:fetchcategorySliceReducer,
        fetchPost:fetchpostSliceReducer
    }
})
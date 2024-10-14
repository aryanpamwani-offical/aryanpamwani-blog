"use client"
import { fetchCategory } from '@/components/Features/reducers/api/category'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Page = () => {
    const categoryData=useSelector((state)=>state.fetchCategory);
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(fetchCategory())
    
     
    }, [])
   let response=categoryData.data.allCategories;
   console.log(response);
  return (
      <div>{
      
      categoryData.isloading? <div>Loading...</div>
      
      :   categoryData.data?.allCategories?.map((item) => (
        <div key={item.id}>{item.name}</div>
    ))
       
      
     
      }</div>
  )
}

export default Page
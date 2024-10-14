<<<<<<< HEAD
"use client"

import React from 'react'
import {  useForm } from 'react-hook-form';
=======
"use client";
import React,{useState,useEffect} from 'react'
import {  useForm } from 'react-hook-form';
import Tiptap from '@/components/items/Text-Editor/Tiptap';
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { useDispatch,useSelector } from 'react-redux';
import { fetchCategory } from '@/components/Features/reducers/api/category'
import { createPost } from '@/components/Features/reducers/fetchpostSlice';
import { Button } from '@/components/ui/button';
>>>>>>> d38853e (Adding Redux Api)

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
<<<<<<< HEAD
  
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
=======
    
  
  } from "@/components/ui/form";
>>>>>>> d38853e (Adding Redux Api)
  import {
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Select,
  } from "@/components/ui/select";
<<<<<<< HEAD
  import { Textarea } from "@/components/ui/textarea"

import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

=======
import { Input } from '@/components/ui/input';




// Form Schema
>>>>>>> d38853e (Adding Redux Api)
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).max(100000, { message: "Title must be at most 100000 characters long" }),
    category: z.string().min(1, { message: "Category is required" }),
    imgUrl: z.string().url({ message: "Invalid URL format" }).min(1, { message: "Image URL is required" }),
    content: z.string().min(1, { message: "Content is required" }),
  });
<<<<<<< HEAD
const Page = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        
    });
    const onSubmit=()=>{
        console.log();
    }
  return (
    <>
     
=======



const Page = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    
});

    const categoryData=useSelector((state)=>state.fetchCategory);
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(fetchCategory())
    
     
    }, [])
 

  
 
  const [content, setContent] = useState("")
 
  
   
    
    
      const onSubmit=async(values)=>{
       dispatch(createPost(values))

        }
      

  
  return (
    <>
  
>>>>>>> d38853e (Adding Redux Api)
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your title" {...field} name="name" type="text"/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="imgUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Url</FormLabel>
              <FormControl>
                <Input placeholder="Enter your image url" {...field} name="imgUrl" type="text"/>
              </FormControl>
              
              <FormMessage />
            </FormItem>

          )}
        />
         <FormField
          control={form.control}
<<<<<<< HEAD
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write body ..."
                  className="resize"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
=======
>>>>>>> d38853e (Adding Redux Api)
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
<<<<<<< HEAD
              <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Select your category"/>
                </SelectTrigger>
              </FormControl>
                <SelectContent>
                    <SelectItem value="Dev">Dev</SelectItem>
                    <SelectItem value="Design System">Design</SelectItem>
                   
                </SelectContent>
              </Select>
              
=======
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {    
               categoryData.isloading? <SelectItem >No Items</SelectItem>
              
               :    categoryData.data?.allCategories?.slice().reverse().map((item) => {

                 return <SelectItem value={item._id}>{item.name}</SelectItem>
               }
                )
               
              }
                  
                </SelectContent>
              </Select>

>>>>>>> d38853e (Adding Redux Api)
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD
=======
          <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
              <Tiptap 
content={content}
onChange={(newContent)=> field.onChange(newContent)}
/>
              </FormControl>
              
              <FormMessage />
            </FormItem>

          )}
        />
        
     
>>>>>>> d38853e (Adding Redux Api)
        <Button type="submit">Submit</Button>
      </form>
    </Form>

    
    </>
  )
}

export default Page
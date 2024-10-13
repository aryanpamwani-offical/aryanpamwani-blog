"use client"

import React from 'react'
import {  useForm } from 'react-hook-form';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import {
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Select,
  } from "@/components/ui/select";
  import { Textarea } from "@/components/ui/textarea"

import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).max(100000, { message: "Title must be at most 100000 characters long" }),
    category: z.string().min(1, { message: "Category is required" }),
    imgUrl: z.string().url({ message: "Invalid URL format" }).min(1, { message: "Image URL is required" }),
    content: z.string().min(1, { message: "Content is required" }),
  });
const Page = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        
    });
    const onSubmit=()=>{
        console.log();
    }
  return (
    <>
     
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
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

    
    </>
  )
}

export default Page
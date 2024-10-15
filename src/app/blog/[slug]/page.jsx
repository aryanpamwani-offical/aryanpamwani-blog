
import Spinner from '@/components/items/Spinner/Spinner';
import axios from 'axios';
// import { useParams } from 'next/navigation';
import { headers } from 'next/headers';
const  fetchPost=async(slug)=>  {

  
const data=slug;
console.log(data)
  try {
    let response = await  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showsingle/${data}`);
    response=await response.json()
    return response.data.selectedPost
    
  }catch (error) {
  console.log(error);
  
}
}



import React from 'react'


const Page = async({params}) => {
 const {slug}=params;
 
const getPost=await fetchPost(slug);
  
 
  




return (
  <>

  {getPost?
    
    <section className='container px-5 py-24 mx-auto my-4'>
        {/* {Array.isArray(getPost) ? (
          getPost.map((post) => (
            <p key={post._id}>{post.name}</p>
          ))
        ) } */}
        
        {

getPost && Object.keys(getPost).length >0  && 
<div className=''>
<p>{getPost.name}</p>
<p>{getPost.categoryName}</p>
<p>{getPost.description}</p>
</div>
}
      </section>
      
    : 
      <Spinner />
    }
  </>
);
  
}

export default Page


import { dateFormat } from '@/components/dateFormat';
import Spinner from '@/components/items/Spinner/Spinner';
import axios from 'axios';
// import { useParams } from 'next/navigation';

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
    
    <div className='flex flex-col w-full max-w-[786px]  '>
      
        {

getPost && Object.keys(getPost).length >0  && 
<article className='flex justify-center m-auto flex-col items-center'>
  <div className='my-2'>

<p className='text-[var(--grey-004)]'>{dateFormat(getPost.Date)}</p>
  </div>
  <div className='my-2 text-center border-1 p-2 w-full border-b'>
<h1 className='text-4xl mb-1'>{getPost.name}</h1>
<p>{getPost.categoryName}</p>
</div>

<div className="leading-relaxed my-6 text-[color:var(--grey-004)] inter "  dangerouslySetInnerHTML={{ __html: getPost.content }}/>
        
        


</article>
}
      </div>
      
    : 
      <Spinner />
    }
  </>
);
  
}

export default Page
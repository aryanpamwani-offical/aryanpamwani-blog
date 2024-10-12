'use client'
import Spinner from '@/components/items/Spinner/Spinner';
import axios from 'axios';
import { useParams } from 'next/navigation';


import React, { useEffect, useState } from 'react'

const Page = () => {
  const { slug } = useParams();

  const [getLoader, setLoader] = useState(false);
  const [getPost, setgetPost] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showsingle/${slug}`).then((res) => {
      setgetPost(res.data.data.selectedPost)
      setLoader(true)
    }).catch((error) => {
      console.log(error)
    })


  }, [slug])


let postItems=Object.keys(getPost);

return (
  <>

  
    {getLoader ? 
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
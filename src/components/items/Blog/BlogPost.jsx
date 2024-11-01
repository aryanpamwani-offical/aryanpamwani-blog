import React from 'react'
import BlogItems from './Items'

const BlogPost = ({ posts }) => {
  return (
    
    <>
  <section className="container px-5 py-24 mx-auto body-font  mb-20">
    <div className="flex flex-wrap -m-4">
      {

       posts.length? posts.map(item => {
          return <div className="p-4 md:w-1/3" key={item._id}>
         <BlogItems 
         title={item.name}
         desc={item.shortDesc}
         imgUrl={item.imgUrl}
         category={item.categoryName}
         postId={item._id}
         date={item.Date}
         slug={item.slug}
         
         />
        </div>
         
        }):<></>
      }

    </div>

  </section>


</>
    
  )
}

export default BlogPost
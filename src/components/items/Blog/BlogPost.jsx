import React from 'react'
import BlogItems from './Items'


const BlogPost = ({ posts,checkBlogPage }) => {
  // console.log(checkBlogPage)
  return (
    <>
  <section className="container px-5 py-24 mx-auto body-font  mb-20">
    <div className={`${checkBlogPage?"flex flex-col w-full justify-center items-center":"flex -m-4 flex-row"}`}>
      {

       posts.length? posts.map(item => {
          return <div className={`${checkBlogPage?" p-4 flex flex-col w-4/5":"p-4 md:w-1/3"}`} key={item._id}>
         <BlogItems 
         title={item.name}
         desc={item.shortDesc}
         imgUrl={item.imgUrl}
         category={item.categoryName}
         postId={item._id}
         date={item.Date}
         slug={item.slug}
         checkBlogPage={checkBlogPage}
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
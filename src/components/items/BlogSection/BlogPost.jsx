import React from 'react'
import BlogItems from './Items'


const BlogPost = ({ posts, checkBlogPage }) => {
  console.log(posts)
  return (
    <>
      <section className="container px-3 sm:px-5 py-12 sm:py-24 mx-auto body-font mb-10 sm:mb-20">
        <div className={`${
          checkBlogPage 
            ? "flex flex-col w-full justify-center items-center"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        }`}>
          {posts.length ? (
            posts?.map(item => {
              console.log(item)
              return (
                <div 
                  className={`${
                    checkBlogPage
                      ? "p-4 flex flex-col w-full"
                      : "p-2 sm:p-4"
                  }`} 
                  key={item._id}
                >
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
              )
            })
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  )
}

export default BlogPost
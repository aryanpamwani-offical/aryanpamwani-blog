import { dateFormat } from "@/lib/dateFormat";

import { fetchPost } from "./page";

const sitemap = async() => {
  
    const posts=await fetchPost();
    // console.log(posts)
      const postUrl=posts.map((post)=>{
    return{
      url: `https://blog.aryanpamwani.me/blog/${post.slug}`,
      lastModified: post.Date,
    }
      })
      // console.log(postUrl)

      return [
        {
          url: `https://blog.aryanpamwani.me/`,
          lastModified:new Date(Date.now()),
        },
       
        ...postUrl, 
      ]
}

export default sitemap
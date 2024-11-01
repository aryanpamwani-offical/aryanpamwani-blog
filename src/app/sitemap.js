import { dateFormat } from "@/lib/dateFormat";

import { fetchPost } from "./page";

const sitemap = async() => {
  
    const posts=await fetchPost();
    // console.log(posts)
      const postUrl=posts.map((post)=>{
    return{
      url: `https://blog.aryanpamwani.me/${post.slug}`,
      lastModified: dateFormat(post.Date),
    }
      })
      // console.log(postUrl)

      return [
        {
          url: `https://next-cms-blog-ce.vercel.app/`,
          lastModified: dateFormat(new Date()),
        },
       
        ...postUrl, 
      ]
}

export default sitemap
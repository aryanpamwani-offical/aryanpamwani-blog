import { dateFormat } from "@/lib/dateFormat";
import axios from "axios";

export const fetchPost = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
    return response.data?.allCategories;  // Assuming allCategories is the array of posts
  } catch (error) {
    console.log(error);
    return [];  // Return an empty array if there is an error
  }
};


const sitemap = async() => {
  
    const posts=await fetchPost();
    // console.log(posts)
      const postUrl=posts.map((post)=>{
    return{
      url: `https://blog.aryanpamwani.in/blog/${post.slug}`,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: post.Date,
    }
      })
      // console.log(postUrl)

      return [
        {
          url: `https://blog.aryanpamwani.in/`,
          changeFrequency: 'weekly',
          priority: 1,
          lastModified:new Date(),
        },
       
        ...postUrl, 
      ]
}

export default sitemap
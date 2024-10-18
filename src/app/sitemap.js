import { dateFormat } from "@/components/dateFormat";

const  fetchPost=async()=>  {
  try {
        let response = await  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
        response=await response.json()
        
        return response?.allCategories
        
      }catch (error) {
      console.log(error);
      
    }
    }

const sitemap = async() => {
    const posts=await fetchPost();
   
      const postUrl=posts.map((post)=>{
     return{

         url:`https://blog.aryanpamwani.me/blog/${post._id} `,
         lastModified: dateFormat(post.Date),
         changeFrequency: 'weekly',
         priority: 1,
     }
      })

  return [
...postUrl,
    {
        url: 'https://blog.aryanpamwani.me',
        lastModified: dateFormat(new Date()),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
  
  ]
   
  
}

export default sitemap
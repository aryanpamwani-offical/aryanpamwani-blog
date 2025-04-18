import { fetchPost } from "@/lib/apiCalls";

export default async function sitemap() {
  try {
    let sitemap=true;
    const response = await fetchPost(sitemap);
    // Extract posts from the correct nested structure
    const posts = response?.data?.data || [];
    
     console.log('Extracted posts:', posts); // Debug log
    
    // Static routes
    const routes = [
      {
        url: 'https://blog.aryanpamwani.in',
        lastModified: new Date().toISOString(),
      },
      {
        url: 'https://blog.aryanpamwani.in/blog',
        lastModified: new Date().toISOString(),
      },
    ];

    // Generate dynamic routes from posts
    const postUrls = Array.isArray(posts) ? posts.map((post) => ({
      url: `https://blog.aryanpamwani.in/blog/${post.slug}`,
      lastModified: new Date(post.Date).toISOString(),
    })) : [];

    const allUrls = [...routes, ...postUrls];
    // console.log('Generated sitemap URLs:', allUrls); // Debug log
    
    return allUrls;
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return routes;
  }
}

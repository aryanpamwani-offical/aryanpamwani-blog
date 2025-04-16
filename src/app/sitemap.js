import { fetchPost } from "@/lib/apiCalls";

const sitemap = async () => {
  try {
    const response = await fetchPost();
    // Extract posts from the nested data structure
    const posts = response?.data?.data || [];
    
    // Add debug logging
    // console.log("API Response:", response);
    // console.log("Extracted Posts:", posts);

    const postUrls = posts.map((post) => ({
      url: `https://blog.aryanpamwani.in/blog/${post.slug}`,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: new Date(post.Date).toISOString(),
    }));

    const sitemapContent = [
      {
        url: `https://blog.aryanpamwani.in/`,
        changeFrequency: 'weekly',
        priority: 1,
        lastModified: new Date().toISOString(),
      },
      {
        url: `https://blog.aryanpamwani.in/blog`,
        changeFrequency: 'weekly',
        priority: 1,
        lastModified: new Date().toISOString(),
      },
      ...postUrls,
    ];

    console.log("Sitemap Content:", sitemapContent); // Verify the sitemap content

    return sitemapContent;
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [
      {
        url: `https://blog.aryanpamwani.in/`,
        changeFrequency: 'weekly',
        priority: 1,
        lastModified: new Date().toISOString(),
      },
      {
        url: `https://blog.aryanpamwani.in/blog`,
        changeFrequency: 'weekly',
        priority: 1,
        lastModified: new Date().toISOString(),
      },
    ];
  }
};

export default sitemap;

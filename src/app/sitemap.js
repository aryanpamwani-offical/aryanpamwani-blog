import { fetchPost } from "@/lib/apiCalls";

 const sitemap = async () => {
  try {
    // const posts = await fetchPost();

    // if (!posts ) {
    //   throw new Error("No posts found");
    // }

    // const postUrls = posts.map((post) => ({
    //   url: `https://blog.aryanpamwani.in/blog/${post.slug}`,
    //   changeFrequency: 'weekly',
    //   priority: 1,
    //   lastModified: new Date(post.Date).toISOString(),
    // }));

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
      // ...postUrls,
    ];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
};
export default sitemap
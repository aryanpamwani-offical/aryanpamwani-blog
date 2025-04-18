 exports.fetchPostsForSitemap = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
      const posts = await response.json();
      
      return posts.data?.data?.map(post => ({
        loc: `/blog/${post.slug}`, 
        changefreq: 'weekly', 
        priority: 0.8
      }));
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  };
const { fetchPostsForSitemap } = require('./src/lib/sitemapApi');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://blog.aryanpamwani.in', // Use your actual domain
    generateRobotsTxt: true,
    exclude: ['/manifest.webmanifest', '/some-other-non-page'],
    robotsTxtOptions: {
        additionalSitemaps: [
          'https://blog.aryanpamwani.in/sitemap-0.xml' // Update with the correct sitemap
        ],
    },
     // Ensure nothing important is excluded
    additionalPaths: async (config) => {
        const blogPosts = await fetchPostsForSitemap();
        // console.log('Blog posts for sitemap:', blogPosts); // Debugging line to check fetched posts
        return [
          { loc: '/', changefreq: 'daily', priority: 1.0 },
          { loc: '/blog', changefreq: 'daily', priority: 0.9 },
          ...blogPosts // Adding dynamically fetched blog posts
        ];
      }
  };
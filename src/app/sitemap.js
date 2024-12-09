export default function sitemap() {
  return [
    {
      url: 'https://blog.aryanpamwani.in/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      
      priority: 1,
    },
    {
      url: 'https://blog.aryanpamwani.in/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
  ]
}
export default function sitemap() {
    return [
      {
        url: 'https://aryanpamwani.in/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        
        priority: 1,
      },
      {
        url: 'https://aryanpamwani.in/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://aryanpamwani.in/skills',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://aryanpamwani.in/projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
      {
        url: 'https://aryanpamwani.in/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
    ]
  }
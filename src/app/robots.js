

export default function robots()  {

 return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio',
    },
    sitemap: 'https://blog.aryanpamwani.in/sitemap-0.xml',
  }
}


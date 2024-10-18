

const robots = () => {

 return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio',
    },
    sitemap: 'https://blog.aryanpamwani.me/sitemap.xml',
  }
}

export default robots
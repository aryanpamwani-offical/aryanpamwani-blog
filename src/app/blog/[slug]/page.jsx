import React from 'react';
import axios from 'axios';
import BlogPostContainer from '@/components/items/Slug/BlogPostContainer';
import Upmove from '@/components/items/Slug/upmove';

const getPost = (slug) => {
  return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showsingle/${slug}`)
    .then(response => response.data.data)
    .catch(error => {
      console.error('Error fetching post:', error);
      return null;
    });
};

export const generateMetadata = ({ params }) => {
  return getPost(params.slug).then(post => {
    if (!post) {
      return {
        title: `Post not found | Aryan Pamwani's Blog`,
        description: `The post with the slug ${params.slug} could not be found.`,
      };
    }

    return {
      title: `${post.name} | Aryan Pamwani's Blog`,
      description: post.shortDesc,
      keywords: post.keyword,
      openGraph: {
        title: post.name,
        description: post.shortDesc,
        type: "article",
        locale: "en_US",
        url: `https://blog.aryanpamwani.in/blog/${params.slug}`,
        siteName: "Aryan Pamwani's Blog",
        images: [
          {
            url: post.imgUrl,
            width: 1200,
            height: 630,
            alt: post.name,
          }
        ],
      },
    };
  });
};

const Page = ({ params }) => {
  return <div className='relative'>
  <BlogPostContainer slug={params.slug} />
  <Upmove/>
  </div>;
  
};

export default Page;

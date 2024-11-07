import Spinner from '@/components/items/Spinner/Spinner';
import React from 'react';
import Post from '@/components/items/getPost/Post';


const fetchPosts = async () => {
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall/`);
    response = await response.json();
    return response.allCategories; // Assuming the API returns all posts in this format
  } catch (error) {
    console.log(error);
    return [];
  }
};

const filterPostBySlug = (posts, slug) => {
  return posts?.find(post => post.slug === slug);
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const allPosts = await fetchPosts();
  const getPost = filterPostBySlug(allPosts, slug);

  if (!getPost) {
    return {
      title: `Post not found | Aryan Pamwani's Blog`,
      description: `The post with the slug ${params.slug} could not be found.`,
    };
  }

  const title = getPost.name;
  const keyword = getPost.keyword;
  const desc = getPost.shortDesc;

  return {
    title: `${title} | Aryan Pamwani's Blog`,
    description: `${desc}`,
    keyword: `${keyword}`,
    openGraph: {
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      type: "website",
      locale: "en_US",
      url: `https://blog.aryanpamwani.me/blog/${params.slug}`,
      siteName: "Aryan Pamwani's Blog",
    },
  };
};

const Page = async ({ params }) => {
  const { slug } = params;
  const allPosts = await fetchPosts();
  const getPost = filterPostBySlug(allPosts, slug);

  if (!getPost) {
    return (
      <div className="flex flex-col w-full mb-10 justify-center items-center">
        <Spinner />
       
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full max-w-[786px] mb-10'>
      {getPost && Object.keys(getPost).length > 0 && (
        <Post
          title={getPost.name}
          date={getPost.Date}
          categoryName={getPost.categoryName}
          body={getPost.content}
          imgUrl={`${getPost.imgUrl}?t=${new Date().getTime()}`} // Add timestamp to force reload
        />
      )}
    </div>
  );
};

export default Page;

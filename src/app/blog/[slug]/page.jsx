import Spinner from '@/components/items/Spinner/Spinner';
import React from 'react';
import Post from '@/components/items/getPost/Post';
import Breadcrum from '@/components/items/Breadcrum/Breadcrum';

const fetchPosts = async () => {
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall/`);
    response = await response.json();
    // console.log(response)
    return response.allCategories; 
    // Assuming the API returns all posts in this format
  } catch (error) {
    console.log(error);
    return [];
  }
};

const filterPostBySlug = (posts, slug) => {
  return posts?.find(post => post.slug === slug);
};

const Page = async ({ params }) => {
  const { slug } = params;

  const allPosts = await fetchPosts();
  const getPost = filterPostBySlug(allPosts, slug);

  if (!getPost) {
    return (
      <div className="flex flex-col w-full  mb-10">
        <Spinner />
        <div className="text-center mt-4">No post found with the given slug.</div>
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

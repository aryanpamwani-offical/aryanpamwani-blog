'use client'

import { useState, useEffect } from 'react'
import BlogPost from './BlogPost'
import Spinner from '../Spinner/Spinner'
import NoPostsFound from '../NoPostsFound/NoPostsFound'

const BlogSection = ({ initialPosts,checkBlogPage }) => {
  const [timeoutReached, setTimeoutReached] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!initialPosts?.length) {
        setTimeoutReached(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [initialPosts])

  

  if (timeoutReached) {
    return <NoPostsFound />
  }

  if (!initialPosts) {
    return <Spinner />
  }

  // Check if posts array is empty
  if (initialPosts.length === 0) {
    return <NoPostsFound />
  }

  return <BlogPost checkBlogPage={checkBlogPage} posts={initialPosts} />
}

export default BlogSection
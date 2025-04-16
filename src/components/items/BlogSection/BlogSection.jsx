'use client'

import { useState, useEffect } from 'react'
import BlogPost from './BlogPost'
import Spinner from '../Spinner/Spinner'
import NoPostsFound from '../NoPostsFound/NoPostsFound'

const BlogSection = ({ initialPosts, checkBlogPage }) => {
  const [timeoutReached, setTimeoutReached] = useState(false)

  useEffect(() => {
    // Reset timeout when posts change
    setTimeoutReached(false)
    
    const timer = setTimeout(() => {
      if (!initialPosts?.length) {
        setTimeoutReached(true)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [initialPosts])

  // First check if posts exist and have length
  if (initialPosts && initialPosts.length > 0) {
    return <BlogPost checkBlogPage={checkBlogPage} posts={initialPosts} />
  }

  // Show spinner while loading and timeout not reached
  if (!timeoutReached) {
    return <Spinner />
  }

  // Show no posts found if timeout reached or explicitly empty posts
  return <NoPostsFound />
}

export default BlogSection
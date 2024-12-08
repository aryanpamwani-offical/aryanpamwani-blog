// "use client";
// import Breadcrum from '@/components/items/Breadcrum/Breadcrum';
// import React from 'react'
// import Hero from '@/components/items/HeroSection/Hero';
// import { useCategoryClient } from '@/components/items/Category/useCategoryClient';
// import Spinner from '@/components/items/Spinner/Spinner';
// import BlogPost from '@/components/items/Blog/BlogPost';
// import { Button } from '@/components/ui/button';

// const CategoryPgComp = ({postData,categoryData}) => {
   
     
//      const {  filteredPosts, loading,  handlePost } = useCategoryClient(postData, categoryData);
//   return (
//    <div  className='flex flex-col  '>
//       <Hero
//      lastText={"Design System"}
//      isHero={false}
//      />
//     <div className='flex flex-col justify-center w-full max-w-[786px]'>
    
    
//      <Breadcrum title={"Design System"} />
//     </div>
//     {/* <SearchBar initialSearchResults={searchResults}/> */}
//     {loading ? (
//         <Spinner />
//       ) : filteredPosts.length > 0 ? (
//         <BlogPost posts={filteredPosts} checkBlogPage={true} />
//       ) : (
//         <div className="w-full text-center py-10">
//           <h2 className="text-2xl font-semibold mb-4">No Posts Found</h2>
//           <Button variant={lightTheme ? 'default' : 'dark'} className="inter" onClick={() => handlePost('all')}>Back</Button>
//         </div>
//       )}
    

//     </div>
//   )
// }

// export default CategoryPgComp
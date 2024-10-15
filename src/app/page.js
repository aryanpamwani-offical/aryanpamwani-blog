
import CategoryClient from "@/components/items/Category/Category";


import Hero from "@/components/items/HeroSection/Hero";
import SearchBar from "@/components/items/Search/Search";

const categoryData = async () => {
  try {
      let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showall`);
      response = await response.json();
      return response.allCategories ;
  } catch (error) {
      console.error('Error fetching category data:', error);
      return [];
  }
};

const postData = async () => {
  try {
      let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
      response = await response.json();
      return response.allCategories ;
  } catch (error) {
      console.error('Error fetching post data:', error);
      return [];
  }
};



export default async function Home() {
  const Categorydata =await categoryData();
  console.log(Categorydata)
   const Postdata =await postData();
  // console.log(Postdata)  
  return (
   <>
 <Hero/>
 <SearchBar/>

<CategoryClient
    categoryData={Categorydata}
    postData={Postdata}
    />
    

   </>
   
  );
}

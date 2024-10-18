
import CategoryClient from "@/components/items/Category/Category";


import Hero from "@/components/items/HeroSection/Hero";
import SearchBar from "@/components/items/Search/Search";
import axios from "axios";

const categoryData = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/showall`);
    return response.data.allCategories;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return [];
  }
};

const searchData = async (search) => {
 
  console.log(search)

  const response= await axios.get(`${process.env.NEXT_PUBLIC_BASE_LOCAL_URL}/post/?search=${search}`)
    //  console.log(response.data)
  return response.data; 
  
};
const postData = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
    return response.data.allCategories; 
  } catch (error) {
    console.error('Error fetching post data:', error);
    return [];
  }
};




export default async function Home({ searchParams }) {
  const {search} = searchParams; 
  // console.log(search)
  const Categorydata =await categoryData();
  // console.log(Categorydata)
   const Postdata =await postData();
   const searchResults = search ? await searchData(search) : [];
    console.log(searchResults)  
  return (
   <>
 <Hero/>
 <SearchBar />
<CategoryClient
    categoryData={Categorydata}
    postData={Postdata}
    />
    

   </>
   
  );
}

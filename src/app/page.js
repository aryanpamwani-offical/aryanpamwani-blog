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
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/?search=${search}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching search data:', error);
    return [];
  }
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
  const search = searchParams?.search ?? ''; // Safely extract search parameter

  const Categorydata = await categoryData();
  const Postdata = await postData();
  const searchResults = search ? await searchData(search) : [];

  // console.log(searchResults);

  return (
    <>
      <Hero />
      <SearchBar initialSearchResults={searchResults} />
      <CategoryClient 
        categoryData={Categorydata} 
        postData={Postdata} 
      />
    </>
  );
}

import CategoryClient from "@/components/items/Category/Category";
import Hero from "@/components/items/HeroSection/Hero";
import SearchBar from "@/components/items/Search/Search";
import { categoryData, postData, searchData } from "@/lib/apiCalls";



export const metadata ={
  metadataBase: new URL("https://blog.aryanpamwani.in"),
  title:"Home | Aryan Pamwani's Blog",
  description: "Hi, I’m Aryan Pamwani, a 21-year-old B.Pharma student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.",
  keywords:"aryanpamwani, aryan pamwani aryan pamwni aryanpanjwani web developer website development web designer",
  opengraph:{
    title:"Home | Aryan Pamwani Blog",
    description: "Hi, I’m Aryan Pamwani, a 21-year-old B.Pharma student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces.",
    locale:"en_US",
    url:"https://blog.aryanpamwani.in",
    siteName:"Aryan Pamwani's Blog"


  }
}


export default async function Home({ searchParams }) {
  const search = searchParams?.search ?? ''; // Safely extract search parameter

  const Categorydata = await categoryData();
  const Postdata = await postData();
  const searchResults = search ? await searchData(search) : [];



  return (
    <>
      <Hero
      firstText={"Designing Your"}
      lastText={"Dream"}
      isHero={true}
      
      />
      <SearchBar initialSearchResults={searchResults} />
      <CategoryClient 
        categoryData={Categorydata} 
        postData={Postdata} 
        checkBlogPage={false}
      />
    </>
  );
}

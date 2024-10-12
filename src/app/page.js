import Blogpost from "@/components/items/Blog/blogpost";
import FilterBtn from "@/components/items/Filter/filter";
import Hero from "@/components/items/HeroSection/Hero";
import SearchBar from "@/components/items/Search/Search";



export default function Home() {
  return (
   <>
 <Hero/>
 <SearchBar/>
 <FilterBtn/>
 <Blogpost/>

   </>
   
  );
}

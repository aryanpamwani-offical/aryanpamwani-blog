import BasePage from "@/components/pages/Home/Page"


const Page = ({searchParams}) => {

   
  return (
   <>
     
   <BasePage
   checkBlogPage={true}
   searchParams={searchParams}
   />
    </>
  )
}

export default Page
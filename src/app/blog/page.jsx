import BasePage from "@/components/pages/Base/Page"


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
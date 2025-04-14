import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { useTheme } from '@/components/Features/reducers/useTheme';
import { ExternalLink } from "lucide-react";
const NoPostsFound = () => {
     const [lightTheme] = useTheme();
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl font-extrabold mb-4 inter">No Blog Posts Found</h2>
      <Link href={"https://aryanpamwani.in/"} target="_blank"  className={`${buttonVariants({ variant: lightTheme ? "default_border" : "dark_border" })} flex flex-row gap-1 content-center m-auto my-5 inter`} >
              Visit Portfolio <ExternalLink className="text-2xl w-5"/>
            </Link>
    </div>
  )
}

export default NoPostsFound
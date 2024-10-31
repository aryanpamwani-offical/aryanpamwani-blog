"use client"
import React from 'react'

import { useTheme } from '@/components/Features/reducers/useTheme';
import { dateFormat } from '@/components/dateFormat';
import parse from 'html-react-parser';
const Post = ({title,date,categoryName,body,imgUrl}) => {
    const [lightTheme]=useTheme()
  return (
<article className='flex justify-center m-auto flex-col items-center'>
  <div className='my-2'>

<p className={`${lightTheme?"text-[color:var(--grey-003)]":"text-[color:var(--grey-006)]"}`}>{dateFormat(date)}</p>
  </div>
  <div className='my-2 text-center border-1 p-2 w-full border-b'>
<h1 className='text-4xl mb-1 font-semibold'>{title}</h1>
<p className={`${lightTheme?"text-[color:var(--grey-004)]":"text-[color:var(--grey-006)]"}`}>{categoryName}</p>
</div>

{parse(body)}        
        


</article>

  )
}

export default Post
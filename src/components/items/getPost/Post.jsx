"use client"
import React from 'react'

import { useTheme } from '@/components/Features/reducers/useTheme';
import { dateFormat } from '@/lib/dateFormat';
import parse from 'html-react-parser';
import Image from 'next/image';
import Breadcrum from '../Breadcrum/Breadcrum';
const Post = ({title,date,categoryName,body,imgUrl}) => {

    const [lightTheme]=useTheme()
  return (
<article className='flex justify-center m-auto flex-col items-center lg:w-full w-4/5'>
  <div className='my-2'>

<p className={`${lightTheme?"text-[color:var(--grey-003)]":"text-[color:var(--grey-006)]"}`}>{dateFormat(date)}</p>
  </div>
  <div className='my-2 text-center border-1 p-2 w-full border-b'>
<h1 className='text-4xl mb-1 font-semibold'>{title}</h1>
<p className={`${lightTheme?"text-[color:var(--grey-004)]":"text-[color:var(--grey-006)]"}`}>{categoryName}</p>
</div>
<Breadcrum title={title}/>
<Image src={imgUrl} alt="" width={786} height={384} className='rounded-2xl lg:h-96 my-10  md:h-80  h-60' priority={true}/>

{parse(body)}        
        


</article>

  )
}

export default Post
"use client";
import React, { useEffect, useState } from 'react'
import BlogItems from './Items'
import axios from 'axios';
import Spinner from '@/components/items/Spinner/Spinner';

import { useSelector } from 'react-redux';

const Blogpost = () => {
  const [Item, setItem] = useState([])
  const [loading, setloading] = useState(false)
  const lightTheme = useSelector((state) => state.themeKey);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`).then(item => {
      setItem(item.data.allCategories);
      setloading(true);
    }).catch(error => {

      console.log(error);

    }
    )


  }, [])



  return (
    <>
      {loading ? (


        <>
          <section class="container px-5 py-24 mx-auto body-font">
            <div class="flex flex-wrap -m-4">
              {
                Item.map(item => {
                  return <BlogItems
                    imgUrl={item.imgUrl}
                    title={item.name}
                    desc={item.content}
                    category={item.categoryName}
                    postId={item._id}

                  />
                })
              }

            </div>

          </section>


        </>
      ) : <Spinner />
      }


    </>
  )
}

export default Blogpost
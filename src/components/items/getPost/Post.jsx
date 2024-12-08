"use client"
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/Features/reducers/useTheme';
import { dateFormat } from '@/lib/dateFormat';
import parse from 'html-react-parser';
import Image from 'next/image';
import Breadcrum from '../Breadcrum/Breadcrum';
import { Skeleton } from "@/components/ui/skeleton";

const Post = ({ title, date, categoryName, body, imgUrl }) => {
    const [lightTheme] = useTheme();
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        // console.log('Image URL:', imgUrl);
    }, [imgUrl]);

    return (
        <article className='flex justify-center m-auto flex-col items-center lg:w-full w-4/5'>
            <div className='my-2'>
                <p className={`${lightTheme ? "text-[color:var(--grey-003)]" : "text-[color:var(--grey-006)]"}`}>{dateFormat(date)}</p>
            </div>
            <div className='my-2 text-center border-1 p-2 w-full border-b'>
                <h1 className='text-4xl mb-1 font-semibold'>{title}</h1>
                <p className={`${lightTheme ? "text-[color:var(--grey-004)]" : "text-[color:var(--grey-006)]"}`}>{categoryName}</p>
            </div>
            <Breadcrum title={title} />

            <div className='relative w-full lg:h-96 my-10 md:h-80 h-60'>
                {loading && (
                    <Skeleton  className={`${lightTheme?"rounded-2xl w-full h-full absolute inset-0l ":"rounded-2xl w-full h-full absolute inset-0 bg-[var(--grey-003)]"}`} />
                )}
                {imgUrl && (
                    <Image
                        src={imgUrl}
                        alt={categoryName}
                       fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={`rounded-2xl ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 w-full h-full absolute inset-0 object-cover`}
                        priority={true}
                        onLoad={() => {
                            // console.log('Image loaded');
                            setLoading(false);
                        }}
                        onError={(err) => {
                            console.log(err);
                            setImageError(true);
                            setLoading(false);
                        }}
                    />
                )}
                {imageError && <p className="text-red-500 absolute inset-0 flex justify-center items-center">Failed to load image.</p>}
            </div>
            {parse(body)}
        </article>
    );
};

export default Post;

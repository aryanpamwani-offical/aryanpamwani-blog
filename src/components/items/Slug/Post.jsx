"use client"
import React, { useState } from 'react';
import { useTheme } from '@/components/Features/reducers/useTheme';
import { dateFormat } from '@/lib/dateFormat';
import Breadcrum from '../Breadcrum/Breadcrum';
import { Skeleton } from "@/components/ui/skeleton";

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import CodeBlock from '@/lib/CodeBlock';
import TableOfContents from './TableofConent';
import Image from 'next/image';
import { CircleUserRound, User, UserRoundPen, Users } from 'lucide-react';

const Post = ({ title, date, categoryName, body, imgUrl }) => {
    const [lightTheme] = useTheme();
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);


 

   
    // Function to generate dynamic prose classes based on theme
    const getProseClasses = () => {
        const baseClasses = "prose prose-lg max-w-none w-full  prose-table:w-auto ";
    
        const themeClasses = lightTheme
            ? `
          prose-h1:text-[color:var(--grey-002)] prose-h2:text-[color:var(--grey-002)] prose-h3:text-[color:var(--grey-002)] prose-h4:text-[color:var(--grey-002)] prose-h5:text-[color:var(--grey-002)] prose-h6:text-[color:var(--grey-002)]
          prose-p:text-[color:var(--grey-002)]
          prose-strong:text-[color:var(--grey-002)]
          prose-table:border prose-table:border-[color:var(--grey-003)]
          prose-th:border prose-th:border-[color:var(--grey-003)]
          prose-td:border prose-td:border-[color:var(--grey-003)]
          prose-hr:border-[color:var(--grey-003)]
          prose-pre:bg-[color:var(--grey-001)]
        
          /* List Styles */
          prose-ul:list-disc prose-ul:text-[color:var(--grey-002)]
          prose-ol:list-decimal prose-ol:text-[color:var(--grey-002)]
          prose-li:marker:text-[color:var(--grey-002)] /* List marker color */
          /* Checkbox Styles */
          prose-li>input[type="checkbox"] {
              @apply mr-2; /* Add some spacing */
          }
          prose-li>input[type="checkbox"]:checked+label {
              color: var(--grey-002); /* Example: Change label color when checked */
          }
              /* Image Styles */
    prose-img:mx-auto prose-img:flex prose-img:lg:max-w-[500px] prose-img:md:max-w-[500px] prose-img:sm:max-w-[500px] prose-img:md:max-w-[500] prose-img:max-w-auto  
        `
            : `
          prose-h1:text-[color:var(--grey-006)] prose-h2:text-[color:var(--grey-006)] prose-h3:text-[color:var(--grey-006)] prose-h4:text-[color:var(--grey-006)] prose-h5:text-[color:var(--grey-006)] prose-h6:text-[color:var(--grey-006)]
          prose-p:text-[color:var(--grey-005)]
          prose-strong:text-[color:var(--grey-007)] 
          
          prose-strong:font-bold
          prose-table:border prose-table:border-[color:var(--grey-006)]
          prose-th:border prose-th:border-[color:var(--grey-006)]
          prose-td:border prose-td:border-[color:var(--grey-006)]
          prose-hr:border-[color:var(--grey-004)]
          prose-pre:bg-[color:var(--grey-001)]
    
          /* List Styles */
          prose-ul:list-disc prose-ul:text-[color:var(--grey-004)] 
          prose-ol:list-decimal prose-ol:text-[color:var(--grey-004)]
          prose-li:marker:text-[color:var(--grey-004)] /* List marker color */
    
          /* Checkbox Styles */
          prose-li>input[type="checkbox"] {
              @apply mr-2; /* Add some spacing */
          }
          prose-li>input[type="checkbox"]:checked+label {
              color: var(--grey-006); /* Example: Change label color when checked */
          }
               prose-img:mx-auto prose-img:flex prose-img:lg:max-w-[500px] prose-img:md:max-w-[500px] prose-img:sm:max-w-[500px] prose-img:md:max-w-[500] prose-img:max-w-auto  
        `;
    
        return `${baseClasses} ${themeClasses}`;
    };

    return (
        <article className='flex justify-center m-auto w- flex-col items-center lg:w-full w-4/5' >
            <div className='my-2'>
                <p className={`${lightTheme ? "text-[color:var(--grey-003)] " : "text-[color:var(--grey-006)]"}`}>{dateFormat(date)}</p>
            </div>
            <div className='my-2 text-center border-1 p-2 w-full border-b'>
                <h1 className='lg:text-4xl mb-1 font-semibold md:text-3xl sm:text-2xl text-2xl'>{title}</h1>
                <p className={`${lightTheme ? "text-[color:var(--grey-004)]" : "text-[color:var(--grey-006)]"} flex items-center justify-center`}><UserRoundPen className='mr-2 font-bold'/>Aryan Pamwani</p>
                <p className={`${lightTheme ? "text-[color:var(--grey-004)]" : "text-[color:var(--grey-006)]"}`}>{categoryName}</p>
            </div>
            <Breadcrum noOfItems={2} Items={["Blog",title]} />

            <div className='relative w-full lg:h-96 my-10 md:h-80 h-60'>
                {loading && (
                    <Skeleton className={`${lightTheme ? "rounded-2xl w-full h-full absolute inset-0l " : "rounded-2xl w-full h-full absolute inset-0 bg-[var(--grey-003)]"}`} />
                )}
                {imgUrl && (
                    <Image
                        src={imgUrl}
                        alt={categoryName}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={`rounded-2xl ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 w-full h-full absolute inset-0 object-fit`}
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
                        gravity='auto'
                        unoptimized="true"

                        id='upmove'
                    />
                )}
                {imageError && <p className="text-red-500 absolute inset-0 flex justify-center items-center">Failed to load image.</p>}
            </div>
            <TableOfContents content={body} />
            <div className={getProseClasses()}>
                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            if (inline) {
                                return (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                            return (
                                <CodeBlock className={className}>
                                    {children}
                                </CodeBlock>
                            );
                        }
                    }}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
                >
                    {body}
                </ReactMarkdown>
            </div>

        </article>
    );
};

export default Post;
"use client"
import React, { useState } from 'react';
import { useTheme } from '@/components/Features/reducers/useTheme';
import { dateFormat } from '@/lib/dateFormat';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy, Check } from 'lucide-react';
import Breadcrum from '../Breadcrum/Breadcrum';
import { Skeleton } from "@/components/ui/skeleton";
import { CldImage } from 'next-cloudinary';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const Post = ({ title, date, categoryName, body, imgUrl }) => {
    const [lightTheme] = useTheme();
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);


 

    const CodeBlock = ({ className, children }) => {
        const [isCopied, setIsCopied] = useState(false);
        const code = String(children).replace(/\n$/, '');
        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : '';

        const handleCopy = () => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        };

        return (
            <div className="relative group not-prose">
                <CopyToClipboard text={code} onCopy={handleCopy}>
                    <button
                        className="absolute right-2 top-2 p-2 rounded bg-grey-700/50
                                 hover:bg-grey-700 text-white opacity-0
                                 group-hover:opacity-100 transition-all duration-200 z-10"
                        aria-label="Copy code"
                    >
                        {isCopied ? (
                            <Check className="h-4 w-4" />
                        ) : (
                            <Copy className="h-4 w-4" />
                        )}
                    </button>
                </CopyToClipboard>
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        borderRadius: '0.5rem',
                        padding: '1rem',
                    }}
                    wrapLongLines={true}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        );
    };

    // Function to generate dynamic prose classes based on theme
    const getProseClasses = () => {
        const baseClasses = "prose prose-lg max-w-none w-full  ";
    
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
      prose-img:mx-auto prose-img:block
        `
            : `
          prose-h1:text-[color:var(--grey-006)] prose-h2:text-[color:var(--grey-006)] prose-h3:text-[color:var(--grey-006)] prose-h4:text-[color:var(--grey-006)] prose-h5:text-[color:var(--grey-006)] prose-h6:text-[color:var(--grey-006)]
          prose-p:text-[color:var(--grey-007)]
          prose-strong:text-[color:var(--grey-006)]
          prose-table:border prose-table:border-[color:var(--grey-006)]
          prose-th:border prose-th:border-[color:var(--grey-006)]
          prose-td:border prose-td:border-[color:var(--grey-006)]
          prose-hr:border-[color:var(--grey-004)]
          prose-pre:bg-[color:var(--grey-001)]
    
          /* List Styles */
          prose-ul:list-disc prose-ul:text-[color:var(--grey-007)]
          prose-ol:list-decimal prose-ol:text-[color:var(--grey-007)]
          prose-li:marker:text-[color:var(--grey-006)] /* List marker color */
    
          /* Checkbox Styles */
          prose-li>input[type="checkbox"] {
              @apply mr-2; /* Add some spacing */
          }
          prose-li>input[type="checkbox"]:checked+label {
              color: var(--grey-006); /* Example: Change label color when checked */
          }
                            /* Image Styles */
      prose-img:mx-auto prose-img:block
        `;
    
        return `${baseClasses} ${themeClasses}`;
    };

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
                    <Skeleton className={`${lightTheme ? "rounded-2xl w-full h-full absolute inset-0l " : "rounded-2xl w-full h-full absolute inset-0 bg-[var(--grey-003)]"}`} />
                )}
                {imgUrl && (
                    <CldImage
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
                        gravity='auto'
                        unoptimized="true"
                    />
                )}
                {imageError && <p className="text-red-500 absolute inset-0 flex justify-center items-center">Failed to load image.</p>}
            </div>
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
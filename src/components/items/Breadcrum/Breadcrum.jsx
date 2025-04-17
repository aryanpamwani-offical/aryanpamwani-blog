"use client";
import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/Features/reducers/useTheme'

const Breadcrum = ({ noOfItems, Items }) => {
    const [lightTheme] = useTheme()

    const generateBreadcrumbs = () => {
        const breadcrumbs = [{ title: 'Home', link: '/' }]
        // loop
        for (let i = 0; i < noOfItems && i < Items.length; i++) {
            const title = String(Items[i])
            const titleShort = title.length > 80 ? `${title.substring(0, 80)}...` : title
             
            breadcrumbs.push({
                title: titleShort,
                link: i === noOfItems - 1 ? null : `/${Items.slice(0, i + 1).join('/')}`
            })
        }
        
        return breadcrumbs
    }

    return (
        <div className='flex flex-row my-5'>
            <ul className='flex flex-row'>
                {generateBreadcrumbs().map((item, index) => (
               
                    <React.Fragment key={index}>
                        <li>
                            {item.link ? (
                                <Link 
                                    href={item.link.toLowerCase()}
                                    className={`${lightTheme
                                        ? "text-[color:var(--grey-003)] hover:text-[color:var(--grey-002)] lg:text-3xl md:text-2xl sm:text-2xl text-xs flex flex-col justify-center items-center"
                                        : "text-[color:var(--grey-005)] hover:text-[color:var(--grey-006)] lg:text-3xl md:text-2xl sm:text-2xl text-xs flex flex-col justify-center items-center"
                                    } mx-2`}
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <span 
                                    className={`${lightTheme
                                        ? "text-[color:var(--grey-002)] lg:text-3xl md:text-2xl sm:text-2xl text-xs flex flex-col justify-center items-center"
                                        : "text-[color:var(--grey-006)] lg:text-3xl md:text-2xl sm:text-2xl text-xs flex flex-col justify-center items-center"
                                    } mx-2`}
                                >
                                    {item.title}
                                </span>
                            )}
                        </li>
                        {index < generateBreadcrumbs().length - 1 && (
                            <li className={`${lightTheme
                                ? "text-[color:var(--grey-001)] lg:text-3xl md:text-2xl sm:text-2xl text-xs"
                                : "text-[color:var(--grey-007)] lg:text-3xl md:text-2xl sm:text-2xl text-xs"
                            } mx-2`}>/</li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrum
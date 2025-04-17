"use client"
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/Features/reducers/useTheme';
import Link from 'next/link';

const TableOfContents = ({ content }) => {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState('');
    const [lightTheme] = useTheme();

    useEffect(() => {
        // Extract headings from markdown content
        const extractHeadings = (markdown) => {
            const headingRegex = /^(#{1,6})\s+(.+)$/gm;
            const matches = [...markdown.matchAll(headingRegex)];
            return matches.map((match) => ({
                level: match[1].length,
                text: match[2],
                id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-')
            }));
        };

        setHeadings(extractHeadings(content));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const headingPositions = Array.from(headingElements).map(heading => ({
                id: heading.id,
                offset: heading.getBoundingClientRect().top
            }));

            const currentHeading = headingPositions.find(heading => heading.offset > 0) || headingPositions[headingPositions.length - 1];
            if (currentHeading) {
                setActiveId(currentHeading.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [centent]);

    return (
        <nav className={`hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto w-full p-4 ml-8 ${
            lightTheme ? "border-l border-[color:var(--grey-004)]" : "border-l border-[color:var(--grey-006)]"
        }`  } id='tableofcontent'>
            <h2 className={`text-xl font-bold mb-4 ${
                lightTheme ? "text-[color:var(--grey-002)]" : "text-[color:var(--grey-006)]"
            }`}>
                Table of Contents
            </h2>
            <ul className="space-y-3">
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        style={{ 
                            paddingLeft: `${(heading.level - 1) * 1}rem`,
                        }}
                    >
                        <Link
                            href={`#${heading.id}`}
                            className={`block transition-colors duration-200 ${
                                // Font size and weight based on heading level
                                heading.level === 1 ? 'text-base font-semibold' :
                                heading.level === 2 ? 'text-[15px] font-medium' :
                                'text-sm font-normal'
                            } ${
                                // Active and theme states
                                activeId === heading.id
                                    ? lightTheme
                                        ? "text-[color:var(--grey-002)]"
                                        : "text-[color:var(--grey-007)]"
                                    : lightTheme
                                        ? "text-[color:var(--grey-003)] hover:text-[color:var(--grey-002)]"
                                        : "text-[color:var(--grey-005)] hover:text-[color:var(--grey-006)]"
                            }`}
                        >
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
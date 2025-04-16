import React from 'react';
import { useTheme } from '@/components/Features/reducers/useTheme';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const [lightTheme] = useTheme();

    // Always generate at least one page
    const pages = Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center gap-2 my-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1 || totalPages <= 1}
                className={`px-4 py-2 rounded ${
                    lightTheme 
                        ? "bg-[--grey-006] text- hover:bg-[--grey-005] " 
                        : "bg-[--grey-003]  text-[--grey-006]  hover:bg-[--grey-001] "
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                Previous
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    disabled={page === currentPage || totalPages <= 1}
                    className={`px-4 py-2 rounded ${
                        page === currentPage
                            ? lightTheme 
                                ? "bg-[--grey-003] text-[--grey-007] cursor-not-allowed"
                                : "bg-[--grey-003] text-[--grey-007] cursor-not-allowed"
                            : lightTheme
                                ? "bg-[--grey-006] text- hover:bg-[--grey-005] " 
                                : "bg-[--grey-003]  text-[--grey-006]  hover:bg-[--grey-001] "
                    }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages <= 1}
                className={`px-4 py-2 rounded ${
                    lightTheme 
                        ? "bg-[--grey-006] text- hover:bg-[--grey-005] " 
                        : "bg-[--grey-003]  text-[--grey-006]  hover:bg-[--grey-001] "
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
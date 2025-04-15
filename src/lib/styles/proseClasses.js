export const getProseClasses = (lightTheme) => {
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
      prose-li:marker:text-[color:var(--grey-002)]
      /* Checkbox Styles */
      prose-li>input[type="checkbox"] {
          @apply mr-2;
      }
      prose-li>input[type="checkbox"]:checked+label {
          color: var(--grey-002);
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
      prose-li:marker:text-[color:var(--grey-006)]

      /* Checkbox Styles */
      prose-li>input[type="checkbox"] {
          @apply mr-2;
      }
      prose-li>input[type="checkbox"]:checked+label {
          color: var(--grey-006);
      }
      /* Image Styles */
      prose-img:mx-auto prose-img:block
    `;

    return `${baseClasses} ${themeClasses}`;
};
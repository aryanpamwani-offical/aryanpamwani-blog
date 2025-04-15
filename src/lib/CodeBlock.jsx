"use client";
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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

export default CodeBlock;
"use client";

import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-lg font-bold text-[#0F1C3F] mb-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-base font-bold text-[#0F1C3F] mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-sm font-bold text-[#0F1C3F] mb-1">{children}</h3>
          ),
          // Paragraphs
          p: ({ children }) => (
            <p className="text-sm leading-relaxed mb-2 last:mb-0">{children}</p>
          ),
          // Bold text
          strong: ({ children }) => (
            <strong className="font-semibold text-[#8B1A1A]">{children}</strong>
          ),
          // Italic
          em: ({ children }) => (
            <em className="italic text-[#0F1C3F]">{children}</em>
          ),
          // Lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 mb-2 ml-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 mb-2 ml-1">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm leading-relaxed">
              <span className="ml-1">{children}</span>
            </li>
          ),
          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A227] hover:text-[#8B1A1A] underline transition-colors"
            >
              {children}
            </a>
          ),
          // Code
          code: ({ children }) => (
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#8B1A1A]">
              {children}
            </code>
          ),
          // Blockquote
          blockquote: ({ children }) => (
            <blockquote className="border-l-3 border-[#C9A227] pl-3 py-1 my-2 bg-[#C9A227]/5 rounded-r">
              {children}
            </blockquote>
          ),
          // Horizontal rule
          hr: () => <hr className="my-3 border-gray-200" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

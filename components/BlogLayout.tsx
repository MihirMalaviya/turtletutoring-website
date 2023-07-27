import React from "react";
import { Container } from "react-bootstrap";

interface BlogLayoutProps {
  title: string;
  author: string;
  date: string;
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  title,
  author,
  date,
  children,
}) => {
  return (
    <Container className="w-100 mx-auto px-4 py-16">
      <Container className="min-h-screen">
        <div className="w-100 mx-auto">
          {/* Blog title */}
          <h1 className="-pl-1">{title}</h1>
          {/* Author and date */}
          <p className="text-sm text-stone-600 pb-4 schib">
            {author}
            {"  "}&middot;{"  "}
            {date}
          </p>
          {/* Blog content */}
          <div className="!prose !prose-stone">{children}</div>
        </div>
      </Container>

      {/* Go back link */}
      <div className="flex flex-row-reverse">
        <a
          href="../latest"
          className="mx-10 text-green-500 hover:text-yellow-500 hover:!underline ease-in-out duration-200 schib"
        >
          Go Back &rsaquo;
        </a>
      </div>
    </Container>
  );
};

export default BlogLayout;

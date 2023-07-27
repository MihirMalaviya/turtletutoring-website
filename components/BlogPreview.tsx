import React from "react";
import Card from "@mui/joy/Card";
// import Button from "@mui/joy/Button";
import Button from "../components/Button";
import Image from "next/image";

interface BlogPreviewProps {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  href: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
  title,
  description,
  author,
  date,
  image,
  href,
}) => {
  return (
    <>
    <a href={href} className="block">
      <Card className="border border-stone-200 bg-white shadow-lg rounded-xl overflow-hidden hover:!bg-green-50 hover:!border-green-200 ease-in-out duration-200">
        <div className="flex flex-col p-1">
          {/* Image */}
          <div className="w-full h-60 relative mb-4 rounded overflow-hidden">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 ease-in-out duration-200"
            />
          </div>
          <div className="flex flex-col p-2 !pt-0">
            {/* Blog title */}
            <h3 className="text-stone-900 mb-1 schib font-extrabold">
              {title}
            </h3>
            {/* Author and date */}
            <p className="text-stone-600 italic mb-2">
              by {author} &middot; {date}
            </p>
            {/* Blog description */}
            <p className="text-stone-800">{description}</p>
            {/* <Button
              className="shadow-sm self-center rounded mt-6 bg-green-200 text-green-800 border !border-green-300 hover:!border-green-700 hover:bg-green-600 hover:text-white transition duration-100"
              size="lg"
            >
              Read More
            </Button> */}
            <Button
              className="shadow-sm self-center mt-6"
              // buttonClassName="schib"
              size="md"
              href={href}
              // hasBorder={false}
              variant="primary"
            >
              Read More
            </Button>
          </div>
        </div>
      </Card>
    </a>
    </>
  );
};

export default BlogPreview;

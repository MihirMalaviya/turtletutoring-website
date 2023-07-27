import React from "react";
import Card from "@mui/joy/Card";
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
  const handleReadMoreClick = () => {
    // Navigate to the provided URL when "Read More" is clicked
    // stupid solution cus nextjs is stupid
    window.location.href = href;
  };

  return (
    <div className="block" onClick={handleReadMoreClick}>
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
            <Button
              className="shadow-sm self-center mt-6"
              size="md"
              // Use an empty href since it's required by the Button component but we handle the click manually
              href=""
              variant="primary"
            >
              Read More
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogPreview;

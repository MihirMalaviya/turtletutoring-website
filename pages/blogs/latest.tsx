import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Container from "react-bootstrap/Container";
import Head from "next/head";
import BlogPreview from "../../components/BlogPreview";

const blogData = [
  {
    title: "Test Blog",
    description: "This is a test blog!",
    author: "John Doe",
    date: "7/11/2023",
    image: "/logo.png",
    href: "latest/test-blog"
  },
  {
    title: "Test Blog 2",
    description: "This is another test blog!",
    author: "Jane Doe",
    date: "7/12/2023",
    image: "/logo.png",
    href: "#"
  },
  {
    title: "One More Test Blog",
    description: "This is yet another test blog!",
    author: "Jim Doe",
    date: "7/13/2023",
    image: "/logotransparent.png",
    href: "#"
  },
  {
    title: "jk theres mroe",
    description: "This dsaadsds yet another test blog!",
    author: "Jidssdm Doe",
    date: "7/13/2023",
    image: "/javabg.jpg",
    href: "#"
  },
  {
    title: "jk long long long long long long long long  mroe",
    description: "This dsaadsdlong long long long long long long long long long long long long long long long long long long long s yet another test blog!",
    author: "Jidssdm Doe",
    date: "7/13/2023",
    image: "/javabg.jpg",
    href: "#"
  },
  {
    title: "jk theres mroe",
    description: "This dsaadsds yet another test blog!",
    author: "Jidssdm Doe",
    date: "7/13/2023",
    image: "/javabg.jpg",
    href: "#"
  },
  {
    title: "jk theres mroe",
    description: "This dsaadsds yet another test blog!",
    author: "Jidssdm Doe",
    date: "7/13/2023",
    image: "/javabg.jpg",
    href: "#"
  },
  {
    title: "jk theres mroe",
    description: "This dsaadsds yet another test blog!",
    author: "Jidssdm Doe",
    date: "7/13/2023",
    image: "/javabg.jpg",
    href: "#"
  },
  {
    title: "jk theres mroe",
    description: "This dsaadsds yet another test blog!",
    author: "Jidssdm Doe",
    date: "7/13/2023",
    image: "/javabg.jpg",
    href: "#"
  },
];

const Latest = () => {
  return (
    <>
      <Head>
        <title>Latest Blog Posts</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>

      <Container className="min-h-screen my-12">
        <h1 className="mb-16">
          Latest Blogs
        </h1>

        <Box className="ml-auto" sx={{ width: "100%" }}>
          <Masonry columns={3} spacing={8}>
            {blogData.map((blog, index) => (
              <div key={index}>
                <BlogPreview {...blog} />
              </div>
            ))}
          </Masonry>
        </Box>
      </Container>
    </>
  );
};

export default Latest;

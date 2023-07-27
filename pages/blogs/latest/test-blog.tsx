import React from "react";
import Head from "next/head";
import BlogLayout from "../../../components/BlogLayout";

// import styles from "../../../styles/blog.module.css";

const TestBlog: React.FC = ({}) => {
  return (
    <>
      <Head>
        <title>Test Blog</title>
      </Head>
      <BlogLayout
        title="This is a Test Blog"
        author="Mihir Malaviya"
        date="July 14, 2023"
      >
        <p>
          This is a <b>test blog!</b>
        </p>
        <img src="/logo.png" alt="Logo" />
        <p>
          That was an <em>image!</em>
        </p>
        <h2>Test Header 2</h2>
        <h3>Test Header 3</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dapibus turpis vel massa vulputate, nec dapibus urna porta. Sed at
          fermentum ex, ut hendrerit dui. Proin malesuada luctus velit ac
          sagittis.
        </p>
        <h2>List Example:</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h2>Ordered List Example:</h2>
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>
        <h2>Code Example:</h2>
        <pre>
          <code>{`const greeting = "Hello, world!";\nconsole.log(greeting);`}</code>
        </pre>
        <h2>Table Example:</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>$30</td>
            </tr>
          </tbody>
        </table>
      </BlogLayout>
    </>
  );
};

export default TestBlog;

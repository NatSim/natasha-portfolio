import React from "react";
import "./Blogs.module.css"; // Ensure this path is correct

const Blogs = () => {
  const blackCodherBlogSrc =
    "https://medium.com/codingblackfemales/5-tips-from-a-junior-developer-one-month-into-a-new-role-with-how-to-get-away-with-murder-gifs-d32a31c6a180";
  const careerProgressionBlogSrc =
    "https://medium.com/@natsimbig/5-tips-from-a-junior-developer-for-career-progression-with-rupauls-drag-race-gifs-bd9d5ab7a8c8";

  const blogs = [
    {
      title: "Blog Title 1",
      image: blackCodherBlogSrc,
      summary: "This is a brief summary of the first blog post.",
      link: blackCodherBlogSrc,
    },
    {
      title: "Blog Title 2",
      image: "https://example.com/image2.jpg",
      summary: "This is a brief summary of the second blog post.",
      link: careerProgressionBlogSrc,
    },
    {
      title: "Blog Title 3",
      image: "https://example.com/image3.jpg",
      summary: "This is a brief summary of the third blog post.",
      link: "https://example.com/blog3",
    },
  ];

  return (
    <div className='blog-grid'>
      {blogs.map((blog, index) => (
        <div key={index} className='blog-card'>
          <img src={blog.image} alt={blog.title} className='blog-image' />
          <h3>{blog.title}</h3>
          <p>{blog.summary}</p>
          <a href={blog.link} className='read-more'>
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

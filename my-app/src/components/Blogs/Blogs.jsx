import React from "react";
import "./Blogs.module.css"; // Ensure this path is correct

const Blogs = () => {
  const blackCodherBlogSrc =
    "https://medium.com/codingblackfemales/5-tips-from-a-junior-developer-one-month-into-a-new-role-with-how-to-get-away-with-murder-gifs-d32a31c6a180";
  const careerProgressionBlogSrc =
    "https://medium.com/@natsimbig/5-tips-from-a-junior-developer-for-career-progression-with-rupauls-drag-race-gifs-bd9d5ab7a8c8";

  return (
    <section className='blog-embeds'>
      <div
        id='retainable-rss-embed'
        data-rss='https://medium.com/feed/retainable,
https://medium.com/feed/vue-mastery'
        data-maxcols='3'
        data-layout='grid'
        data-poststyle='inline'
        data-readmore='Read the rest'
        data-buttonclass='btn btn-primary'
        data-offset='-100'
      ></div>
    </section>
  );
};

export default Blogs;

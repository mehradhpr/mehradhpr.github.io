import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Post Title 1",
      date: "June 21, 2024",
      keywords: ["keyword1", "keyword2", "keyword3"],
      abstract: "This is the abstract for post 1. It summarizes the content of the post.",
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae velit varius,
        vehicula tellus eget, laoreet ipsum. Nullam nec nulla sed nisi tempus vestibulum.
        Donec ac justo ac elit pulvinar maximus. Nulla facilisi. Vestibulum id risus eget
        tortor ullamcorper viverra.
      `,
    },
    {
      title: "Post Title 2",
      date: "June 22, 2024",
      keywords: ["keyword4", "keyword5", "keyword6"],
      abstract: "This is the abstract for post 2. It summarizes the content of the post.",
      content: `
        Phasellus sed lectus ac ante ultrices bibendum. Mauris posuere enim vel libero
        fringilla, id venenatis leo fermentum. Sed nec malesuada nulla, non mattis sem.
        Vivamus vitae orci nec risus tincidunt efficitur. Duis eleifend nunc vel sem
        sodales, vel ullamcorper elit eleifend.
      `,
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center p-4 mb-10">
      <section className="p-20 min-[830px]:p-28">
        <h1 className="text-2xl font-bold tracking-widest min-[830px]:text-3xl">Blog</h1>
      </section>
      <section className="flex flex-col gap-10 w-full items-center justify-center">
        {posts.map((post, index) => (
          <div
            key={index}
            className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[650px]"
          >
            <div className="text-xl text-green-500 bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
              {post.title}
            </div>
            <div className="text-hidden text-sm min-[830px]:text-base">Posted on {post.date}</div>
            <div className="text-hidden text-sm min-[830px]:text-base">
              Keywords: {post.keywords.join(", ")}
            </div>
            <div className="pt-3 min-[830px]:pt-5">
              <p className="text-lg min-[830px]:text-xl font-semibold">{post.abstract}</p>
              <p className="mt-3 min-[830px]:mt-5">{post.content}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;

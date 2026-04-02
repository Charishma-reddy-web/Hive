'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { imageMap } from "@/assets/images portfolio/imageMap";

interface BlogListItem {
  slug: string;
  title: string;
  excerpt: string;
  imageId: string;
  date: string;
  author: string;
}

interface BlogListResponse {
  heading: string;
  buttonText: string;
  blogs: BlogListItem[];
}

const BlogSection: React.FC<{ noTopMargin?: boolean }> = ({ noTopMargin = false }) => {
  const [data, setData] = useState<BlogListResponse | null>(null);

  useEffect(() => {
    fetch('/api/blogs')
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <section className="flex flex-col items-center justify-center bg-white font-sans snap-start py-16" id="blog">
        <h2 className={`text-center mb-12 text-[2.5rem] font-light text-gray-900 ${noTopMargin ? 'mt-0' : 'mt-[10vh]'}`}>
          Fresh Insights - Our Latest Blogs
        </h2>
        <div className="flex justify-center items-stretch gap-8 flex-wrap w-[90%] max-w-[1200px]">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-[0_1_100%] md:flex-[0_1_354px] max-w-[380px] rounded-[2rem] border-2 border-gray-200 min-h-[480px] p-6 animate-pulse bg-gray-100" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center bg-white font-['Space_Grotesk',sans-serif] snap-start" id="blog">
      <h2 className={`text-center font-light text-[2.5rem] text-black ${noTopMargin ? 'm-[4vh_0_1.5rem_0]' : 'm-[18vh_0_1.5rem_0]'}`}>
        {data.heading}
      </h2>
      
      {/* Replicating .blog-carousel & .blog-cards */}
      <div className="flex justify-center items-center w-full overflow-x-auto pb-10">
        <div className="flex justify-center items-center gap-[1rem] flex-wrap transition-transform duration-300 ease-in-out">
          {data.blogs.map((blog) => (
            <div
              key={blog.slug}
              className="group bg-white flex-[0_0_354px] mr-[1vmax] rounded-[2rem] border-2 border-black border-b-[15px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] h-[452px] p-[20px] text-left transition-colors duration-300 ease-in-out hover:bg-[#1ae9ab] flex flex-col"
            >
              <div
                className="bg-[#ccc] h-[155px] overflow-hidden rounded-t-[2rem] mb-[2.5rem] bg-cover bg-center bg-no-repeat border border-transparent transition-colors duration-300 group-hover:border-black"
                style={{ backgroundImage: `url(${imageMap[blog.imageId]?.src ?? ''})` }}
              />
              
              <h3 className="text-[24px] mb-[10px] text-black font-semibold leading-tight">{blog.title}</h3>
              <p className="text-black text-[18px] mb-[20px] leading-tight line-clamp-2">{blog.excerpt}</p>
              
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-block bg-[#111] text-[#fff] border-none py-[10px] px-[20px] rounded-[32px] cursor-pointer w-max mt-auto hover:scale-105 transition-transform"
              >
                {data.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
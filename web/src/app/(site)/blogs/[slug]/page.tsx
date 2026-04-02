import { notFound } from "next/navigation";
import Image from "next/image";
import { imageMap } from "@/assets/images portfolio/imageMap";
import { blogs } from "@/app/api/blogs/data";
import BlogSection from "@/components/sections/Blogsection";
import { ContactUs } from "@/components/sections/ContactUs";

interface BlogArticleSection {
  heading: string;
  body?: string;
  bullets?: { label: string; text: string }[];
}

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  imageId: string;
  date: string;
  author: string;
  intro: string;
  sections: BlogArticleSection[];
}

// Pre-render all blog pages at build time for instant loading
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug) as Blog | undefined;

  if (!blog) {
    notFound();
  }

  const featuredImage = imageMap[blog.imageId as keyof typeof imageMap];

  return (
    <div className="min-h-screen bg-white">
      {/* Replicating .blogWrap & .blogContainer */}
      <main className="w-[80%] mx-auto pt-[20vh] pb-24 flex flex-col items-center justify-center font-['Space_Grotesk',sans-serif]">
        
        {/* Replicating .blogTitle */}
        <div className="flex flex-col justify-end items-center h-[50vmin] w-full">
          <h1 className="text-center font-normal text-[4rem] leading-tight text-black">
            {blog.title}
          </h1>
          <p className="text-center mt-4 text-[1.2rem] font-light text-black">
            {blog.intro}
          </p>
        </div>

        {/* Replicating .blogImage */}
        {featuredImage && (
          <div className="relative w-[80%] h-[400px] rounded-t-[50px] overflow-hidden mt-8">
            <Image
              src={featuredImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Replicating .contentPara */}
        <div className="w-[82%] px-8 my-14 flex flex-col items-start text-left font-light text-[18px] text-black">
          {blog.sections.map((section, i) => (
            <div key={i} className="w-full mb-8">
              {/* Replicating .contentPara h5 */}
              <h2 className="text-left text-2xl font-semibold text-black leading-tight">
                {section.heading}
              </h2>
              
              {/* Replicating .contentPara p */}
              {section.body && (
                <p className="mt-4 text-black font-light leading-tight">
                  {section.body}
                </p>
              )}
              
              {/* Bullets using the same p rules + strong rules */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-3 list-disc list-outside ml-6">
                  {section.bullets.map((bullet, j) => (
                    <li key={j} className="text-black font-light leading-tight pl-2">
                      <span className="font-medium text-black">{bullet.label}:</span>{" "}
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Renders other layout sections at the bottom automatically */}
      <div className="w-full">
        <BlogSection noTopMargin />
        <ContactUs />
      </div>
    </div>
  );
}

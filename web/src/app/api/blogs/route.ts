import { NextResponse } from 'next/server';
import { blogs } from './data';

export async function GET() {
  const list = blogs.map(({ slug, title, excerpt, imageId, date, author }) => ({
    slug,
    title,
    excerpt,
    imageId,
    date,
    author,
  }));

  return NextResponse.json({
    heading: "Fresh Insights - Our Latest Blogs",
    buttonText: "Read More",
    blogs: list,
  });
}

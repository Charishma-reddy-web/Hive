import { NextResponse } from 'next/server';
import { blogs } from '../data';

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}

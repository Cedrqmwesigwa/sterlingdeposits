
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { getBlogPostBySlug, blogPosts } from '@/data/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} - Sterling Contractors Blog`,
    description: post.summary,
    openGraph: {
        title: post.title,
        description: post.summary,
        images: [
            {
                url: post.imageSrc, // Replace with actual image URL if dynamic
                width: 800,
                height: 400,
                alt: post.imageAlt,
            },
        ],
        type: 'article',
        publishedTime: new Date(post.date).toISOString(), // Ensure date is in ISO format
        authors: [post.author],
        tags: post.tags,
    }
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = ({ params }: Props) => {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-12 lg:py-16 max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <div className="text-sm text-muted-foreground flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <UserCircle className="h-4 w-4" />
                <span>By {post.author}</span>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.imageHint}
            priority
          />
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </article>
    </MainLayout>
  );
};

export default BlogPostPage;

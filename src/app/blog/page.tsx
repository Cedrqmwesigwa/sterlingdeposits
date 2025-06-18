
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blog-posts';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Sterling Contractors',
  description: 'Read the latest articles, insights, and news from Sterling Contractors on construction, hardware, and project management in Uganda.',
};

const BlogPage = () => {
  return (
    <MainLayout>
      <section className="text-center py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Sterling Insights</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Our latest articles, tips, and news on construction, hardware, and project management in Kampala.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {blogPosts.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">No blog posts available yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-52 w-full">
                      <Image
                        src={post.imageSrc}
                        alt={post.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={post.imageHint}
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={`/blog/${post.slug}`} className="block">
                      <CardTitle className="hover:text-primary transition-colors">{post.title}</CardTitle>
                    </Link>
                    <div className="text-xs text-muted-foreground flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-1">
                            <CalendarDays className="h-3.5 w-3.5" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <UserCircle className="h-3.5 w-3.5" />
                            <span>{post.author}</span>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.summary}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;


import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Modern Villa in Kololo',
    description: 'A complete residential build from the ground up, featuring custom architectural designs and high-end finishes.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYXxlbnwwfHx8fDE3MjE3MjAwNTR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'modern villa',
    tags: ['Residential', 'New Build', 'Modern'],
  },
  {
    title: 'Nakasero Office Renovation',
    description: 'A comprehensive renovation of a commercial office space to create a modern, open-plan work environment.',
    image: 'https://images.unsplash.com/photo-1573496774430-bb6269015d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBpbnRlcmlvcnxlbnwwfHx8fDE3MjE3MjAwNTV8MA&ixlib=rb-4.0.3&q=80&w=1080',
    hint: 'office interior',
    tags: ['Commercial', 'Renovation'],
  },
  {
    title: 'Kawempe Hardware Supply Depot',
    description: 'Construction of a new hardware supply center, focusing on durability and functional design.',
    image: 'https://placehold.co/600x400.png',
    hint: 'industrial building',
    tags: ['Commercial', 'New Build', 'Industrial'],
  },
  {
    title: 'Bugolobi Apartment Complex',
    description: 'Exterior and interior finishing for a new apartment complex, including painting, tiling, and landscaping.',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhcGFydG1lbnQlMjBjb21wbGV4fGVufDB8fHx8MTc1MDIzMjMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'apartment complex',
    tags: ['Residential', 'Finishing'],
  },
  {
    title: 'Entebbe Lakeside Retreat',
    description: 'A custom-built lakeside home with panoramic views, designed for comfort and relaxation.',
    image: 'https://images.unsplash.com/photo-1622315173972-2bee16732128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxsYWtlc2lkZSUyMGhvdXNlfGVufDB8fHx8MTc1MDIzMjM2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'lakeside house',
    tags: ['Residential', 'New Build', 'Custom'],
  },
  {
    title: 'Acacia Mall Retail Unit',
    description: 'Remodeling of a retail unit to fit a new brand’s aesthetic, completed on a tight schedule.',
    image: 'https://images.unsplash.com/photo-1734417511653-252ab0709e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cmVudGFsJTIwdW5pdHxlbnwwfHx8fDE3NTAyMzI0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'retail store',
    tags: ['Commercial', 'Renovation', 'Retail'],
  },
];

const ProjectsPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            A showcase of our commitment to quality, craftsmanship, and client satisfaction.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-60 w-full">
                  <Image
                    src={project.image}
                    alt={`Image of ${project.title}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.hint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">See Your Project Here</h2>
            <p className="text-muted-foreground mb-8">
                Contact us today to discuss your ideas and get a free quote.
            </p>
            <Button asChild size="lg">
                <Link href="/#contact">Start Your Project</Link>
            </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectsPage;

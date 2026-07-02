// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    pubDate: z.date(),
    author: z.string().optional(),
    authorImage: z.string().optional(),
    category: z.string().optional(),
    categoryIcon: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    readTime: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
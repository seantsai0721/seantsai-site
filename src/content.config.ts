import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is one .mdx file in src/content/works/.
// Its images live in public/works/<file name>/.
const works = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    subtitle: z.string(),
    year: z.number(),
    // Lower numbers come first on the homepage and in the project order.
    order: z.number(),
    kind: z.string(), // e.g. "Thesis studio", "Design studio", "Competition"
    category: z.enum(['Academic', 'Competition', 'Research', 'Built']),
    location: z.string(), // short, e.g. "Dongshi, Chiayi"
    coordinates: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string(),
    coverAlt: z.string(),
    coverCaption: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    specs: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          highlight: z.boolean().default(false),
        }),
      )
      .default([]),
  }),
});

export const collections = { works };

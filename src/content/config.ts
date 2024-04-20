import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: {
    title: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
  }
})
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
    tags: z.array(z.string()),
  })
})

export const collections = {
  blog
}
import { defineCollection, z } from "astro:content";

export enum Categories {
  Philosphy = "philosophy",
  Test      = "test"
}

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
    category: z.nativeEnum(Categories),
    tags: z.array(z.string()),
  })
})

export const collections = {
  blog
}
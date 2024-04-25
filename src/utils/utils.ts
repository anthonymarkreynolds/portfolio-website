import { getCollection, type CollectionEntry } from "astro:content"

type Options = {
  latest?: boolean
  limit?: number
}

export const getPosts = async ({ limit, latest }: Options): Promise<CollectionEntry<'blog'>[]> => {
  const posts: CollectionEntry<'blog'>[] = (await getCollection("blog"))
    .sort((a, b) => a.data.datePublished.valueOf() - b.data.datePublished.valueOf())
  if (latest) {
    return posts.slice(0, 1)
  } else if (limit) {
    return posts.slice(0, limit)
  } else {
    return posts
  }
}

export const capitalize = (str: string): string => {
  return str.split(" ").map((_str: string) =>
  (
    (_str[1]) 
    ?  _str.charAt(0).toUpperCase() + _str.slice(1)
    :
      _str.toUpperCase()
  )).join(" ")
}

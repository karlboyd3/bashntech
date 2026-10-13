import { MetadataRoute } from "next"

const BASE_URL = "https://www.bashntech.com"

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/websites", priority: 0.9 },
  { path: "/ai-consulting", priority: 0.9 },
  { path: "/work", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }))
}

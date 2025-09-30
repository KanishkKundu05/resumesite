import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = WEBSITE_URL
  const lastModified = new Date()
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/olympiads`, lastModified },
    { url: `${base}/research`, lastModified },
  ]
}





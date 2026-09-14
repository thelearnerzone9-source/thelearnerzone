import type { MetadataRoute } from 'next';
export default function sitemap():MetadataRoute.Sitemap{return ['','/learn','/signs','/test','/lessons'].map(path=>({url:`https://the-learner-zone.jammy-mango-9071.chatgpt.site${path}`,changeFrequency:'monthly',priority:path?0.7:1}))}

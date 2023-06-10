export interface NewsData {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: SourceName[];
}

interface SourceName {
  id: string;
  name: string;
}
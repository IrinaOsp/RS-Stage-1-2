export default interface NewsData {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source: SourceName;
}

export interface SourceName {
    id: string;
    name: string;
}

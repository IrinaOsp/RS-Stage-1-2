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

export interface TopNewsData {
    articles: NewsData[] | never[];
}

export interface NewsSources {
    sources: SourcesData[] | never[];
}

export interface SourcesData extends SourceName {
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
}

export type OptionsForLoader = {
    sources?: string;
};

export type APIOption = {
    apiKey: string;
};

export type URLOptions = APIOption & Partial<OptionsForLoader>;

export enum ErrorsStatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    TooManyRequests = 429,
    ServerError = 500,
}

export interface Article {
    author: string;
    content: string;
    title?: string;
    url: string;
    urlToImage?: string;
    description: string;
    publishedAt: string;
    source: object;
}

export interface ArticleResponse  {
    status?: string;
    totalResults?: number;
    articles?: any,
    code?: string,
    message?: string
}
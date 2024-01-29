export interface NewsSource {
    status: string;
    articles: Array<NewsInter>;
}

export interface NewsInter {
    urlToImage: string;
    author: string;
    source: { id: string; name: string };
    publishedAt: string;
    title: string;
    description: string;
    content: string;
    url: string;
}

export type ISource = {
    status: string;
    sources: {
        id: string;
        name: string;
    }[];
};

  

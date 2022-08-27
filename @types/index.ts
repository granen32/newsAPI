export interface newsApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ArticleProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
  };
}

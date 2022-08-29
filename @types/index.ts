export interface newsApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ArticleProps {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export interface ArticleWrapProps {
  articles: ArticleProps;
}

export interface CategoriesProps {
  name: string;
  text: string;
}

export interface CategoriesWrapProps {
  category: CategoriesProps;
  onSelect: Function;
}

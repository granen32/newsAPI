import axios from "axios";
import React from "react";
import styled from "styled-components";
import { ArticleProps, CategoriesWrapProps } from "../../@types/";
import NewsItems from "./NewsItems";
import { usePromise } from "../lib/usePromise";
const NewsListContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 30px;
  width: 768px;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const NewsLIist = ({ category }: CategoriesWrapProps) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8ecfcbbb387c4e7bae8ffb59f5282383`
    );
  }, [category]);

  // 아직 articles 값이 설정되어 있지 않을 때
  if (loading) {
    return <NewsListContainer>...대기중</NewsListContainer>;
  }
  // articles 값이 유효할 때
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListContainer>에러 발생!</NewsListContainer>;
  }
  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <>
      <NewsListContainer>
        {articles.map((article: ArticleProps) => (
          <NewsItems key={article.url} articles={article} />
        ))}
      </NewsListContainer>
    </>
  );
};

export default NewsLIist;

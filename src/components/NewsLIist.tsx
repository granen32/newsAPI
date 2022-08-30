import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArticleProps, CategoriesWrapProps } from "../../@types/";
import NewsItems from "./NewsItems";

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
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(!loading);
      try {
        const query = category === "all" ? `` : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8ecfcbbb387c4e7bae8ffb59f5282383`
        );
        setArticles(response.data.articles);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [category]);

  // 아직 articles 값이 설정되어 있지 않을 때
  if (loading) {
    return <NewsListContainer>...대기중</NewsListContainer>;
  }
  // articles 값이 유효할 때
  if (!articles) {
    return null;
  }
  return (
    <>
      <NewsListContainer>
        {articles.map((article) => (
          <NewsItems key={article.url} articles={article} />
        ))}
      </NewsListContainer>
    </>
  );
};

export default NewsLIist;
